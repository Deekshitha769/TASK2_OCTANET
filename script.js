const todoList = document.getElementById('todo-list');
const addItemButton = document.getElementById('add-item');
addItemButton.addEventListener('click', () => {
  const newItem = document.createElement('li');
  newItem.innerHTML = '<input type="checkbox"> <input type="text" placeholder="Add a new item">';
  todoList.appendChild(newItem);
});