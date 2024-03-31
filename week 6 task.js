console.log("Starting");
function handleBindings(){
    console.log("Handle Bindings");
}
function doBindings(){
    console.log("Do Bindings");
    var btn = document.getElementById("btnAdd");
    btn.onclick = handleBindings; //passing reference
}
window.onload = doBindings;
console.log("Finished");