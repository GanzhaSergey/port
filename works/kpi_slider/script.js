kpi('img/kpi/kpi1.jpg','#button1');

function kpi(imgScr, but) {
   document.querySelector('#imaGe').src = imgScr;
   document.querySelector('#button1').style.background = 'white';
   document.querySelector('#button2').style.background = 'white';
   document.querySelector('#button3').style.background = 'white';
   document.querySelector(but).style.background = 'black';
 }


