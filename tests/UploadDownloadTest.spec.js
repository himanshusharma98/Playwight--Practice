import { Workbook } from 'exceljs';
import { test } from '@playwright/test';

async function writeExcelTest(searchText, replaceText, change, filePath) {
  const workbook = new Workbook();
  await workbook.xlsx.readFile(filePath);
  const worksheet = workbook.getWorksheet('Sheet1');
  const output = await readExcel(worksheet, searchText);

  const cell = worksheet.getCell(output.row, output.column + change.colChange);
  cell.value = replaceText;
  await workbook.xlsx.writeFile(filePath);
}

async function readExcel(worksheet, searchText) {
  let output = { row: 1, column: 1 };
  worksheet.eachRow((row, rowNumber) => {
    row.eachCell((cell, colNumber) => {
      if (cell.value === searchText) {
        output.row = rowNumber;
        output.column = colNumber;
      }
    });
  });
  return output;
}

test('Upload Download Excel Validation', async ({ page }) => {
  const textSearch = 'Mango';
  const updateValue = '350';
  await page.goto("https://rahulshettyacademy.com/upload-download-test/index.html");
  const downloadPromise = page.waitForEvent('download');
  await page.getByRole('button', { name: 'Download' }).click();
  await downloadPromise;
   // wait for the file to download
  writeExcelTest(textSearch, updateValue, { colChange: 2 }, "D:\Automation Download Testdownload.xlsx");
  await page.locator("#fileinput").click();
  await page.locator("#fileinput").setInputFiles("D:\Automation Download Testdownload.xlsx");
  const textlocator = page.getByText(textSearch);
  const desiredRow = await page.getByRole('row').filter({has :textlocator });
  await expect(desiredRow.locator("#cell-4-undefined")).toContainText(updateValue);
 
});