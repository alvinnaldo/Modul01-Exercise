// Function to get lowest, highest, and average value in array (with sort)

function getResultSort(arr) {
  let result = [];
  let lowest = `Lowest value : ${arr.sort((a, b) => a - b)[0]}`;
  result.push(lowest);
  let highest = `Highest value : ${arr.sort((a, b) => b - a)[0]}`;
  result.push(highest);
  let average = 0;
  for (i = 0; i < arr.length; i++) {
    average += arr[i];
  }
  average = `Average value : ${average / arr.length}`;
  result.push(average);
  return result;
}
console.log(getResultSort([6, 9, 12]));

// Function to get lowest, highest, and average value in array (without sort)

function getResult(arr) {
  let result = [];
  let lowestNumber = arr[0];
  let highestNumber = arr[0];
  let average = 0;
  for (i = 1; i < arr.length; i++) {
    if (arr[i] < lowestNumber) {
      lowestNumber = arr[i];
    }
  }
  for (i = 0; i < arr.length; i++) {
    if (arr[i] > highestNumber) {
      highestNumber = arr[i];
    }
  }
  for (i = 0; i < arr.length; i++) {
    average += arr[i];
  }
  lowestNumber = `Lowest value : ${lowestNumber}`;
  highestNumber = `Highest value : ${highestNumber}`;
  average = `Average value : ${average / arr.length}`;
  result.push(lowestNumber);
  result.push(highestNumber);
  result.push(average);
  return result;
}
console.log(getResult([6, 9, 12]));

// Function concating

function concatString(stringarr) {
  let result = "";
  for (i = 0; i < stringarr.length - 1; i++) {
    result += stringarr[i] + ", ";
  }
  result += "and " + stringarr[stringarr.length - 1];
  return result;
}
console.log(concatString(["Laptop", "PC", "Tablet", "Handphone"]));

// Function Split Copy

function split(kata, separator) {
  let listKata = [];
  let listIndexSpasi = [];
  let x = 0;
  if (separator !== "") {
    for (i = 0; i < kata.length; i++) {
      if (kata[i].includes(separator)) {
        listIndexSpasi.push(i);
      }
    }
    for (i = 0; i <= listIndexSpasi.length; i++) {
      listKata.push(kata.slice(x, listIndexSpasi[i]));
      x = listIndexSpasi[i] + 1; // ditambah 1 karena ada spasi didepan kata kedua
    }
  } else if (separator === "") {
    for (i = 0; i < kata.length; i++) {
      listKata.push(kata[i]);
    }
  }
  return listKata;
}
console.log(split("Hello World Test", "l"));

// Function Calculate each element of two arrays

function calculate(arr1, arr2) {
  let result = [];
  let shorterarr = arr1.length < arr2.length ? arr1.length : arr2.length;
  for (i = 0; i < shorterarr; i++) {
    result.push(arr1[i] + arr2[i]);
  }
  if (arr1.length > arr2.length) {
    for (i = shorterarr; i < arr1.length; i++) {
      result.push(arr1[i]);
    }
  } else if (arr2.length > arr1.length) {
    for (i = shorterarr; i < arr2.length; i++) {
      result.push(arr2[i]);
    }
  }
  return result;
}
console.log(calculate([3, 2, 1], [1, 2, 3, 5, 7]));

// Function add element

function addElement(arr, element) {
  if (!arr.includes(element)) {
    arr.push(element);
  }
  return arr;
}
console.log(addElement(["Hello"], "Hello"));

// Function remove all odd number

function removeOdd(arr) {
  let newArr = [];
  for (i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      if (newArr.includes(arr[i])) {
        // supaya tidak double
        continue;
      }
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
console.log(removeOdd([1, 2, 6, 8, 10, 25, 23, 2]));

module.exports = {
  getResultSort,
  getResult,
  concatString,
  split,
  calculate,
  addElement,
  removeOdd,
};
