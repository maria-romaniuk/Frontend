let todoList = [
    { id: 1, title: "Shop List", description: "cofee, milk,juice, fruits", isDone: false },
    { id: 2, title: "Made an store", description: "bla, bla ,bla", isDone: false },
    { id: 3, title: "Buy insurence", description: "", isDone: false },
];

const showTodoItems = () => {
    const todoItemsListHtml = document.getElementById('toDoList');

    // Clear the container before displaying new todo items
    todoItemsListHtml.innerHTML = '';

    let toDoItem = '';

    for (const item of todoList) {
        toDoItem += `
        <div class="todoItem">
            <div>
                <h4>${item.title}</h4>
                <p>${item.description}</p>
            </div>
            <button class="deleteToDoItem" data-delete-id="${item.id}">Delete</button>
            <input type="checkbox" class="markAsDone">
        </div>`;
    }
    todoItemsListHtml.innerHTML = toDoItem;

    const deleteToDoBtns = document.getElementsByClassName('deleteToDoItem');
    for (let btn of deleteToDoBtns) {
        btn.addEventListener('click', (e) => {
            const itemId = parseFloat(e.target.dataset.deleteId);
            todoList = deleteTodoItem(itemId);
            showTodoItems();
        })
    }
    const marksAsDone = document.getElementsByClassName('markAsDone');
    for (let checkbox of marksAsDone) {
        checkbox.addEventListener('change', (e) => {
            const checked = e.target.checked;
            const todoItem = e.target.closest('.todoItem');
            const itemId = parseFloat(e.target.dataset.doneId);
            
            if (checked) {
                todoItem.classList.add('done'); 
                
                const updatedTodoList = todoList.map(item => {
                    if (item.id === itemId) {
                        return { ...item, isDone: true };
                    } else {
                        return item;
                    }
                });
                todoList = updatedTodoList;
            } else {
                todoItem.classList.remove('done'); 
               
                const updatedTodoList = todoList.map(item => {
                    if (item.id === itemId) {
                        return { ...item, isDone: false };
                    } else {
                        return item;
                    }
                });
                todoList = updatedTodoList;
            }
        });
    }
}


const deleteTodoItem = (id) => {
    const res = todoList.filter(item => item.id !== id);
    return res;
}

const addTodo = (todoName = '', todoText = '') => {
    const newTodo = { id: Math.random(), title: todoName, description: todoText, isDone: false };
    console.log(newTodo);
    todoList.unshift(newTodo);
    showTodoItems();
}

const addTodoBtn = document.getElementById('addToDoBtn');
const addTodoInput = document.getElementById('addToDoInput');
const addTodoInputText = document.getElementById('addToDoText');
addTodoBtn.addEventListener('click', () => {
    const newTodoName = addTodoInput.value;
    const newTodoText = addToDoText.value;

    //clear
    addTodoInput.value = '';
    addTodoInputText.value = ''; 

    addTodo(newTodoName, newTodoText)
});



showTodoItems();