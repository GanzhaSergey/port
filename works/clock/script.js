let alarmTime, timeFormat;
let time12 = document.querySelector('#time12');
let time24 = document.querySelector('#time24');
let time_buttons = document.querySelector('.time_buttons');

function showTime() {
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var session = "AM";

    if (timeFormat == 12) {
        if (h == 0) h = 12;
        if (h > 12) {
            h = h - 12;
            session = "PM";
        }
    }
    if (timeFormat == 24) session = '';

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    let time = h + ":" + m + ":" + s + session;
    document.getElementById ("clock").innerText = time;
    document.getElementById ("clock").innerContent = time;

    setTimeout(showTime, 1000)
}
   
    time12.addEventListener('click', function () {
        time12.classList.add('time_buttons_active');
        time24.classList.remove('time_buttons_active');
        timeFormat = 12;
    });
    time24.addEventListener('click', function () {
        time12.classList.remove('time_buttons_active');
        time24.classList.add('time_buttons_active');
        timeFormat = 24;

    });

    showTime();