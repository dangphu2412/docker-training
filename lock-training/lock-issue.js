function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

let counter = 0;

async function main(val) {
  console.log('Hello');
  const temp = counter;
  await sleep(Math.random() * 1000);
  counter = temp + val;
  console.log('World');
}

Promise.all([
  main(2),
  main(3),
]).then(() => {
  console.log(counter)
})
// Expect to be 5
