// Fetch elements from the DOM
const buttons = document.querySelectorAll('.btn');
const ulEl = document.querySelector('.task-list');
const totalCostEl = document.getElementById('total-cost');

// Initialize totalCost to 0
let totalCost = 0;

// Create an empty array
const tasks = [];

// Add event listeners to each task button
buttons.forEach(btn => {
    // Click Event listeners
    btn.addEventListener('click', () => {
        // Fetch task name and cost
        let task = btn.textContent;

        // Split the task variable into taskName and taskCost
        const [taskName, taskCost] = task.split(':');

        // Initialize isPresent (Boolean Flag) to false
        let isPresent = false;

        // For loop to iterate over tasks array
        for(let i = 0; i < tasks.length; i++){
            // Check if current taskName is already present or not
            if(tasks[i].taskName === taskName){
                // If found, set isPresent flag to true
                isPresent = true;
                break;
            }
        }

        // If not found, add task to 'tasks' array
        if(isPresent === false){
            tasks.push({taskName, taskCost});

            // Update total cost
            totalCost += parseInt(taskCost.slice(2));
        }

        // Render task to DOM
        renderTasks();
    })
})


// Render Tasks to DOM
function renderTasks(){
    // Clear UL tag content
    ulEl.innerHTML = '';

    ulEl.innerHTML = `
    <li style="margin: 19px 0">
        <small class="small-text">TASK</small>
        <small class="small-text">TOTAL</small>
    </li>`;

    // Iterate over tasks array and show tasks 
    tasks.forEach(task => {
        ulEl.innerHTML += `
        <li class="task">
            <p>${task.taskName}<small class="smallest-text">Remove</small></p>
            <p><span>$</span>${task.taskCost.slice(2)}</p>
        </li>`;
    })
    
    // Update totalCost value to the DOM
    totalCostEl.textContent = `$${totalCost}`;
}




