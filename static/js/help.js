$(function(){
        var _index=0;
        $(".floor-lead-box ul li").click(function(){
            $(this).addClass("active").siblings().removeClass("active");
            var rel = $(this).attr("rel") || "";
            //通过拼接字符串获取元素，再取得相对于文档的高度
            var _top=$("#"+rel).offset().top;
            //scrollTop滚动到对应高度
            $("body,html").animate({scrollTop:_top-100},500);
        });
        var nav=$(".floor-lead-area"); //得到导航对象
        var win=$(window); //得到窗口对象
        var sc=$(document);//得到document文档对象。
        /*win.scroll(function(){

            if(sc.scrollTop()>=300){
                $(".floor-lead-area").slideDown(300,function(){
                    $(this).show();
                });
                //获取滚动元素对应的索引!!!重难点
                /!* var index=Math.floor(sc.scrollTop()/600);

                 $(".side-bar-area ul li").eq(index-1).addClass("choose").siblings().removeClass("choose");*!/
            }else{
                $(".floor-lead-area").slideUp(300,function(){
                    $(this).hide();
                });
                /!*$(".side-bar-area").hide();*!/
            }
        });*/
        
        
    });
