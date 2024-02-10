var cart = {}; //my cart
var link;

$('document').ready(function(){
    load();    
    checkCart();
    showCart();
}); 


function load() {
    // вывод товара

   $.getJSON('json/laptop.json', function (data)
    {
        var out = '';
        for (var key in data) {
            out+='<div class = "goods_view" id = "'+ key +'">';
            out+='<h2>'+data[key]['name']+'</h2>';
            out+='<img id="goods_img_max" class="goods_img" src="'+data[key]['img']+'">';
            out+='<div class="img-min">';
            out+='<img class="min-img" src="' + data[key]['img']+'">';
            out+='<img class="min-img" src="' + data[key]['img_2']+'">';
            out+='<img class="min-img" src="' + data[key]['img_3']+'">';
            out+='</div>';

            out+='<h3>Цена: '+data[key]['price']+' грн.</h3>';
            out+='<br>';
            out+='<button class="to-cart" data-art="'+key+'">Купить</button>';
            out+='<br>';
            out+='<br>';
            out+='<h5>'+data[key]['description']+'</h5>';
            out+='</div>';
        }
    $('#out_goods').html(out);
    $('button.to-cart').on('click', toCard);
    })
}




function toCard() {
//// add to cart
    var articul = $(this).attr('data-art');
    if (cart[articul]!=undefined) {
        cart[articul]++;
    }
    else {
        cart[articul] = 1;
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    showCart();

 
    swal("Товар добавлен в корзину!", "Нажмите ОК для продолжения покупок!", "success");


} 

function checkCart() {
    //check goods in Local Storage
    if (localStorage.getItem('cart') !=null) {
        cart = JSON.parse (localStorage.getItem('cart'));
    }
}

function showCart() {
    //show Cart
    var out ='';
    for (var i in cart) {
        out += i + '---' +cart[i]+'<br>';
    }
    $('#cart_goods').html(out);
}


