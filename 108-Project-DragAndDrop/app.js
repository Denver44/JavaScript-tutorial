console.log("Drag and Drop Utiltiy")

const imagebox = document.querySelector('.imagebox')
const whiteboxes = document.getElementsByClassName('whitebox')


// Adding EventListeners

imagebox.addEventListener('dragstart', (e) => {
    console.log('Dragstart has been triggered');

    e.target.className += ' hold';

    setTimeout(() => {

        e.target.className = 'hide';

    }, 0);



})
imagebox.addEventListener('dragend', (e) => {
    console.log('DragEnd has been triggered');
    e.target.className = 'imagebox'

})

for (whitebox of whiteboxes) {

    whitebox.addEventListener('dragover', (e) => {
        e.preventDefault();
        console.log('Dragover has been triggered');
    })
    whitebox.addEventListener('dragenter', (e) => {
        console.log('Dragenter has been triggered');
        e.target.className += ' dashed'


    })
    whitebox.addEventListener('dragleave', (e) => {
        console.log('Dragleave has been triggered');
        e.target.className = 'whitebox'
    })
    whitebox.addEventListener('drop', (e) => {
        console.log('Drop has been triggered');
        e.target.append(imagebox)
    })
}