/**
 * 
 * 
 * @date    2018-02-26 10:51:50
 *  
 */
 
 $(function(){
  function tab(tabnav,tabbox){
      $(tabbox).children().eq(0).siblings().hide();//除第一个外 其他内容全部隐藏
      $(tabnav).children().mouseover(function(){  //触发方式//click//mouseover
        $(this).addClass('this').siblings().removeClass('this');
        $(tabbox).children().hide().eq($(this).index()).show();
      })}
  tab('#tabnav2','#tabbox2')//tab调用 
  
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
 




 