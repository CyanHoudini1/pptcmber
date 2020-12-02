import { expect } from "chai";
import { setWorldConstructor, setDefaultTimeout } from "cucumber";
import puppeteer from "puppeteer";

const HEADLESS = process.env.HEADLESS !== "false";
const USERNAME = "nils+beta@shyftplan.com";
const PASSWORD = "123456789";

class WizardWorld {

    async function amountOfGroups (amount) {

    await this.page.waitForSelector('#general-setup-form > div:nth-child(2) > div > div:nth-child(3) > button');
    for(let i=0; i <= {int}; i++){
    await this.page.click('#general-setup-form > div:nth-child(2) > div > div:nth-child(3) > button');
        }
    }

    async function amountOfWeeks (amount){
    await this.page.waitForSelector('#general-setup-form > div:nth-child(3) > div > div:nth-child(3) > button');
    for(let i=0; i <= {int}; i++){
    await this.page.click('#general-setup-form > div:nth-child(3) > div > div:nth-child(3) > button');
        }
    }

    async function enterAnchorDate (day,month,year){
        
    }

};
}

setWorldConstructor(WizardWorld);