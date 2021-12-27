var audio = new Audio('OnlyGodcanjudgeme.mp3');

function ringbell() {

    audio.play();
}

// ringbell();


let submit = document.getElementById('alarmSubmit')

submit.addEventListener('click', setalram)

function setalram(e) {
    e.preventDefault();
    let dateTime = document.getElementById('alarm');
    let settime = new Date(dateTime.value);
    console.log(settime)

    let now = new Date();

    let timetoAlarm = settime - now;
    if (timetoAlarm >= 0) {
        setTimeout(() => {
            ringbell();

        }, timetoAlarm);
    }




}