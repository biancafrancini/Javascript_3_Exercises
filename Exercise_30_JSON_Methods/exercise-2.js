class Person {
  constructor(id, firstName, lastName, age) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  toJson() {
    return JSON.stringify(this);
  }

  static fromJson(jsonObj) {
    let jsonObjParse = JSON.parse(jsonObj);
    let newObj = new Person(
      jsonObjParse.id,
      jsonObjParse.firstName,
      jsonObjParse.lastName,
      jsonObjParse.age
    );

    return newObj;
  }
}

const json = '{"id":1,"firstName":"Mario","lastName":"Rossi","age":25}';
const developer = Person.fromJson(json);
console.log(developer);
