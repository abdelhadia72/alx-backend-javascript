export default class HolbertonCourse {
  constructor(name, length, students) {
    if (
      typeof name === 'string'
      && typeof length === 'number'
      && students instanceof Array
    ) {
      this._name = name;
      this._length = length;
      this._students = students;
    } else {
      console.log('Not a valid data !');
    }
  }

  // name
  get name() {
    return this._name;
  }

  set name(value) {
    if (typeof value === 'string') {
      this._name = value;
    } else {
      throw new TypeError('Name must be a string');
    }
  }

  // length
  get length() {
    return this._length;
  }

  set length(value) {
    if (typeof value === 'number') {
      this._length = value;
    } else {
      throw new TypeError('Length must be a number');
    }
  }

  // students
  get students() {
    return this._students;
  }

  set students(value) {
    if (value instanceof Array) {
      this._students = value;
    } else {
      throw new TypeError('Students must be an Array');
    }
  }
}
