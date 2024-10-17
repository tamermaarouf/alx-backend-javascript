export class HolbertonClass {
  constructor(year, location) {
    this.year = year;
    this.location = location;
  }

  get year() { return this._year; }

  set year(setYear) { this._year = setYear; }

  get location() { return this._location; }

  set location(setLoc) { this._location = setLoc; }
}

export class StudentHolberton {
  constructor(firstName, lastName, holbertonClass) {
    this.firstName = firstName;
    this.lastName = lastName;
    this._holbertonClass = holbertonClass;
  }

  get firstName() { return this._firstName; }

  set firstName(fName) { this._firstName = fName; }

  get lastName() { return this._lastName; }

  set lastName(lName) { this._lastName = lName; }

  get fullName() { return `${this._firstName} ${this._lastName}`; }

  get holbertonClass() {
    return this._holbertonClass;
  }

  set holbertonClass(setHol) { this._holbertonClass = setHol; }

  get fullStudentDescription() {
    return `${this._firstName} ${this._lastName} - ${this._holbertonClass.year} - ${this._holbertonClass.location}`;
  }
}

const class2019 = new HolbertonClass(2019, 'San Francisco');
const class2020 = new HolbertonClass(2020, 'San Francisco');
const student1 = new StudentHolberton('Guillaume', 'Salva', class2020);
const student2 = new StudentHolberton('John', 'Doe', class2020);
const student3 = new StudentHolberton('Albert', 'Clinton', class2019);
const student4 = new StudentHolberton('Donald', 'Bush', class2019);
const student5 = new StudentHolberton('Jason', 'Sandler', class2019);
export const listOfStudents = [student1, student2, student3, student4, student5];
