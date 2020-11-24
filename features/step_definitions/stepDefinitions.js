const {When, Then, And, Given} = require("cucumber")
const expect = require("chai")
const puppeteer = require("puppeteer")

var {setDefaultTimeout} = require('cucumber');
setDefaultTimeout(60 * 1000);
const USERNAME_SELECTOR = '.js-session-form #user_email';

Given("The browser is open", async function(){
    this.browser = await puppeteer.launch({headless:false})
    this.page = await this.browser.newPage();
});

When('I open the login page', async function () {
    await this.page.goto("https://shyf-8539.app.sppt-beta.com/login")
});

When('I open the rotation wizard', async function(){
    await this.page.goto("https://shyf-8539.app.sppt-beta.com/rotation-wizard")
});

When('I write {string} into the field .js-session-form #user_email', async function(){
    await this.page.click(USERNAME_SELECTOR);
    await this.page.keyboard.type({string});
});

