//Assuming that the array is already sorted
function binarySearch(arr, ele) {
  let firstIndex = 0;
  let lastIndex = arr.length - 1;
  while (lastIndex >= firstIndex) {
    const midIndex = Math.floor((lastIndex + firstIndex) / 2);
    if (ele < arr[midIndex]) {
      lastIndex = midIndex - 1;
    } else if (ele > arr[midIndex]) {
      firstIndex = midIndex + 1;
    } else {
      return midIndex;
    }
  }
  return undefined;
}

function bubbleSort(arr) {
  let swapCounter;
  for (let i = 0; i < arr.length; i++) {
    swapCounter = 0;
    // Last i elements are already in place
    for (let j = 0; j < arr.length - i - 1; j++) {
      swapCounter++;
      // Swap adjacent elements if they are in the wrong order
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
    if (swapCounter === 0) {
      return arr;
    }
  }
  return arr;
}

function selectionSort(arr) {
  let minIndex;
  for (let i = 0; i < arr.length - 1; i++) {
    minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j;
      }
    }

    //because no need to swap if i and min are equal
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }
  return arr;
}

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    for (let j = i; j > 0; j--) {
      if (arr[j] < arr[j - 1]) {
        [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
      } else {
        break;
      }
    }
  }
  return arr;
}

function mergeSort() {}

console.log(insertionSort([23, 54, 1, 2, 78, 44, 33, 55, 66, 21]));
