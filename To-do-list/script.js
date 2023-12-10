let Array = [];
let todo = 0;
let display = document.querySelector('.todo-display');
let close = document.querySelector('.close');





function renderTodo() {

    let todoHtml = '';

    for (let i = 0; i < Array.length; i++) {
        let index = Array[i];
        let html = `<div class="html_wrapper">
        <button class="close" onclick="
        
        ">X</button>
        <p>${index}</p>
        </div>`;
        todoHtml += html;
    }
    display.innerHTML = todoHtml;

}

function clear() {
    for (let i = 0; i < Array.length; i++) {
        let index = Array[i];


    }
}





function addToDo() {
    let input = document.querySelector('.input');
    let inputText = input.value;

    Array.push(inputText);
    input.value = '';
    renderTodo();


}