function duplicateCount(text) {
  text = text.toLowerCase();
  let counter = {};
  let count = 0;
  for (let i = 0; i < text.length; i++) {
    let key = text[i];
    counter[key] = (counter[key] || 0) + 1;
  }
  for (key in counter) {
    if (counter[key] > 1) {
      count++;
    }
  }
  return count;
}
