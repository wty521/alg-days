/**
 * 冒泡 时间复杂度O(n^2)
 */

const swap = (A, i, j) => {
    const t = A[i];
    A[i] = A[j];
    A[j] = t;
}

function bubble_sort(A) {
    for (let i = A.length; i >= 1; i--) {
        for (let j = 0; j <= i; j++) {
            A[j -1] > A[j] && swap(A, j-1, j);
        }
    }
}

const arr = [12,5,23,5,6,8,4,5,7,9,4,897,34,53,654,3];
bubble_sort(arr);
console.log(arr);