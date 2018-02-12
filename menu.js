document.getElementById("Open").addEventListener("click", function () {
   document.getElementById("menu").style.left = "0px"; 
    
});

document.getElementById("Close").addEventListener("click", function(){
   document.getElementById("menu").style.left = "-110px"; 
    
});

document.getElementById("Make BG").addEventListener("click", function(){
    document.getElementById("BG").style.backgroundImage = document.getElementById("zoom").style.backgroundImage;
});

document.getElementById("Make BG").addEventListener("click", function(){
   document.getElementById("bg").style.backgroundImage = document.getElementById("zoom").style.backgroundImage; 
});

document.getElementById("Reset").addEventListener("click", function(){
    document.getElementById("bg").style.backgroundImage = "";
});

document.getElementById("Show App").addEventListener("click", function(){
    document.getElementById("app1").style.display = "block";
});

document.getElementById("Hide App").addEventListener("click", function(){
   document.getElementById("app1").style.display = "none"; 
});