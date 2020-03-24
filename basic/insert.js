/**
 * 插入排序 时间复杂度O(n^2)
 */

// 1）有序列表插入1个元素 最简单的
const A = [2,4,7,9,13]; // 原数组
const x = 8; // 需要插入元素

const b = A.find(a => a > x);
const idx = A.indexOf(b);
A.splice(idx === -1 ? A.length : idx, 0, x);



// 2）有序列表插入1个元素 循环不变式
function insert(A, x) {
    let p = A.length -1; // p指向下一个比较元素 p指向空位

    while (p >= 0 && A[p] > x) {
        A[p+1] = A[p];
        p--;
    }
    A[p + 1] = x;
}

const arr = [2,5,7,9,12,34,67];
const i = 8;
insert(arr, i)
console.log(arr);

// 3）插入排序
function insert(A, i, x) {
    let p = i -1; // p指向下一个比较元素 p指向空位

    while (p >= 0 && A[p] > x) {
        A[p+1] = A[p];
        p--;
    }
    A[p + 1] = x;
}

function insertion_sort(A) {
    for(let i = 1; i < A.length; i++) {
        insert(A, i, A[i]);
    }
}