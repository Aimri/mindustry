/**
 * 
 * 
 * @date    2018-02-23 15:01:55
 *  
 */
var w = document.documentElement.clientWidth;

if (w<640) {

	var swiper = new Swiper('#swiper-container-case_xq', {
      pagination: {
      	clickable: true,
        el: '.swiper-pagination-case_xq',
      },
      	navigation: {
		nextEl: '.swiper-button-next-case_xq',
		prevEl: '.swiper-button-prev-case_xq',
			      },

		slidesPerView:1,
		spaceBetween:0,
    });

} 


else {

	var swiper = new Swiper('#swiper-container-case_xq', {
      pagination: {
      	clickable: true,
        el: '.swiper-pagination-case_xq',
      },
      	navigation: {
		nextEl: '.swiper-button-next-case_xq',
		prevEl: '.swiper-button-prev-case_xq',
			      },

		slidesPerView:3,
		spaceBetween:30,
    });

} 



$( function(){
	$('#case_xq_left').click(function(){
		$('.swiper-button-prev-case_xq').click(); 
	})
	$('#case_xq_right').click(function(){
		$('.swiper-button-next-case_xq').click(); 
	})
})
 