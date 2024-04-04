#! /usr/bin/env node
import inquirer from "inquirer";
let todos = ["apples", "bananas"];
let condition = true;
while (condition) {
    let choice = await inquirer.prompt([
        {
            "name": "action",
            "type": "list",
            "message": "choose an action",
            "choices": ["Do you want to add a task?",
                "Do you want to remove a task?",
                "Do you want to remove specific task?",
                "Do you want to update a task?",
                "Do you want to read tasks?",
                "Do you want to exit?"]
        }
    ]);
    if (choice.action === "Do you want to add a task?") {
        let addTask = await inquirer.prompt([
            {
                name: "todo",
                type: "input",
                message: "what do you want to add?"
            },
            {
                name: "addMore",
                type: "confirm",
                message: "are you sure... you want to add more?",
                default: "false"
            }
        ]);
        todos.push(addTask.todo);
        condition = addTask.addMore;
        console.log(todos);
        todos.forEach(task => console.log(task));
    }
    else if (choice.action === "Do you want to remove a task?") {
        if (todos.length === 0) {
            console.log("No item left to remove...!!!!");
        }
        else {
            todos.pop();
            console.log("last task remove");
            console.log(todos);
        }
    }
    else if (choice.action === "Do you want to remove specific task?") {
        if (todos.length === 0) {
            console.log("no task left to remove...!!!");
        }
        else {
            let removeTask = await inquirer.prompt([{
                    "name": "indextype",
                    "type": "list",
                    "message": "select a task you want to remove:",
                    "choices": todos
                }]);
            let index = todos.indexOf(removeTask.indextype);
            todos.splice(index, 1);
            console.log("Task has been removed...!!!!");
            console.log(todos);
        }
    }
    else if (choice.action === "Do you want to update a task?") {
        if (todos.length === 0) {
            console.log("No task available to update");
        }
        else {
            let updateTask = await inquirer.prompt([{
                    "name": "taskToupdate",
                    "type": "list",
                    "message": "Select the task you want to update:",
                    "choices": todos
                }, {
                    "name": "updatedTask",
                    "type": "input",
                    "message": "enter the updated task:"
                }]);
            let index = todos.indexOf(updateTask.taskToupdate);
            todos[index] = updateTask.updatedTask;
            console.log("Task has been updated...!!!");
            console.log(todos);
        }
    }
    else if (choice.action === "Do you want to read tasks?") {
        console.log("current tasks:");
        todos.forEach(task => console.log(task));
    }
    else if (choice.action === "Do you want to exit?") {
        console.log("Thanks for editing.!");
        condition = false;
    }
}
