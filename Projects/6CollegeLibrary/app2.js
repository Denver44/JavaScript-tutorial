class Book {
    constructor(name, author, type) {

        this.name = name;
        this.author = author;
        this.type = type;
    }
}

class Display {
    add(book) {
        console.log("Book Added")
        let tablebody = document.getElementById('tableBody')
        let html = ` <tr>
                        <td>${book.name}</td>
                        <td>${book.author}</td>
                        <td>${book.type}</td>
                    </tr>`;
        tablebody.innerHTML += html;
    }
    clear() {

        let LibraryForm = document.getElementById('libraryForm');
        LibraryForm.reset();
    }

    validate(b1) {

        if (b1.name.length < 2 || b1.author.length < 2) {
            return false;
        } else {
            return true;
        }

    }
    show(type, msg1) {

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

}

let LibraryForm = document.getElementById('libraryForm');
LibraryForm.addEventListener('submit', libaryformsubmit); // at submit button we added the event Listener.

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