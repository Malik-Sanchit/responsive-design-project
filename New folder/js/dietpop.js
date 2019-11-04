var loss=function(){
    // Get the modal
    var modal = document.getElementById('fatLossModal');

    // Get the button that opens the modal
    var btn = document.getElementById("fatLoss");
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks the button, open the modal 
        modal.style.display = "block";
    span.onclick = function() {
    modal.style.display = "none";
    }
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
             modal.style.display = "none";
        }
    }
    
}

var gain=function(){

    var modal = document.getElementById('gainModal');

    // Get the button that opens the modal
    var btn = document.getElementById("gain");
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[1];

    // When the user clicks the button, open the modal 
        modal.style.display = "block";
    span.onclick = function() {
    modal.style.display = "none";
    }
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
             modal.style.display = "none";
        }
    }
    
}

var veg=function(){
    var modal = document.getElementById('vegProteinModal');

    // Get the button that opens the modal
    var btn = document.getElementById("vegProtein");
    var span = document.getElementsByClassName("close")[2];

    // When the user clicks the button, open the modal 
        modal.style.display = "block";
    span.onclick = function() {
    modal.style.display = "none";
    }
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
             modal.style.display = "none";
        }
    }
   
}



window.onload=function(){
    document.getElementById("fatLoss").onclick=loss;
    document.getElementById("Gain").onclick=gain;
    document.getElementById("vegProtein").onclick=veg;
    
    
}


