/**
 * 
 * 
 * @date    2018-02-23 17:43:33
 *  
 */

var w = document.documentElement.clientWidth;




//首页banner图轮播
var swiper = new Swiper('#swiper-container-banner', {
      spaceBetween: 30,
      centeredSlides: true,
       loop: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
});




 
		 // 设备

		if (w > 1280){

			var swiper = new Swiper('#swiper-container-ec', {
			      	navigation: {
			        nextEl: '.swiper-button-next',
			        prevEl: '.swiper-button-prev',
			      },
			      slidesPerView: 4,
			      slidesPerColumn: 2,
			      spaceBetween: 30,
			      // pagination: {
			      //   el: '.swiper-pagination2',
			      //   clickable: true,
			      // },
			});
		}
		else if (w <1280&&w>640){
			var swiper = new Swiper('#swiper-container-ec', {
			      	navigation: {
			        nextEl: '.swiper-button-next',
			        prevEl: '.swiper-button-prev',
			      },
			      slidesPerView: 3,
			      slidesPerColumn: 2,
			      spaceBetween: 20,
			      pagination: {
			        el: '.swiper-pagination-ec',
			        clickable: true,
			      },
			});
		}
		 if (w <640){
			var swiper = new Swiper('#swiper-container-ec', {
			      	navigation: {
			        nextEl: '.swiper-button-next',
			        prevEl: '.swiper-button-prev',
			      },
			      slidesPerView: 2,
			      slidesPerColumn: 2,
			      spaceBetween: 10,
			      pagination: {
			        el: '.swiper-pagination-ec',
			        clickable: true,
			      },
			});
}


$( function(){
	$('.Equipment_but_left').click(function(){
		$('#butleft').click(); 
	})
	$('.Equipment_but_right').click(function(){
		$('#butright').click(); 
	})
})




 // 服务
 
if (w>1280) {

	$(function(){
	function tab(tabnav,tabbox){
			$(tabbox).children().eq(0).siblings().hide();//除第一个外 其他内容全部隐藏

			$(tabnav).children().mouseover(function(){  //触发方式//click//mouseover
				$(this).addClass('this').siblings().removeClass('this');
				$(tabbox).children().hide().eq($(this).index()).show();
			})}
	tab('#tabnav1','#tabbox1')//tab调用 
	$('#tabnav2 li').eq(0).addClass('this');
	
});

} else {
	var tabsSwiper1 = new Swiper('#tabs-container-Service',{
  	pagination: {
    el: '.swiper-pagination-Service',
  },

    speed:800,
    on:{
		slideChangeTransitionStart: function(){
		  
          $(".tabs .this").removeClass('this');
          $(".tabs span").eq(this.activeIndex).addClass('this');
    }
	}
  })
  $(".tabs span").click(function(a){

 a.preventDefault()
    $(".tabs .this").removeClass('this')
    $(this).addClass('this')
    tabsSwiper1.slideTo( $(this).index())
  })

}


 

 



 // 案例


if (w>1280) {
		$(function(){
	function tab(tabnav,tabbox){
			$(tabbox).children().eq(0).siblings().hide();//除第一个外 其他内容全部隐藏
			$(tabnav).children().mouseover(function(){  //触发方式//click//mouseover
				$(this).addClass('this').siblings().removeClass('this');
				$(tabbox).children().hide().eq($(this).index()).show();
			})}
	tab('#tabnav2','#tabbox2')//tab调用 
	
});

} else {
	var tabsSwiper2 = new Swiper('#tabs-container-Cases',{
  	pagination: {
    el: '.swiper-pagination-Cases',
  },

    speed:800,
    on:{
		slideChangeTransitionStart: function(){
		  
          $(".tabs2 .this").removeClass('this');
          $(".tabs2 li").eq(this.activeIndex).addClass('this');
    }
	}
  })
  $(".tabs2 li").click(function(b){
 b.preventDefault()
    $(".tabs2 .this").removeClass('this')
    $(this).addClass('this')
    tabsSwiper2.slideTo( $(this).index())
})
}




