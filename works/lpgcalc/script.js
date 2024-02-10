document.querySelector(".inp1").onclick = function() {
    document.querySelector("#benzcon").focus();
}

document.querySelector(".inp11").onclick = function() {
    document.querySelector("#benzcon").focus();
}
document.querySelector(".inp2").onclick = function() {
    document.querySelector("#mouthRun").focus();
}

document.querySelector(".inp22").onclick = function() {
    document.querySelector("#mouthRun").focus();
}

document.querySelector(".inp3").onclick = function() {
    document.querySelector("#benzPrice").focus();
}
document.querySelector(".inp33").onclick = function() {
    document.querySelector("#benzPrice").focus();
}

document.querySelector(".inp4").onclick = function() {
    document.querySelector("#gasPrice").focus();
}
document.querySelector(".inp44").onclick = function() {
    document.querySelector("#gasPrice").focus();
}

// document.querySelector("#benzcon").onchange = Res;
// document.querySelector("#mouthRun").onchange = Res;
// document.querySelector("#benzPrice").onchange = Res;
// document.querySelector("#gasPrice").onchange = Res;



$('#res').on('click', function() {
    let benzincons = document.querySelector('#benzcon').value;
    let benzPrice = document.querySelector('#benzPrice').value;
    let gasPrice = document.querySelector('#gasPrice').value;
    let mountRun = document.querySelector('#mouthRun').value;

            if ((benzincons === '') || (benzPrice === '') || (gasPrice === '') | (mountRun === '')) alert("Не заполнено одно из полей!!!");
            else 
            {
                    
                    let gascons = benzincons * 1.1;
                    let benzprice = benzPrice * benzincons;
                    let gasprice = gasPrice * gascons;
                    let econ = benzprice - gasprice;
                    document.querySelector('#pricebenz').innerHTML = "Стоимость 100км на бензине: " + benzprice + " грн.";
                    document.querySelector('#pricegas').innerHTML = "Стоимость 100км на газу: " + gasprice + " грн.";
                    document.querySelector('#econ').innerHTML = "Экономия на 100км составляет: " + econ + " грн.";
                
                    
                    let econMounthBenz = benzprice * (mountRun/100);
                    let econMounthGas = gasprice * (mountRun/100);
                    let econMounth = econMounthBenz - econMounthGas;
                    document.querySelector('#econMounthBenz').innerHTML = "Стоимость месяца на бензине: " + econMounthBenz + " грн.";
                    document.querySelector('#econMounthGas').innerHTML = "Стоимость месяца на газу: " + econMounthGas + " грн.";
                    document.querySelector('#econMounth').innerHTML = "Экономия за месяц составляет: " + econMounth + " грн.";
            }
          
        }
);