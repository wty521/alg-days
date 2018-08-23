/**
 * 写一个函数reverse反转一个数组A 
 * 要求： 不可以使用Array.reverse 请不要创建新数组
 * reverse([1,3,5,7]) // [7,5,3,1]
 */

// 第一种
function reverse(arr) {
  let num, length = arr.length;
  const midIndex = Math.floor(length / 2);
  for (let i = 0; i < midIndex; i++) {
    num = arr[i];
    arr[i] = arr[length - 1 - i];
    arr[length - i] = num;
  }
  return arr;
};
console.log(reverse([1, 5, 79, 234, 6, 87, 3])); // [3, 87, 6, 234, 6, 79, 5, 1]


// 第二种 
// map返回了新数组...
function reverse(arr) {
  return arr.map((item, index) => arr[arr.length - index - 1]);
}
console.log(reverse([1, 234, 5, 7, 3])); // [3, 7, 5, 234, 1]

//第三种
function reverse(arr) {
  var start = 0, end = arr.length - 1;
  while (start < end) {
    [arr[start++], arr[end--]] = [arr[end], arr[start]];
  }
  return arr;
};
console.log(reverse([1, 3, 5, 675, 345, 234]))
