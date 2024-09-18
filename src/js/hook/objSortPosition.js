function objSortPosition(obj) {
  for (const key in obj) {
    obj[key].sort((a, b) => {
      return a.position - b.position;
    });
  }
  return obj;
}
