// 1.
function filterAndSortEvenNumbers(arr){
    return arr.filter(num => num % 2 === 0).sort()
}

// 2.
function removeDublicates(arr){
    const result = []
    for (num of arr) {
        if (!result.includes(num)) {
            result.push(num)
        }
    }
    return result;
}

// 3.
function capitalizeFirstLetter(str){
    arr = str.split(' ')
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].charAt(arr[i].length - 1) !== '.') {
            arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1)
        }
    }
    return arr.join(' ')
}


// 4.
const createTask = (taskInput) => {
    const task = {
        id: loadTasksFromLocalStorage().length + 1,
        text: taskInput
    }
    return addTaskToLocalStorage(task)
}

const addTaskToLocalStorage = (task) => {
    if (task.text !== '') {
        const tasks = loadTasksFromLocalStorage()
        tasks.push(task)
        saveTasksToLocalStorage(tasks)
    }
}

const removeTaskFromLocalStorage = (id) => {
    const tasks = loadTasksFromLocalStorage()
    const index = tasks.findIndex(task => task.id === id)
    tasks.splice(index, 1)
    saveTasksToLocalStorage(tasks)
}

const loadTasksFromLocalStorage = () => {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || []
    return tasks
}

const saveTasksToLocalStorage = (tasks) => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
}








 

