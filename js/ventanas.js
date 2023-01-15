$(window).load(function() {
    $('.flexslider').flexslider();
  });
$(window).load(function() {
    $('.flexslider2').flexslider();
  });
function abrirventana(){
	$(".ventana").slideDown('slow');
}
function cerrarventana(){
	$(".ventana").slideUp('fast');
}
$(document).ready(main);
 
var contador = 1;
 
function main(){
	$('.menu_bar').click(function(){
		// $('nav').toggle(); 
 
		if(contador == 1){
			$('nav').animate({
				left: '0'
			});
			contador = 0;
		} else {
			contador = 1;
			$('nav').animate({
				left: '-100%'
			});
		}
 
	});
 
};
/*js para nav q t sigue*/
$(document).ready(function(){
	var altura = $('.menus').offset().top;
	
	$(window).on('scroll', function(){
		if ( $(window).scrollTop() > altura ){
			$('.menus').addClass('menu-fixed');
		} else {
			$('.menus').removeClass('menu-fixed');
		}
	});
 
});
//js para el botn subir
$(document).ready(function(){
 
	$('.ir-arriba').click(function(){
		$('body, html').animate({
			scrollTop: '0px'
		}, 300);
	});
 
	$(window).scroll(function(){
		if( $(this).scrollTop() > 0 ){
			$('.ir-arriba').slideDown(300);
		} else {
			$('.ir-arriba').slideUp(300);
		}
	});
 
});
//
function abrirventana2 (){ 
	$("#laguna").slideDown('slow');
	 $("#terminal").slideUp('slow');
	 $("#trabajo").slideUp('slow');
	 $("#opera").slideUp('slow');
	 $("#mercado").slideUp('slow');
	 $("#bancos").slideUp('slow');
	 $("#plaza").slideUp('slow');
	  $("#pds").slideUp('slow');
	   $("#paraiso").slideUp('slow');
	 $("#universidad").slideUp('slow');
	 $("#cruz").slideUp('slow');
	 $("#balcon").slideUp('slow');
	 $("#iglesia").slideUp('slow');
	 $("#ruquia").slideUp('slow');
	 $("#campiña").slideUp('slow');
} 
function abrirventana3 (){ 
	$("#laguna").slideUp('slow');
	 $("#terminal").slideDown('slow');
	 $("#trabajo").slideUp('slow');
	 $("#opera").slideUp('slow');
	 $("#mercado").slideUp('slow');
	 $("#bancos").slideUp('slow');
	 $("#plaza").slideUp('slow');
	 $("#pds").slideUp('slow');
	   $("#paraiso").slideUp('slow');
	 $("#universidad").slideUp('slow');
	 $("#cruz").slideUp('slow');
	 $("#balcon").slideUp('slow');
	 $("#iglesia").slideUp('slow');
	 $("#ruquia").slideUp('slow');
	 $("#campiña").slideUp('slow');
} 
function abrirventana4 (){ 
	$("#laguna").slideUp('slow');
	 $("#terminal").slideUp('slow');
	 $("#trabajo").slideDown('slow');
	 $("#opera").slideUp('slow');
	 $("#mercado").slideUp('slow');
	 $("#bancos").slideUp('slow');
	 $("#plaza").slideUp('slow');
	 $("#pds").slideUp('slow');
	   $("#paraiso").slideUp('slow');
	 $("#universidad").slideUp('slow');
	 $("#cruz").slideUp('slow');
	 $("#balcon").slideUp('slow');
	 $("#iglesia").slideUp('slow');
	 $("#ruquia").slideUp('slow');
	 $("#campiña").slideUp('slow');
} 
function abrirventana5 (){ 
	$("#laguna").slideUp('slow');
	 $("#terminal").slideUp('slow');
	 $("#trabajo").slideUp('slow');
	 $("#opera").slideDown('slow');
	 $("#mercado").slideUp('slow');
	 $("#bancos").slideUp('slow');
	 $("#plaza").slideUp('slow');
	 $("#pds").slideUp('slow');
	   $("#paraiso").slideUp('slow');
	 $("#universidad").slideUp('slow');
	 $("#cruz").slideUp('slow');
	 $("#balcon").slideUp('slow');
	 $("#iglesia").slideUp('slow');
	 $("#ruquia").slideUp('slow');
	 $("#campiña").slideUp('slow');
} 
function abrirventana6 (){ 
	$("#laguna").slideUp('slow');
	 $("#terminal").slideUp('slow');
	 $("#trabajo").slideUp('slow');
	 $("#opera").slideUp('slow');
	 $("#mercado").slideDown('slow');
	 $("#bancos").slideUp('slow');
	 $("#plaza").slideUp('slow');
	 $("#pds").slideUp('slow');
	   $("#paraiso").slideUp('slow');
	 $("#universidad").slideUp('slow');
	 $("#cruz").slideUp('slow');
	 $("#balcon").slideUp('slow');
	 $("#iglesia").slideUp('slow');
	 $("#ruquia").slideUp('slow');
	 $("#campiña").slideUp('slow');
} 
function abrirventana7 (){ 
	$("#laguna").slideUp('slow');
	 $("#terminal").slideUp('slow');
	 $("#trabajo").slideUp('slow');
	 $("#opera").slideUp('slow');
	 $("#mercado").slideUp('slow');
	 $("#bancos").slideDown('slow');
	 $("#plaza").slideUp('slow');
	 $("#pds").slideUp('slow');
	   $("#paraiso").slideUp('slow');
	 $("#universidad").slideUp('slow');
	 $("#cruz").slideUp('slow');
	 $("#balcon").slideUp('slow');
	 $("#iglesia").slideUp('slow');
	 $("#ruquia").slideUp('slow');
	 $("#campiña").slideUp('slow');
} 
function abrirventana8 (){ 
	$("#laguna").slideUp('slow');
	 $("#terminal").slideUp('slow');
	 $("#trabajo").slideUp('slow');
	 $("#opera").slideUp('slow');
	 $("#mercado").slideUp('slow');
	 $("#bancos").slideUp('slow');
	 $("#plaza").slideDown('slow');
	 $("#pds").slideUp('slow');
	   $("#paraiso").slideUp('slow');
	 $("#universidad").slideUp('slow');
	 $("#cruz").slideUp('slow');
	 $("#balcon").slideUp('slow');
	 $("#iglesia").slideUp('slow');
	 $("#ruquia").slideUp('slow');
	 $("#campiña").slideUp('slow');
} 
function abrirventana9 (){ 
	$("#laguna").slideUp('slow');
	 $("#terminal").slideUp('slow');
	 $("#trabajo").slideUp('slow');
	 $("#opera").slideUp('slow');
	 $("#mercado").slideUp('slow');
	 $("#bancos").slideUp('slow');
	 $("#plaza").slideUp('slow');
	 $("#pds").slideDown('slow');
	   $("#paraiso").slideUp('slow');
	 $("#universidad").slideUp('slow');
	 $("#cruz").slideUp('slow');
	 $("#balcon").slideUp('slow');
	 $("#iglesia").slideUp('slow');
	 $("#ruquia").slideUp('slow');
	 $("#campiña").slideUp('slow');
} 
function abrirventana10 (){ 
	$("#laguna").slideUp('slow');
	 $("#terminal").slideUp('slow');
	 $("#trabajo").slideUp('slow');
	 $("#opera").slideUp('slow');
	 $("#mercado").slideUp('slow');
	 $("#bancos").slideUp('slow');
	 $("#plaza").slideUp('slow');
	 $("#pds").slideUp('slow');
	   $("#paraiso").slideDown('slow');
	 $("#universidad").slideUp('slow');
	 $("#cruz").slideUp('slow');
	 $("#balcon").slideUp('slow');
	 $("#iglesia").slideUp('slow');
	 $("#ruquia").slideUp('slow');
	 $("#campiña").slideUp('slow');
} 
function abrirventana11 (){ 
	$("#laguna").slideUp('slow');
	 $("#terminal").slideUp('slow');
	 $("#trabajo").slideUp('slow');
	 $("#opera").slideUp('slow');
	 $("#mercado").slideUp('slow');
	 $("#bancos").slideUp('slow');
	 $("#plaza").slideUp('slow');
	 $("#pds").slideUp('slow');
	   $("#paraiso").slideUp('slow');
	 $("#universidad").slideDown('slow');
	 $("#cruz").slideUp('slow');
	 $("#balcon").slideUp('slow');
	 $("#iglesia").slideUp('slow');
	 $("#ruquia").slideUp('slow');
	 $("#campiña").slideUp('slow');
} 
function abrirventana12 (){ 
	$("#laguna").slideUp('slow');
	 $("#terminal").slideUp('slow');
	 $("#trabajo").slideUp('slow');
	 $("#opera").slideUp('slow');
	 $("#mercado").slideUp('slow');
	 $("#bancos").slideUp('slow');
	 $("#plaza").slideUp('slow');
	 $("#pds").slideUp('slow');
	   $("#paraiso").slideUp('slow');
	 $("#universidad").slideUp('slow');
	 $("#cruz").slideDown('slow');
	 $("#balcon").slideUp('slow');
	 $("#iglesia").slideUp('slow');
	 $("#ruquia").slideUp('slow');
	 $("#campiña").slideUp('slow');
} 
function abrirventana13 (){ 
	$("#laguna").slideUp('slow');
	 $("#terminal").slideUp('slow');
	 $("#trabajo").slideUp('slow');
	 $("#opera").slideUp('slow');
	 $("#mercado").slideUp('slow');
	 $("#bancos").slideUp('slow');
	 $("#plaza").slideUp('slow');
	 $("#pds").slideUp('slow');
	   $("#paraiso").slideUp('slow');
	 $("#universidad").slideUp('slow');
	 $("#cruz").slideUp('slow');
	 $("#balcon").slideDown('slow');
	 $("#iglesia").slideUp('slow');
	 $("#ruquia").slideUp('slow');
	 $("#campiña").slideUp('slow');
} 
function abrirventana14 (){ 
	$("#laguna").slideUp('slow');
	 $("#terminal").slideUp('slow');
	 $("#trabajo").slideUp('slow');
	 $("#opera").slideUp('slow');
	 $("#mercado").slideUp('slow');
	 $("#bancos").slideUp('slow');
	 $("#plaza").slideUp('slow');
	 $("#pds").slideUp('slow');
	   $("#paraiso").slideUp('slow');
	 $("#universidad").slideUp('slow');
	 $("#cruz").slideUp('slow');
	 $("#balcon").slideUp('slow');
	 $("#iglesia").slideDown('slow');
	 $("#ruquia").slideUp('slow');
	 $("#campiña").slideUp('slow');
} 
function abrirventana15 (){ 
	$("#laguna").slideUp('slow');
	 $("#terminal").slideUp('slow');
	 $("#trabajo").slideUp('slow');
	 $("#opera").slideUp('slow');
	 $("#mercado").slideUp('slow');
	 $("#bancos").slideUp('slow');
	 $("#plaza").slideUp('slow');
	 $("#pds").slideUp('slow');
	   $("#paraiso").slideUp('slow');
	 $("#universidad").slideUp('slow');
	 $("#cruz").slideUp('slow');
	 $("#balcon").slideUp('slow');
	 $("#iglesia").slideUp('slow');
	 $("#ruquia").slideDown('slow');
	 $("#campiña").slideUp('slow');
} 
function abrirventana16 (){ 
	$("#laguna").slideUp('slow');
	 $("#terminal").slideUp('slow');
	 $("#trabajo").slideUp('slow');
	 $("#opera").slideUp('slow');
	 $("#mercado").slideUp('slow');
	 $("#bancos").slideUp('slow');
	 $("#plaza").slideUp('slow');
	 $("#pds").slideUp('slow');
	   $("#paraiso").slideUp('slow');
	 $("#universidad").slideUp('slow');
	 $("#cruz").slideUp('slow');
	 $("#balcon").slideUp('slow');
	 $("#iglesia").slideUp('slow');
	 $("#ruquia").slideUp('slow');
	 $("#campiña").slideDown('slow');
} 
