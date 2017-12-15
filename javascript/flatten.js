// Flatten an array
function flatten(array) {
  return array.reduce(
    (acc, item) => acc.concat(Array.isArray(item) ? flatten(item) : item),
    []
  );
}
