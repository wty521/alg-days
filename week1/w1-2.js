/**
 * 写一个函数求数组的最大值和最小值
 * highAndLow("1 2 3 4 5"); // return "5 1"
 * highAndLow("1 2 -3 4 5"); // return "5 -3"
 * highAndLow("1 9 3 4 -5"); // return "9 -5"
 */

//第一种
function highAndLow(arr) {
  arr.sort((a,b)=> a-b);
  return `${arr[0]}, ${arr[arr.length-1]}`;
};
highAndLow([9,3,123,45,67,2,6345,7]) // '2,6345'

function highAndLow(arr) {
  const max = Math.max.apply(null, arr);
  const min = Math.min.apply(null, arr);
  return `max: ${max}, min: ${min}`
}; 
highAndLow([9,3,123,45,67,2,6345,7]) // "max: 6345, min: 2"