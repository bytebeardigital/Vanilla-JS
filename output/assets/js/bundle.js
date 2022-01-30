//function to handle successful fetch of the api data
// GET Request.
fetch("https://my-json-server.typicode.com/bytebeardigital/vanilla-js/db") // Handle success
.then(response => response.json()) // convert to json
.then(json => console.log(json)) //print data to console
.catch(err => console.log("Request Failed", err)); // Catch errors

fetchingData();

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