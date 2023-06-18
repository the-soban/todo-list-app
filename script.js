const inputField = document.querySelector(".search-field");
const listBox = document.querySelector(".list-box");
const searchBtn = document.querySelector(".search-btn");

showData();

searchBtn.addEventListener('click', () => {
    if(inputField.value == ''){
        alert('Please add a Task first');
    } else{
        let listItem = document.createElement("li");
        listItem.innerHTML = inputField.value;
        listItem.classList.add('list-item');
        listBox.appendChild(listItem);
        let tickIcon = document.createElement("span");
        tickIcon.classList.add('tick-icon');
        listItem.appendChild(tickIcon);
    }
    inputField.value = '';
    saveData();
});

listBox.addEventListener('click', (e) => {
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    } else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
});

function saveData(){
    localStorage.setItem("taskData", listBox.innerHTML);
}

function showData(){
    listBox.innerHTML = localStorage.getItem("taskData");
}