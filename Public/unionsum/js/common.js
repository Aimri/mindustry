/**
 * 
 * 
 * @date    2018-02-09 14:40:20
 *  
 */

//移动端导航
$('.logo .ico').click(function(){
	$('body').toggleClass('body')
})



var nav = document.getElementById("indexnav");
    		var links = nav.getElementsByTagName("li");
    		var lilen = nav.getElementsByTagName("a");
    		var currenturl = document.location.href;
    		var last = 0;
    		for (var i=0;i<links.length;i++)
    			{
				   var linkurl =  lilen[i].getAttribute("href");
				        if(currenturl.indexOf(linkurl)!=-1)
				        	{
				        		 last = i;
				        		}
    			}
    				links[last].className = "this";
 

// 尾部表单
$('.foot_button').click(function(){
	 	if(!$("#foot_font .Name").val()){
	            $("#foot_font .Name").focus();
	          alert('Can not be Name!')
	            return false;
	   	}

        if(!$("#foot_font .Email").val()){
            $("#foot_font .Email").focus();
          alert('Can not be empty!')
            return false;
        }


        // if(!$(".Phone").val()){
        //     $(".Phone").focus();
        //   alert('Can not be empty!')
        //     return false;
        // }

        // if(!$(".Message").val()){
        //     $(".Message").focus();
        //   alert('Can not be empty!')
        //     return false;
        // }
 		
 		  

        /*$.ajax({
				cache: true,
				type: "POST",
				url:  "login.php", 
				data: $('#foot_font').serialize(), 
				async: false,
				error: function(request) {
					alert("Connection error！");
				},
				success: function(data) {
					 alert("success！");
				}
		});*/
       


})






// Vacuum Distillation   Equipment Center留言表单
$('.font_rs button').click(function(){
    
      if(!$(".Name").val()){
              $(".Name").focus();
            alert('Please type in your name!')
              return false;
      }

     if(!$(".Country").val()){
              $(".Country").focus();
            alert('Please enter the country!')
              return false;
      } 
      if(!$(".Email").val()){
              $(".Email").focus();
            alert('please input your email!')
              return false;
      } 
      // if(!$(".Tel").val()){
      //         $(".Tel").focus();
      //       alert('please input your Tel!')
      //         return false;
      // }
      // if(!$(".CompanyName").val()){
      //         $(".CompanyName").focus();
      //       alert('Please enter the company name!')
      //         return false;
      // }
      // if(!$(".Message").val()){
      //         $(".Message").focus();
      //       alert('Please enter the Message!')
      //         return false;
      // } 

 
}) 