//function to handle successful fetch of the api data
// GET Request.
fetch("https://my-json-server.typicode.com/bytebeardigital/vanilla-js/db").then(function (response) {
  return response.json();
}).then(function (data) {
  // getDumpData(data);
  getFinances(data); // return data;
}).catch(function (err) {
  console.log(err);
});

function getFinances(data) {
  let startData = { ...data
  };
  let moneyData = startData.dashboard;

  if (typeof moneyData == "finances") {
    console.log("money here");
  }

  console.log(startData);
  console.log(moneyData);
}

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