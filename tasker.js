const btnCreateTask = document.getElementById("btn-create-task");
const textTask = document.getElementById("text-task");
const container = document.querySelector(".container");
const btnSortAZ = document.getElementById("btn1");
const btnSortZA = document.getElementById("btn2");
const btnImportantOnly = document.getElementById("btn3");
const btnSearch = document.getElementById("btn4");
const btnReset = document.getElementById("btn5");

btnCreateTask.addEventListener("click", function(event){
    event.preventDefault();
    let text = textTask.value.trim();
    if (text === "") return;
    const newTask = document.createElement("div");
    newTask.classList.add("task");
    newTask.innerHTML = `<span>${text}</span>`;
    container.append(newTask);
    textTask.value = "";
});

const btn = document.getElementById("btn");
btn.addEventListener("click", function(){
    let tasks = document.querySelectorAll(".task");
    for (let task of tasks) {
        task.classList.toggle("importent");
    }
});

/* Сортировка по алфавиту A-Z */
function compareAZ(a, b) {
    let textA = a.querySelector("span").innerText.toLowerCase();
    let textB = b.querySelector("span").innerText.toLowerCase();
    return textA.localeCompare(textB);
}

/* Сортировка по алфавиту Z-A */
function compareZA(a, b) {
    let textA = a.querySelector("span").innerText.toLowerCase();
    let textB = b.querySelector("span").innerText.toLowerCase();
    return textB.localeCompare(textA);
}

function sortTasks(compareFunction) {
    let currentTasks = document.querySelectorAll(".task");
    let sortedTasks = Array.from(currentTasks).sort(compareFunction);
    container.innerHTML = "";
    sortedTasks.forEach(task => container.appendChild(task));
}

btnSortAZ.addEventListener("click", () => sortTasks(compareAZ));
btnSortZA.addEventListener("click", () => sortTasks(compareZA));

/* Фильтрация только срочных задач */
btnImportantOnly.addEventListener("click", () => {
    let tasks = document.querySelectorAll(".task");
    tasks.forEach(task => {
        task.style.display = task.classList.contains("importent") ? "block" : "none";
    });
});

/* Поиск по тексту */
btnSearch.addEventListener("click", () => {
    const query = document.getElementById("search-input").value.toLowerCase();
    let tasks = document.querySelectorAll(".task");
    tasks.forEach(task => {
        const text = task.querySelector("span").innerText.toLowerCase();
        task.style.display = text.includes(query) ? "block" : "none";
    });
});

/* Сброс всех фильтров и сортировок */
btnReset.addEventListener("click", () => {
    let tasks = document.querySelectorAll(".task");
    tasks.forEach(task => task.style.display = "block");
    sortTasks(() => 0);
});
