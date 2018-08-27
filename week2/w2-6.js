/**
 * 实现一个递归版本的reserve函数，反转一个数组
 * reserve([1,2,3,4,5]) // [5,4,3,2,1];
 */

//第一种 
const reserve = (function f(arr, i=0, l=arr.length-1 ) {
  if(i >= Math.floor(l/2) ) return arr; //退出条件
  [arr[i], arr[l-i]] = [arr[l-i], arr[i]]; // 交换
  return f(arr, ++i, l);
})
console.log(reserve([1,2,3,4,5,6,234])); // [ 234, 6, 5, 4, 3, 2, 1 ]
console.log(reserve([1,2,3,4,5,6,7,8])); // [ 234, 6, 5, 4, 3, 2, 1 ]

//
const reserve1 = (arr, i=0) => {
  if(i > arr.length-i-1) return arr;
  [arr[i], arr[arr.length-1-i]] = [arr[arr.length-1-i], arr[i]]; // 交换
  return reserve1(arr, i+1);
}
console.log(reserve1([1,2,3,4,5,6,7])); // [ 7, 6, 5, 4, 3, 2, 1 ]