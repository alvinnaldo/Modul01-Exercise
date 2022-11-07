// convert celcius to fahrenheit

let temperatureCelcius = 20;
let temperatureFahrenheit = (temperatureCelcius * 9) / 5 + 32;
console.log(
  `Konversi ${temperatureCelcius} derajat Celcius ke Fahrenheit --> ${temperatureFahrenheit} derajat Fahrenheit`
);

// cek number odd atau even

let number = 7;
if (number % 2 == 0) {
  console.log(`Angka ${number} adalah genap`);
}
console.log(`Angka ${number} adalah ganjil`);

// cek number prime

let prima = true;
let prime = 23;
for (i = 2; i < prime; i++) {
  if (prime % i == 0) {
    prima = false;
  }
}
if (prima == true) {
  console.log(`Angka ${prime} adalah bilangan prima`);
} else {
  console.log(`Angka ${prime} bukan bilangan prima`);
}

// sum of number

let sum = 0;
let numbersum = 7;
for (i = 1; i <= numbersum; i++) {
  sum += i;
}
console.log(`Penjumlahan dari 1 hingga ${numbersum} adalah : ${sum}`);

// factorial

let factorial = 1;
let numberfact = 5;
for (i = 1; i <= numberfact; i++) {
  factorial *= i;
}
console.log(`Factorial dari ${numberfact} adalah ${factorial}`);

// fibonacci

let fibolist = "";
let fibo = 10;
let a = 0;
let b = 1;
let c;

for (i = 1; i <= fibo; i++) {
  fibolist += a + " ";
  c = a + b;
  a = b;
  b = c;
}
console.log(`Menampilkan ${fibo} deret angka Fibonacci : ${fibolist}`);
