$(document).ready(function(){
    var imgItems = $('.slider li').length;
    var imgPos = 1;
    //Agregando paginacion --
    for(i=1;i <= imgItems;i++){
        $('.pagination').append('<li><span class="fa fa-circle"></span></li>')
    }

    $('.slider li').hide();
    $('.slider li:first').show();
    $('.pagination li:first').css({'color': '#CD6E2E'});
    
    //Ejecutamos todas las funciones
    $('.pagination li').click(pagination);
    $('.right span').click(nextSlider);
    $('.left span').click(prevSlider);
    
    //Creamos las funciones -------------------------
    function pagination(){
        var paginationPos = $(this).index()+1 ;
        $('.slider li').hide();
        $('.slider li:nth-child('+paginationPos+')').fadeIn();

        $('.pagination li').css({'color' : '#858585'});
        $(this).css({'color' : '#CD6E2E'});
    }
    
    function nextSlider(){
        if(imgPos >= imgItems){
            imgPos=1
        }
        else{
            imgPos++;
        }
        
        $('.pagination li').css({'color': '#858585'});
        $('.pagination li:nth-child(' + imgPos +')').css({'color': '#CD6E2E'});


        $('.slider li').hide(); //Ocultamos todos los slides
        $('.slider li:nth-child('+ imgPos +')').fadeIn();
    }

    function prevSlider(){
        if(imgPos <= 1){
            imgPos=imgItems
        }
        else{
            imgPos--;
        }

        $('.pagination li').css({'color': '#858585'});
        $('.pagination li:nth-child(' + imgPos +')').css({'color': '#CD6E2E'});

        $('.slider li').hide(); //Ocultamos todos los slides
        $('.slider li:nth-child('+ imgPos +')').fadeIn();
    }
});