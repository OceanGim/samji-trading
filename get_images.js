const playwright = require('playwright');

(async () => {
  const browser = await playwright.chromium.launch();
  const page = await browser.newPage();
  
  const products = [
    { name: '갈비탕', url: 'https://samjitrade.modoo.at/?link=5dvigroz' },
    { name: '뼈없는갈비', url: 'https://samjitrade.modoo.at/?link=3wzsmhno' },
    { name: '우건탕', url: 'https://samjitrade.modoo.at/?link=b5lod3nh' },
    { name: '꼬리곰탕', url: 'https://samjitrade.modoo.at/?link=5qxcsh35' },
    { name: '냉동자숙곱창', url: 'https://samjitrade.modoo.at/?link=a2nbqp0w' },
    { name: '소고기탕', url: 'https://samjitrade.modoo.at/?link=3xgl7b9s' }
  ];
  
  for (const product of products) {
    await page.goto(product.url);
    await page.waitForLoadState('networkidle');
    
    const images = await page.evaluate(() => {
      const imgs = document.querySelectorAll('img');
      return Array.from(imgs).map(img => img.src).filter(src => 
        src && \!src.includes('modoo.at/template') && \!src.includes('navercorp')
      );
    });
    
    console.log(`${product.name}:`, images);
  }
  
  await browser.close();
})();
EOF < /dev/null
