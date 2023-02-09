module.exports = function reverse(n) {
    return +reverseStr(Math.abs(n).toString());
}
function reverseStr(str) {
    if (str === '') return '';
    return reverseStr(str.substr(1)) + str[0];
}