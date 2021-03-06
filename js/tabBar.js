$(document).ready(function(){
    $(".map_info>ul a").click(function(){

        // 클릭한 a요소의 부모요소인 li의 인덱스번호를 변수 idx에 대입
        var idx = $(this).parent().index();

        // 클릭한 a요소의 부모요소인 li에 .on추가하기
        $(this).parent().addClass("on");

        // 클릭한 a요소의 부모인 li를 제외한 다른 형제 li에 .on 제거하기
        $(this).parent().siblings().removeClass("on");

        // 클릭한 a요소의 부모의 부모의 형제인 .tab_con요소에 .on제거
        $(this).parent().parent().siblings(".tab_con").removeClass("on");
        // 클릭한 a요소의 부모와 같은 인덱스번호를 가진 .tab_con에 .on 추가하기
        $(this).parent().parent().siblings(".tab_con").eq(idx).addClass("on");       
    });
});