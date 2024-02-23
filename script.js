$(document).ready(function(){
    
    var modal1=$('.service-modal');
$('.btn2').click(function(){
    modal1.css('visibility', 'visible');
});

$('.modal-close-btn').click(function(){
    modal1.css('visibility', 'hidden');
});

});