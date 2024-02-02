var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var RotateArray = function (arr) {
    var newArr = [arr[arr.length - 1]];
    for (var i = 0; i < arr.length - 1; i++) {
        newArr = __spreadArray(__spreadArray([], newArr, true), [arr[i]], false);
    }
    return newArr;
};
console.log("Rotated Array is: ", RotateArray([3, 8, 9, 7, 6]));
