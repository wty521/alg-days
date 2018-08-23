/**
 * 将数字的每一位求平方，然后组合成新的数字（注意：请返回一个数字）
 * squareDigits(9119) // 811181
 */

//第一种
function squareDigits(num) {
  return +`${num}`.split('').map(v => Math.pow(v,2)).join('');
};
console.log(squareDigits(9119)) // 811181

//第二种
function squareDigits(num) {
  return +`${num}`.split('').reduce((total, cV, arr) => total+Math.pow(cV,2), '');
};
console.log(squareDigits(9119)) // 811181

//第三种
function square(num) {
  return `${num}`.replace(/\w/g, item => Math.pow(item,2))
}
console.log(square(9119)) // 811181