/**
 * Implement a class named HolbertonCourse
 * Constructor attributes
 * name: String
 * length: Number
 * students: array of Strings
 * Make sure to verify the type of attributes during object creation
 * Each attribute must be stored in an “underscore” attribute version (ex: name is stored in _name)
 * Implement a getter and setter for each attribute
 */

export default class HolbertonCourse {
  /**
   * Constructor attributes
   * name: String
   * length: Number
   * students: array of Strings
   */
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  /**
   * Gets the name of this course.
   */
  get name() { return this._name; }

  /**
   * set the name of this course.
   */
  set name(setName) {
    if (typeof setName !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = setName;
  }

  /**
   * Get the length of this course
   */
  get length() { return this._length; }

  /**
   * set the length
   */
  set length(setLength) {
    if (typeof setLength !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = setLength;
  }

  /**
   * Get the student
   */
  get students() { return this._students; }

  /**
   * Sets the names of students in this course.
   */
  set students(setStudents) {
    if (!(setStudents instanceof Array)) {
      throw new TypeError('Students must be an array of strings');
    }
    if (!setStudents.every((student) => typeof student === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    this._student = setStudents;
  }
}
