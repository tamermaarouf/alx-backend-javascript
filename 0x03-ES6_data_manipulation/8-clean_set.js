export default function cleanSet (mySet, str) {
  let newItem = '';
  if (str.length !== 0) {
    for (const item of mySet) {
      if ((item.startsWith(str))) {
        newItem += item.split(str)[1];
        newItem += '-';
      }
    }
  }
  return newItem;
}
