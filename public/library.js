const translation = (key, store) => {
  try {
    if (store.state.languageData && store.state.languageData[key]) {
      return store.state.languageData[key];
    } else return key;
  } catch (err) {
    console.error(err);
    return key;
  }
};

const handelContent_ABCXYZ_id = (value, data) => {
  return translation(value, data);
};

const libraryFunctions = {
  handelContent_ABCXYZ_id,
};

(() => {
  window.libraryFunctions = libraryFunctions;
  console.log("loaded library functions");
})();
