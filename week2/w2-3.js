/**
 * 在一个数组中大部分都是奇数(或偶数），只有1个可能是偶数（或奇数），写一个函数special找到这个不一样的值。
 * special( [2, 4, 0, 100, 4, 11, 2602, 36] ) // 11 唯一的奇数
 * special( [160, 3, 1719, 19, 11, 13, -21] ) // 160 唯一的偶数
 */

// 第一种
// 两边循环
function special(arr) {
  var evens = arr.filter(v => v%2 == 0);
  var odds = arr.filter(v => v%2 !== 0);
  return evens.length == 1 ? evens[0] : odds[0];
}
console.log(special([2,10,8,122,368,11,0,46,90])) //11
console.log(special([11,13,5,8,91,55])) //8

// 第二种
// 通过前3个数可以知道奇偶
function special(arr) {
  const a = arr.slice(0,3).reduce((sum,v)=> sum+v%2, 0 ) > 1 ? 0 : 1;
  return arr.filter(v => v%2 === a)[0]
}
console.log(special([2,10,8,122,368,11,0,46,90])) //11
console.log(special([11,13,5,8,91,55])) //8