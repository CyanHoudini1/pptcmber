const {When, Then, And, Given} = require("cucumber")
const expect = require("chai")
const puppeteer = require("puppeteer")

var {setDefaultTimeout} = require('cucumber');
setDefaultTimeout(60 * 1000);
const USERNAME_SELECTOR = '.js-session-form #user_email';
const HEADLESS = process.env.HEADLESS !== "false";
const USERNAME = "nils+beta@shyftplan.com";
const PASSWORD = "123456789";
const PAGE = 'https://master.sppt-beta.com/login'
let page;

Given("The browser is open", async function(){
    this.browser = await puppeteer.launch({headless:false})
    this.page = await this.browser.newPage();
    await this.page.goto(PAGE);
});

When('I log into the beta', async function () {
    await this.page.waitForSelector('#user_email');
    await this.page.type('#user_email', USERNAME);
    await this.page.waitForSelector('#user_password');
    await this.page.type('#user_password', PASSWORD);
    await this.page.click('#new_user > div.form-box__content > div.form-box__button-container > input');
});

When('I open the rotation wizard', async function(){
    await this.page.goto("https://shyf-8539.app.sppt-beta.com/login")
});

When('I write {string} into the field {string}', async function(){
    await this.page.click(USERNAME_SELECTOR);
    await this.page.keyboard.type({string});
});

