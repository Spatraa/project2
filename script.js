document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form data
    var cname = document.getElementById('cname').value;
    var desc = document.getElementById('desc').value;

    // Display form data with tick and delete buttons in the todo section
    var todoItemString = `
        <div class="todoItem">
            <span> ${cname}</span>
            <span> ${desc}</span>
            <button type="button" class="tickButton">✔️</button>
            <button type="button" class="deleteButton">❌</button>
        </div>
    `;

    // Append todo item to the todoList div
    document.getElementById('todoList').innerHTML += todoItemString;

    // Clear the form
    document.getElementById('cname').value = '';
    document.getElementById('desc').value = '';
});

// Event delegation for dynamically added buttons
document.addEventListener('click', function(event) {
    var target = event.target;

    // Handle delete button click
    if (target.classList.contains('deleteButton')) {
        target.parentElement.remove();
    }

    // Handle tick button click
    if (target.classList.contains('tickButton')) {
        var todoItem = target.parentElement;
        
        // Remove both tick and delete buttons
        todoItem.querySelector('.tickButton').remove();
        todoItem.querySelector('.deleteButton').remove();

        // Move item to the doneList
        document.getElementById('doneList').appendChild(todoItem);
    }
});
