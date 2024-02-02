var FindMissingNumbers = function (arr) {
    var expectedNumbers = [];
    var missingNumbers = [];
    // Initialize the expected numbers array
    for (var i = 0; i < 10; i++) {
        expectedNumbers[i] = i;
    }
    // Find missing numbers
    for (var i = 0; i < expectedNumbers.length; i++) {
        var found = false;
        for (var j = 0; j < arr.length; j++) {
            if (expectedNumbers[i] === arr[j]) {
                found = true;
                break;
            }
        }
        if (!found) {
            missingNumbers.push(expectedNumbers[i]);
        }
    }
    return missingNumbers;
};
console.log("Missing numbers array is:", FindMissingNumbers([1, 9, 8, 5, 6]));
