/**
 * 写一个函数floor_power_of2，求比x小的最大二的整数次幂。
例如
floor_power_of2(64) // 64
floor_power_of2(63) // 32
floor_power_of2(33) // 32
floor_power_of2(32) // 32
 */

//第一种
const floor_power_of2 = (num) => {
  let i=0;
  while(num >= 2) {
    num = num/2;
    ++i;
  }
  return Math.pow(2,i);
}
console.log(floor_power_of2(64));
console.log(floor_power_of2(63));
console.log(floor_power_of2(32));
console.log(floor_power_of2(33));

//第二种
const floor_power_of2 = (num) => {
  return Math.pow(2,~~Math.log2(num));
}
console.log(floor_power_of2(64));
console.log(floor_power_of2(63));
console.log(floor_power_of2(32));
console.log(floor_power_of2(33));