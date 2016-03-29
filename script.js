console.log("list open");

function createNewItem(list){
  var listItems = document.createElement("li");
  listItems.innerText = "task";

  list.appendChild(listItems);
}


var newItem =document.getElementById('addBtn');
newItem.onclick= function(){
console.log("clicked");
createNewItem(document.getElementById("items"));
};
