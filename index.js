const {Builder, By, Key, until} = require('selenium-webdriver');
const hello = require('./hello.js');
const seledriver = require('selenium-webdriver');
class Testclass {
  constructor(){
    this.a_class="aaa_class";
    this.b_class="bbb_class";
  }
  getpro(){
    console.log(this);
  }
}
class subTestclass extends Testclass{

}
console.log(Builder);
console.log(hello.hello);
$func = new Testfunc();
console.log($func);
   
console.log($func.prototype);
console.log($func.__proto__);
console.log(new Testclass());
console.log(new subTestclass());
function Testfunc(){
  this.a="aaa_func";
  this.b="bbb_func";
  // console.log(this)
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

// 1，函数是对象
// 2，abs(){return a} 等价于 abs=function(){return }
// 3,每个对象的__proto__属性指向自身构造函数的prototype
// 4,类与函数typeof 均为Function 类型，但均同时有prototype(指向object)与__proto__(指向Function);但类的实例只有一个__proto__(指向该实例的（类|构造函数）的prototype)；
// 5,子类有prototype（指向该子类即构造函数），__proto__(指向其父类);