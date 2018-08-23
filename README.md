# 百日算法
记录每天一道算法题(第十天才开始记录..)

## week1
### w1-1
观察下面的规律，写一个函数accum
```js
accum("abcd");    // "A-Bb-Ccc-Dddd"
accum("RqaEzty"); // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt");    // "C-Ww-Aaa-Tttt"
```
[answer](https://github.com/wty521/alg-days/blob/master/week1/w1-1.js)

### w1-7
将数字的每一位求平方，然后组合成新的数字（注意：请返回一个数字）
```js
squareDigits(9119) // 811181
```
[answer](https://github.com/wty521/alg-days/blob/master/week1/w1-7.js)

## week2
### w2-1
写一个函数 solution，求比一个数字 n 小的所有 3 和 5 的整数倍数和。
比如 10，比它小的 3、5 整数倍数有： 3,5,6,9， 所以和为 23。 比如 16， 比它小的 3，5 整数倍数有： 3,5,6,9,10,12,15，所以和为 60（15只计算1次）
```js
solution(10) // 23
solution(16) // 60
```
[answer](https://github.com/wty521/alg-days/blob/master/week2/w2-2.js)

### w2-2 
写一个二分查找函数bsearch
A 是一个已排序的数组，x 是目标值。      
如果找到目标值，返回目标值在数组中的序号。 如果没有找到目标值，返回目标值应该被插入的位置 比如数组: A = 3,5,7,13,22,25
```js
bsearch(A, 5) // 1
bsearch(A, 13) // 3
bsearch(A, 4) // 1
bsearch(A, -1) // 0
bsearch(A, -10000) // 0
bsearch(A, 30) // 6
```
### w2-3
在一个数组中大部分都是奇数(或偶数），只有1个可能是偶数（或奇数），写一个函数special找到这个不一样的值。
```js
special( [2, 4, 0, 100, 4, 11, 2602, 36] ) // 11 唯一的奇数
special( [160, 3, 1719, 19, 11, 13, -21] ) // 160 唯一的偶数
```
[answer](https://github.com/wty521/alg-days/blob/master/week2/w2-3.js)
