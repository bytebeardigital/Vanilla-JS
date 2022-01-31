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
  // lets get the dashboard data;
  let dashboardData = data.dashboard; //lets get the FinanceData

  let financeData = dashboardData.filter(info => info.type == "finances").map(data => {
    return [income, expense] = data.data;
  }); //income information [Array]

  let incomeData = income.income;
  let expenseData = expense.expense; //p element on the board

  var incomeEl = document.getElementById("incomeTotal");
  var expenseEl = document.getElementById("expenseTotal"); // totalIncome element set to 0 instead of null;

  let totalIncome = 0;
  let totalExpenses = 0; // loop through incomeData and add the income_price elements together;

  for (i = 0; i < incomeData.length; i++) {
    totalIncome = incomeData[i].income_price + totalIncome;
  }

  for (i = 0; i < expenseData.length; i++) {
    totalExpenses = expenseData[i].income_price = totalExpenses;
  } // render income_price sum to incomeEl


  incomeEl.innerText = "$" + totalIncome;
  expenseEl.innerText = "$" + totalExpenses;
  console.log(expenseData);
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