$(document).ready(function() {
        
//    alert ();
//    confirm ();
//    prompt ();
    
    var a, b, theSum, num1, num2, a_ = 0;
    
    // Summation function
    function sum_(a, b) {        
        theSum = a + b;
        return (theSum);        
    }
    
    // Difference function
    function diff_(a, b) {        
        theDiff = a - b;
        return (theDiff);        
    }
    
    // Finding Sum
    
    $("#sum").click(function(){
        
        num1 = parseInt($("#num1").val());
        num2 = parseInt($("#num2").val());
        
        sum = sum_(num1, num2);
        
        console.log("num1", num1, "num2", num2, "sum", sum);

        
//       Display result
       $("#result_").html("").append(sum);      
      
        event.preventDefault();
    });
    
//    Displaying value of button on result place
    
    $("#one").click(function(){
        a_ = parseInt($("#one").val());
        
        $("#result_").append(a_);  
        
    });
    
    $("#two").click(function(){
        a_ = parseInt($("#two").val());
        
        $("#result_").append(a_);  
        
    });
    
     $("#three").click(function(){
        a_ = parseInt($("#three").val());
        
        $("#result_").append(a_);  
        
    });
    
    
//    Extracting value from rsult and clearing
    
    $("#plus").click(function(){
        
        num1 = parseInt($("#result_").html());
        
        console.log (num1, "num1");
        $("#num1").append(num1);  
        
        $("#result_").html("");
        
    });
    
    $("#equals").click(function(){

        num2 = parseInt($("#result_").html());

        console.log (num2, "num2");
        $("#num2").append(num2);  

    //            Clear values
        $("#result_").html("");

    //            Set Value in result bar
        sum = sum_(num1,num2);

        $("#result_").append(sum);

    });
    
//    Clear button
    $("#clr").click(function(){
            
        $(".res_").html("");
        
    });
    
});