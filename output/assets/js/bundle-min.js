function getFinances(n){let e={...n},o=e.dashboard;"finances"==typeof o&&console.log("money here"),console.log(e),console.log(o)}fetch("https://my-json-server.typicode.com/bytebeardigital/vanilla-js/db").then(function(n){return n.json()}).then(function(n){getFinances(n)}).catch(function(n){console.log(n)});class Person{constructor(n,e,o){this.fname=n,this.lname=e,this.profession=o}get fullname(){return this.fname+"-"+this.lname}get position(){return"Position: "+this.profession}}const person=new Person("Bryanna","Gardner","Front-End Developer");document.getElementById("name").innerHTML=person.fname+" "+person.lname,document.getElementById("position").innerHTML=person.position;