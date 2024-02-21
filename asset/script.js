
let item = document.getElementsByClassName("list");
let finish = document.getElementById("finish");
let todo = document.getElementById("todo");

for(list of item){
    list.addEventListener("dragstart", (e) => {
        let selected = e.target;

        finish.addEventListener("dragover", (e) => {
            e.preventDefault();
        });
        finish.addEventListener("drop", (e) => {
            finish.appendChild(selected);
            selected = null;
        });

        todo.addEventListener("dragover", (e) => {
            e.preventDefault();
        });
        todo.addEventListener("drop", (e) => {
            todo.appendChild(selected);
            selected = null;
        });
    })
}


