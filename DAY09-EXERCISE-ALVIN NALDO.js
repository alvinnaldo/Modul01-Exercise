/*
    Title : Function to reverse string
    Input : function with one parameter with data type string
    
    Process :   
    1. Split the string into each word using split method
    2. Reverse the string using reverse method
    3. Join the reverse string of array into string using join method
    
    Output : return the reversed string
*/

function reverse(string) {
  return string.split("").reverse().join("");
}

console.log(reverse("hello"));

/*
    Title : Duplicate function map
    Input : function with two parameter --> data type array and a callback function 

    Process :
    1. Create FOR LOOP to loop all the array index
    2. Change each element of the array with the return value from the callback function
    3. Return the modified array
    
    Output : the modified array
*/

function duplicateMap(arr, cbfn) {
  for (i = 0; i < arr.length; i++) {
    arr[i] = cbfn(arr[i], i);
  }
  return arr;
}

console.log(
  duplicateMap(["bulat", "bulat", "bulat", "bulat"], (element) => "persegi")
);
console.log(duplicateMap([1, 3, 5], (element) => element > 3));
console.log(
  duplicateMap(
    ["monyet", "kucing", "anjing", "nyamuk"],
    (element, index) => index + 1 + ". " + element
  )
);

/*
    Title : Duplicate function filter
    Input : function with two parameter --> data type array and a callback function 

    Process :
    1. Create an empty array to store the filtered elements
    2. Create FOR LOOP to loop all the array index
    3. Use conditional IF to check if the return value of the callback function has the same value with the element of the array
    4. If the condition is true, then push the element into empty array, and then return that array
    
    Output : the filtered array
*/

function duplicateFilter(arr, cbfn) {
  let array = [];
  for (i = 0; i < arr.length; i++) {
    if (cbfn(arr[i])) {
      array.push(arr[i]);
    }
  }
  return array;
}

console.log(
  duplicateFilter(
    ["bulat", "persegi", "persegi", "persegi"],
    (element) => element === "persegi"
  )
);
console.log(
  duplicateFilter([1, 3, 6, 7, 9, 11, 17, 18], (element) => element % 2 !== 0)
);

/*
    Title : Duplicate function findIndexOf
    Input : function with two parameter --> data type array and a callback function 

    Process :
    1. Create FOR LOOP to loop all the array index
    2. Use conditional IF to check if the return value of the callback function has the same index with the element in the array
    3. If the condition is TRUE, then return the index and stop the loop
    4. If the loop doesn't return anything (index not found), return -1 as the falsy value
    
    Output : index of the element that we searched
*/

function duplicateFindIndexOf(arr, cbfn) {
  for (i = 0; i < arr.length; i++) {
    if (cbfn(arr[i])) {
      return i;
    }
  }
  return -1;
}
console.log(
  duplicateFindIndexOf(
    ["bulat", "persegi", "segitiga", "silang"],
    (element) => element === "segitiga"
  )
);
