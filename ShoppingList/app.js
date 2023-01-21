// Assigning Elements to Variables
var shoppingList = document.getElementById("shoppingList");
var createButton = document.getElementById("createButton");
var countOfItems = 0;
var removeButton = document.getElementById("removeButton");

// Create Element Function
function createItemElement() {
  var itemName = document.getElementsByTagName("input")[0].value;
  var itemPrice = document.getElementsByTagName("input")[1].value;
  var itemCount = document.getElementsByTagName("input")[2].value;

  const node = document.createElement("li");
  let textnode = document.createTextNode(
    `Item: ${itemName} Price:${itemPrice} Quantity:${itemCount}`
  );
  node.id = `item:${countOfItems}`;
  node.appendChild(textnode);
  shoppingList.appendChild(node);
  // count of Items allows to find last item during removal process
  countOfItems++;
}

//Create Element Button
createButton.addEventListener("click", createItemElement);

//Remove Element Function
function removeItemElement() {
  console.log("test");
  node.getElementById(`item: ${countOfItems}`).remove();
  countOfItems--;
}

// Remove ELement Button
removeButton.addEventListener("click", removeItemElement);
