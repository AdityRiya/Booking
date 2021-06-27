function flight(){
           
    var x = document.getElementById("flight");
        if (x.style.display === "none") {
            x.style.display = "block";
            document.getElementById("bus").style.display = "none";
            document.getElementById("hotel").style.display = "none";
            document.getElementById("tour").style.display = "none";
            document.getElementById("visa").style.display = "none";
            
        } else {
            x.style.display = "block";
            document.getElementById("bus").style.display = "none";
            document.getElementById("hotel").style.display = "none";
            document.getElementById("tour").style.display = "none";
            document.getElementById("visa").style.display = "none";
        }
    }
    function hotel(){
   
            var y = document.getElementById("hotel");
                if (y.style.display === "none") {
                    y.style.display = "block";
                    document.getElementById("bus").style.display = "none";
                    document.getElementById("flight").style.display = "none";
                    document.getElementById("tour").style.display = "none";
                    document.getElementById("visa").style.display = "none";
                } else {
                    y.style.display = "block";
                    document.getElementById("bus").style.display = "none";
                    document.getElementById("flight").style.display = "none";
                    document.getElementById("tour").style.display = "none";
                    document.getElementById("visa").style.display = "none";
                }
   }
   function bus(){
   
   var z = document.getElementById("bus");
       if (z.style.display === "none") {
           z.style.display = "block";
           document.getElementById("hotel").style.display = "none";
           document.getElementById("flight").style.display = "none";
           document.getElementById("tour").style.display = "none";
           document.getElementById("visa").style.display = "none";
       } else {
           z.style.display = "block";
           document.getElementById("hotel").style.display = "none";
           document.getElementById("flight").style.display = "none";
           document.getElementById("tour").style.display = "none";
           document.getElementById("visa").style.display = "none";
       }
}
function tour(){
   
   var a = document.getElementById("tour");
       if (a.style.display === "none") {
           a.style.display = "block";
           document.getElementById("bus").style.display = "none";
           document.getElementById("flight").style.display = "none";
           document.getElementById("hotel").style.display = "none";
           document.getElementById("visa").style.display = "none";
       } else {
           a.style.display = "block";
           document.getElementById("bus").style.display = "none";
           document.getElementById("flight").style.display = "none";
           document.getElementById("hotel").style.display = "none";
           document.getElementById("visa").style.display = "none";
       }
}

function visa(){
   
   var b = document.getElementById("visa");
       if (b.style.display === "none") {
           b.style.display = "block";
           document.getElementById("bus").style.display = "none";
           document.getElementById("flight").style.display = "none";
           document.getElementById("tour").style.display = "none";
           document.getElementById("hotel").style.display = "none";
       } else {
           b.style.display = "block";
           document.getElementById("bus").style.display = "none";
           document.getElementById("flight").style.display = "none";
           document.getElementById("tour").style.display = "none";
           document.getElementById("hotel").style.display = "none";
       }
}