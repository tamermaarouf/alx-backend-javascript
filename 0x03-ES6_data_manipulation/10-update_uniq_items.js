/**
 * Create a function named updateUniqueItems
 * that returns an updated map for all items with initial quantity at 1.
 * It should accept a map as an argument.
 * The map it accepts for argument is similar to the map you create in the previous task.
 * For each entry of the map where the quantity is 1,
 * update the quantity to 100.
 * If updating the quantity is not possible (argument is not a map)
 * the error Cannot process should be thrown.
 * */

export default function updateUniqueItems(updateMap) {
  if (!(updateMap instanceof Map)) throw new Error('Cannot process');
  updateMap.forEach((value, key) => {
    if (value === 1) updateMap.set(key, 100);
  });
}
