var audio = new Audio('/Projects/1.AlarmClock/audio/music.mp3');

const dateTime = document.getElementById('alarm');
const submit = document.getElementById('alarmSubmit');

const ringBell = () => audio.play();
const getCurrentTime = () => new Date();

const setAlarm = (e) => {
  e.preventDefault();
  if (dateTime?.value) {
    let setTime = new Date(dateTime.value);
    submit.style.backgroundColor = 'green';
    const timeId = setTimeout(() => {
      ringBell();
    }, setTime - getCurrentTime());
  }
};

submit.addEventListener('click', setAlarm);
