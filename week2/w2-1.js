/**
 * 写一个函数 solution，求比一个数字 n 小的所有 3 和 5 的整数倍数和。
 * 比如 10，比它小的 3、5 整数倍数有： 3,5,6,9， 所以和为 23。 
 * 比如 16， 比它小的 3，5 整数倍数有： 3,5,6,9,10,12,15，所以和为 60（15只计算1次）
 * solution(10) // 23
 * solution(16) // 60
 */

// 第一种
function solution(num) {
  let sum=0;
  for (let i=0; i< num; i++) {
     if(i%3==0 || i%5==0 ) sum+=i;
  }
  return sum;
}; 
console.log(solution(16));

// 第二种
function sum(num) {
  return num*(num+1)/2;
}
function divideSum(num, divide) {
  return divide*sum(Math.floor((num-1)/divide));
}
function solution(value) {
  return divideSum(value, 3) + divideSum(value, 5) - divideSum(value, 15);
}
console.log(solution(16)); // 60
console.log(solution(10)); // 23
