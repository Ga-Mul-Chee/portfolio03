$(function(){
    
    $("li.mainList>a").click(function(){
        $("li.mainList>a").siblings($(".sub_menu")).slideUp();
        $(this).siblings($(".sub_menu:not(:animated)")).stop().slideToggle();
        $(this).css({"color":"white","font-weight":"bolder"})
    }); 
    /*
    //2depth Open
    $("li.mainList>a").click(function(){
        //모든 main MENU를 클릭하면 형제 중에 ul.sub_menu를 슬라이드 업
        $("li.mainList>a").siblings($(".sub_menu")).slideUp();
        $("li.mainList>a").css({"color":"white","font-weight":""})
        //마우스로 클릭한 li.mainList>a의 형제중 ul.sub_menu를 슬라이드 다운
        $(this).siblings($(".sub_menu")).slideDown();
        
    });  //2depth click end
    */
    //Drawer menu close
    $("#gnb .close").click(function(){
        $("#gnb").css({"right":"-100%"});
    });
    //
    $(".menu").click(function(){
        $("#gnb").css({"right":"0"});
    });
});