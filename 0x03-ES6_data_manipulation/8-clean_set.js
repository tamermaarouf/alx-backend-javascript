/* Create a function named cleanSet that returns a string of all
 * the set values that start with a specific string (startString).
 * It accepts two arguments: a set (Set) and a startString (String).
 * hen a value starts with startString you only append the rest of the string.
 * The string contains all the values of the set separated by -.
 * */

export default function cleanSet(mySet, str) {
  const newItem = [];
  if ((!mySet) || (!str) || !(mySet instanceof Set)
|| (typeof str !== 'string') || (str.length === 0)) {
    return (newItem.join(''));
  }
  const values = mySet.values();
  for (const value of values) {
  	console.log(value.substring(str.length))
    if (typeof value === 'string' && value.startsWith(str)) newItem.push(value.substring(str.length));
  }
  return (newItem.join('-'));
}
