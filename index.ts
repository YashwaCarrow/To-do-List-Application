#! /usr/bin/env node

import inquirer from "inquirer"
import promptSync from "prompt-sync"
const prompt = promptSync();
console.log("===========Welcome to y4c5-to-do-list App===================");
console.log("Hope you're doing great,you can always change your plans but only if you have one so make your To-Ddo list today and Embrace your passions.");

let todoos :string[] =[];
let condition = true;
while(condition){
const AddTask = await inquirer.prompt(
     [
        {
            name : "todo",
            message : "what do you want to add in your To Do list?",
            type : "input"
        },
        {
           name : "AddMore",
           message : "Do you want to add more?",
           type : "confirm",
           default : "false"
        }
    ]
);

if (AddTask.todo == ""){
    console.log("Enter a Task into To Do list,to do so select option2");
    break;
}

todoos.push(AddTask.todo);
condition = AddTask.AddMore;
}

let functions = true;
while(functions){
let taskmanager = await inquirer.prompt(
    [
        {
            name:"tasks",
            type:"list",
            message:"Select an option",
            choices:["View List","Add more items in list","Delete item from list","Quit"] 
        }
    ]
)

if(taskmanager.tasks === "View List"){
    for(let item of todoos){
        console.log(todoos.indexOf(item)+1+":"  +item);
    }
    console.log("Here's your To Do list embark on your journey,have fun mate!!!");
}

else if(taskmanager.tasks === "Add more items in list"){
    let input = prompt("Enter your To Do Item here: ");
    todoos.push(input);
    if (input == ""){
        console.log("Invalid data");
        break;
    }
    for(let item of todoos){
        console.log(item)
    }
}
else if(taskmanager.tasks === "Delete item from list"){
    for (let item of todoos){
        console.log(todoos.indexOf(item)+1+":" +item);
    }
    let deleteindex = Number(prompt("Enter the Index number of the item you want to delete: "));
    todoos.splice(deleteindex-1, 1);
    for (let item of todoos){
        console.log("Here is your updated To Do list",todoos.indexOf(item)+1+":" +item);
    }
}    

else {
    console.log("===========Thanks for using y4c5-To-Do List App===============");
    break;
} 
}
