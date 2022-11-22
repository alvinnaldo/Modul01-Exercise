class Queue {
  #file = [];

  execute() {
    let i = 0;
    while (i < this.#file.length) {
      let time = Math.floor(Math.random() * (10000 - 1000) + 1000); // Math.random * (max-min) + min
      let executePromise = new Promise((resolve, reject) => {
        let count = 0;
        while (count < 100) {
          count++;
        }
        if (count === 100) {
          resolve(`Queue ${i + 1} --> ${this.#file[i]} Done in ${time} ms ✅`);
        } else {
          reject(`Queue ${i + 1} --> ${this.#file[i]} Failed ❌`);
        }
      });
      executePromise
        .then((result) => {
          setTimeout(() => {
            console.log(result);
            this.deQueue();
          }, time);
        })
        .catch((err) => console.log(err));
      i++;
    }
  }

  enQueue(item) {
    this.#file.push(item);
  }

  deQueue() {
    this.#file.shift();
  }

  print() {
    console.log("All data in the queue :");
    let i = 0;
    while (i < this.#file.length) {
      console.log(`${i + 1}. ${this.#file[i]}`);
      i++;
    }
  }

  printAfterProcess() {
    setTimeout(() => this.print(), 11000);
  }
}

let queue = new Queue();
queue.enQueue("Ayam Goreng");
queue.enQueue("Spaghetti");
queue.enQueue("Sate Padang");
queue.enQueue("Soto Ayam");
queue.enQueue("Kari Ayam");
queue.print();
queue.execute();
// queue.printAfterProcess(); // untuk cek apakah queue sudah kosong
