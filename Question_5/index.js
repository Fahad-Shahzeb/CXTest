var FindMostRepeatedElement = function (arr) {
    var elementCount = {};
    // Iterate through the array and count the occurrences of each element
    for (var i = 0; i < arr.length; i++) {
        var element = arr[i];
        if (elementCount[element]) {
            elementCount[element]++;
        }
        else {
            elementCount[element] = 1;
        }
    }
    var mostRepeatedElement;
    var maxCount = 0;
    // Find the element with the maximum count
    for (var element in elementCount) {
        if (elementCount.hasOwnProperty(element)) {
            if (elementCount[element] > maxCount) {
                mostRepeatedElement = element;
                maxCount = elementCount[element];
            }
        }
    }
    // Return the result
    return {
        element: mostRepeatedElement,
        repetition: maxCount,
    };
};
var result = FindMostRepeatedElement([3, 8, 9, 9, 9, 3, 7, 6]);
console.log("Most repeated number is: ", result.element, " with ", result.repetition, "repititions.");
