/**
 * 写一个函数判断字符串中x的数量和o的数量是否相等（忽略大小写）：
 * 
 * 
 */

//第一种
function xo(str) {
  const lowArr = str.toLowerCase().split('');
  return lowArr.filter(v => v == 'x').length == lowArr.filter(v => v == 'o').length;
};
xo("qwerOXoXqwe");

//第二种
function xo(str) {
  return str.match(/x/ig).length == str.match(/o/ig).length;
}
console.log(xo("qwerOXoXqwe"));
