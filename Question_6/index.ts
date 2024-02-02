const RotateArray = (arr: number[]) => {
  let newArr = [arr[arr.length - 1]];
  for (let i = 0; i < arr.length - 1; i++) {
    newArr = [...newArr, arr[i]];
  }
  return newArr;
};

console.log("Rotated Array is: ", RotateArray([3, 8, 9, 7, 6]));
