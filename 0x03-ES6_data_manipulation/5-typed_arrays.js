/* Create a function named createInt8TypedArray
that returns a new ArrayBuffer with an Int8 value at a specific position.
It should accept three arguments:
length (Number), position (Number), and value (Number).
If adding the value is not possible the error Position outside range should be thrown. */

export default function createInt8TypedArray(length, position, value) {
  if (position >= length) {
    throw new Error('Position outside range');
  }
  const buffer = new ArrayBuffer(length);
  const dv = new DataView(buffer);
  dv.setInt8(position, value);
  return dv;
}
