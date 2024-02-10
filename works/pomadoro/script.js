    var type = 'work';
    var workTime = 1500;
    var restTime = 300;
    var work_period = 0;
    var rest_period = 0;

function timer (seconds, tick, result) {
	if (seconds > 0) {
		tick(seconds);
		seconds -= 1;
		setTimeout(function () {
			timer(seconds, tick, result);
		}, 1000);

	} else {
		result();
	}

}

function beep()
{ 
    var audio = new Audio(); 
    audio.src = 'timer-bell_m1tycbno.mp3'; 
    for (let i = 0; i < 35; i++) audio.autoplay = true; 
}

$('#start').click(function() {
    if (type == 'work') {
        timer (workTime, function (s) {
        $("#start").prop('disabled', true);
        document.getElementById('timer').innerHTML = Math.floor(s/60) + ':' + s%60;
        }, function () {
            type = 'rest';
            $('#timer').text('Rest time!'); 
            $('#start').text('Start rest');
            beep();
            $("#start").prop('disabled', false);
            work_period++;
            $('#work_period').text('Work period:' + work_period);
        })
    }

    if (type == 'rest') {
        timer (restTime, function (s) {
            $("#start").prop('disabled', true);
            document.getElementById('timer').innerHTML = Math.floor(s/60) + ':' + s%60;
        }, function () {
            type = 'work';
            $('#timer').text('Work time!'); 
            $('#start').text('Start work');
            beep();
            $("#start").prop('disabled', false);
            rest_period++;
            $('#rest_period').text('Rest period:' + rest_period);
        })
    }

});

