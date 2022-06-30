// You have to export the function you wish to run.
// QuickAdd automatically passes a parameter, which is an object with the Obsidian app object
// and the QuickAdd API (see description further on this page).
module.exports = async (params) => {
  // Object destructuring. We pull inputPrompt out of the QuickAdd API in params.
  const { app } = params;

  const activeFile = this.app.workspace.getActiveFile();

  // Ask for meeting date

  let inputDate = await params.quickAddApi.inputPrompt("Meeting date");

  let parsedDate = moment(inputDate);

  // Adjust year to future if needed

  const dateNow = moment();

  parsedDate.year(
    parsedDate.dayOfYear() >= dateNow.dayOfYear()
      ? dateNow.year()
      : dateNow.year() + 1
  );

  const dateFormatted = parsedDate.format("YYYY-MM-DD");
  const todoDateFormatted = parsedDate.subtract(1, "days").format("YYYY-MM-DD");

  // Ask for project

  const meetingProject = await params.quickAddApi.suggester(
    (file) => file.basename,
    params.app.vault.getMarkdownFiles()
  );

  // Insert values
  await params.quickAddApi.executeChoice("PasteMeetingInfo", {
    DATE: dateFormatted,
    PROJECT: meetingProject.basename,
    TODODATE: todoDateFormatted,
  });

  // Change file name
  await app.fileManager.renameFile(
    activeFile,
    activeFile.basename +
      " " +
      meetingProject.basename +
      " - " +
      dateFormatted +
      ".md"
  );

  // Move file to customer folder

  await app.fileManager.renameFile(
    activeFile,
    "Customers/" + meetingProject.basename + "/" + activeFile.name
  );
};
