export const doGet = () => {
  return HtmlService.createHtmlOutputFromFile("hosting/index.html")
    .addMetaTag("viewport", "width=device-width, initial-scale=1")
    .setTitle("React + GAS");
};

export const onOpen = () => {
  SpreadsheetApp.getUi()
    .createMenu("GAS テスト")
    .addItem("Show Modal", "showModal")
    .addToUi();
};

export const showModal = () => {
  const container = doGet();
  SpreadsheetApp.getUi().showModalDialog(container, "React + GAS");
};

export const appendData = () => {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const data = [["Hello", "World"]];
  sheet
    .getRange(sheet.getLastRow() + 1, 1, data.length, data[0].length)
    .setValues(data);
};

export const readData = () => {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const range = sheet.getDataRange();

  return range.getValues();
};
