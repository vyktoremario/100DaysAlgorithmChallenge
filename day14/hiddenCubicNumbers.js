function isSumOfCubes(s) {
  let arr = [].concat(
    ...s
      .replace(/[^0-9]/gi, " ")
      .replace(/\s+/gi, " ")
      .trim()
      .split(" ")
      .map((val) => {
        let arr2 = [];
        for (let i = 0; i < val.length; i += 3) {
          arr2.push(val.slice(i, i + 3));
        }
        return arr2;
      })
  );
  let final = arr
    .filter(
      (val) => val * 1 === val.split("").reduce((a, b) => a + b * b * b, 0)
    )
    .map((val) => val * 1);
  return final.length
    ? `${final.join(" ")} ${final.reduce((a, b) => a + b, 0)} Lucky`
    : "Unlucky";
}
