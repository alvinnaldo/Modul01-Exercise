// Check whether date is weekend
const isWeekend = (date) => {
  let weekend = date.getDay();
  if (weekend === 0 || weekend === 6) {
    return `Tanggal ${date.toLocaleDateString("id")} adalah weekend`;
  } else {
    return `Tanggal ${date.toLocaleDateString("id")} bukan weekend`;
  }
};
console.log(isWeekend(new Date("22 Nov 2022")));

// Find GCD (FPB) of two numbers (use while)
const gcd = (numA, numB) => {
  let sameFactorList = [];
  let i = 1;
  let j = 1;
  while (i <= numA) {
    while (j <= numB) {
      if (numA % i === 0 && numB % j === 0 && numA % j === 0) {
        sameFactorList.push(j);
      }
      j++;
    }
    i++;
  }
  return `FPB dari ${numA} & ${numB} adalah ${Math.max(...sameFactorList)}`;
};
console.log(gcd(12, 60));

// Find LCM (KPK) of two numbers (use do while)
const lcm = (numA, numB) => {
  let result = 0;
  let condition = true;
  let resultA = [];
  let resultB = [];
  let i = 1;
  let j = 1;
  do {
    resultA.push(numA * i);
    resultB.push(numB * j);
    i++;
    j++;
    if (numA <= numB) {
      // apabila input terbalik
      if (resultA.findIndex((e) => resultB.includes(e)) !== -1) {
        result = resultA[resultA.length - 1];
        condition = false;
      }
    } else {
      if (resultB.findIndex((e) => resultA.includes(e)) !== -1) {
        result = resultB[resultB.length - 1];
        condition = false;
      }
    }
  } while (condition);
  return `KPK dari ${numA} & ${numB} adalah ${result}`;
};
console.log(lcm(5, 12));

// Find most common character from a string
const common = (str) => {
  let maxCount = 0;
  let maxLetter = "";
  let letterCount = {};
  let counter = 0;
  for (i = 0; i < str.length; i++) {
    if (Object.keys(letterCount).includes(str[i])) {
      continue;
    }
    for (j = 0; j < str.length; j++) {
      if (str[i] == str[j]) {
        counter++;
      }
    }
    letterCount[str[i]] = counter;
    counter = 0;
  }
  maxCount = Math.max(...Object.values(letterCount));
  maxLetter = Object.keys(letterCount).find(
    (key) => letterCount[key] === maxCount
  );
  return `Huruf yang paling sering dari kata "${str}" adalah "${maxLetter}" yaitu sebanyak ${maxCount} kali`;
};
console.log(common("purwadhika"));

// Sort string alphabetically (with sort)
const sortAlp = (str) => {
  return `${str} --> ${str.split("").sort().join("")}`;
};
console.log(sortAlp("bdfsaae"));

// Sort string alphabetically (without sort)
const withoutSortAlp = (str) => {
  let arrStr = str.split("");
  for (i = 0; i < arrStr.length; i++) {
    for (j = i + 1; j < arrStr.length; j++) {
      if (arrStr[i] > arrStr[j]) {
        [arrStr[i], arrStr[j]] = [arrStr[j], arrStr[i]];
      }
    }
  }
  return `${str} --> ${arrStr.join("")}`;
};
console.log(withoutSortAlp("bdfsaae"));

// Get minimum date from array of dates
const minDate = (arr) => {
  let dateArr = arr.map((element) => {
    return element.getDate();
  });
  return `Minimum date from ${arr.map((e) =>
    e.toLocaleDateString("id")
  )} is ${Math.min(...dateArr)}`;
};
console.log(
  minDate([
    new Date("20 Nov 2022"),
    new Date("21 Nov 2022"),
    new Date("22 Nov 2022"),
  ])
);

// Sum of all elements of two-dimensional array
const sum2D = (arr) => {
  let sum = 0;
  let result = [];
  for (i = 0; i < arr.length; i++) {
    for (let value of arr[i]) {
      sum += value;
    }
    result.push(sum);
    sum = 0;
  }
  return result;
};
console.log(
  sum2D([
    [2, 3],
    [6, 7],
    [9, 11],
  ])
);

// Find the longest common prefix
const prefix = (arr) => {
  let arrResult = [];
  let result = "";
  let shortestLength = Math.min(...arr.map((e) => e.length));
  let shortestIdx = arr.map((e) => e.length).indexOf(shortestLength);
  for (i = 0; i < arr.length; i++) {
    if (i === shortestIdx) {
      continue;
    }
    for (j = 0; j < shortestLength; j++) {
      if (arr[i][j] === arr[shortestIdx][j]) {
        result += arr[i][j];
      }
    }
    arrResult.push(result);
    result = "";
  }

  let arrResultShortest = Math.min(...arrResult.map((e) => e.length));
  result = arrResult.find((e) => e.length == arrResultShortest);

  if (!result) {
    return `There is no common prefix in ${arr}`;
  } else {
    return `The longest common prefix of ${arr} --> ${result}`;
  }
};
console.log(prefix(["bertingkah", "bertemu", "berteriak", "bertengkar"]));

// Copies the first half of array with odd number
const copyHalf = (arr) => {
  let result = [];
  let firstHalf = Math.ceil(arr.length / 2);
  for (i = 0; i < firstHalf; i++) {
    if (arr[i] % 2 !== 0) {
      result.push(arr[i]);
    }
  }
  return result;
};
console.log(copyHalf([1, 2, 3, 4, 5, 6, 7, 8, 9]));

// Get the number of days in a month
const numberDays = (month, year) => {
  let result = 0;
  if (month % 2 !== 0) {
    result = 31;
  } else {
    result = 30;
    if (month == 8) {
      result = 31;
    }
    if (month == 2) {
      result = 28;
      if (year % 4 == 0 || year % 400 == 0) {
        result = 29;
      }
      if (year % 400 !== 0 && year % 100 == 0) {
        result = 28;
      }
    }
  }
  return `Bulan ${month} tahun ${year} memiliki ${result} hari`;
};
console.log(numberDays(2, 2000));

// Number of days passed since beginning of year
const daysPassed = (date) => {
  let currentYear = new Date(date).getFullYear();
  let beginTime = new Date(currentYear, 0, 1).getTime();
  let currentTime = new Date(date).getTime();
  let result = (currentTime - beginTime) / (1000 * 60 * 60 * 24);
  return `Sejak awal tahun hingga tanggal ${new Date(date).toLocaleDateString(
    "id"
  )} sudah ${result + 1} hari terlewati`; // ditambah 1 karena awal tahun dihitung dari sehari sebelum tanggal 1
};
console.log(daysPassed("23 Apr 2022"));

// Calculate age
const calcAge = (date) => {
  let yearNow = new Date().getFullYear();
  let yearDate = new Date(date).getFullYear();
  let result = yearNow - yearDate;
  return `Tanggal lahir ${new Date(date).toLocaleDateString(
    "id"
  )} berumur ${result} tahun`;
};
console.log(calcAge("23 April 1999"));
