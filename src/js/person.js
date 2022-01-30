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
