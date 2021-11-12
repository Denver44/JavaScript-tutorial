function Book(name, author, type) {
    this.name = name;
    this.author = author;
    this.type = type;
}

function Display() {}


Display.prototype.add = function (b1) {
    console.log("Book Added")
    tablebody = document.getElementById('tableBody')
    let html = ` <tr>
                        <td>${b1.name}</td>
                        <td>${b1.author}</td>
                        <td>${b1.type}</td>
                    </tr>`;
    tablebody.innerHTML += html;

}
Display.prototype.clear = function () {

    let LibraryForm = document.getElementById('libraryForm');
    LibraryForm.reset();
}

Display.prototype.validate = function (b1) {

    if (b1.name.length < 2 || b1.author.length < 2) {
        return false;
    } else {
        return true;
    }

}


Display.prototype.show = function (type, msg1) {

    let msg = document.getElementById('message')

    msg.innerHTML = `  <div class="alert alert-${type} alert-dismissible fade show" role="alert">
            <strong>${msg1}</strong> 
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>`

    setTimeout(() => {
        msg.innerHTML = ''

    }, 2000);

}
let LibraryForm = document.getElementById('libraryForm');
LibraryForm.addEventListener('submit', libaryformsubmit);

function libaryformsubmit(e) {

    let name = document.getElementById('bookName').value;
    let author = document.getElementById('author').value;
    let type;
    let fiction = document.getElementById('fiction');
    let programming = document.getElementById('programming');
    let cooking = document.getElementById('cooking');
    if (fiction.checked) {
        type = fiction.value
    } else if (programming.checked) {
        type = programming.value
    } else if (cooking.checked) {
        type = cooking.value
    }

    let b1 = new Book(name, author, type);
    console.log(b1);
    Display(b1)

    let display = new Display();
    if (display.validate(b1)) {

        display.add(b1);
        display.clear();
        display.show('success', "Successfully added")
    } else {

        display.show('warning', 'Please Fill Correct Details')
    }



    e.preventDefault();

}