var cart = {}; //cart

/// read JSON file
$.getJSON('json/laptop.json', function(data) {
    var goods = data;
    checkCart();
    showCart();

    function showCart() {
        //show Cart
        if ($.isEmptyObject(cart) ) {
            ///empty
            var out = '<div class="cart_empty">Нет товаров в корзине!</div>';
            $('#cart_goods').html(out);
        }
        else {
        var out ='';
        for (var i in cart) {
            out += '<br>';
            out += '<h2>Вашы заказы</h2>';
            out += '<div class="cart_goods_view">';
            out += '<button class="delete" data-art="'+i+'">x</button>';
            out += '<img src="'+goods[i].img+'" width="512">';
            out += '<div class = "quantity">';
            out += '<button class="minus" data-art="'+i+'">-</button>';
            out += '<div class = "quantity_sum">' +cart[i]+'</div>';
            out += '<button class="plus" data-art="'+i+'">+</button>'+ '<br>';  
            out += '</div>'; //quantity
            out += '<br>';
            out += '<br>';
            out += '<h4>'+goods[i].name +'</h4>';
            out += '<br>';
            out += 'Сумма: '+cart[i] * goods[i].price;
            out += '</div>';
        }
        $('#cart_goods').html(out);
        $('.plus').on('click', plusGoods);
        $('.minus').on('click', minusGoods);
        $('.delete').on('click', deleteGoods);
    } //else
 
    }

    function plusGoods() {
        var art = $(this).attr('data-art');
        cart[art]++;
        saveCart();
        showCart();
    }

    function minusGoods() {
        var art = $(this).attr('data-art');
        if (cart[art]>1) {
            cart[art]--;
            }
        else delete cart[art];
        saveCart();
        showCart();
    }


function deleteGoods() {
    var art = $(this).attr('data-art');
    delete cart[art];
    saveCart();
    showCart();
    }
});

function checkCart() {
    //check goods in Local Storage
    if (localStorage.getItem('cart') !=null) {
        cart = JSON.parse (localStorage.getItem('cart'));
    }
}

function saveCart() {
    //save to Local Storage
    localStorage.setItem('cart', JSON.stringify(cart));
}