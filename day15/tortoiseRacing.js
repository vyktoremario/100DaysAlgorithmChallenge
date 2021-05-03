function race(v1, v2, g) {
  return [
    Math.floor(Math.floor((3600 * g) / (v2 - v1)) / 3600),
    Math.floor(Math.floor((3600 * g) / (v2 - v1)) / 60) % 60,
    Math.floor((3600 * g) / (v2 - v1)) % 60,
  ];
}
