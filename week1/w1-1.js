/**
 * 观察下面的规律，写一个函数accum
 * accum("abcd");    // "A-Bb-Ccc-Dddd"
 * accum("RqaEzty"); // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
 * accum("cwAt");    // "C-Ww-Aaa-Tttt"
 */

//第一种
function accum(str) {
  return str.split('').map((c,i) => c.toUpperCase() + c.toLowerCase().repeat(i) ).join('-')
};
console.log(accum('ascd')) // A-Ss-Ccc-Dddd
