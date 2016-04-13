console.log("list open");

var todoFunction = document.getElementById('addBtn').addEventListener('click', function(e){
  var newItem = document.createElement('li');
     newItem.id= "newList";
  var task = document.getElementById("item").value;
      if (task === '') {
      alert("No item to add");
      return false;
    }
  newItem.innerHTML = task;
  var box = document.createElement('input');
  box.type = "checkbox";
  box.id= "check";
document.getElementById('todo').appendChild(newItem);
document.getElementById('todo').appendChild(box);
  var del = document.createElement("input");
    del.type = "button";
    del.id="remove";
    document.getElementById('todo').appendChild(del);
document.getElementById('item').value = '';
document.getElementById('item').focus();
console.log('clicked');
});

// var move = document.getElementById('check').addEventListener("click", function (event){
//   var toMove = document.getElementById('newList');
//   toMove.appendChild("done");
// });




