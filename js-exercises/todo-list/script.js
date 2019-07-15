var text = document.getElementById("text");
var btn = document.getElementById("button");
var ul = document.querySelector("ul");

function CreateListItem() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(text.value));
    
    var delBtn = document.createElement("button");
    delBtn.appendChild(document.createTextNode("Delete"));
    delBtn.style.margin = "0 15px";
    li.appendChild(delBtn);

    ul.appendChild(li);
    text.value = "";
}

function AddItemByEnter(event) {
    // If the text input is not empty and the ENTER key was pressed
    if (text.value.length > 0 && event.keyCode == 13) {
        CreateListItem();
    }
}

function AddItemByClick() {
    if (text.value.length > 0) {
        CreateListItem();
    }
}

function ModifyListItem(event) {
    var tag = event.target;

    if (tag.nodeName === "BUTTON") {
        tag.parentElement.remove();
    } else if (tag.nodeName === "LI"){
        tag.classList.toggle("done");
    }
}

text.addEventListener("keypress", AddItemByEnter);
btn.addEventListener("click", AddItemByClick);
ul.addEventListener("click", ModifyListItem);