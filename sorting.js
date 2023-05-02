//I can use either array destructuring or a temp variable to swap. Here I used swap because then it'll be universal across all languages and probably help me in solving other DSA problems.

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
      let temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }
  }
  return arr;
}

function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let temp = array[i];
    for (var j = i - 1; array[j] > temp && j > -1; j--) {
      array[j + 1] = array[j];
    }
    array[j + 1] = temp;
  }
  return array;
}

function merge(array1, array2) {
  let combined = [];
  let i = 0;
  let j = 0;
  while (i < array1.length && j < array2.length) {
    if (array1[i] < array2[j]) {
      combined.push(array1[i]);
      i++;
    } else {
      combined.push(array2[j]);
      j++;
    }
  }
  while (i < array1.length) {
    combined.push(array1[i]);
    i++;
  }
  while (j < array2.length) {
    combined.push(array2[j]);
    j++;
  }
  return combined;
}

function mergeSort(arr) {
  if (arr.length === 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);
  return merge(mergeSort(left), mergeSort(right));
}

//later replace the desc
console.log(mergeSort([23, 54, 1, 2, 78, 44, 33, 55, 66, 21]));
// console.log(insertionSort([4, 2, 6, 5, 1, 3]));
