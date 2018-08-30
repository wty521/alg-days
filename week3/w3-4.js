/**
 * 写一个函数floor_power_of2，求比x小的最大二的整数次幂。
例如
floor_power_of2(64) // 64
floor_power_of2(63) // 32
floor_power_of2(33) // 32
floor_power_of2(32) // 32
 */

//第一种
var floor_power_of2 = (num) => {
  let powNum=0;
  for(let i=1; Math.pow(2,i)<=num; i++) {
    powNum = Math.pow(2,i);
  }
  return powNum;
}
console.log(floor_power_of2(64));
console.log(floor_power_of2(63));
console.log(floor_power_of2(32));
console.log(floor_power_of2(33));