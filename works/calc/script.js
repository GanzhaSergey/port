let a = ''; //first number
let b = ''; //second number
let sing = '';
let finish = false;

const digit = ['0','1','2','3','4','5','6','7','8','9','.'];
const action = ['-','+','*','/'];

const out = document.querySelector('.screen p');

function clearAll () {
    a = '';
    b = '';
    sing = '';
    finish = false;
    out.textContent = 0; 
}

document.querySelector('.ac').onclick = clearAll;

document.querySelector('.buttons').onclick = (event) => {
    if(!event.target.classList.contains('btn')) return;
    if(event.target.classList.contains('ac')) return;

    out.textContent = '';

    const key = event.target.textContent;
    
    // press 0-9 or .
    if(digit.includes(key)) {
        if (b === '' && sing === '') {
            a += key;
           
            out.textContent = a;
            }
        else if (a!=='' && b!=='' && finish) {
                b = key;
                finish = false;
                out.textContent = b;
            }
        else {
            b += key;
            out.textContent = b;
        }
        return;
    }

    // press + - * / 
    if (action.includes(key)) {
        sing = key;
        out.textContent = sing;
        return;
    }
    // press =
    if (key === '=') {
        if (b ==='') b = a;
        switch (sing) {
            case "+":
                a = (+a) + (+b);
                break; 
            case "-":
                a = a - b;
                break; 
            case "*":
                a = a * b;
                break; 
            case "+":
                a = (+a) + (+b);
                break; 
            case "/":
                if (b === '0') {
                    out.textContent = 'Error';
                    a = '';
                    b = '';
                    sing = '';
                    return;
                }
                a = a / b;
                break; 
        }
        finish = true;
        out.textContent = a;
    }
}

document.addEventListener('keydown', event => {
    const item = document.querySelector(`[data-button="b${event.key}"]`);
    if (item) butClick(item);
});

function butClick(event) {
    const key = event.outerText;
    
    // press 0-9 or .
    if(digit.includes(key)) {
        if (b === '' && sing === '') {
            a += key;
           
            out.textContent = a;
            }
        else if (a!=='' && b!=='' && finish) {
                b = key;
                finish = false;
                out.textContent = b;
            }
        else {
            b += key;
            out.textContent = b;
        }
        return;
    }

    // press + - * / 
    if (action.includes(key)) {
        sing = key;
        out.textContent = sing;
        return;
    }
    // press =
    if (key === '=') {
        if (b ==='') b = a;
        switch (sing) {
            case "+":
                a = (+a) + (+b);
                break; 
            case "-":
                a = a - b;
                break; 
            case "*":
                a = a * b;
                break; 
            case "+":
                a = (+a) + (+b);
                break; 
            case "/":
                if (b === '0') {
                    out.textContent = 'Error';
                    a = '';
                    b = '';
                    sing = '';
                    return;
                }
                a = a / b;
                break; 
        }
        finish = true;
        out.textContent = a;
    }
}
