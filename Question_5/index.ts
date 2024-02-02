interface RepeatedType {
  element: number | undefined;
  repetition: number;
}

const FindMostRepeatedElement = (arr: number[]): RepeatedType => {
  let elementCount = {};

  // Iterate through the array and count the occurrences of each element
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (elementCount[element]) {
      elementCount[element]++;
    } else {
      elementCount[element] = 1;
    }
  }

  let mostRepeatedElement: number | undefined = undefined;
  let maxCount = 0;

  // Find the element with the maximum count
  for (const element in elementCount) {
    if (elementCount.hasOwnProperty(element)) {
      if (elementCount[element] > maxCount) {
        mostRepeatedElement = +element;
        maxCount = elementCount[element];
      }
    }
  }
  return {
    element: mostRepeatedElement as number,
    repetition: maxCount,
  };
};

const result = FindMostRepeatedElement([3, 8, 9, 9, 9, 3, 7, 6]);
console.log("Most repeated number is: ", result.element, " with ", result.repetition, "repititions.");
