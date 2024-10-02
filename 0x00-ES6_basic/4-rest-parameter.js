export default function returnHowManyArguments(...nums) {
  let total = 0;
  // eslint-disable-next-line no-unused-vars, no-shadow
  for (const num of nums) {
    total += 1;
  }
  return total;
}
