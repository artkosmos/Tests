/*
A Narcissistic Number (or Armstrong Number) is a positive number which is the sum of its own digits,
each raised to the power of the number of digits in a given base.
In this Kata, we will restrict ourselves to decimal (base 10).

For example, take 153 (3 digits), which is narcissistic:

1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153*/


function narcissistic(value) {
  const stringArrayOfNum = value.toString().split('')
  const isNarcissistic = stringArrayOfNum.reduce((acc, item) => {
    acc += Number(item) ** (stringArrayOfNum.length)
    return acc
  }, 0)

  return value === isNarcissistic
}

console.log(narcissistic(153))
console.log(narcissistic(  7))