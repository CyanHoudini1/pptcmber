const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  
  const navigationPromise = page.waitForNavigation()
  
  await page.goto('https://shyftplan.atlassian.net/secure/RapidBoard.jspa?rapidView=6')
  
  await page.setViewport({ width: 1440, height: 789 })
  
  await navigationPromise
  
  await page.waitForSelector('.ghx-columns > .ghx-column:nth-child(8) > .ghx-wrap-issue > .ghx-issue > .ghx-summary')
  await page.click('.ghx-columns > .ghx-column:nth-child(8) > .ghx-wrap-issue > .ghx-issue > .ghx-summary')
  
  await page.waitForSelector('.css-1ne1vc3 > .BreadcrumbsItem__BreadcrumbsItemElement-sc-1hh8yo5-0 > .css-flgij3 > .css-j8fq0c > .css-eaycls')
  await page.click('.css-1ne1vc3 > .BreadcrumbsItem__BreadcrumbsItemElement-sc-1hh8yo5-0 > .css-flgij3 > .css-j8fq0c > .css-eaycls')
  
  await navigationPromise
  
  await navigationPromise
  
  await page.waitForSelector('.ghx-columns > .ghx-column:nth-child(8) > .ghx-wrap-issue > .ghx-issue > .ghx-summary')
  await page.click('.ghx-columns > .ghx-column:nth-child(8) > .ghx-wrap-issue > .ghx-issue > .ghx-summary')
  
  await page.waitForSelector('.css-1ne1vc3 > .BreadcrumbsItem__BreadcrumbsItemElement-sc-1hh8yo5-0 > .css-flgij3 > .css-j8fq0c > .css-eaycls')
  await page.click('.css-1ne1vc3 > .BreadcrumbsItem__BreadcrumbsItemElement-sc-1hh8yo5-0 > .css-flgij3 > .css-j8fq0c > .css-eaycls')
  
  await navigationPromise
  
  await page.waitForSelector('.css-1kdqe6p-AbsoluteContainer > .css-1qnzzsz-SearchDialogAnchor > div > .css-18sbhed-SearchInputContainer-SearchInputContainer > .css-7eb5jr-SearchInputField-SearchInputField-SearchInputField')
  await page.click('.css-1kdqe6p-AbsoluteContainer > .css-1qnzzsz-SearchDialogAnchor > div > .css-18sbhed-SearchInputContainer-SearchInputContainer > .css-7eb5jr-SearchInputField-SearchInputField-SearchInputField')
  
  await page.waitForSelector('.css-1aguiw7-SearchResultSectionContainer:nth-child(1) > div:nth-child(2) > .sc-eaUzxJ > div > .sc-kFynNa')
  await page.click('.css-1aguiw7-SearchResultSectionContainer:nth-child(1) > div:nth-child(2) > .sc-eaUzxJ > div > .sc-kFynNa')
  
  await browser.close()
})()