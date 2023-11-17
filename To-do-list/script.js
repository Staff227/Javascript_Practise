let myArray = ["Razak", "Mustapha", "Rashid"];

render();

function render() {
    let array = "";
    let myArrayIndex;

    for (let i = 0; i < myArray.length; i++) {
        myArrayIndex = myArray[i];

        let html = `<p>${myArrayIndex}</p>`;

        array += html;
    }
    document.querySelector(".display").innerHTML = array;
}

function addToList() {
    let input = document.querySelector(".input");

    myArray.push(input.value);

    console.log(myArray);

    input.value = "";

    render();
}

console.log(myArray);