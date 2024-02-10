let btn = document.querySelector('#slider');

btn.onclick = function() {
    if (btn.classList.contains('topslider')) {
       $(".navigation").css("filter", "brightness(0.4)")
        btn.innerHTML = '<i class="fas fa-angle-up"></i>'; 
        btn.classList.remove('topslider');
        btn.classList.add('downslider');
}
    else {
        $(".navigation").css("filter", "brightness(1)")
          btn.innerHTML = '<i class="fas fa-angle-down"></i>'; 
    btn.classList.remove('downslider');
    btn.classList.add('topslider');
}
} 