
/**
 * 写一个函数flat展平一个数组
 * flat([1,[2,'a',[5,6]],8]) // [1,2,'a',5,6,8]
 */

//第一种
const newArr = [];
const flat = (arr) => {
  for(let i=0; i<arr.length; i++) {
    Array.isArray(arr[i]) ? flat(arr[i]) : newArr.push(arr[i]);
  }
}
flat([1,[2,'a',[5,6]],8]);
console.log(newArr);

// 第二种
const flat = (arr) => {
  return [].concat(...arr.map(v => Array.isArray(v) && v.length > 0 ? flat(v) : v));
};
console.log(flat([1,[2,'a',[5,6]],8]));

//第三种
const flat = (arr) => {
  return arr.reduce((newArr, item) => {
    if (Array.isArray(item)) return flat(newArr.concat(item));
    return [...newArr, item]
  }, [])
}
console.log(flat([1,[2,'a',[5,6]],8]));
