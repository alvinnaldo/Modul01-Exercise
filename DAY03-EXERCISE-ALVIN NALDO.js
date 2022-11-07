// FizzBuzz

let fizzbuzz = 30;

for (i = 1; i <= fizzbuzz; i++) {
  if (i % 15 == 0) {
    console.log(`${i} --> BizzBuzz`);
  } else if (i % 3 == 0) {
    console.log(`${i} --> Bizz`);
  } else if (i % 5 == 0) {
    console.log(`${i} --> Buzz`);
  }
}

// Multiplication Table

let multiple = 7;
console.log(`Multiplication Table of ${multiple}`);
for (i = 1; i <= 10; i++) {
  console.log(`${multiple} x ${i}`);
}

// Palindrome Check

let kata = "Asal";
let katadibalik = kata
  .toLowerCase()
  .split(" ")
  .join("")
  .split("")
  .reverse()
  .join("");
if (kata.toLowerCase().split(" ").join("") == katadibalik) {
  console.log(`${kata} adalah Palindrome`);
} else {
  console.log(`${kata} bukan Palindrome`);
}

// Convert centimeter to kilometer

let jarak = 10;
let kilo = jarak * 0.00001;
console.log(`Konversi ${jarak} cm ke km = ${kilo} km`);

// Format number to currency cara 1

let number = 1000000;
let local = number.toLocaleString("id");
console.log(`Rp. ${local},00`);

// Format number to currency cara 2

let rupiah = "";

let numberDibalik = number.toString().split("").reverse().join(""); //number dibalik
for (i = 0; i < numberDibalik.length; i++) {
  if (i % 3 == 0) {
    rupiah += numberDibalik.substr(i, 3) + ".";
  }
}
rupiah = rupiah.substr(0, rupiah.length - 1); // menghilangkan titik tambahan di akhir
rupiah = rupiah.split("").reverse().join(""); // dibalik kembali
console.log(`Rp. ${rupiah},00`);

// Remove search string

let string = "Hello World";
let searchString = "rld";
console.log(string.replace(searchString, ""));

// Capitalize first letter of each word

let afterCapitalize = "";
let string1 = "hello world test";
let capitalize = string1.split(" ");
for (i = 0; i < capitalize.length; i++) {
  afterCapitalize +=
    capitalize[i][0].toUpperCase() + capitalize[i].substr(1) + " ";
}
console.log(afterCapitalize);

// Reverse string

let string3 = "Purwadhika";
let reverse = string3.split("").reverse().join("");
console.log(reverse + "\n");

// Vokal dan Konsonan

let listVokal = "";
let listKonsonan = "";
let vokal = "aeiou";
let string4 = "hello world of warcraft";
string5 = string4.toLowerCase().split(" ").join("");

for (i = 0; i < string5.length; i++) {
  if (vokal.includes(string5[i])) {
    if (listVokal.includes(string5[i])) {
      continue;
    }
    listVokal += string5[i];
  } else {
    if (listKonsonan.includes(string5[i])) {
      continue;
    }
    listKonsonan += string5[i];
  }
}
console.log(`Kata : ${string4}`);
console.log(`Kata Vokal : ${listVokal}`);
console.log(`Kata Konsonan : ${listKonsonan}\n`);
