localStorage.getItem('theArray');
let myArray = [
    {
        task: 'weeding the back yard',
        dueDate: '2022-10-22'
    }, {
        task: 'roasting github repo',
        dueDate: '2020-12-24'
    }];
let todo = 0;
let display = document.querySelector('.todo-display');
let close = document.querySelector('.close');

renderTodo();



function renderTodo() {

    let todoObject = '';
    myArray.forEach((value, i) => {
        let { task, dueDate } = value;
        let index = value;
        let html = `
        <div class="html_wrapper">
        <button class="close" onclick="
        myArray.splice(${i}, 1);
        renderTodo();
        ">X</button>
        <p><span>${index.task}</span> <span>${index.dueDate}</span> </p>
        </div>`;
        todoObject += html;
    });
    /* for (let i = 0; i < myArray.length; i++) {

    } */
    console.log(todoObject);
    console.log(myArray);
    display.innerHTML = todoObject;

}





function addToDo() {
    let input = document.querySelector('.input');
    let date = document.querySelector('.date');
    let inputText = input.value;

    myArray.push({
        task: inputText,
        dueDate: date.value
    });
    input.value = '';
    renderTodo();
    localStorage.setItem('theArray', JSON.stringify(myArray));
}



