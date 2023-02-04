const addTxt = document.getElementById('addTxt'); // we created a add text to get the element access of textarea were we are writing the note so that we can get the value what we wrote there.
const addTitle = document.getElementById('addTitle');
const addBtn = document.getElementById('addBtn'); // 1. we created a event listeners for the Add note button
const notesDiv = document.getElementById('notes');
const noteMsg = document.getElementById('displayNotes');
const search = document.getElementById('searchTxt');
const noteCards = document.getElementsByClassName('noteCard');

let allNotes = []; // make an array.

const noteTemplate = (title, text, index) => {
  return `<div class="noteCard my-2 mx-2 card" style="width: 18rem;">
  <div class="card-body">
  <h5 class="card-title"> ${title} </h5>
  <p class="card-text">${text}</p>
  <button id = "${index}" onclick ="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>  
  </div>
  </div>`;
};

const showNotes = () => {
  let notes = JSON.parse(localStorage.getItem('notes'));
  notesDiv.innerHTML = '';
  if (notes?.length >= 1) {
    noteMsg.style.display = 'block';
    notes.forEach(function (element, index) {
      const html = noteTemplate(element.title, element.text, index);
      notesDiv.insertAdjacentHTML('afterbegin', html);
    });
  } else {
    noteMsg.style.display = 'none';
    notesDiv.innerHTML = `<h1> Nothing To show! Please add a note </h1>`;
  }
};
showNotes();

addBtn.addEventListener('click', function (e) {
  myCurrNote = {
    title: addTitle.value,
    text: addTxt.value,
  };
  allNotes = [...allNotes, myCurrNote]; // as it array so we are using array function push the value of add.txt in it.
  localStorage.setItem('notes', JSON.stringify(allNotes)); // now to convert the array in Json String object.
  addTxt.value = addTitle.value = ''; // to make it blank the after adding the node
  showNotes();
});

// Note for as we are giving every button an unique id of array index which help us to delete the Node.
// we have us the Onclick = function() .

function deleteNote(index) {
  let notes = localStorage.getItem('notes');
  allNotes = JSON.parse(notes); // We pares it into array and store in allNotes which will be array.
  allNotes.splice(index, 1); // splice
  localStorage.setItem('notes', JSON.stringify(allNotes));
  showNotes();
}

search.addEventListener('input', function (e) {
  e.preventDefault();
  let inputVal = search.value; //.toLowerCase();
  Array.from(noteCards).forEach(function (element) {
    let cardTxt = element.getElementsByTagName('p')[0].innerText; // as only one p tag thats wgy [0]
    if (cardTxt.includes(inputVal)) {
      element.style.display = 'block';
    } else {
      element.style.display = 'none';
    }
  });
});

// OLD VERSION USING INNER HTML PROPERTY TO POPULATE ALL THE NOTES.
// function showNotes() {
//   let notes = JSON.parse(localStorage.getItem('notes'));

//   let notesElm = document.getElementById('notes'); // this notesElm will replace the div class notes.

//   if (notes?.length >= 1) {
//     document.getElementById('displayNotes').style.display = 'block';
//     let html = '';
//     notes.forEach(function (element, index) {
//       html += `<div class="noteCard my-2 mx-2 card" style="width: 18rem;">
//             <div class="card-body">
//             <h5 class="card-title"> ${element.title} </h5>
//             <p class="card-text">${element.text}</p>
//             <button id = "${index}" onclick ="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
//             </div>
//             </div>`;
//     });
//     notesElm.innerHTML = html;
//   } else {
//     document.getElementById('displayNotes').style.display = 'none';
//     notesElm.innerHTML = `<h1> Nothing To show! Use Add note function to add a note </h1>`;
//   }
// }
