
// let counter = 0;
// function count(){
//     document.querySelector('#task2').innerHTML = counter;
//     counter++;
// }

// setInterval(count,1000);


function deleteTask(index){
    const element = document.getElementById('todo-' + index);
    element.parentElement.removeChild(element);
}

const element = document.createElement("div");
element.innerHTML = "Hey there!";

document.querySelector("body").appendChild(element);