let mobil = [
  {
    nama: "Avanza",
    brand: "Toyota",
    machine: "DOHC",
    cc: 1500,
  },
  {
    nama: "Supra",
    brand: "Toyota",
    machine: "V8",
    cc: 5000,
  },
  {
    nama: "Ertiga",
    brand: "Suzuki",
    machine: "DOHC",
    cc: 1550,
  },
];

// for in
// let print = (data) => {
//   for (let i in data) {
//     console.log(
//       `${parseInt(i) + 1}. ${data[i].brand} ${data[i].nama} with ${
//         data[i].machine
//       } ${data[i].cc} `
//     );
//   }
// };
// print(mobil);

// // looping destructuring
// let print2 = (data) => {
//   for (i = 0; i < data.length; i++) {
//     let { nama, brand, machine, cc } = data[i];
//     console.log(`${i + 1}. ${brand} ${nama} with ${machine} ${cc}`);
//   }
// };
// print2(mobil);

// callback function
let print3 = (data, cbfn) => {
  let hasil = "";
  for (i = 0; i < data.length; i++) {
    let { nama, brand, machine, cc } = data[i];
    if (!cbfn) {
      hasil += `${i + 1}. ${brand} ${nama} with ${machine} ${cc}\n`;
    } else if (cbfn(data[i])) {
      hasil += `${i + 1}. ${brand} ${nama} with ${machine} ${cc}`;
      break;
    }
  }
  return hasil;
};
console.log(print3(mobil, (obj) => obj.nama == "Ertiga"));
