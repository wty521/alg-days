/**
 * 柯里化函数curry是这样一个函数，它将一个接受多参数的函数，转换成为接收连续单参数的高阶函数（可以被连续调用）。
 * 例如：
function add(a, b, c, d){
  return a + b + c + d
}
const add = curry(add)
console.log( add(1) ) // 函数
console.log( add(1)(2) ) // 函数
console.log( add(1)(2)(3) ) // 函数
console.log ( add(1)(2)(3)(4) ) // 10

再比如:
```js
const pow = curry(Math.pow)
pow(10)(2) // 100
 */

// 第一种
const curry = (fn) => {
  let l = fn.length, args=[];
  return cur = (v) => {
    l--;
    args.push(v);
    return l == 0 ? fn(...args) : cur;
  }
}
function _add(a, b, c, d){
  return a + b + c + d
}
const add = curry(_add);
add1(1);
add1(2);
console.log(add1(3));
console.log(add1(4));

//第二种
const curry = fn => {
  return cur = (...args) => {
    return args.length >= fn.length ? fn(...args) : (...arg) => cur(...args, ...arg);
  }
}
function _add(a, b, c, d){
  return a + b + c + d
}
const add = curry(_add);
console.log(add(1)(2)(3)(4));
