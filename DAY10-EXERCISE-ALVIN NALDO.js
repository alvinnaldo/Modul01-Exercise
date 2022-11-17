// Function to convert excel column title to number

function convertExcel(excel) {
  let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let result = 0;
  let x = 1;
  for (i = excel.length - 1; i >= 0; i--) {
    result += x * (alphabet.indexOf(excel[i]) + 1);
    x *= 26;
  }
  return result;
}
console.log(convertExcel("ZZ"));

// Function to filter value that only appear once

function filterOnce(arr) {
  let result = [];
  let check = 0;
  for (i = 0; i < arr.length; i++) {
    for (j = 0; j < arr.length; j++) {
      if (i === j) {
        continue;
      }
      if (arr[i] === arr[j]) {
        check += 1;
      }
    }

    if (check === 0) {
      result.push(arr[i]);
    } else {
      check = 0;
    }
  }
  return result;
}
console.log(filterOnce([4, 1, 2, 1, 2, 3, 7, 4]));

// Function to check if anagram

function isAnagram(str1, str2) {
  let check = 0;
  for (i = 0; i < str1.length; i++) {
    for (j = 0; j < str2.length; j++) {
      if (str1[i] === str2[j]) {
        check += 1;
        break;
      }
    }
  }
  if (check === str1.length) {
    return true;
  }
  return false;
}
console.log(isAnagram("anagram", "nagamar"));
console.log(isAnagram("intel", "telin"));
console.log(isAnagram("intel", "telmi"));

// Function to count how many ways to climb a staircase

function ways(steps) {
  let count = 0;
  if (steps <= 1) {
    count = 1;
  } else {
    count = ways(steps - 1) + ways(steps - 2);
  }
  return count;
}
console.log(ways(9));
