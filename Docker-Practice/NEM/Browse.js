const puppeteer = require('puppeteer');

let settings = {
  timeout: 0, 
  headless: false, // default is true
  devtools: false,

  //// To Open up chrome instead of chromium
  executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
//   userDataDir: '/Users/brett.mcmurdy/Library/Application Support/Google/Chrome/Default',
  
  defaultViewport: {
    width: 1280,
    height: 1000,
    deviceScaleFactor: 1,
  }

  // slowMo: 50 // slow down by 250ms
};



/**
* Here we define functions that control individual pages.
*
*/


async function _indexPage(page) {
  await page.goto(`http://localhost:8080/`)
    .then( ()=> console.log("home/index page loaded...") ) ;
  await page.waitFor(300);
}
async function _dbPage(page) {
  await page.goto(`http://localhost:8081/`)
    .then( ()=> console.log("db page loaded...") ) ;
  await page.waitFor(300);
}



/**
 * Here is where we actually control the browser.
 * 
 * This function is an "IFFY" which means it self-executes.
 * 
 * 
 */
(async () => {
  const __Page = await puppeteer.launch(settings);

  const _INDEX = await __Page.newPage()
    .then( async page => {
        await _indexPage(page);
    }); 
  
  const _DB = await __Page.newPage()
    .then( async page => {
        await _dbPage(page);
    }); 
    

})
();
