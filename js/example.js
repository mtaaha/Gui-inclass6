// ADD NEW ITEM TO END OF LIST

var para = document.createElement("li");
var node = document.createTextNode("cream");
para.appendChild(node);
var element = document.getElementById("page");
element.appendChild(para);

// ADD NEW ITEM START OF LIST

var new_elm = document.createElement("li");
var  new_node= document.createTextNode("kale");
new_elm.appendChild(new_node);
var item = document.getElementsByTagName("ul")[0];
item.insertBefore(new_elm, item.childNodes[0]);

// ADD A CLASS OF COOL TO ALL LIST ITEMS
document.getElementsByTagName("li")[0].setAttribute("class", "cool");
document.getElementsByTagName("li")[1].setAttribute("class", "cool");
document.getElementsByTagName("li")[2].setAttribute("class", "cool");
document.getElementsByTagName("li")[3].setAttribute("class", "cool");
document.getElementsByTagName("li")[4].setAttribute("class", "cool");
document.getElementsByTagName("li")[5].setAttribute("class", "cool");


// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
var number_items = document.getElementsByTagName("li");
var items_length = number_items.length;
document.getElementsByTagName("h2")[0].innerHTML ="Buy groceries " + number_items.length ;
