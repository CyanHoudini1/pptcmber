const {When, Then, And, Given} = require("cucumber")
const expect = require("chai")
const puppeteer = require("puppeteer")

var {setDefaultTimeout} = require('cucumber');
setDefaultTimeout(60 * 1000);
const HEADLESS = process.env.HEADLESS !== "false";
const USERNAME = "onur+beta@shyftplan.com";
const PASSWORD = "onur1905";
const PAGE = 'https://shyf-8402.sppt-beta.com/login'
const {
    amountOfGroups,
    amountOfWeeks,
    enterAnchorDate} = require('./world.js');
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

When('I enter {word} as name', async function(name){
    await this.page.waitForSelector('#rotationName');
    await this.page.type('#rotationName', name);
});

When('I click Group Number {int} times', async function(amountGroups){
    await this.page.waitForSelector('#general-setup-form > div:nth-child(2) > div > div:nth-child(3) > button');
    for(let i=0; i <= amountGroups; i++){
        await this.page.click('#general-setup-form > div:nth-child(2) > div > div:nth-child(3) > button');
        }
});

When('I click Week Number {int} time(s)', async function(amountWeeks){
    await this.page.waitForSelector('#general-setup-form > div:nth-child(3) > div > div:nth-child(3) > button');
    for(let i=0; i <= amountWeeks; i++){
        await this.page.click('#general-setup-form > div:nth-child(3) > div > div:nth-child(3) > button');
        }
});

When('I enter the anchor date {word}.{word}.{word}', async function(day, month, year){
    await this.page.waitForSelector('#general-setup-form > div.input-text--2YerZ.input-text--calendar--YsMNB > div > label');
    await this.page.click('#general-setup-form > div.input-text--2YerZ.input-text--calendar--YsMNB > div > label');
    await this.page.type('#anchorDate', day);
    await this.page.type('#anchorDate', month);
    await this.page.type('#anchorDate', year);
});

When('I press Set up Rotation', async function(){
    await this.page.waitForSelector('body > div > div > div.two-column__two--E2cmM > main > div > div > div > button')
    await this.page.click('body > div > div > div.two-column__two--E2cmM > main > div > div > div > button');
})

When('I select Monday and assign a Preset', async function(){
    await this.page.waitForSelector('div > div:nth-child(10) > button');
    await this.page.click('div > div:nth-child(10) > button');
    await this.page.waitForSelector(' div > div.day-cell--3Qjq2.day-cell--preset-select-open--3pCa5 > div > div.preset-select__list--1vVHo > button:nth-child(3)')
    await this.page.waitForSelector('div.preset-select__list--1vVHo > button:nth-child(3)')
    await this.page.click('div > div.day-cell--3Qjq2.day-cell--preset-select-open--3pCa5 > div > div.preset-select__list--1vVHo > button:nth-child(3)')
})

When('I press Assign Employees', async function(){
    await this.page.waitForSelector('body > div > div > div.two-column__two--E2cmM > main > div > div.step-wrapper__footer--1YH-X > div > button.button--1Ts1A.button--large--1EFug.button--fill--2jsIb.button--shyftplan-green--3Xyuc')
    await this.page.click('body > div > div > div.two-column__two--E2cmM > main > div > div.step-wrapper__footer--1YH-X > div > button.button--1Ts1A.button--large--1EFug.button--fill--2jsIb.button--shyftplan-green--3Xyuc');
})

When('I press the checkbox to select an employee', async function(){
    await this.page.waitForSelector('body > div > div > div.two-column__two--E2cmM > main > div > div > section > div.table__scroll-container--yQUI3 > table > tbody > tr:nth-child(1) > td:nth-child(1) > input[type=checkbox]')
    await this.page.click('body > div > div > div.two-column__two--E2cmM > main > div > div > section > div.table__scroll-container--yQUI3 > table > tbody > tr:nth-child(1) > td:nth-child(1) > input[type=checkbox]');
})

  
When('I press Add Selected', async function(){
    await this.page.waitForSelector('body > div > div > div.two-column__two--E2cmM > main > div > aside > div.src-components-card-card__card--32WJM.rotation-group-card--OY8f- > div > button > div.src-components-buttons-button__button__content--25Zud')
    await this.page.click('body > div > div > div.two-column__two--E2cmM > main > div > aside > div.src-components-card-card__card--32WJM.rotation-group-card--OY8f- > div > button > div.src-components-buttons-button__button__content--25Zud');
})

When('I press Finish Rotation Wizard', async function(){
    await this.page.waitForSelector('body > div > div > div.two-column__two--E2cmM > main > div > div > div > button')
    await this.page.click('body > div > div > div.two-column__two--E2cmM > main > div > div > div > button');
})


