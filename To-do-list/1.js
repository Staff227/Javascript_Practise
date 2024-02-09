
let todoList = [{
    todo: 'Weeding the grass',
    date: '2021-13-08'
}]



function renderTodo() {
    let render = document.querySelector('.render');
    let html = '';
    for (let i = 0; i < todoList.length; i++) {
        html += `
        <div class="todoContainer"><span class="task">${todoList[i].todo}</span>
        <span class="date">${todoList[i].date}</span>
        <button class="closeButton" onclick="removeTodo(${i});">X</button></div>`
    }



    console.log(todoList);

    render.innerHTML = html;
}

function addTodo() {
    let todoValue = document.querySelector('.todoInput').value;
    let dateValue = document.querySelector('.dateInput').value;


    todoList.push({
        todo: `${todoValue}`,
        date: `${dateValue}`
    });

    console.log(todoList);
    renderTodo();

    todoInput.value = '';
    dateInput.value = '';

}


function removeTodo(index) {
    todoList.splice(index, 1);
    renderTodo();
}