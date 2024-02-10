var summa, mounth_summa;
var price, mounth, percent, summa_temp;
function calc () {
	
price = +$("#sum").val();
mounth = +$('input[name=mount]:checked').attr('data-month');
percent = +$('input[name=bank]:checked').attr('data-bank');

summa_temp = (price*percent)*mounth;
summa =  price + summa_temp;

    alert(summa);
} 



