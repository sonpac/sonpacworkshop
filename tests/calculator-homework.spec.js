const { test, expect } = require('@playwright/test');

test('basic test', async ({ page }) => {
  await page.goto('https://testsheepnz.github.io/BasicCalculator');
  const PageTop = await page.isVisible('#page-top');
  expect(PageTop).toBe(true);
});


test('test nr2', async ({ page }) => {
  await page.goto('https://testsheepnz.github.io/BasicCalculator');
  await page.waitForSelector('#page-top');
  await page.fill('#number1Field', '10');
  await page.fill('#number2Field','7');
  await page.click('#calculateButton');
  const numberAnswer = await page.inputValue ('input#numberAnswerField');
  expect(numberAnswer).toBe("17");
});


test('test nr3', async ({ page }) => {
  await page.goto('https://testsheepnz.github.io/BasicCalculator');
  await page.waitForSelector('#page-top');
  await page.fill('#number1Field', '10');
  await page.fill('#number2Field','7');
  const operationDropDown = await page.$('#selectOperationDropdown');
  await operationDropDown.selectOption("1");
  await page.click('#calculateButton');
  const numberAnswer = await page.inputValue ('input#numberAnswerField');
  expect(numberAnswer).toBe("3");
});

test('test nr4', async ({ page }) => {
    await page.goto('https://testsheepnz.github.io/BasicCalculator');
    await page.waitForSelector('#page-top');
    const ElementSelectBuild = await page.$('#selectBuild');
    await ElementSelectBuild.selectOption("1");
    await page.fill('#number1Field', '10');
    await page.fill('#number2Field','7');
    const operationDropDown = await page.$('#selectOperationDropdown');
    await operationDropDown.selectOption("1");
    await page.click('#calculateButton');
    const numberAnswer = await page.inputValue ('input#numberAnswerField');
    expect(numberAnswer).toBe("3");
  });

  test('test nr5', async ({ page }) => {
    await page.goto('https://testsheepnz.github.io/BasicCalculator');
    await page.waitForSelector('#page-top');
    const ElementSelectBuild = await page.$('#selectBuild');
    await ElementSelectBuild.selectOption("1");
    await page.fill('#number1Field', '10');
    await page.fill('#number2Field','7');
    const operationDropDown = await page.$('#selectOperationDropdown');
    await operationDropDown.selectOption("3");
    await page.click('#calculateButton');
    await page.check('#integerSelect');
    const numberAnswer = await page.inputValue ('input#numberAnswerField');
    expect(numberAnswer).toBe("1");
  });