/**
 * 定义数组的旋转操作rotate(A,amount)，让数尾部amount个元素移动到头部。
 * 例如数组：A=[1,2,3,4,5,6,7]
 * rotate(A,1) // [7,1,2,3,4,5,6]
 * rotate(A,2) // [6,7,1,2,3,4,5]
 * rotate(A,3) // [5,6,7,1,2,3,4]
 */

//第一种
function rotate(A,amount) {
  const arr2 = A.splice(0-amount).reverse();
  return arr2.concat(A);
}
console.log(rotate([1,2,3,4,5,6,7],1))
console.log(rotate([1,2,3,4,5,6,7],2))
console.log(rotate([1,2,3,4,5,6,7],3))

// 第二种

