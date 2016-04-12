console.log("list open");

var todoFunction = document.getElementById('addBtn').addEventListener('click', function(e){
var newItem = document.createElement('li');
var task = document.getElementById("item").value;
 if (task === '') {
  alert("No item to add");
  return false;
 }
var box = document.createElement('input');
box.type = "checkbox";
newItem.innerHTML = task;
document.getElementById('todo').appendChild(newItem);
document.getElementById('todo').appendChild(box);
document.getElementById('item').value = '';
document.getElementById('item').focus();
console.log('clicked');
});






