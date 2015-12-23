$(document).ready(function(){
	/***************
	Start
	****************/
	$(".head").hide();
	$(".foot").hide();

	$(".redFull").hide();
	$(".redAlpha").hide();

	$(".orangeDotted").hide();
	$(".orangeFull").hide();
	$(".orangeAlpha").hide();

	$(".yellowDotted").hide();
	$(".yellowFull").hide();
	$(".yellowAlpha").hide();

	$(".greenDotted").hide();
	$(".greenFull").hide();
	$(".greenAlpha").hide();

	$(".blueDotted").hide();
	$(".blueFull").hide();
	$(".blueAlpha").hide();

	$(".purpleDotted").hide();
	$(".purpleFull").hide();
	$(".purpleAlpha").hide();

	/***************
	on Clicks
	****************/

	$(".redDotted").on("click",function(){
		$(".redDotted").hide();
		$(".redFull").show();
		$(".yellowDotted").show();
	});

	$(".yellowDotted").on("click",function(){
		$(".yellowDotted").hide();
		$(".yellowFull").show();
		$(".yellowAlpha").show();
		$(".redAlpha").show();
		$(".orangeDotted").show();
	});

	$(".blueDotted").on("click",function(){
		$(".blueDotted").hide();
		$(".blueFull").show();
		$(".blueAlpha").show();
		$(".greenDotted").show();
		$(".yellowAlpha").show();
	});

	$(".playAgain").on("click",function(){
		location.reload();
	});

	/*
	$(".orangeDotted").on("click",function(){
		// $(".orangeDotted").hide();
		$(".orangeFull").show();
		$(".blueDotted").show();
	});
	*/

	/*
	$(".greenDotted").on("click",function(){
		// $(".greenDotted").hide();
		$(".greenFull").show();
		$(".greenAlpha").show();
		$(".purpleDotted").show();
		$(".blueAlpha").show();
		$(".redAlpha").show();
	});
	*/

	/*
	$(".purpleDotted").on("click",function(){
		// $(".purpleDotted").hide();
		$(".purpleFull").show();
		$(".purpleAlpha").show();
		$(".redAlpha").show();
		$(".blueAlpha").show();
		$(".orangeAlpha").show();
		$(".yellowAlpha").show();
		$(".head").show();
		$(".foot").show();
	});
	*/

	var counter=0;

  	function check()
  	{
  		if(counter == 2){ 
			$(".orangeDotted").hide();
			$(".orangeFull").show();
			$(".blueDotted").show();
  		}else if(counter == 4){
			$(".greenDotted").hide();
			$(".greenFull").show();
			$(".purpleDotted").show();
			$(".redAlpha").show();
			$(".blueAlpha").show();
  		}else if(counter == 6){
			$(".purpleDotted").hide();
			$(".purpleFull").show();
			$(".purpleAlpha").show();
			$(".redAlpha").show();
			$(".blueAlpha").show();
			$(".orangeAlpha").show();
			$(".yellowAlpha").show();
			$(".greenAlpha").show();
			$(".head").show();
			$(".foot").show();
  		}else{
  			//do nothing
  		}
  	};
  
  	function count()  
  	{
  		counter = counter + 1;
  		//console.log("The counter value is: " + counter);   
  	}

  	$(".js-draggable").draggable({
    	stack:".js-draggable"
  	});

  	$(".drop").droppable(
	{		
		hoverClass: "dropHover",
	    drop: function(event, ui) 
	    {
	      // after the draggable is droped, 
	      // hides it with a hide() effect
	    	ui.draggable.hide(500,function(){
	    		count();
	    		check(); 
	    	});
	    }
	});

});
