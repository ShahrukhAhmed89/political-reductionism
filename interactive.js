$(document).ready(function(){
    $(".btn1").click(function(){
    	
        $(".div1").toggle('');
         
       
    });

       $(".btn2").click(function(){
    	
        $(".div2").toggle('');
         
       
    });

          $(".btn3").click(function(){
    	
        $(".div3").toggle('');
         
       
    });
             $(".btn4").click(function(){
    	
        $(".div4").toggle('');
         
       
    });

    $("button").click(function () {
            $(this).text(function(i, v){
               return v === 'Click to show Reductionist Argument' ? 'Click to show Contextual Argument' : 'Click to show Reductionist Argument'
            })
        });
});