
var press = jQuery.Event("keypress"); 
press.ctrlKey = false;
press.which = 40; // код клавиши, в данном случае — пробел
$("body").trigger(press);  // имитациям


let mute = false, caps = false, shift = false;
let areaLenghts_START, areaLenghts;

    $( ".key" ).click(function() {
        var value = $(this).text();
        $(this).html(value);

        if (value == 'Backspace') {
            var inputString = $('#area').val();
            value = inputString.substr(0,(inputString.length -1));
            $('#area').val('');   
        }
        if (value == 'Enter') value = "\n" ;
        if (value == 'Tab') value = "    " ;
        if (value == 'Ctrl') value = "";
        if (value == 'Caps') {
            value = "";
            switch (caps) {
                case false:
                    caps = true;
                    $('.caps_ind').css("color", "green");
                    $('.symbol').css("text-transform", "uppercase");
                    break;
                case true:
                    caps = false;
                    $('.caps_ind').css("color", "rgb(204, 203, 203)");
                    $('.symbol').css("text-transform", "none");
                    break;
            }
        }
        if (value == 'Shift') {
            value = "";
            areaLenghts_START = $('#area').val().length;
            shift = true;
        }
        if (caps) {value = value.toUpperCase();}
        if (shift) { 
            areaLenghts = $('#area').val().length;
            if (areaLenghts > areaLenghts_START) {
                $('.symbol').css("text-transform", "none");   
                shift = false;
            }
            if (areaLenghts == areaLenghts_START) {     
                    value = value.toUpperCase(); 
                    $('.symbol').css("text-transform", "uppercase");
            }  
        }

        $('#area').val($('#area').val() + value); 
        $('.counter').text($('#area').val().length);
        if (mute == false) sound();
    });

    $("#clear").click(function() {
        $('#area').val('');
    });

    $('#area').keyup(function() { 
        $('.counter').text($('#area').val().length);
    });

document.querySelector('.sound').addEventListener("click", function () {
    switch (mute) {
        case true:
            mute = false;
            document.querySelector('.sound').innerHTML = '<i class="fa-solid fa-volume-high"></i>';        
            break;
        case false:
            mute = true;
            document.querySelector('.sound').innerHTML = '<i class="fas fa-volume-mute"></i>';
            break;   
    }
});

function sound() {
    var audio = new Audio(); // Создаём новый элемент Audio
        audio.src = 'click.mp3'; // Указываем путь к звуку "клика"
        audio.autoplay = true; // Автоматически запускаемv
}


