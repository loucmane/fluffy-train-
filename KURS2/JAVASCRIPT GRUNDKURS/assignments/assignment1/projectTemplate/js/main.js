
window.onload = () => {
    
    const tasksContainer =  document.querySelector('[data-tasks__lists]')
    const tasksNewListForm = document.querySelector('[data-tasks__new-lists-form]')
    const tasksNewListInput = document.querySelector('[data-tasks__new-lists-input]')
    
    let tasksLists = []  


    tasksNewListForm.addEventListener('submit', e => {
        e.preventDefault()
        const tasksListName = tasksNewListInput.value
        if (tasksListName == null || tasksListName === '' ) return
        const tasksList = createTasksList(tasksListName)
        tasksNewListInput.value = null
        tasksLists.push(tasksList)
        render()
    })


    function createTasksList(name) {
      return {id: Date.now().toString(), name: name, tasks: []}
    }




    function render() {
        clearElement(tasksContainer)
        tasksLists.forEach(tasksList => {
            const tasksListElement = document.createElement('li'); //creates a list item
            tasksListElement.dataset.tasksListID = tasksList.id //sets the id on lists item
            tasksListElement.classList.add("tasks__list-item");
            tasksListElement.innerText = tasksList.name;
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

