module.exports = async function setupNewCustomer(params) {
  const { app } = params;

  // Get file
  const activeFile = this.app.workspace.getActiveFile();

  // Create folders
  const fileName = activeFile.basename;

  await app.vault.createFolder("🏙️ Customers/" + fileName);
  await app.vault.createFolder("🏙️ Customers/" + fileName + "/Files");

  // Move note

  await app.fileManager.renameFile(
    activeFile,
    "🏙️ Customers/" + fileName + "/" + activeFile.name
  );

  // Search for logo
  const custonerURLName = fileName.replace(" ", "%20");
  window.open(
    "https://www.google.com/search?q=png+logo+" + custonerURLName + "&tbm=isch",
    "_blank"
  );
};
