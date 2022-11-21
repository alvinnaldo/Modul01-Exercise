// Format penamaan file testing : <filename>.test.js, <filename>.spec.js

const { multiple, add } = require("./DAY12-EXERCISE-ALVIN NALDO");

// test('title_testing', ()=> {
//     //write testing code
//     expect(fungsi_test).keywordMatching();
// })

// KEYWORD MATCHING :
// .toBe(value) : cek apakah output yang diberikan sesuai dengan value yang diharapkan (untuk tipe data primitif)
// .toEqual(value) : cek apakah output yang diberikan sesuai dengan value yang diharapkan (untuk tipe data non-primitif)

// Running testing file from terminal : jest --config=config.json <file.test>
// Sebaiknya gunakan test() untuk masing-masing untuk setiap value yang di test

test("Test function", () => {
  expect(add(7, 8)).toBe(15);
  expect(add(9, 5)).toBe(14);
  expect(add(8, 8)).toBe(16);
  expect(add(9, 11)).toBe(20);
  expect(multiple(3, 5)).toBe(15);
});
