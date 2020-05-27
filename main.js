var newNote = document.getElementById('newNote');
var boxlist = document.getElementById('grid');
var filter = document.getElementById('filter');
var code = document.getElementsByClassName('box');

console.log(boxlist.getElementsByTagName('div'));

// Form submit event
newNote.addEventListener('click', addBox);

//delete event
boxlist.addEventListener('click', removeItem);

// Filter event
filter.addEventListener('keyup', filterItems);

// add item
function addBox(e) {
  e.preventDefault();
  var divO = document.createElement('div');
  divO.className = 'box';
  var deleteBtn = document.createElement('button');
  var div1 = document.createElement('div');
  div1.className = 'textareaElement titleNote';
  div1.contentEditable = 'true';
  div1.id = 'TitleNote';
  div1.appendChild(document.createTextNode('Enter Title'));
  var div2 = document.createElement('div');
  div2.className = 'textareaElement titleNote';
  div2.contentEditable = 'true';
  div2.id = 'Bodynote';
  div2.appendChild(document.createTextNode('Note here'));
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
  deleteBtn.appendChild(document.createTextNode('Delete'));
  divO.appendChild(deleteBtn);
  divO.appendChild(div1);
  divO.appendChild(div2);
  boxlist.appendChild(divO);
}

// Remove item
function removeItem(e) {
  if (e.target.classList.contains('delete')) {
    if (confirm('Are You Sure?')) {
      var divO = e.target.parentElement;
      boxlist.removeChild(divO);
    }
  }
}

// Filter items

function filterItems(e) {
  // convert text to lowercase
  var text = e.target.value.toLowerCase();
  // get li's
  var items = boxlist.getElementsByTagName('div');
  // convert to an array
  Array.from(items).forEach(function (item) {
    var itemName = item.textContent;
    if (itemName.toLowerCase().indexOf(text) != -1) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}
