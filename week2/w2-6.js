/**
 * 实现一个递归版本的reserve函数，反转一个数组
 * reserve([1,2,3,4,5]) // [5,4,3,2,1];
 */

//第一种 
const reserve = (function f(arr, i=0) {
  const length = arr.length;
  if(i === Math.floor(length/2) ) return arr; //退出条件
  [arr[i], arr[length -1-i]] = [arr[length -1-i], arr[i]]; // 交换
  return f(arr, ++i);
})
console.log(reserve([1,2,3,4,5,6,234])); // [ 234, 6, 5, 4, 3, 2, 1 ]