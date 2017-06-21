


$('.ul-menu').hide();
$('.close').hide();

if($(window).width()>768){
    $('.ul-menu').show();

    $('.icon-menu').hide();
}






var id;
$(window).resize(function() {
    clearTimeout(id);
    id = setTimeout(doneResizing, 500);
});

function doneResizing(){

    if($(window).width()>768){
        $('.icon-menu').hide();
        $('.ul-menu').show();

    }
    if($(window).width()<768){
        $('.icon-menu').show();
        $('.ul-menu').hide();
    }
}


$('.icon-menu').click(function(){
    $('.ul-menu').slideToggle('fast', function(){
        $('.icon-menu').hide();
        $('.close').show();
    });

});

$( '.close' ).click(function() {
    $( '.ul-menu' ).slideToggle( 'fast', function() {
        $( '.close' ).hide();
        $( '.icon-menu' ).show();

    });
});
// end;
