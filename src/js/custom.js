//function to handle successful fetch of the api data

// GET Request.
fetch("https://my-json-server.typicode.com/bytebeardigital/vanilla-js/db")
  // Handle success
  .then((response) => response.json()) // convert to json
  .then((json) => console.log(json)) //print data to console
  .catch((err) => console.log("Request Failed", err)); // Catch errors

fetchingData();
