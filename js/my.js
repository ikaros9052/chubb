$(function(){
  // nav right List
  $(".Open").click(function(){
      if($(".navList_content").css("right")=="0px"){
        $(".navList_content").animate({"right":"8rem"});
        $(".wrap_sum").css("overflow","hidden");
        $(".navList_wrap").css("overflow","auto");
      }else{
        $(".navList_content").animate({"right":"0px"});
        $(".wrap_sum").css("overflow","auto");
      }
    })
  $(".navList_head").click(function(){
      $(this).siblings("dd").show();
      $(this).addClass("navList_up");
      $(this).parents("dl").siblings("dl").children("dd").hide();
      $(this).parents("dl").siblings("dl").children("dt").removeClass("navList_up");
    })
  // nav right List end
  // dropdown
  $(".xia-la").click(function(){
   var $obj=$(this).nextAll("dl");
   if ($obj.is(":visible")) {
     $obj.slideUp(300);
     $(this).children("a").removeClass('momBtnT');
     $(this).children("a").addClass('momBtn');
   } else{
     $obj.slideDown(300);
      $(this).children("a").removeClass('momBtn');
     $(this).children("a").addClass('momBtnT');
    }
  })
  // dropdown end
})

