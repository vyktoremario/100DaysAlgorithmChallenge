function cubeOdd(arr) {
  let value = 0;
  for (item of arr) {
    if (isNaN(item)) {
      return undefined;
    } else {
      if (item % 2 !== 0) {
        console.log(item);
        value += item ** 3;
      }
    }
  }
  return value;
}
