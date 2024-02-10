

document.querySelector("#but").onclick = function () {
  $('#out').empty();
  let len = document.querySelector("#length").value;
  let min = document.querySelector("#min").value;
  let max = document.querySelector("#max").value;
  let result = [];

    for (let i = 0; i < len; i++) {
    result.push(randomInteger(min,max));
    let div = $("<div>").html("Array element[" + [i+1] + "]:  " + result[i]);
    $('#out').append(div);  
    }

}

function randomInteger(min, max) {
    var rand = min - 0.5 + Math.random() * (max - min + 1)
    rand = Math.round(rand);
    return rand;
  }