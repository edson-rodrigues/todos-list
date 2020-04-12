var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var listaTodos = JSON.parse(localStorage.getItem('list_todos')) || [];

function renderTodos(){
    listElement.innerHTML = '';
    for (todo of listaTodos){
        var itemTodo = document.createElement("li");
        var itemContent = document.createTextNode(todo);

        var linkElement = document.createElement('a');
        var linkText = document.createTextNode('Excluir');

        var itemPos = listaTodos.indexOf(todo); 

        linkElement.appendChild(linkText);

        linkElement.setAttribute('href', '#');

        linkElement.setAttribute('onclick', 'removeTodo(' + itemPos + ')');


        itemTodo.appendChild(itemContent);
        itemTodo.appendChild(linkElement);
        listElement.appendChild(itemTodo);
    }
}

renderTodos();

function addTodo(){
    var todo = inputElement.value;
    listaTodos.push(todo);
    inputElement.value = '';
    renderTodos();
    saveToStorage();
}
buttonElement.onclick = addTodo;

function removeTodo(pos){
    listaTodos.splice(pos, 1);
    renderTodos();
    saveToStorage();
}

function saveToStorage(){
    localStorage.setItem('list_todos', JSON.stringify(listaTodos));
}