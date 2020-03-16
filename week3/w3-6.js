/**
 * 解析url params
 * qa.parse
 */

// simple版
function parse (str) {
    return str.split('&').reduce((acc, cur) => {
        const [key, value] = cur.split('=');
        if (!value) {
            return acc;
        }
        acc[key] = value; // TODO..
        return acc;
    }, {})
}

console.log(parse('a=1&b=2&c=5'));
console.log(parse('a&b&c'));
console.log(parse('a[name]=wty&a[age]=27&c=why')); // not work
console.log(parse('a[0]=1&a[1]=2')); // not work
console.log(parse('color=Deep%20Blue')); // not work

/**
 *
 *
 */

function parse (str) {
    return str.split('&').reduce((acc, cur) => {
        const [key, value] = cur.split('=');
        if (!value) {
            return acc;
        }
        // acc[key] = value;
        deep_set(acc, key.split(/[\[\]]/g).filter(x => x), value)

        return acc;
    }, {})
}

function deep_set (acc, path, value) {
    let i = 0;
    for(; i < path.length -1; i++ ) {
        if (acc[path[i]] === undefined) {
            if (path[i+1].match(/^\d+$/)) { // 数组
                acc[path[i]] = [];
            } else {
                acc[path[i]] = {};
            }
        }
        acc = acc[path[i]];
    }
    acc[path[i]] = decodeURIComponent(value);
}

console.log(parse('a=1&b=2&c=5'));
console.log(parse('a&b&c'));
console.log(parse('a[name]=wty&a[age]=27&c=why')); // not work
console.log(parse('a[0]=1&a[1]=2')); // not work
console.log(parse('color=Deep%20Blue')); // not work