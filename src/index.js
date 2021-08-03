exports.min = function min(array) {
    if (!array || array.length == 0) return 0;
    array.sort(num);
    return array[0];
}

exports.max = function max(array) {
    if (!array || array.length == 0) return 0;
    array.sort(num);
    return array[array.length - 1];
}

exports.avg = function avg(array) {
    if (!array || array.length == 0) return 0;
    return (array.reduce((a, b) => a + b, 0) / 2) / 10;
}

function num(a, b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
}
