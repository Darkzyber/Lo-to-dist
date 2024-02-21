
let item = document.getElementsByClassName("list");
let finish = document.getElementById("finish");
let todo = document.getElementById("todo");

for(list of item){
    list.addEventListener("dragstart", function(e){
        let selected = e.target;

        finish.addEventListener("dragover", function(e){
            e.preventDefault();
        });
        finish.addEventListener("drop", function(e){
            finish.appendChild(selected);
            selected = null;
        });

        todo.addEventListener("dragover", function(e){
            e.preventDefault();
        });
        todo.addEventListener("drop", function(e){
            todo.appendChild(selected);
            selected = null;
        });
    })
}
