/* Create a function named cleanSet that returns a string of all
 * the set values that start with a specific string (startString).
 * It accepts two arguments: a set (Set) and a startString (String).
 * hen a value starts with startString you only append the rest of the string.
 * The string contains all the values of the set separated by -.
 * */

export default function cleanSet(mySet, str) {
	if (!mySet && !str)
		return '';
  const newItem = [];
  if (str.length !== 0) {
    const iter = mySet.values();
    for (let i = 0; i < mySet.size; i += 1) {
      const item = iter.next().value;
      if (typeof item === 'string' && item.startsWith(str)) {
        newItem.push(item.split(str)[1]);
      }
    }
  }
  return newItem.join('-');
}
