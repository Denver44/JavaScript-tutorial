let divElem = document.createElement('div') // Created A div elem
let val = localStorage.getItem('text') // if there is any text in the localstroage then get that

let text;

display()

function display() {
    if (val == '') {
        text = document.createTextNode('HELLO DURGESH EIDT THIS')

    } else {
        text = document.createTextNode(val)

    }
}


//  Attribute and The text node is appended here.

divElem.appendChild(text)
divElem.setAttribute('id', "id1")
divElem.setAttribute('class', "class1")
divElem.setAttribute('style', 'border :2px solid green; height:200px ;width:200px ')

let container = document.querySelector('.conatiner')
let myfirst = document.querySelector('#myfirst')
console.log(heading)
console.log(myfirst)
console.log(divElem)
container.insertBefore(divElem, myfirst)


//  Added EventListener


divElem.addEventListener('click', function () {
    let textarea = document.getElementsByClassName('textarea').length; // this length means if someone click for first time then length will be zero.
    console.log(textarea)
    if (textarea == 0) {
        let html = divElem.innerHTML
        divElem.innerHTML = `<textarea id="textarea" class ="textarea textarea1" rows="10"  style = "margin: 10px"> ${html} </textarea>`

    }
    let textarea1 = document.getElementById('textarea');
    textarea1.addEventListener('blur', function () {
        divElem.innerHTML = textarea1.value;
        localStorage.setItem('text', divElem.innerHTML);
    })



})