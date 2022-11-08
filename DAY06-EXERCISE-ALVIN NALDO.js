// Exercise 1

let students = [
  {
    name: "Adi",
    email: "adisucipto@gmail.com",
    age: "10-24-1997",
    score: 79,
  },
  {
    name: "Catherine",
    email: "catherine@gmail.com",
    age: "7-12-1999",
    score: 97,
  },
  {
    name: "Eric",
    email: "ericsubianto@gmail.com",
    age: "4-23-2001",
    score: 88,
  },
];

function calculateScore(arr) {
  let lowestScore = arr[0].score;
  for (i = 1; i < arr.length; i++) {
    if (arr[i].score < lowestScore) {
      lowestScore = arr[i].score;
    }
  }
  let highestScore = arr[0].score;
  for (i = 1; i < arr.length; i++) {
    if (arr[i].score > highestScore) {
      highestScore = arr[i].score;
    }
  }
  let averageScore = 0;
  for (i = 0; i < arr.length; i++) {
    averageScore += arr[i].score;
  }
  averageScore /= arr.length;

  let lowestAge = arr[0].age;
  for (i = 1; i < arr.length; i++) {
    if (arr[i].age < lowestAge) {
      lowestAge = arr[i].age;
    }
  }
  lowestAge = 2022 - new Date(lowestAge).getFullYear();
  let highestAge = arr[0].age;
  for (i = 1; i < arr.length; i++) {
    if (arr[i].age > highestAge) {
      highestAge = arr[i].age;
    }
  }
  highestAge = 2022 - new Date(highestAge).getFullYear();
  let averageAge = 0;
  for (i = 0; i < arr.length; i++) {
    averageAge += 2022 - new Date(arr[i].age).getFullYear();
  }
  averageAge /= arr.length;
  let result = {
    Score: {
      highestScore,
      lowestScore,
      averageScore,
    },
    Age: {
      highestAge,
      lowestAge,
      averageAge,
    },
  };
  return result;
}
console.log(calculateScore(students));

// Exercise 2
class Product {
  constructor(name, price, qty) {
    this.name = name;
    this.price = price;
    this.qty = qty;
  }
}

class Transaction extends Product {
  //   constructor(name, price, qty) {
  //     super(name, price, qty);
  //   }
  total = 0;
  allProducts = [];
  addCart(productObject) {
    this.allProducts.push(productObject);
  }
  showCart() {
    for (i = 0; i < this.allProducts.length; i++) {
      console.log(
        `Name : ${this.allProducts[i].name}, Qty : ${
          this.allProducts[i].qty
        } --> Price : ${this.allProducts[i].qty} X ${
          this.allProducts[i].price
        } = ${this.allProducts[i].qty * this.allProducts[i].price}`
      );
    }
  }
  checkout() {
    console.log("\nTotal Transaction :\n");
    for (i = 0; i < this.allProducts.length; i++) {
      console.log(
        `${this.allProducts[i].qty} X ${this.allProducts[i].name} = ${
          this.allProducts[i].qty * this.allProducts[i].price
        }`
      );
      this.total += this.allProducts[i].qty * this.allProducts[i].price;
    }
    console.log(`<-- Grand Total --> ${this.total}`);
    this.total = 0;
    this.removeCart();
  }
  removeCart() {
    this.allProducts = [];
  }
}

let transaction = new Transaction();
transaction.addCart(new Product("Nutri Sari", 1000, 10));
transaction.addCart(new Product("Kuku Bima", 500, 20));
transaction.addCart(new Product("Adem Sari", 2000, 5));
transaction.showCart();
transaction.checkout();
transaction.showCart(); // mengosongkan cart
