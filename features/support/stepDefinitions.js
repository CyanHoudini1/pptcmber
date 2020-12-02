const {When, Then, And, Given} = require("cucumber")
const expect = require("chai")
const puppeteer = require("puppeteer")

var {setDefaultTimeout} = require('cucumber');
setDefaultTimeout(60 * 1000);
const USERNAME_SELECTOR = '.js-session-form #user_email';
const HEADLESS = process.env.HEADLESS !== "false";
const USERNAME = "nils+beta@shyftplan.com";
const PASSWORD = "123456789";
const PAGE = 'https://shyf-8402.sppt-beta.com/login'
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
    await this.page.goto("https://feat-8274-shift-rotations.app.sppt-beta.com/rotation-wizard")
});

When('I enter Rotation as name', async function(){
    await this.page.waitForSelector('#rotationName');
    await this.page.type('#rotationName', 'Rotation');
});

When('I click Group Number {int} times', amountOfGroups);

When('I click Week Number {int} times', amountOfWeeks);

When('I enter the anchor date {int}.{int}.{int}', enterAnchorDate);
