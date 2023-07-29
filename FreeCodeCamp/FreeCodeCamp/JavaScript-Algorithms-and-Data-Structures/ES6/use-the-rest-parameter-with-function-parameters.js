// const sum = (x, y, z) => {

// const sum = (... i) => {
// const sum = (x, y, z) => {
const sum = (...args) => {
  // const args = [x, y, z, ...];
  // const args = (x, y, z);
  // const args = (x, y, z) => {}
  // const args = [sum => ...];
  let total = 0;
  // for (let i = 0; i < sum.length; i++) {
  for (let i = 0; i < args.length; i++) {
    // total += i[i];
    // total += [i];
    total += args[i];
  }
  return total;
}
// }}
console.log(sum(1,2,3)) // To see what I am doing