// usage: node render_overlay.js <url> <outdir> [frames]
const { chromium } = require('playwright');
const fs = require('fs');
(async () => {
  const [url, out, nArg] = process.argv.slice(2);
  const N = +(nArg || 438), FPS = 24;
  fs.mkdirSync(out, { recursive: true });
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2 });
  await p.goto(url, { waitUntil: 'networkidle' });
  await p.evaluate(() => document.fonts.ready);
  await p.waitForTimeout(500);
  for (let f = 0; f < N; f++) {
    const t = f * 1000 / FPS;
    await p.evaluate(t => document.getAnimations().forEach(a => { a.pause(); a.currentTime = t; }), t);
    await p.screenshot({ path: `${out}/f${String(f).padStart(4, '0')}.png`, omitBackground: true });
  }
  console.log('fonts', await p.evaluate(() => [document.fonts.check('16px Italiana'), document.fonts.check('16px "Pretendard Variable"')].join(',')));
  await b.close();
})();
