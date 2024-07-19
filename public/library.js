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

const handelContent_ABCXYZ_id = (value, store) => {
  return translation(value, store);
};
const onMounted_ABCXYZ_id = (value, thisElement, store) => {
  thisElement.addEventListener("click", (e) => {
    console.log(">>>>>>>>>>ThisElement: ", e.target);
  });
};

const libraryFunctions = {
  handelContent_ABCXYZ_id,
  onMounted_ABCXYZ_id,
};

(() => {
  window.libraryFunctions = libraryFunctions;
  console.log("loaded library functions");
})();
