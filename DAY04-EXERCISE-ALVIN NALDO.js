// Triangle Pattern Function

function triangle(height) {
  let pattern = "";
  let k = 1;
  for (i = 1; i <= height; i++) {
    for (j = 1; j <= i; j++) {
      if (k.toString().length == 1) {
        pattern += `0${k} `;
      } else {
        pattern += `${k} `;
      }
      k++;
    }
    pattern += "\n";
  }
  return pattern;
}

console.log(triangle(5));

// FizzBuzz Function

function fizzBuzz(n) {
  let num = "";
  for (i = 1; i <= n; i++) {
    if (i % 15 == 0) {
      num += "FizzBuzz ";
    } else if (i % 3 == 0) {
      num += "Fizz ";
    } else if (i % 5 == 0) {
      num += "Buzz ";
    } else num += i + ", ";
  }
  return num;
}
console.log(fizzBuzz(30));

// Body Mass Index Function

function bmi(weight, height) {
  height = Math.pow(height, 2) * 0.0001;
  let bminumber = weight / height;
  console.log("bmi : " + bminumber);
  if (bminumber > 39.9) {
    return "obesity";
  } else if (bminumber >= 30 && bminumber <= 39.9) {
    return "very overweight";
  } else if (bminumber >= 25 && bminumber <= 29.9) {
    return "overweight";
  } else if (bminumber >= 18.5 && bminumber <= 24.9) {
    return "ideal";
  } else {
    return "less weight";
  }
}
console.log(bmi(80, 180));

// Remove Odd Numbers Function

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

// Split Function Manual

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
    for (i = 0; i < listIndexSpasi.length + 1; i++) {
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
