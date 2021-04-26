function dontGiveMeFive(start, end)
{
  let arr = []
  let count = 0
  for (let i = start; i <= end; i++) {
    arr.push(i)
  }
  arr.forEach((item) => {
    if (!(`${item}`.split('').includes('5'))) {
      count++
    }
  })
  return count
}