function maxInArray(array) {
  let maxNumber = array[0];
  for (element of array) {
    if (element > maxNumber) {
      maxNumber = element;
    }
  }
  return maxNumber;
}

let numbers = [1, 2, 3, 4, 5, 6];
let maxNumberInArray = maxInArray(numbers);
console.log("Maximum Number", maxNumberInArray);
