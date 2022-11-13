// Function to check two objects equal

function equal(obj1, obj2) {
  if (obj1 === obj2) {
    return true;
  } else if (obj1 !== obj2) {
    for (let keys in obj1) {
      if (obj1[keys] === obj2[keys]) {
        return true;
      }
      return false;
    }
  }
  return false;
}
let objpertama = { nama: "Alvin" };
let objkedua = { nama: "Alvin" };
console.log(equal(objpertama, objkedua));
console.log(equal(objpertama, objpertama));
console.log(equal(objkedua, objkedua));

// Function intersection

function intersec(obj1, obj2) {
  let intersection = {};
  for (let x in obj1) {
    for (let y in obj2) {
      if (obj1[x] === obj2[y]) {
        intersection[x] = obj1[x];
      }
    }
  }
  return intersection;
}
console.log(intersec({ a: 7, b: 2, c: 3 }, { a: 7, c: 3 }));

// Function combine & remove duplicate data

function combine(arr1, arr2) {
  let result = [];
  for (i = 0; i < arr1.length; i++) {
    let sameobj = result.findIndex((e) => equal(arr1[i], e));
    if (sameobj === -1) {
      // jika findIndex bernilai false berarti tidak ada elemen yang sama
      result.push(arr1[i]);
    }
  }
  for (i = 0; i < arr2.length; i++) {
    let sameobj = result.findIndex((e) => equal(arr2[i], e));
    if (sameobj === -1) {
      result.push(arr2[i]);
    }
  }
  return result;
}
let array1 = [
  { name: "Student 1", email: "student1@mail.com" },
  { name: "Student 2", email: "student2@mail.com" },
];
let array2 = [
  { name: "Student 1", email: "student1@mail.com" },
  { name: "Student 3", email: "student3@mail.com" },
];
console.log(combine(array1, array2));

// Function reverse keys and values

function reversekeys(arr) {
  let result = [];
  let newobj = {};
  for (i = 0; i < arr.length; i++) {
    for (j = 0; j < Object.keys(arr[i]).length; j++) {
      newobj[Object.values(arr[i])[j]] = Object.keys(arr[i])[j];
    }
    result.push(newobj);
    newobj = {};
  }
  return result;
}
let array = [
  { name: "David", age: 20 },
  { name: "Alvin", age: 20 },
];
console.log(reversekeys(array));

// Function factorial recursion

function factorial(num) {
  if (num == 0) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
}
console.log(factorial(5));
