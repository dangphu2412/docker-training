class SharedLock {
  constructor() {
    this.locker = false;
  }

  async lock() {
    while (this.locker) {
      await new Promise((resolve) => setTimeout(resolve, 100));
    }
    this.locker = true;
  }

  unlock() {
    this.locker = false;
  }
}

const sharedLock = new SharedLock();

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

let counter = 0;

async function main(val) {
  await sharedLock.lock();
  console.log('Hello');
  const temp = counter;
  await sleep(Math.random() * 1000);
  counter = temp + val;
  console.log('World');
  sharedLock.unlock();
}

Promise.all([
  main(2),
  main(3),
]).then(() => {
  console.log(counter)
})
// Expect to be 5
