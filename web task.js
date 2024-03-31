window.onload = function(){
    var btn = document.getElementById("btnAdd");
    btn.onclick = AddtoDo
    };
function AddtoDo(){
    var myinput = document.getElementById("myinput").value;
    var todos = document.getElementById("todos");
    var newtextnods = document.createTextNode(myinput);
    var newLi = document.createElement("li");
    newLi.appendChild(newtextnods);
    todos.appendChild(newLi);

}
function handleDelete(a){
    var tag = a.target;
    var li = tag.parentNode;
    li.parentNode.removeChild(li);
}