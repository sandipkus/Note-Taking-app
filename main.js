let input = document.getElementById('inputField');
let btn = document.getElementById('addbtn');
let box = document.getElementById('noteBox');

btn = addEventListener('click', function(){
    var paragraph = this.document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    noteBox.style.visibility = "visible";
    paragraph.innerText = inputField.value;
    noteBox.appendChild(paragraph);
    inputField.value = "";
})