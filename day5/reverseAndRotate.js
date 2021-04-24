function revrot(str, sz) {
  let answer = "";
  str = str.split("");
  if (sz <= 0 || sz > str.length) return "";
  while (sz < str.length) {
    let chunk = str.splice(0, sz);
    chunk = chunk.join("");
    let sum = 0;
    for (let i = 0; i < chunk.length; i++) {
      let n = +chunk[i];
      sum += n * n * n;
    }

    if (sum % 2 === 0) {
      answer += `${chunk}`.split("").reverse().join("");
    } else {
      let val = `${chunk}`.split("");
      let rotate = val.shift();
      val.push(rotate);
      answer += val.join("");
    }
  }
  return answer;
}
