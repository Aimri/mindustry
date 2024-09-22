/**
 * 
 * 
 * @date    2018-02-24 17:22:09
 *  
 */

var w = document.documentElement.clientWidth;

if (w<768) {

	var swiper = new Swiper('#swiper-container-epc', {
      pagination: {
      	clickable: true,
        el: '.swiper-pagination-epc',
      },
      	navigation: {
		nextEl: '.swiper-button-next-epc',
		prevEl: '.swiper-button-prev-epc',
			      },

		slidesPerView:1,
		spaceBetween:0,
    });

} 


else{

	var swiper = new Swiper('#swiper-container-epc', {
      pagination: {
      	clickable: true,
        el: '.swiper-pagination-epc',
      },
      	navigation: {
		nextEl: '.swiper-button-next-epc',
		prevEl: '.swiper-button-prev-epc',
			      },

		slidesPerView:3,
		spaceBetween:30,
    });

} 



$( function(){
	$('#epc_xq_left').click(function(){
		$('.swiper-button-prev-epc').click(); 
	})
	$('#epc_xq_right').click(function(){
		$('.swiper-button-next-epc').click(); 
	})
})
 