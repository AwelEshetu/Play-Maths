// read comments for more information 
﻿
﻿
﻿var t;
var operators = ['+', '-', '*', '/']; 
var answerSpaces = ['result-bubble', 'result-bubble1', 'result-bubble2']; 
function changeProducts() {
            
            queue = $("#result-bubble2").queue('fx');
            var randOperator = operators[Math.floor(Math.random() * (operators.length))];
            var randanswerSpaces = answerSpaces[Math.floor(Math.random() * (answerSpaces.length))];
            console.log(Math.floor(Math.random() * (answerSpaces.length)));
            
        	if (queue && queue.length === 0) {
                $("#operand1-bubble").show();
                $("#operand2-bubble").show();
				$("#operand1-bubble").html(Math.floor((Math.random() * 20) + 1));
            	$("#operand2-bubble").html(Math.floor((Math.random() * 20) + 1));
            	
            	if(randOperator == '+')
            	{	
            		$('#' + randanswerSpaces).html(parseInt($("#operand1-bubble").text()) +  parseInt($("#operand2-bubble").text())); 
            		$("#operator-bubble").html('+');
            	} 
            	else if(randOperator == '-')
            	{	
            		$('#' + randanswerSpaces).html(parseInt($("#operand1-bubble").text()) -  parseInt($("#operand2-bubble").text()));  
            		$("#operator-bubble").html('-');
            	} 
            	else if(randOperator == '*')
            	{	
            		$('#' + randanswerSpaces).html(parseInt($("#operand1-bubble").text()) *  parseInt($("#operand2-bubble").text()));  
            		$("#operator-bubble").html('&times');
            	} 
            	else if(randOperator == '/')
            	{	
            		$('#' + randanswerSpaces).html((parseInt($("#operand1-bubble").text()) /  parseInt($("#operand2-bubble").text())).toFixed(1));  
            		$("#operator-bubble").html('&divide');
            	} 

                //putValuesOnRemainingDivs(index, operator, operant1, operand2);
            	//$("#result-bubble1").html(Math.floor((Math.random() * 20) + 1));  
				//$("#result-bubble2").html(Math.floor((Math.random() * 20) + 1));


        		$("#operand1-bubble").animate({top:-600},{duration:5000});
        		$("#operand1-bubble").fadeOut();
	        	$("#operand1-bubble").animate({top:100});
	        	$("#operand1-bubble").fadeIn(); 


	        	$("#operand2-bubble").animate({top:-600},{duration:5000});
        		$("#operand2-bubble").fadeOut();
	        	$("#operand2-bubble").animate({top:100});
	        	$("#operand2-bubble").fadeIn(); 

	        	$("#result-bubble").animate({top:-600},{duration:5000});
        		$("#result-bubble").fadeOut();
	        	$("#result-bubble").animate({top:100});
	        	$("#result-bubble").fadeIn();    

	        	$("#result-bubble1").animate({top:-700},{duration:5000});
        		$("#result-bubble1").fadeOut();
	        	$("#result-bubble1").animate({top:200});
	        	$("#result-bubble1").fadeIn(); 

	        	$("#result-bubble2").animate({top:-900},{duration:5000});
        		$("#result-bubble2").fadeOut();
	        	$("#result-bubble2").animate({top:300});
	        	$("#result-bubble2").fadeIn(); 



                $("#operand1-bubble").click(function() {
                $(this).stop(false, true, false);
                $(this).hide("explode", {
                    pieces: 500
                }, 250);
                
            }); 
        	}  
            
            
} 

$(document).ready(function () {              	
    t = setInterval(changeProducts, 100);	
});
























function putValuesOnRemainingDivs(index, operator, operand1, operand2){
    var correctAnswer = null;
    if(index == 0){
        if(operator=='+')
        {
            correctAnswer = operand1 + operand2;
            if(operand1 <= operand2){
                    $("#result-bubble1").html(correctAnswer - Math.floor(Math.random() * (operand1 + 1) + 1));
                    $("#result-bubble2").html(correctAnswer - Math.floor(Math.random() * (operand2 + 1) + operand1));
            }
            else
            {
                    $("#result-bubble1").html(correctAnswer - Math.floor(Math.random() * (operand2 + 1) + 1));
                    $("#result-bubble2").html(correctAnswer - Math.floor(Math.random() * (operand1 + 1) + operand2));
            }
        }
    }
}

