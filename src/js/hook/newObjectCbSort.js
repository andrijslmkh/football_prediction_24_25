function newObjectCbSort(obj, cb) {
  let sortObj = {};

  for (const key in obj) {
    sortObj[key] = [];

    obj[key].forEach((element) => {
      sortObj[key].push(element);
    });
  }

  cb !== undefined ? (sortObj = cb(sortObj)) : sortObj[key];
  return sortObj;
}
