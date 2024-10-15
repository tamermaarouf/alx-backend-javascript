/**
 * 2. A Course, Getters, and Setters
 */

export default class HolbertonCourse {
/**
 * Implement a class named HolbertonCourse:
 * Constructor attributes:
 * name (String)
 * length (Number)
 * students (array of Strings)
 * Make sure to verify the type of attributes during object creation
 * Each attribute must be stored in an “underscore” attribute version (ex: name is stored in _name)
 * Implement a getter and setter for each attribute.
 */
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  get name() { return this._name; }

  set name(setName) {
    if (typeof setName !== 'string') { throw new TypeError('Name must be a string'); }
    this._name = setName;
  }

  set length(setLength) {
    if (typeof setLength !== 'number') { throw new TypeError('Length must be a number'); }
    this._length = setLength;
  }

  get length() { return this._length; }

  get students() { return this._students; }

  set students(setStudents) {
    if (!(setStudents instanceof Array)) { throw new TypeError(''); }
    this._student = setStudents;
  }
}
