var sumOfTwoHighestNumbers = function (arr) {
    var firstHighest = -Infinity;
    var secondHighest = -Infinity;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > firstHighest) {
            secondHighest = firstHighest;
            firstHighest = arr[i];
        }
        else if (arr[i] > secondHighest && arr[i] !== firstHighest) {
            secondHighest = arr[i];
        }
    }
    return firstHighest + secondHighest;
};
console.log("Sum of Highest two Numbers is: ", sumOfTwoHighestNumbers([-5, -8, -2, -10, -7, -1, -6, -3, -5, -4]));
