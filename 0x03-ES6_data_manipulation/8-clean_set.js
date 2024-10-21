export default function cleanSet (mySet, str) {
  let newItem = '';
  if (str.length !== 0) {
    const iter = mySet.values();
    for (let i = 0; i < mySet.size; i++) {
      const cur = iter.next().value;
      if (cur.startsWith(str)) {
        newItem += cur.split(str)[1];
        /* if (i !== (mySet.size)) {
          newItem += '-';
        } */
      }
      console.log(newItem);
    }
    /* for (const item of mySet) {
      if ((item.startsWith(str))) {
        newItem += item.split(str)[1];
        if (!(Array.from(mySet).pop())) {
          newItem += '-';
        }
      }
    }
    return newItem; */
  }
  return newItem;
}
