// using async and await instead of chaining then()
// still needs error handling with try..catch
const url = 'https://jsonplaceholder.typicode.com/users';

async function getData() {
  try {
    const response = await fetch(url)
    if (!response.ok) throw Error('The fetch no happen bros')
    console.log(response)
    return await response.json()
  } catch (error) {
    console.warn(error.message)
  }

}

getData()