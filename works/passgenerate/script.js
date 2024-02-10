var numbers = [1,2,3,4,5,6,7,8,9,0];
var lower_case = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','p','q','r','s','t','u','v','w','x','y','z'];
var upper_case = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','P','Q','R','S','T','U','V','W','X','Y','Z']; 
var special_characters = ['!','@','#','$','%','&','*','/'];

document.getElementById('input_range').oninput = function () {
    document.getElementById('length').innerHTML = this.value;
}

document.getElementById('input_quantity').oninput = function () {
    document.getElementById('length_quantity').innerHTML = this.value;
}


document.getElementById('btn').onclick = geteratePass;

function geteratePass() {
    var result = [];
    if (document.getElementById('input_numbers').checked) {
        result = result.concat(numbers); 
    }
    if (document.getElementById('input_lower_case').checked) {
        result = result.concat(lower_case); 
    }
    if (document.getElementById('input_upper_case').checked) {
        result = result.concat(upper_case); 
    }
    if (document.getElementById('input_special_characters').checked) {
        result = result.concat(special_characters); 
    }
    
    result.sort(compareRandom);
    document.getElementById('out').innerHTML = '';

    var passQuantity = parseInt(document.getElementById('input_quantity').value);
    for (var k = 0; k < passQuantity; k++) {
    var pass = '';
    var passLenght = parseInt(document.getElementById('input_range').value);
    for (var i = 0; i < passLenght; i++) {
        pass += result[randomInteger(0,result.length - 1)];
    }

    document.querySelector('#outTitle').innerHTML = 'Generated passwords:';
    document.getElementById('out').innerHTML += pass + ' ';
    }
}

function compareRandom (a,b) {
    return Math.random() - 0.5;
}

function randomInteger (min,max) {
    var rand = min - 0.5 + Math.random() * (max - min + 1)
    rand = Math.round(rand);
    return rand;
}

