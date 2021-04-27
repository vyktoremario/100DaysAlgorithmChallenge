function disemvowel(str) {
  let regex = /[aeiou]/gi;
  let answer = str.replace(regex, "");
  return answer;
}
