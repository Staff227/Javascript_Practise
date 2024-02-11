const url = 'https://jsonplaceholder.typicode.com/users';



function getData() {
  fetch(url)
    .then(response => {
      !response.ok && Promise.reject(new Error("The fetch was not sucessful"))
      return response.json()
    })
    .then(data => {
      console.log(data);
    })
    .catch(err => {
      console.log(err.message);
    })
}

getData()


