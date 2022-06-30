module.exports = async function moveFilesWithTag(params) {
  const { app } = params;

  // Get file
  const activeFile = this.app.workspace.getActiveFile();

  // Update meeting status

  let tags = await app.plugins.plugins["metaedit"].api.getPropertyValue(
    "tags",
    activeFile
  );

  let udpatedTags = tags.replace("future", "held");

  let outcome = await app.plugins.plugins["metaedit"].api.update(
    "tags",
    udpatedTags,
    activeFile
  );

  // Get customer name and move to its folder
  let customerLink = await app.plugins.plugins["metaedit"].api.getPropertyValue(
    "Project",
    activeFile
  );

  let pureCustomerName = customerLink.match(/\[\[(.*?)\]\]/)[1];

  await app.fileManager.renameFile(
    activeFile,
    "Customers/" + pureCustomerName + "/" + activeFile.name
  );
};
