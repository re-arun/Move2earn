import axios from "axios";

const options = {method: 'GET', url: 'https://localhost:324/', headers: {title: 'text/json'}};

axios.request(options).then(function (response) {
  console.log(response.data);
}).catch(function (error) {
  console.error(error);
});