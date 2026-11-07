/* Load the fonts without blocking the initial paint; request CJK fonts only when used. */
(()=>{
  const loaded=new Set();
  const urls={
    base:'https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Nunito:wght@500;600;700;800;900&display=swap',
    ko:'https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;600;700;900&display=swap',
    'zh-CN':'https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@400;600;700;900&display=swap',
    ja:'https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;600;700;900&display=swap'
  };
  function loadFont(key){if(!urls[key]||loaded.has(key))return;loaded.add(key);const link=document.createElement('link');link.rel='stylesheet';link.href=urls[key];document.head.append(link)}
  window.PawlioFonts={setLocale:loadFont};
  if('requestIdleCallback' in window)window.requestIdleCallback(()=>loadFont('base'),{timeout:2500});
  else setTimeout(()=>loadFont('base'),1000);
})();
