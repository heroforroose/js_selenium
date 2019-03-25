const {Builder, By, Key, until} = require('selenium-webdriver');
let driver = new Builder().forBrowser('chrome').build();
    driver.get('https://www.51job.com/');
    driver.findElement(By.id('kwdselectid')).sendKeys('java', Key.RETURN);
    // driver.quit();
