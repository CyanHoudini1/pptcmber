
const HEADLESS = process.env.HEADLESS !== "false";
const USERNAME = "nils+beta@shyftplan.com";
const PASSWORD = "123456789";

class WizardWorld {

    async logIn() {
    await this.page.goto("https://shyf-8539.app.sppt-beta.com/login")
    this.inputElement = await page.waitForSelector('#new_user #user_email');
    await page.click('#new_user #user_email');
    await this.inputElement.type(USERNAME);
    this.inputElement = await page.waitForSelector('#user_password')
    await this.inputElement.type(PASSWORD);
    await page.click('commit');
    }

};