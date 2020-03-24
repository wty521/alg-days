/**
 * 二分查找
*/

function bsearch(arr, x) {
    let l = 0;
    let r = arr.length -1;
    let res;

    while(l < r) {
        res = Math.floor( (r+l)/2 );
        if (arr[res] === x) {
            return res;
        }
        else if (arr[res] > x) {
            r = res - 1;
        }
        else {
            l = res + 1;
        }
    }
    return -1;
};

const a = [1,3,5,7,9,18,32,48,50,68,73,94];

console.log(bsearch(a, 5));
console.log(bsearch(a, 69));
console.log(bsearch(a, 73));



