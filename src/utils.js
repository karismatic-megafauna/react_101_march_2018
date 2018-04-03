export const turnObjectIntoArray = (obj) => {
  const anArrayOfObjects = Object.keys(obj).map(key => {
    return obj[key];
  });
  return anArrayOfObjects;
}
