const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  
  const navigationPromise = page.waitForNavigation()
  
  await page.goto('https://master.sppt-beta.com/login')
  
  await page.setViewport({ width: 1400, height: 694 })
  
  await page.waitForSelector('#new_user #user_email')
  await page.click('#new_user #user_email')
  
  await page.waitForSelector('#new_user #user_password')
  await page.click('#new_user #user_password')
  
  await page.waitForSelector('.form-box > .form-box__container > #new_user > .form-box__content > .form-box__password-remember-me')
  await page.click('.form-box > .form-box__container > #new_user > .form-box__content > .form-box__password-remember-me')
  
  await page.waitForSelector('#new_user #user_password')
  await page.click('#new_user #user_password')
  
  await page.waitForSelector('.form-box__container > #new_user > .form-box__content > .form-box__button-container > .form__button-round')
  await page.click('.form-box__container > #new_user > .form-box__content > .form-box__button-container > .form__button-round')
  
  await navigationPromise
  
  await browser.close()
})()