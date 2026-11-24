  var SUBS = [
    ['/web-design','웹디자인','홈페이지 디자인 · 반응형 리뉴얼'],
    ['/ai-visual','AI 비주얼','AI 광고영상 · 메인 영상'],
    ['/ux-design','UI · UX 설계','메뉴 구조 · 상담 동선'],
    ['/branding','브랜드 아이덴티티','로고 · 컬러 · 서체 기준'],
    ['/maintenance','구축 · 운영','아임웹 구축 · 유지보수'],
    ['/seo','SEO · AEO · GEO','검색 · AI 답변 최적화',1]
  ];
  var SUBCSS = '#dl-svcdd{position:fixed;z-index:2147483000;width:560px;max-width:calc(100vw - 32px);padding:12px;border:1px solid #262a34;border-radius:18px;background:rgba(10,12,18,.97);-webkit-backdrop-filter:blur(14px);backdrop-filter:blur(14px);box-shadow:0 24px 60px rgba(0,0,0,.55);opacity:0;visibility:hidden;transform:translateY(-6px);transition:opacity .2s ease,transform .2s ease,visibility .2s;font-family:Pretendard,"Noto Sans KR",sans-serif;text-align:left}'
    + '#dl-svcdd.op{opacity:1;visibility:visible;transform:none}'
    + '#dl-svcdd:before{content:"";position:absolute;left:0;right:0;top:-18px;height:18px}'
    + '#dl-svcdd .g{display:grid;grid-template-columns:1fr 1fr;gap:2px}'
    + '#dl-svcdd a.it{display:flex;align-items:flex-start;gap:12px;padding:14px;border-radius:12px;color:#fff;text-decoration:none;transition:background .2s}'
    + '#dl-svcdd a.it:hover,#dl-svcdd a.it.on{background:rgba(255,138,0,.09)}'
    + '#dl-svcdd a.it b{font-family:Kanit,Pretendard,sans-serif;font-size:12px;font-weight:700;color:#ff8a00;padding-top:3px;min-width:18px}'
    + '#dl-svcdd a.it strong{display:flex;align-items:center;gap:6px;font-size:15.5px;font-weight:700;color:#fff;letter-spacing:-.01em}'
    + '#dl-svcdd a.it.on strong{color:#ff8a00}'
    + '#dl-svcdd a.it small{display:block;margin-top:4px;font-size:13px;color:#8d8d8d}'
    + '#dl-svcdd em,.dl-msubl em{font-style:normal;font-size:10px;font-weight:800;letter-spacing:.06em;color:#ff8a00;border:1px solid rgba(255,138,0,.6);border-radius:999px;padding:2px 7px;line-height:1.2}'
    + '#dl-svcdd a.all{display:flex;justify-content:space-between;align-items:center;margin-top:6px;padding:13px 14px 6px;border-top:1px solid #1d2028;color:#cfcfcf;font-size:13.5px;text-decoration:none}'
    + '#dl-svcdd a.all:hover{color:#ff8a00}'
    + 'a[data-dl-sub]:not([data-dl-col]):after{content:"";display:inline-block;width:6px;height:6px;margin-left:8px;border-right:1.6px solid currentColor;border-bottom:1.6px solid currentColor;transform:translateY(-3px) rotate(45deg);opacity:.75;transition:transform .2s}'
    + 'a[data-dl-sub].dd-on:not([data-dl-col]):after{transform:translateY(1px) rotate(225deg)}'
    + 'a[data-dl-msub]:not([data-dl-col]){position:relative}'
    + 'a[data-dl-msub]:not([data-dl-col])>.dl-arw{visibility:hidden}'
    + '.dl-mtg{position:absolute;right:-4px;top:50%;width:40px;height:40px;margin-top:-20px;border-radius:50%;border:1px solid #3a3a3a;background:rgba(255,255,255,.02);cursor:pointer;z-index:2}'
    + '.dl-mtg:before,.dl-mtg:after{content:"";position:absolute;left:50%;top:50%;width:14px;height:1.6px;margin:-.8px 0 0 -7px;background:#ff8a00;transition:transform .25s}'
    + '.dl-mtg:after{transform:rotate(90deg)}'
    + 'a.dl-mo .dl-mtg:after{transform:rotate(0)}'
    + '[data-dl-col] .dl-mtg{display:none}'
    + '.dl-msubl{overflow:hidden;max-height:0;transition:max-height .35s ease}'
    + '.dl-msubl.op{max-height:640px}'
    + '.dl-msubl a{display:block!important;padding:12px 44px 12px var(--dlpl,52px)!important;border-bottom:1px solid #1c1c1c!important;color:#e2e2e2!important;text-decoration:none!important;font-size:15.5px!important;font-weight:600!important;line-height:1.35!important;font-family:Pretendard,"Noto Sans KR",sans-serif!important;background:none!important;grid-template-columns:none!important}'
    + '.dl-msubl a span{display:flex;align-items:center;gap:6px;color:inherit!important;font-size:inherit!important}'
    + '.dl-msubl a small{display:block;margin-top:3px;color:#7c7c7c!important;font-size:12px!important;font-weight:400!important}'
    + '.dl-msubl a.on{color:#ff8a00!important}'
    + '.dl-msubl a:last-child{border-bottom:0!important}';
  function subCss(){ if (document.getElementById('dl-svcmenu-css')) return; var s = document.createElement('style'); s.id = 'dl-svcmenu-css'; s.textContent = SUBCSS; document.head.appendChild(s); }
  function here(u){ var p = location.pathname.replace(/\/+$/,''); return p === u; }
  var dd = null, ddT = null, ddA = null;
  function ddBuild(){
    if (dd) return dd;
    dd = document.createElement('div'); dd.id = 'dl-svcdd'; dd.setAttribute('role','menu');
    var h = '<div class="g">';
    SUBS.forEach(function(s,i){ h += '<a class="it'+(here(s[0])?' on':'')+'" role="menuitem" href="'+s[0]+'"><b>0'+(i+1)+'</b><span><strong>'+s[1]+(s[3]?' <em>PREMIUM</em>':'')+'</strong><small>'+s[2]+'</small></span></a>'; });
    h += '</div><a class="all" href="/services"><span>서비스 전체 보기</span><span>→</span></a>';
    dd.innerHTML = h; document.body.appendChild(dd);
    dd.addEventListener('mouseenter', function(){ clearTimeout(ddT); });
    dd.addEventListener('mouseleave', ddHideSoon);
    document.addEventListener('keydown', function(e){ if (e.key === 'Escape') ddHide(); });
    window.addEventListener('scroll', function(){ if (dd.classList.contains('op') && ddA) ddPos(ddA); }, {passive:true});
    window.addEventListener('resize', ddHide);
    return dd;
  }
  function ddPos(a){ var r = a.getBoundingClientRect(), w = dd.offsetWidth || 560, x = r.left + r.width/2 - w/2; x = Math.max(16, Math.min(x, document.documentElement.clientWidth - w - 16)); dd.style.left = x + 'px'; dd.style.top = (r.bottom + 16) + 'px'; }
  function ddShow(a){ if (window.innerWidth < 1025) return; ddBuild(); clearTimeout(ddT); if (ddA && ddA !== a) ddA.classList.remove('dd-on'); ddA = a; ddPos(a); dd.classList.add('op'); a.classList.add('dd-on'); }
  function ddHide(){ clearTimeout(ddT); if (dd) dd.classList.remove('op'); if (ddA) ddA.classList.remove('dd-on'); }
  function ddHideSoon(){ clearTimeout(ddT); ddT = setTimeout(ddHide, 220); }
  function addSub(){
    subCss();
    roots().forEach(function(r){
      var seen = [], as = r.querySelectorAll('a');
      for (var i=0;i<as.length;i++){
        var p = as[i].parentElement;
        if (!p || seen.indexOf(p) > -1) continue; seen.push(p);
        var kids = [].filter.call(p.children, function(k){ return k.tagName === 'A'; });
        if (kids.length < 5) continue;
        var all = kids.map(txt).join('|');
        if (!/서비스/.test(all) || !/비용/.test(all) || !/포트폴리오/.test(all)) continue;
        var s = null;
        for (var j=0;j<kids.length;j++){ if (!kids[j].hasAttribute('data-dl-col') && /^(\d{2}\s*)?서비스/.test(txt(kids[j]))){ s = kids[j]; break; } }
        if (!s) continue;
        if (r !== document && !r.getElementById('dl-svcmenu-css')){ var st = document.createElement('style'); st.id = 'dl-svcmenu-css'; st.textContent = SUBCSS; r.appendChild(st); }
        if (!s.firstElementChild){
          if (s.getAttribute('data-dl-sub')) continue;
          s.setAttribute('data-dl-sub','1'); s.setAttribute('aria-haspopup','true');
          (function(a){
            a.addEventListener('mouseenter', function(){ ddShow(a); });
            a.addEventListener('mouseleave', ddHideSoon);
            a.addEventListener('focus', function(){ ddShow(a); });
          })(s);
        } else {
          if (s.getAttribute('data-dl-msub') && s.nextElementSibling && s.nextElementSibling.classList.contains('dl-msubl')) continue;
          s.setAttribute('data-dl-msub','1');
          var last = s.lastElementChild; if (last && /^[↗→]$/.test(txt(last))) last.classList.add('dl-arw');
          if (!s.querySelector('.dl-mtg')){ var tg = document.createElement('span'); tg.className = 'dl-mtg'; tg.setAttribute('role','button'); tg.setAttribute('aria-label','서비스 하위 메뉴 펼치기'); s.appendChild(tg); }
          var ul = document.createElement('div'); ul.className = 'dl-msubl';
          var h = '';
          SUBS.forEach(function(x){ h += '<a href="'+x[0]+'"'+(here(x[0])?' class="on"':'')+'><span>'+x[1]+(x[3]?' <em>PREMIUM</em>':'')+'</span><small>'+x[2]+'</small></a>'; });
          ul.innerHTML = h;
          if (s.nextElementSibling && s.nextElementSibling.classList.contains('dl-msubl')) s.parentNode.removeChild(s.nextElementSibling);
          s.parentNode.insertBefore(ul, s.nextSibling);
          (function(a, list){
            a.querySelector('.dl-mtg').addEventListener('click', function(e){
              e.preventDefault(); e.stopPropagation(); if (e.stopImmediatePropagation) e.stopImmediatePropagation();
              var sc = a.children[1], pl = 52;
              if (sc){ var d = sc.getBoundingClientRect().left - a.getBoundingClientRect().left; if (d > 0 && d < 120) pl = d; }
              list.style.setProperty('--dlpl', pl + 'px');
              var o = !list.classList.contains('op'); list.classList.toggle('op', o); a.classList.toggle('dl-mo', o);
              a.querySelector('.dl-mtg').setAttribute('aria-label', o ? '서비스 하위 메뉴 접기' : '서비스 하위 메뉴 펼치기');
            }, true);
          })(s, ul);
        }
      }
    });
  }
  var subQ = null;
  try { new MutationObserver(function(){ if (subQ) return; subQ = setTimeout(function(){ subQ = null; try{addSub();}catch(e){} }, 150); }).observe(document.documentElement, {childList:true, subtree:true}); } catch(e){}
