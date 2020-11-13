window.onload = () => {



    
    const taskListContainer =  document.querySelector('[data-tasks__lists]');
    const tasksNewListForm = document.querySelector('[data-tasks__new-lists-form]');
    const tasksNewListInput = document.querySelector('[data-tasks__new-lists-input]');
    const deleteListButton = document.querySelector('[data-delete-list-button]')

    const listDisplayContainer = document.querySelector('[data-list-display-container]')
    const listTitleElement = document.querySelector('[data-list-title]')
    const listCountElement = document.querySelector('[data-list-count]')
    const tasksContainer = document.querySelector('[data-tasks]')
    const taskTemplate = document.getElementById('task-template')
    const newTaskForm = document.querySelector('[data-new-task-form]')
    const newTaskInput = document.querySelector('[data-new-task-input]')
    const clearCompleteTasksButton = document.querySelector('[data-clear-complete-tasks-button]')



    
    const  LOCAL_STORAGE_TASKS_LIST_KEY = 'tasks.list';
    const  LOCAL_STORAGE_SELECTED_TASKS_LIST_ID_KEY = 'tasks.selectedlistID';
    let tasksLists = JSON.parse(localStorage.getItem(LOCAL_STORAGE_TASKS_LIST_KEY)) || [];
    let selectedTasksListId = localStorage.getItem(LOCAL_STORAGE_SELECTED_TASKS_LIST_ID_KEY);


    taskListContainer.addEventListener('click', e =>{
        if (e.target.tagName.toLowerCase() === 'li' ){
            selectedTasksListId = e.target.dataset.tasksListID
            saveAndRender()
        }
    })  
    
    tasksContainer.addEventListener('click', e => {
        if (e.target.tagName.toLowerCase() === 'input') {
            const selectedTasksList = tasksLists.find(tasksList => tasksList.id === selectedTasksListId)
            const selectedTask = selectedTasksList.tasks.find(task => task.id === e.target.id)
            selectedTask.complete = e.target.checked
            save()
            renderTaskCount(selectedTasksList)
        }

    })

    tasksNewListForm.addEventListener('submit', e => {
        e.preventDefault();
        const tasksListName = tasksNewListInput.value;
        if (tasksListName == null || tasksListName === '' ) return;
        const tasksList = createTasksList(tasksListName);
        tasksNewListInput.value = null;
        tasksLists.push(tasksList);
        saveAndRender();
    });

    newTaskForm.addEventListener('submit', e => {
        e.preventDefault();
        const taskName = newTaskInput.value;
        if (taskName == null || taskName === '' ) return;
        const task = createTask(taskName);
        newTaskInput.value = null;
        const selectedTasksList = tasksLists.find(tasksList => tasksList.id === selectedTasksListId)
        selectedTasksList.tasks.push(task)
        saveAndRender();
    });

    deleteListButton.addEventListener('click', e => {
        tasksLists = tasksLists.filter(tasksList => tasksList.id !== selectedTasksListId)
        selectedTasksListId = null
        saveAndRender()
    })

    clearCompleteTasksButton.addEventListener('click', e =>  {
        const selectedTasksList = tasksLists.find(tasksList => tasksList.id === selectedTasksListId)
        selectedTasksList.tasks = selectedTasksList.tasks.filter(task => !task.complete)
        saveAndRender()
    })

    function createTasksList(name) {
      return {id: Date.now().toString(), name: name, tasks: [] };
    }


    function createTask(name) {
        return {id: Date.now().toString(), name: name, complete: false };

    }

    function save() {
        localStorage.setItem(LOCAL_STORAGE_TASKS_LIST_KEY, JSON.stringify(tasksLists));
        localStorage.setItem(LOCAL_STORAGE_SELECTED_TASKS_LIST_ID_KEY, selectedTasksListId)
    }


    function saveAndRender() {
        save();
        render();
    }


    function render() {
        clearElement(taskListContainer);
        renderLists();

        const selectedTasksList = tasksLists.find(tasksList => tasksList.id === selectedTasksListId)
        if (selectedTasksListId == null) {
          listDisplayContainer.style.display = 'none'  
        } else  {
          listDisplayContainer.style.display = ''
          listTitleElement.innerText = selectedTasksList.name
          renderTaskCount(selectedTasksList)
          clearElement(tasksContainer)
          renderTasks(selectedTasksList)
        }
        
    }

    function renderTasks(selectedTasksList) {
        selectedTasksList.tasks.forEach(task => {
            const taskElement = document.importNode(taskTemplate.content, true) //without true its only going to take the top level element
            const checkbox = taskElement.querySelector('input')
            checkbox.id = task.id
            checkbox.checked = task.complete
            const label = taskElement.querySelector('label')
            label.htmlFor = task.id
            label.append(task.name)
            tasksContainer.appendChild(taskElement)
        })


    }

    function renderTaskCount(selectedTasksList){
        const incompleteTaskCount = selectedTasksList.tasks.filter(task => !task.complete).length
        const taskString = incompleteTaskCount == 1 ? 'task' : 'tasks'
        listCountElement.innerText = `${incompleteTaskCount} ${taskString} remaining `
    } 

    function renderLists() {
        tasksLists.forEach(tasksList => {
            const tasksListElement = document.createElement('li'); //creates a list item
            tasksListElement.dataset.tasksListID = tasksList.id; //sets the id on lists item
            tasksListElement.classList.add("tasks__list-item");
            tasksListElement.innerText = tasksList.name;
            if (tasksList.id === selectedTasksListId) { 
            tasksListElement.classList.add('tasks__list-item--active')
            } 
            taskListContainer.appendChild(tasksListElement);

        });
    }

    function clearElement(element) { 
        while (element.firstChild) { 
          element.firstChild.remove();
        }
    }

    render();


    
}

