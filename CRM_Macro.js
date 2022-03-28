// You have to export the function you wish to run.
// QuickAdd automatically passes a parameter, which is an object with the Obsidian app object
// and the QuickAdd API (see description further on this page).
module.exports = async (params) => {
  // Object destructuring. We pull inputPrompt out of the QuickAdd API in params.
  const {
    quickAddApi: { executeChoice },
  } = params;
  const pickedFile = await params.quickAddApi.suggester(
    (file) => file.basename,
    params.app.vault.getMarkdownFiles()
  );
  let TAG = "";
  if (pickedFile.basename === "MYCOMPANY") { // Change to your company
    TAG = "Colleague";
  } else {
    TAG = "Customer";
  }
  await params.quickAddApi.executeChoice("PasteInfo", {
    EMPLOYER: pickedFile.basename,
    TAG: TAG,
  });
};
