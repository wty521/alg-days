/**
 * 写一个函数，将字符串除了最后的四位，其他都变成#
 * maskify("4556364607935616") == "############5616"
 * maskify("64607935616")      == "#######5616"
 * maskify("1")                == "1"
 * maskify("")                 == ""
 * maskify("Skippy")           == "##ippy"
 * maskify("Nananananananananananananananana Batman!") == "####################################man!"
 */

//第一种
function maskify(str) {
  return str.replace(/(.*)(.{4})/, (result, $1, $2) => "#".repeat($1.length)+$2);
}
maskify("64607935616"); // #######5616

//第二种
function maskify(str) {
  return str.split('').map((v,i) => {
    if (i < str.length-4) return '#';
    return v;
  }).join('');
}
maskify("64607935616"); // #######5616