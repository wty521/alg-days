/**
 * 4*3的网格，从右上点到左下点(A -> B),只能向右或向下，共有多少种路线。
 *
 */

function f(x, y) {
    if (x > 0 && y > 0) {
        return f(x - 1, y) + f(x, y - 1);
    }
    else if (x > 0) {
        return f(x - 1, y);
    }
    else if (y > 0) {
        return f(x, y - 1);
    }
    else {
        return 1;
    }
}

/**
 * 上面的性能不好，会有很多重复计算
 * 动态规划的思路 + deep缓存结果
 */

function fd(x, y, dp = []) {
    if (!dp[y]) {
        dp[y] = [];
    }
    if (dp[y][x] !== undefined) {
        return dp[y][x];
    }
    if (x > 0 && y > 0) {
        dp[y][x] = f(x - 1, y, dp) + f(x, y - 1, dp);
    }
    else if (x > 0) {
        dp[y][x] = f(x - 1, y);
    }
    else if (y > 0) {
        dp[y][x] = f(x, y - 1);
    }
    else {
        dp[y][x] = 1;
    }
    return dp[y][x];
}

/**
 * 第三种
 *
 */

function fdp(w, h) {
    const dp = [];
    for (let y = 0; y <= h; y++) {
        dp[y] = [];
        for (let x = 0; x <= w; x++) {
            if (x === 0 && y === 0 ) {
                dp[y][x] = 1;
            }
            else if (x === 0) {
                dp[y][x] = dp[y-1][x];
            }
            else if (y === 0) {
                dp[y][x] = dp[y][x-1];
            }
            else {
                dp[y][x] = dp[y][x-1] + dp[y-1][x];
            }
        }
    }

    return dp[h][w];
}

console.log(f(4,3));
console.log(fd(4,3));
console.log(fdp(4,3));