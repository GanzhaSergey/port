document.querySelector('.last_resault').innerHTML = "Last: " + localStorage.getItem('last_point');
document.querySelector('.max_resault').innerHTML = "Max: " + localStorage.getItem('max_point');

let field = document.createElement('div');
document.body.appendChild(field);
field.classList.add('field');

for (let i = 1; i < 101; i++) {
    let excel = document.createElement('div');
    field.appendChild(excel);
    excel.classList.add('excel');
}


let excel = document.getElementsByClassName('excel');
let x = 1, y = 10;

    for (let i = 0; i < excel.length; i++) {
        if (x > 10) {
            x = 1;
            y--;
        }
        excel[i].setAttribute('posX',x);
        excel[i].setAttribute('posY',y);
        x++;
    }

function generateSnake() {
    let posX = Math.round(Math.random() * (10-3) + 3);
    let posY = Math.round(Math.random() * (10-1) + 1);
    return[posX,posY]; 
}

let cordinates = generateSnake();
let snakeBody = [document.querySelector('[posX = "' + cordinates[0] + '"][posY = "' + 
cordinates[1] + '"]'), document.querySelector('[posX = "' + (cordinates[0]-1) + '"][posY = "' 
+ cordinates[1] + '"]'),document.querySelector('[posX = "' + (cordinates[0]-2) + '"][posY = "' + cordinates[1] + '"]')];


for (let i = 0; i < snakeBody.length; i++) {
    snakeBody[i].classList.add('snakeBody');
}
snakeBody[0].classList.add('snakeHead');

let mouse;

    function createMouse() {
        function generateMouse() {
            let posX = Math.round(Math.random() * (10-3) + 3);
            let posY = Math.round(Math.random() * (10-1) + 1);
            return[posX,posY]; 
        }

        let mouseCoordinates = generateMouse();
        mouse = document.querySelector('[posX = "' + mouseCoordinates[0] + '"][posY = "' + 
        mouseCoordinates[1] + '"]');
    
    while (mouse.classList.contains('snakeBody')) {
        let mouseCoordinates = generateMouse();
        mouse = document.querySelector('[posX = "' + mouseCoordinates[0] + '"][posY = "' + 
        mouseCoordinates[1] + '"]');
    }
    mouse.classList.add('mouse');
}
createMouse();
let direction = 'right';
let steps = false;

// let input = document.createElement('input');
let input = document.querySelector('.point_now');
// document.body.appendChild(input);
let score = 0;
input.value = 'Now: ' + score;

function move() {
    let snakeCoordinates = [snakeBody[0].getAttribute('posX'), snakeBody[0].getAttribute('posY')];
    snakeBody[0].classList.remove('snakeHead');
    snakeBody[snakeBody.length - 1].classList.remove('snakeBody');
    snakeBody.pop();

   if (direction == 'right') {
        if (snakeCoordinates[0] < 10) {
        snakeBody.unshift(document.querySelector('[posX = "' + (+snakeCoordinates[0] + 1) + '"][posY = "' + snakeCoordinates[1] + '"]'));
        } else {
            snakeBody.unshift(document.querySelector('[posX = "1"][posY = "' + snakeCoordinates[1] + '"]'));
        }
    } else if (direction == 'left') {
        if (snakeCoordinates[0] > 1) {
        snakeBody.unshift(document.querySelector('[posX = "' + (+snakeCoordinates[0] - 1) + '"][posY = "' + 
        snakeCoordinates[1] + '"]'));
        } else {
            snakeBody.unshift(document.querySelector('[posX = "10"][posY = "' + 
            snakeCoordinates[1] + '"]'));
                }
    } else if (direction == 'up') {
        if (snakeCoordinates[1] < 10) {
        snakeBody.unshift(document.querySelector('[posX = "' + snakeCoordinates[0] + '"][posY = "' + (+snakeCoordinates[1]+1) + '"]'));
        } else {
            snakeBody.unshift(document.querySelector('[posX = "' + snakeCoordinates[0] + '"][posY = "1"]'));
                }
    } else if (direction == 'down') {
        if (snakeCoordinates[1] > 1) {
        snakeBody.unshift(document.querySelector('[posX = "' + snakeCoordinates[0] + '"][posY = "' + (+snakeCoordinates[1]-1) + '"]'));
        } else {
            snakeBody.unshift(document.querySelector('[posX = "' + snakeCoordinates[0] + '"][posY = "10"]'));
                }
    }
    
    if (snakeBody[0].getAttribute('posX') == mouse.getAttribute('posX')  && snakeBody[0].getAttribute('posY') == mouse.getAttribute('posY')) {
        mouse.classList.remove('mouse');
        let a = snakeBody[snakeBody.length - 1].getAttribute('posX');
        let b = snakeBody[snakeBody.length - 1].getAttribute('posY');
        snakeBody.push(document.querySelector('[posX = "' + a + '"][posY = "' + b + '"]'));
        createMouse();
        score++;
        input.value = 'Now points: ' + score;
    }
        if (snakeBody[0].classList.contains('snakeBody')) {
            // alert('Game Over, our points: ' + score);
            localStorage.setItem('last_point', score);
            
            if (localStorage.getItem('max_point') < score) localStorage.setItem('max_point', score);
            clearInterval(interval);
            let refresh = confirm("Game Over, our points: " + score + "!!!  Restart game?");
            if (refresh) location.reload(); 
        }
    
    snakeBody[0].classList.add('snakeHead');
    for (let i = 0; i < snakeBody.length; i++) {
        snakeBody[i].classList.add('snakeBody');
    }
    steps = true;
}

let interval = setInterval(move, 400);

window.addEventListener('keydown', function (e) {
   if (steps == true) {
        if (e.keyCode == 37 && direction != 'right') {
            direction = 'left';
            steps = false;
        } else if (e.keyCode == 38 && direction != 'down') {
            direction = 'up';
            steps = false;
        } else if (e.keyCode == 39 && direction != 'left') {
            direction = 'right';
            steps = false;
        } else if (e.keyCode == 40 && direction != 'up') {
            direction = 'down';
            steps = false;
        }
    }
       
});

document.querySelector('.field').focus();