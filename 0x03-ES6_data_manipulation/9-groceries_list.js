/* Create a function named groceriesList that returns a map of groceries
 with the following items (name, quantity): */
export default function groceriesList() {
  const gList = new Map();
  gList.set('Apples', 10);
  gList.set('Tomatoes', 10);
  gList.set('Pasta', 1);
  gList.set('Rice', 1);
  gList.set('Banana', 5);
  return gList;
}
