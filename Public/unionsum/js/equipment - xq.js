/**
 * 
 * 
 * @date    2018-02-24 16:31:25
 *  
 */

 var galleryTop = new Swiper('.gallery-top', {
      spaceBetween: 10,
      loop:true,
      loopedSlides: 5, //looped slides should be the same
      navigation: {
        nextEl: '.swiper-button-next-n',
        prevEl: '.swiper-button-prev-p',
      },
    });
    var galleryThumbs = new Swiper('.gallery-thumbs', {
      spaceBetween: 10,
      slidesPerView: 3,
      touchRatio: 0.2,
      loop: true,
      loopedSlides: 5, //looped slides should be the same
      slideToClickedSlide: true,
    });
    galleryTop.controller.control = galleryThumbs;
    galleryThumbs.controller.control = galleryTop;



    $( function(){
	$('.equipmentxq_left1_img .lb').click(function(){
		$('.swiper-button-prev-p').click(); 
		 

	})
	$('.equipmentxq_left1_img .rb').click(function(){
		$('.swiper-button-next-n').click(); 


	})
})
 




 $(function(){
	function tab(tabnav,tabbox){
			$(tabbox).children().eq(0).siblings().hide();//除第一个外 其他内容全部隐藏
			$(tabnav).children().mouseover(function(){  //触发方式//click//mouseover
				$(this).addClass('this').siblings().removeClass('this');
				$(tabbox).children().hide().eq($(this).index()).show();
			})}
	tab('#tabnav1','#tabbox1')//tab调用 
	
});	



 //
  var swiper = new Swiper('.swiper-container-anli', {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      pagination: {
        el: '.swiper-pagination-anli',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next-anli',
        prevEl: '.swiper-button-prev-anli',
      },
    });
  //
  $( function(){
	$('.xqCasesl').click(function(){
		$('.swiper-button-next-anli').click(); 
	})
	$('.xqCasesr').click(function(){
		$('.swiper-button-prev-anli').click(); 
	})
})
 



