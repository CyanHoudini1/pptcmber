const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  
  const navigationPromise = page.waitForNavigation()
  
  await page.goto('https://shyf-8402.sppt-beta.com/login')
  
  await page.setViewport({ width: 1400, height: 694 })
  
  await page.waitForSelector('#new_user #user_email')
  await page.click('#new_user #user_email')
  
  await page.waitForSelector('.form-box__container > #new_user > .form-box__content > .form-box__password-field > .input-text__inner')
  await page.click('.form-box__container > #new_user > .form-box__content > .form-box__password-field > .input-text__inner')
  
  await page.waitForSelector('#new_user #user_password')
  await page.click('#new_user #user_password')
  
  await page.waitForSelector('.form-box__container > #new_user > .form-box__content > .form-box__button-container > .form__button-round')
  await page.click('.form-box__container > #new_user > .form-box__content > .form-box__button-container > .form__button-round')
  
  await navigationPromise
  
  await navigationPromise
  
  await page.waitForSelector('.step-wrapper--2FF_n > #general-setup-form #rotationName')
  await page.click('.step-wrapper--2FF_n > #general-setup-form #rotationName')
  
  await page.waitForSelector('#general-setup-form > .input-text--2YerZ:nth-child(2) > .input-text__input-wrapper--3URXU > .input-text__stepper--2wTkQ:nth-child(3) > .input-text__stepper-button--3US64')
  await page.click('#general-setup-form > .input-text--2YerZ:nth-child(2) > .input-text__input-wrapper--3URXU > .input-text__stepper--2wTkQ:nth-child(3) > .input-text__stepper-button--3US64')
  
  await page.waitForSelector('#general-setup-form > .input-text--2YerZ:nth-child(2) > .input-text__input-wrapper--3URXU > .input-text__stepper--2wTkQ:nth-child(3) > .input-text__stepper-button--3US64')
  await page.click('#general-setup-form > .input-text--2YerZ:nth-child(2) > .input-text__input-wrapper--3URXU > .input-text__stepper--2wTkQ:nth-child(3) > .input-text__stepper-button--3US64')
  
  await page.waitForSelector('#general-setup-form > .input-text--2YerZ:nth-child(2) > .input-text__input-wrapper--3URXU > .input-text__stepper--2wTkQ:nth-child(3) > .input-text__stepper-button--3US64')
  await page.click('#general-setup-form > .input-text--2YerZ:nth-child(2) > .input-text__input-wrapper--3URXU > .input-text__stepper--2wTkQ:nth-child(3) > .input-text__stepper-button--3US64')
  
  await page.waitForSelector('.input-text--2YerZ:nth-child(2) > .input-text__input-wrapper--3URXU > .input-text__stepper--2wTkQ > .input-text__stepper-button--3US64 > .src-components-icon-icon__icon--2lgu5 > .src-components-icon-icon__icon__item--subtract--3Pj18')
  await page.click('.input-text--2YerZ:nth-child(2) > .input-text__input-wrapper--3URXU > .input-text__stepper--2wTkQ > .input-text__stepper-button--3US64 > .src-components-icon-icon__icon--2lgu5 > .src-components-icon-icon__icon__item--subtract--3Pj18')
  
  await page.waitForSelector('#general-setup-form > .input-text--2YerZ:nth-child(3) > .input-text__input-wrapper--3URXU > .input-text__stepper--2wTkQ:nth-child(3) > .input-text__stepper-button--3US64')
  await page.click('#general-setup-form > .input-text--2YerZ:nth-child(3) > .input-text__input-wrapper--3URXU > .input-text__stepper--2wTkQ:nth-child(3) > .input-text__stepper-button--3US64')
  
  await page.waitForSelector('.step-wrapper--2FF_n > #general-setup-form #anchorDate')
  await page.click('.step-wrapper--2FF_n > #general-setup-form #anchorDate')
  
  await page.waitForSelector('.step-wrapper--2FF_n > #general-setup-form #anchorDate')
  await page.click('.step-wrapper--2FF_n > #general-setup-form #anchorDate')
  
  await page.waitForSelector('.step-wrapper--2FF_n > .step-wrapper__footer--1YH-X > .action-button-wrapper--2Ll5C > .src-components-buttons-button__button--2gWD2 > .src-components-buttons-button__button__content--25Zud')
  await page.click('.step-wrapper--2FF_n > .step-wrapper__footer--1YH-X > .action-button-wrapper--2Ll5C > .src-components-buttons-button__button--2gWD2 > .src-components-buttons-button__button__content--25Zud')
  
  await page.waitForSelector('.weeks-grid--1bzsQ > .day-cell--3Qjq2:nth-child(10) > .day-cell__button--5gKCV > .src-components-icon-icon__icon--2lgu5 > .src-components-icon-icon__icon__item--1Dn3V')
  await page.click('.weeks-grid--1bzsQ > .day-cell--3Qjq2:nth-child(10) > .day-cell__button--5gKCV > .src-components-icon-icon__icon--2lgu5 > .src-components-icon-icon__icon__item--1Dn3V')
  
  await page.waitForSelector('.weeks-grid--1bzsQ > .day-cell--3Qjq2 > .preset-select--BiTXF > .preset-select__list--1vVHo > .preset-select__list-item--3tE5v')
  await page.click('.weeks-grid--1bzsQ > .day-cell--3Qjq2 > .preset-select--BiTXF > .preset-select__list--1vVHo > .preset-select__list-item--3tE5v')
  
  await page.waitForSelector('.accordion--3qcNW > #accordion-content-5936460b-b510-4012-ac23-6dc66722cee8 > .weeks-grid--1bzsQ > .day-cell--3Qjq2:nth-child(11) > .day-cell__button--5gKCV')
  await page.click('.accordion--3qcNW > #accordion-content-5936460b-b510-4012-ac23-6dc66722cee8 > .weeks-grid--1bzsQ > .day-cell--3Qjq2:nth-child(11) > .day-cell__button--5gKCV')
  
  await page.waitForSelector('.weeks-grid--1bzsQ > .day-cell--3Qjq2 > .preset-select--BiTXF > .preset-select__list--1vVHo > .preset-select__list-item--3tE5v')
  await page.click('.weeks-grid--1bzsQ > .day-cell--3Qjq2 > .preset-select--BiTXF > .preset-select__list--1vVHo > .preset-select__list-item--3tE5v')
  
  await page.waitForSelector('.accordion--3qcNW > #accordion-content-5936460b-b510-4012-ac23-6dc66722cee8 > .weeks-grid--1bzsQ > .day-cell--3Qjq2:nth-child(12) > .day-cell__button--5gKCV')
  await page.click('.accordion--3qcNW > #accordion-content-5936460b-b510-4012-ac23-6dc66722cee8 > .weeks-grid--1bzsQ > .day-cell--3Qjq2:nth-child(12) > .day-cell__button--5gKCV')
  
  await page.waitForSelector('.weeks-grid--1bzsQ > .day-cell--3Qjq2 > .preset-select--BiTXF > .preset-select__list--1vVHo > .preset-select__list-item--3tE5v')
  await page.click('.weeks-grid--1bzsQ > .day-cell--3Qjq2 > .preset-select--BiTXF > .preset-select__list--1vVHo > .preset-select__list-item--3tE5v')
  
  await browser.close()
})()