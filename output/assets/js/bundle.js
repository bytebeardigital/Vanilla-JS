function sum(...args) {
  let sum = 0;

  for (let arg of args) sum += arg;

  return sum;
}

let x = sum(11, 12, 13);
document.getElementById("demo").innerHTML = "Sum of 11+12+13 => " + x;

class Person {
  constructor(fname, lname, profession) {
    this.fname = fname;
    this.lname = lname;
    this.profession = profession;
  }

  get fullname() {
    return this.fname + "-" + this.lname;
  }

  get position() {
    return "Position: " + this.profession;
  }

}

const person = new Person("Bryanna", "Gardner", "Front-End Developer");
document.getElementById("name").innerHTML = person.fname + " " + person.lname;
document.getElementById("position").innerHTML = person.position;