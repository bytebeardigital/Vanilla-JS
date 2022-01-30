//function to handle successful fetch of the api data

// GET Request.
fetch("https://my-json-server.typicode.com/bytebeardigital/vanilla-js/db")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    // getDumpData(data);
    getFinances(data);
    // return data;
  })
  .catch(function (err) {
    console.log(err);
  });

function getFinances(data) {
  let startData = { ...data };
  let moneyData = startData.dashboard;
  if (typeof moneyData == "finances") {
    console.log("money here");
  }

  console.log(startData);
  console.log(moneyData);
}
