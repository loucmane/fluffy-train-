window.onload = () => {

window.onload = () => {
    
    let tasksContainer =  document.querySelector('[data-lists]')
    
    
    
    let tasksLists = [{
        id: 1
        name: 'name'
    }, 'todo']  

    function render() {
        clearElement(tasksContainer)
        tasksLists.forEach(tasksList => {
            const tasksListElement = document.createElement('li');
            tasksListElement.classList.add("tasks__list-item");
            tasksListElement.innerText = tasksList;
            tasksContainer.appendChild(tasksListElement)

        })
    }

    function clearElement(element) {
        while (element.firstchild) {
            element.removeChild(element.firstchild)
        }
    }

render();

}

    
}

