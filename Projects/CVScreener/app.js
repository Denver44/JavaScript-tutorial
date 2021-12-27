console.log("This is my index.js");
// Data is an array of objects which contains information about the candidates
const data = [{
        name: 'Harshil Patel',
        age: 18,
        city: 'Kolkata',
        language: 'Python',
        framework: 'Django',
        image: 'https://randomuser.me/api/portraits/men/51.jpg'
    },

    {
        name: 'Jay Rajput',
        age: 28,
        city: 'Bangalore',
        language: 'JavaScript',
        framework: 'Angular',
        image: 'https://randomuser.me/api/portraits/men/1.jpg'
    },

    {
        name: 'Camella Cabello',
        age: 18,
        city: 'Kolkata',
        language: 'Python',
        framework: 'Django',
        image: 'https://randomuser.me/api/portraits/women/55.jpg'
    },

    {
        name: 'Kriti Sanon',
        age: 45,
        city: 'Mumbai',
        language: 'Python',
        framework: 'Flask',
        image: 'https://randomuser.me/api/portraits/women/57.jpg'
    },

    {
        name: 'Rohit Sharma',
        age: 34,
        city: 'Jharkhand',
        language: 'Go',
        framework: 'Go Framework',
        image: 'https://randomuser.me/api/portraits/men/61.jpg'
    }
]



function CVitertators(data) {

    let len = 0;

    return {
        next: function () {

            return (len < data.length) ? {
                value: data[len++],
                done: false
            } : {
                done: true
            }

        }
    }

}

const candidates = CVitertators(data);
c = candidates.next().value

let image = document.getElementById('image');
let profile = document.getElementById('profile');
image.innerHTML = `<img src='${c.image}'>`;
profile.innerHTML = `<ul class="list-group">
        <li class="list-group-item">Name: ${c.name}</li>
        <li class="list-group-item">${c.age} years old</li>
        <li class="list-group-item">Lives in ${c.city}</li>
        <li class="list-group-item">Primarily works on ${c.language}</li>
        <li class="list-group-item">Uses ${c.framework} framework</li>
        </ul>`





const nextbtn = document.getElementById('next');
nextbtn.addEventListener('click', nextCV);

function nextCV() {

    const currentCandidate = candidates.next().value;
    let image = document.getElementById('image');
    let profile = document.getElementById('profile');
    if (currentCandidate != undefined) {

        image.innerHTML = `<img src='${currentCandidate.image}'>`;
        profile.innerHTML = `<ul class="list-group">
        <li class="list-group-item">Name: ${currentCandidate.name}</li>
        <li class="list-group-item">${currentCandidate.age} years old</li>
        <li class="list-group-item">Lives in ${currentCandidate.city}</li>
        <li class="list-group-item">Primarily works on ${currentCandidate.language}</li>
        <li class="list-group-item">Uses ${currentCandidate.framework} framework</li>
        </ul>`
    } else {
        alert('End Of Application');
        window.location.reload(); // this relaod the page.
    }

}