console.log("list open");

document.getElementById('addBtn').addEventListener('click', function(e){
var newItem = document.createElement('li');
var task = document.getElementById("item").value;
newItem.innerHTML = task;
document.getElementById('todo').appendChild(newItem);
});




