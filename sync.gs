function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu("Custom Menu")
    .addItem("Sync", "setGoogleCalendarEvents")
    .addItem("Delete SCRIPT-ONLY Events for Today", "deleteCalendarEvents")
    .addToUi();
}
