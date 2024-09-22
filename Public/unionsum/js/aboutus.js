/**
 * 
 * 
 * @date    2018-02-23 11:53:16
 *  
 */

/**
 * 
 * 
 * @date    2018-02-23 11:53:16
 *  
 */

   var swiper = new Swiper('#swiper-container-expert', {
      pagination: {
      	clickable: true,
        el: '.swiper-pagination-expert',
      },
    });
 
 	

 
var w = document.documentElement.clientWidth;
if (w<1279&&w>640) {
	var swiper = new Swiper('#swiper-container-Production', {
      pagination: {
      	clickable: true,
        el: '.swiper-pagination-Production',
      },
      	navigation: {
		nextEl: '.swiper-button-next-Production',
		prevEl: '.swiper-button-prev-Production',
			      },

		slidesPerView:2,
		spaceBetween:5,
    });

} 

if (w>1279) {
	var swiper = new Swiper('#swiper-container-Production', {
      pagination: {
      	clickable: true,
        el: '.swiper-pagination-Production',
      },
      	navigation: {
		nextEl: '.swiper-button-next-Production',
		prevEl: '.swiper-button-prev-Production',
			      },

		slidesPerView:3,
		spaceBetween:5,
    });
}	


if (w<768) {
	var swiper = new Swiper('#swiper-container-Production', {
      pagination: {
      	clickable: true,
        el: '.swiper-pagination-Production',
      },
      	navigation: {
		nextEl: '.swiper-button-next-Production',
		prevEl: '.swiper-button-prev-Production',
			      },

		slidesPerView:1,
		spaceBetween:5,
    });
}	

 

 	  
$( function(){
	$('#Production_left').click(function(){
		$('.swiper-button-prev-Production').click(); 
	})
	$('#Production_right').click(function(){
		$('.swiper-button-next-Production').click(); 
	})
})
 