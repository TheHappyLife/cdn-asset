const handelContent_ABCXYZ_id = (data) => {
  console.log(
    ">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>The Data: ",
    data.state
  );
  return "handelContent";
};

const libraryFunctions = {
  handelContent_ABCXYZ_id,
};

(() => {
  window.libraryFunctions = libraryFunctions;
  console.log("loaded library functions");
})();
