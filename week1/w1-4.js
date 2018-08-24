/**
 * 写一个函数判断一个数字是不是某个整数的平方。
 * is_square (-1) # => false
 * is_square   0 # => true
 * is_square   3 # => false
 */

function is_square(num) {
  return Number.isInteger(Math.sqrt(num))
}
console.log(is_square (-1)); // false
console.log(is_square (0)); // true
console.log(is_square (3)); // false
console.log(is_square (9)); // true
console.log(is_square (10)); // false
