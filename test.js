const {Builder, By, Key, until} = require('selenium-webdriver');
let driver = new Builder().forBrowser('firefox').build();
    driver.get('https://www.baidu.com');
    driver.findElement(By.id('kw')).sendKeys('nodejs', Key.RETURN);
    // driver.quit();
