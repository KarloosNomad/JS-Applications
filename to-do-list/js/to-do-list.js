"use strict";

// HTML OBJECTS ------------------------------------------------------------
const input = document.querySelector("#input");
const addTaskButton = document.querySelector("#add-task-button");
const selection = document.querySelector("#selection");
const taskList = document.querySelector("#task-list");


// EVENT TO ADD TASKS ------------------------------------------------------
addTaskButton.addEventListener('click', function () {
    const taskContent = input.value;
    input.value = '';  //clear input after adding task
    taskList.appendChild(addTask(taskContent));
    selectionVisibility();
    input.focus();
})


function addTask(content) {
    const listElement = document.createElement("li");
    const spanElement = document.createElement("span");

    spanElement.setAttribute("id", "task");
    spanElement.textContent = content;

    listElement.appendChild(spanElement);
    listElement.appendChild(showRemoveTaskButton());
    listElement.className = "unaccomplished";

    // EVENT TO MARK ACCOMPLISHED AND UNACCOMPLISHED TASKS ---------------------------
    spanElement.addEventListener("click", function () {
        selection.value = 0;
        if (this.parentNode.className === "unaccomplished") {
            this.parentNode.className = "accomplished";
        } else {
            this.parentNode.className = "unaccomplished";
        }
    })

    return listElement;
}


function showRemoveTaskButton() {
    const removeTaskButton = document.createElement("button");
    removeTaskButton.setAttribute("id", "removeTaskButton");
    removeTaskButton.textContent = "✖";

    // EVENT TO REMOVE TASKS ------------------------------------------------------------
    removeTaskButton.addEventListener("click", function () {
        taskList.removeChild(this.parentNode);
        selectionVisibility();
        input.focus();
    })

    return removeTaskButton;
}


function selectionVisibility() {
    const spanElement = document.querySelector("#task");
    if (spanElement === null) {
        selection.setAttribute("hidden", "hidden");
    } else {
        selection.removeAttribute("hidden");
        selection.value = 0;
    }
}


// EVENT TO SELECT SELECTION'S OPTIONS -------------------------------------------------------
selection.addEventListener("change", function () {
    const arrayTasks = taskList.querySelectorAll("li");
    if (selection.selectedIndex === 1) {
        let select;
        for (select of arrayTasks) {
            select.className = "accomplished";
        }
    }
    else if (selection.selectedIndex === 2) {
        let select;
        for (select of arrayTasks) {
            select.className = "unaccomplished";
        }
    }
    else if (selection.selectedIndex === 3) {
        let button;
        const arrayButton = document.querySelectorAll("#removeTaskButton");
        for (button of arrayButton) {
            button.dispatchEvent(new Event("click")); // all removeTaskButton's will be clicked
        }
    }
})