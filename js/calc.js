$(document).ready(function() {
        
//    alert ();
//    confirm ();
//    prompt ();
    
    var a, b, theSum = 0;
    
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
       $("#result_s").html("").append(sum);      
      
        event.preventDefault();
    });
    
    
    
    // Finding Difference
    
    $("#diff").click(function(){
        
        num1 = parseInt($("#num1").val());
        num2 = parseInt($("#num2").val());
        
        diff = diff_(num1, num2);
            
//       Display result
        $("#result_d").html("").append(diff);      
      
        event.preventDefault();
    });
    
    
    // Calculate all
    
    
    $("#all").click(function(){
        
        num1 = parseInt($("#num1").val());
        num2 = parseInt($("#num2").val());
        
        sum = sum_(num1, num2);
        diff = diff_(num1, num2);
            
//       Display result
        $("#result_s").html("").append(sum);
        $("#result_d").html("").append(diff);      
      
        event.preventDefault();
    });
    
    
});