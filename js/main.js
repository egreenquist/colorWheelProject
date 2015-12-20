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
	$(".redAlpha").show();
	$(".yellowDotted").show();
});

$(".yellowDotted").on("click",function(){
	$(".yellowDotted").hide();
	$(".yellowFull").show();
	$(".yellowAlpha").show();
	$(".orangeDotted").show();
});

$(".orangeDotted").on("click",function(){
	$(".orangeDotted").hide();
	$(".orangeFull").show();
	$(".blueDotted").show();
	$(".yellowAlpha").show();
});

$(".blueDotted").on("click",function(){
	$(".blueDotted").hide();
	$(".blueFull").show();
	$(".blueAlpha").show();
	$(".greenDotted").show();
});

$(".greenDotted").on("click",function(){
	$(".greenDotted").hide();
	$(".greenFull").show();
	$(".greenAlpha").show();
	$(".purpleDotted").show();
	$(".blueAlpha").show();
	$(".redAlpha").show();

});

$(".purpleDotted").on("click",function(){
	$(".purpleDotted").hide();
	$(".purpleFull").show();
	$(".purpleAlpha").show();
	$(".redAlpha").show();
	$(".blueAlpha").show();
	$(".orangeAlpha").show();
	$(".yellowAlpha").show();
	$(".head").show();
	$(".foot").show();
});

/***************
Draggables
****************/

$(function(){
    $(".js-draggable").draggable({
    stack:".js-draggable",
    });
});

/***************
Droppables
****************/

//counting ifs

/*$(document).ready(function(){
   
    var counter=0;

    function check()
    {
    	if(counter == 4){ 
			$(".orangeDotted").hide();
			$(".orangeFull").show();
			$(".blueDotted").show();
			$(".yellowAlpha").show();
    	}else if(counter == 6){
			$(".greenDotted").hide();
			$(".greenFull").show();
			$(".greenAlpha").show();
			$(".purpleDotted").show();
			$(".blueAlpha").show();
			$(".redAlpha").show();
    	}else if(counter > 6){
    		$(".purpleDotted").hide();
			$(".purpleFull").show();
			$(".purpleAlpha").show();
			$(".redAlpha").show();
			$(".blueAlpha").show();
			$(".orangeAlpha").show();
			$(".yellowAlpha").show();
			$(".head").show();
			$(".foot").show();
    	}else{
    		//do nothing
    	}
    };
    function count()  
    {
    	counter = counter + 1    
    }
});
*/

// sets droppable

$(".drop").droppable(
{
    drop: function(event, ui) 
    {
      // after the draggable is droped, hides it with a hide() effect
    	ui.draggable.hide(1000);
    	//count();
    	//check(); 
    }
});

$(".drop").droppable({
	hoverClass: "dropHover",
});

//$(".drop .js-draggable").length;

//console.log(counter);

/********************
QUESTION : As per the above, I am trying to add a counter, so that each time a draggable div is dropped, + 1 is added to the counter. When the counter reaches certain values, certain divs are hideden & shown, but what I have set up isn't working. 

It saying Counter and Count are not defined. I'm not sue what to do with that info from the console.

I've been attempting to repurpose code from here: 

http://stackoverflow.com/questions/28232376/how-to-count-the-draggable-elements-in-in-a-droppable-area
*********************/
