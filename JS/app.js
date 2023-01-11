function maxInArray(array) {
  let maxNumber = array[0];
  for (element of array) {
    if (element > maxNumber) {
      maxNumber = element;
    }
  }
  return maxNumber;
}

let numbers = [10, 100, 50, 20, 30];
let maxNumberInArray = maxInArray(numbers);
console.log("Maximum Number", maxNumberInArray);
