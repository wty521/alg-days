/**
 * 素数是（不包括1）只能被自己1整除的数字，比如2、3、5、7、11、13……都是素数，写一个函数is_prime验证一个数字是否是素数。
 * is_prime(1) // false
 * is_prime(100) // false
 * is_prime(13) // true
 * is_prime(179426549) // true
 * is_prime(22801763489) // true
 */

 //第一种 最萌的一整次循环
const is_prime = (num) => {
  if(!Number.isInteger(num) || num<2) return false;
  for( let i=2; i<num; i++) {
    if(num%i === 0) return false;
  }
  return true;
}
console.log(is_prime(2)); 
console.log(is_prime(100));
console.log(is_prime(13));
console.log(is_prime(179426549)); // 明显有点慢
console.log(is_prime(22801763489)); // 这个半天不出来

//第二种
let is_prime1 = (num) => {
  return !/^1?$|^(11+?)\1+$/.test(Array(num + 1).join('1'))
}
console.log(is_prime1(1)); 
console.log(is_prime1(100));
console.log(is_prime1(13));
console.log(is_prime1(179426549)); // error Maximum call stack size exceeded
console.log(is_prime1(22801763489)); // error Maximum call stack size exceeded

//第三种
let is_prime2 = (num) => {
  if(!Number.isInteger(num) || num<2) return false; // 小于2不是
  if(num == 2) return true; // 2是
  if(num%2 == 0) return false; //2的倍数不是
  for (let i=3; i< Math.sqrt(num); i+=2) { //最大循环为num的开方，每次加2
    if(num%i == 0) return false;
  }
  return true;
}
console.log(is_prime2(1)); 
console.log(is_prime2(100));
console.log(is_prime2(13));
console.log(is_prime2(179426549)); 
console.log(is_prime2(22801763489)); // 终于出来了