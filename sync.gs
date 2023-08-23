function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu("Custom Menu")
    .addItem("Sync", "setGoogleCalendarEvents")
    .addItem("Delete Events for Today", "deleteCalendarEvents")
    .addToUi();
}
