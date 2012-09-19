    $(document).ready(function(){
	    var IsDone = new Array(45) ;
		var PictureIsDone = new Array(46) ;
		var TroubleIsDone = new Array(45);
		var number = 44 ;
		var picture = 44 ;
		var trouble_num = 44;
		for( var i = 0 ; i < 44 ; i++ ){
		    IsDone[i] = 0 ;
			PictureIsDone[i] = 0 ;
			if( i < 20 ){
			    TroubleIsDone[i] = 0 ;
			}
		}
		IsDone[44] = 1 ;
		PictureIsDone[45] = 1 ;
		TroubleIsDone[20] = 1 ;
        MoveItem("move" , 1);
		$("#trouble_button").click(function(){
		    $("#trouble").toggle();
		    $.ajax({
			    type:"GET" ,
				url:"trouble.xml" ,
				dataType:"xml" ,
				success : function( trouble ){
				    while(TroubleIsDone[trouble_num]){
			            trouble_num = getRandom( 44 ) ;
			        }
					TroubleIsDone[trouble_num] = 1 ;
					if( trouble_num < 26 ){
					    $(trouble).find('trouble').each(function(){
					        if( $(this).find('number').text() == trouble_num+"" ){
						        $("#trouble_title").text($(this).find('title').text()) ;
						        $("#trouble_txt").text($(this).find('txt').text()) ;
						    }
					    });
					}
					else{
					    $("#trouble_title").text("NOTHING");
						$("#trouble_txt").text("Nothing happened!") ;
					}
				}
			});	
		});
		$("#next").click(function(){
		    $("#trouble").toggle();
		    while(IsDone[number]){
			    number = getRandom( 44 ) ;
			}
			IsDone[number] = 1 ;
		    $.ajax({
			    type:"GET" ,
				url:"Class4.xml" ,
				dataType:"xml" ,
				success : function( student ){
				    $(student).find('student').each(function(){
					    if( $(this).find('number').text() == number+"" ){
						    $("#name").text( $(this).find('name').text());
							$("#sex").text( $(this).find('sex').text());
							$("#id").text( $(this).find('id').text());
							while( PictureIsDone[picture] ){
							    if($(this).find('type').text()=='0'){
							        picture = getRandom(37) + 1 ;
							    }
							    else if( $(this).find('type').text()=='1'){
							        picture = getRandom(7) + 38 ;
							    }
							}
							PictureIsDone[picture] = 1 ;
							$("#photo").html("<img src='img/" + picture + ".jpg'  style='height:500ps' width='600ps' class='dark' />") ;
						}
					});
				}
			});
			var Total = 0;
			for( var i = 0 ; i < 44 ; i++ ){
				Total += PictureIsDone[i] ;
			}
			if( Total == 44 ){
			    $("#next").attr("disabled",true);
			}
		});
    });

    function MoveItem( id , i ){
		if( Math.floor(i / 600) % 2 == 0 ){
			$("#"+id).css("margin-left",i%600+"px");
	    }else{
		    $("#"+id).css("margin-left",600-i%600+"px");
		}
	    setTimeout("MoveItem('" + id + "'," + ( i + 1) + ")" , 20 ) ; 
    }
	
	function getRandom(n){
	    return Math.floor(Math.random()*n) ;
	}