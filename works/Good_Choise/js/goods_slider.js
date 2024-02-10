document.body.onclick = function(event) {
    event = event || window.event;

   if (event.target.classList.contains('min-img')) {

     document.getElementById('goods_img_max').src = event.target.src; //путь к картинке на которую клинкули
    }

            
           // alert(event.target.id);
}