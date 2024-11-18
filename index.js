document.getElementById("my-h1").textContent=`Hello World!`;
document.getElementById("my-p1").textContent=`This is the ultimate basics of JavaScript.`;

// Show text by JS
let firstName="Arman";
let age="18";
let isStudent=true;

document.getElementById("my-p2").textContent=`My name is ${firstName}.`;
document.getElementById("my-p3").textContent=`I'm ${age} years old.`;
document.getElementById("my-p4").textContent=`Also a student: ${isStudent}`;

// circle calculator
document.getElementById("my-submit").onclick = function() {
  
  radius= document.getElementById("my-input1").value;
  radius= Number(radius);
  let area = Math.PI * radius * radius;
  let fixedarea = area.toFixed(3);
  document.getElementById("result-area").textContent = `The area of this circle is: ${fixedarea} square units.`
}

// script.js
document.getElementById('addTaskBtn').addEventListener('click', addTask);

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
    
    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    const li = document.createElement('li');
    li.textContent = taskText;

    // Mark task as complete
    li.addEventListener('click', () => {
        li.classList.toggle('completed');
    });

    // Delete task
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', () => {
        li.remove();
    });

    li.appendChild(deleteBtn);
    document.getElementById('taskList').appendChild(li);
    taskInput.value = ''; // Clear input field
}
