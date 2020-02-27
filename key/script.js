var list = document.getElementById('list');
var gomb = document.getElementById('gomb');
var todoObj = document.getElementById('todo');
gomb.onclick = function() {
    addItem();
};

todoObj.onkeydown = function(key) {
    if(key.which==13) {
            addItem();
    }
}

function addItem() {
    var todo = todoObj.value;
    var item = document.createElement('li');
    var str = "<input type='checkbox'>";

    item.appendChild(document.createTextNode(todo));
    list.appendChild(item);
    todoObj.value="";
    console.log(list.childNodes.length);
}
