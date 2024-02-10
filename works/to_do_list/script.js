
let listContainer = document.querySelector('.task-list');
let addButton = document.querySelector('.button');
let input = document.querySelector('#inpTask');


function butClick() {
    if (input.value === '') alert('Please fill in the tasks field');
    else {
    let li = document.createElement("li");
    li.innerHTML = input.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
    }
    input.value = '';
    saveData();
};

listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("check");
        saveData();
}
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}
function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}

document.addEventListener( 'keyup', event => {
    if( event.code === 'Enter' || event.code === 'NumpadEnter') butClick();
  });

addButton.addEventListener( "click" , butClick);

showTask();
