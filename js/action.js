$(document).ready(function(){
    var pre = -1 , now = 0 ;
    for(var i = 0 ; i < 5 ; i++ ){
	    $("#box").append("<div class='mybox' id='box" + i + "'>test" + i + "</div>") ;
	    //alert(i);
	    //var box = $("p") ;
		//box.addClass("mybox") ;
		//box.html("This is " + i + " th box") ;
		//$("#box").append(box) ;
		$("#box" + i).toggle();
	}
	
	$("#next").click(function(){
	    if(pre != -1){
		    $("#box" + pre).toggle() ;
		}
	    now = getRandom(4) ;
		$("#box" + now).toggle() ;
		TurnGround(now,30) ;
		pre = now ;
	});
});

    function getRandom(n){
	    return Math.floor(Math.random()*n+1) ;
	}
	
	function TurnGround( id , n ){
	    $("#"+id).css("-moz-transform","rotate(" + n +"deg)") ;
		$("#"+id).css("-webkit-transform","rotate(" + n +"deg)") ;
		$("#"+id).css("filter","progid:DXImageTransform.Microsoft.BasicImage(rotation=3)");
	}