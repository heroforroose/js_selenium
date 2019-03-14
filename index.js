const {Builder, By, Key, until} = require('selenium-webdriver');
const seledriver = require('selenium-webdriver');
var la = [1,1,2,2,3,4,5,5,6,6,7,7,8,8,99];
for(var i = 0;i < 12;i++){
  console.log(la[i]);
}
(async function example() {
  let driver = await new Builder().forBrowser('chrome').build();
  console.log(driver.Capabilities);
  try {
    await driver.get('http://localhost/upload/');
    await driver.findElement(By.name('srchtxt')).sendKeys('webdriver', Key.RETURN);
    await driver.wait(until.titleIs('webdriver - Google Search'), 1000);
  } finally {
    await driver.quit();
  }
})();