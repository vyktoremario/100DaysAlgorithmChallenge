function findUniq(arr) {
    let frequency = {}
    arr.map(value => frequency[value] = (frequency[value] || 0) +1)
    let value = Object.entries(frequency).sort((a, b) => a[1] - b[1])
    return +value[0][0]
}

function findUniq(arr) {
    return arr.find(n => arr.indexOf(n) === arr.lastIndexOf(n));
}