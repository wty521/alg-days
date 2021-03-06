/**
 * 写一个二分查找函数bsearch
 * A 是一个已排序的数组，x 是目标值。
 * 如果找到目标值，返回目标值在数组中的序号。
 * 如果没有找到目标值，返回目标值应该被插入的位置 比如数组: A = 3,5,7,13,22,25
 * bsearch(A, 5) // 1
 * bsearch(A, 13) // 3
 * bsearch(A, 4) // 1
 * bsearch(A, -1) // 0
 * bsearch(A, -10000) // 0
 * bsearch(A, 30) // 6
 */

const ary = [3, 5, 7, 13, 22, 25];

// 循环
const bsearch = (A, x) => {
  let start = 0,  //查询范围左边
      end = A.length - 1,  // 查询范围右边
      guess; // 二分猜测位置

  // return
  while(start <= end) {//
    guess = Math.floor((end + start)/2); // 循环不变式
    // return;
    if(A[guess] === x) return guess;
    else if(A[guess] > x) {
      if(guess === 0 || A[guess - 1] < x ) return guess;
      end = guess - 1;
    }
    else { 
      if(guess === A.length - 1 || A[guess + 1] > x) return guess + 1;
      start = guess + 1;
    }
  }
}

console.log(bsearch(ary, 5));  // 1
console.log(bsearch(ary, 30)); // 6
console.log(bsearch(ary, 7));  // 2
console.log(bsearch(ary, -1)); // 0


// 递归
const bsearch1 = (A, x) => brsearch1(0, A.length - 1, A, x);

const brsearch1 = (start, end, A, x) => {
  let guess = Math.floor((start + end)/2);
  if(start >= end) {
    if(A[guess] < x) return end + 1;
    return start;
  }

  if(A[guess] === x) return guess
  else if(A[guess] > x) return brsearch1(start, guess - 1, A, x);
  else return brsearch1(guess + 1, end, A, x);

};


console.log(bsearch1(ary, 5));  // 1
console.log(bsearch1(ary, 30)); // 6
console.log(bsearch1(ary, 13)); // 3
console.log(bsearch1(ary, -1)); // 0


function bsearch2(A, x){
	let middleIndex = 0;
	let left = 0;
	let right = A.length - 1;
	while(left <= right){
		middleIndex = Math.ceil((right + left)/2);
		if (A[middleIndex] === x) {
			return middleIndex;
		} else if (A[middleIndex] < x) {
			left = middleIndex + 1;
		} else {
			right = middleIndex - 1;
		}
	}
	return left;
}

console.log(bsearch2(ary, 5));  // 1
console.log(bsearch2(ary, 4));  // 1
console.log(bsearch2(ary, 0));  // 0

