$(document).ready(function() {
 //
 // add your jQuery code here

    $("#button1").mouseenter(function(){
        $('#button1').removeClass("makeRed").addClass("makeBorder");
    });
    $("#button1").mouseleave(function(){
        $('#button1').removeClass("makeBorder").addClass("makeRed");
    });
    $("#button1").click(function(){
        $('#para1').toggle('#para1');
    });
  $("button").click(function() {
		$("p").hide(2000).show(2000);
	});

	$("button").click(function(){
		$("p").fadeIn().fadeOut();
	});

}); 