/**
 * 下面三角形的数列：
              1
            3     5
        7     9    11
    13    15    17    19
  21    23    25    27    29
  写一个函数，给定行的序号，然后求和：
 * rowSumOddNumbers(1) // 1
 * rowSumOddNumbers(2) // 3+5=8
 * rowSumOddNumbers(3) // 7+9+11=27
 * rowSumOddNumbers(42) // 74088
 */

//第一种
function rowSumOddNumbers1(x) {
  let sum = 0;
  const xRowFirstNum = x * (x - 1) + 1;
  let newNum = xRowFirstNum;
  for(let i = 0; i < x; i++) {
    sum += newNum;
    newNum += 2;
  }
  return sum;
}

//第二种 规律发现每行和为行数的立方
function rowSumOddNumbers(n) {
  return Math.pow(n, 3);
}
