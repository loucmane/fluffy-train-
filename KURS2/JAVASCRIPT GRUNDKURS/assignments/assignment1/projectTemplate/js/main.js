

    
    const tasksContainer =  document.querySelector('[data-tasks__lists]');
    const tasksNewListForm = document.querySelector('[data-tasks__new-lists-form]');
    const tasksNewListInput = document.querySelector('[data-tasks__new-lists-input]');
    
    const  LOCAL_STORAGE_TASKS_LIST_KEY = 'tasks.list';
    let tasksLists = JSON.parse(localStorage.getItem(LOCAL_STORAGE_TASKS_LIST_KEY)) || [];


    tasksNewListForm.addEventListener('submit', e => {
        e.preventDefault();
        const tasksListName = tasksNewListInput.value;
        if (tasksListName == null || tasksListName === '' ) return;
        const tasksList = createTasksList(tasksListName);
        tasksNewListInput.value = null;
        tasksLists.push(tasksList);
        saveAndRender();
    });


    function createTasksList(name) {
      return {id: Date.now().toString(), name: name, tasks: [] };
    }

    function saveTasksList () {
        localStorage.setItem(LOCAL_STORAGE_TASKS_LIST_KEY, JSON.stringify(tasksLists));
    }


    function saveAndRender() {
        saveTasksList();
        render();
    }


    function render() {
        clearElement(tasksContainer);
        tasksLists.forEach(tasksList => {
            const tasksListElement = document.createElement('li'); //creates a list item
            tasksListElement.dataset.tasksListID = tasksList.id; //sets the id on lists item
            tasksListElement.classList.add("tasks__list-item");
            tasksListElement.innerText = tasksList.name;
            tasksContainer.appendChild(tasksListElement);

        });
    }

    function clearElement(element) {
        while (element.firstchild) {
            element.removeChild(element.firstchild);
        }
    }

    render();


