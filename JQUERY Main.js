$(document).ready(function(){
  $(".m1").click(function(){
    $(".m1").css({'color':'black'});
    $(".m2, .m3, .m4").css({'color':'white'});
    $(".active").css({'left':'0px','transform':'skewX(20deg)'});
  });
  $(".m2").click(function(){
    $(".m2").css({'color':'black'});
    $(".m1, .m3, .m4").css({'color':'white'});
    $(".active").css({'left':'105px','transform':'skewX(20deg)'});
  });
  $(".m3").click(function(){
    $(".m3").css({'color':'black'});
    $(".m1, .m2, .m4").css({'color':'white'});
    $(".active").css({'left':'370px','transform':'skewX(-20deg)'});
  });
  $(".m4").click(function(){
    $(".m4").css({'color':'black'});
    $(".m1, .m2, .m3").css({'color':'white'});
    $(".active").css({'left':'480px','transform':'skewX(-20deg)'});
  });
});
