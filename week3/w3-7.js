/**
 *
 * 取n个数字合为m
 * sumN([1,3,8,5,2], 2, 11) // [3, 8]
 * sumN([1,3,8,5,2], 3, 6) // [1,3,2]
 * sumN([1,3,8,5,2], 4, 3) //
 */

/**
 *
 * @param {*} A
 * @param {*} n
 * @param {*} m
 * @param {*} i
 * @param {*} decisions
 */
function sumN (A, n, m, i = 0, decisions = []) {
    if (m === 0) return decisions;
    if (i === A.length || n === 0 || m < 0) return null;

    return sumN(A, n-1, m-A[i], i+1, decisions.concat(A[i]))
        || sumN(A, n, m, i+1, decisions);
}

console.log(sumN([1,3,8,5,2], 2, 11))
console.log(sumN([1,3,8,5,2], 3, 6))
console.log(sumN([1,3,8,5,2], 4, 3));


function sumN (A, n, m) {
    let res = null;

    const decisions = [];
    function inner(i = 0, n , m) {
        if (res) return;
        if (m === 0) {
            res = decisions.slice();
            return;
        }
        if (i === A.length || n === 0 || m < 0) return;

        decisions.push(A[i]);
        inner(i+1, n-1, m-A[i]);
        decisions.pop(A[i]);
        inner(i+1, n, m);
    }

    inner(0, n, m);
    return res;
}

