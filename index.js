var h = 70;
var w = 100;

document.getElementById("BG1").addEventListener("click", function(){
    document.getElementById("ch1").style.backgroundImage = "url(imgs/i1.jpg)";
    document.getElementById("ch2").style.backgroundImage = "url(imgs/i2.jpg)";
    document.getElementById("ch3").style.backgroundImage = "url(imgs/i3.jpg)";
});

document.getElementById("BG2").addEventListener("click", function(){
    document.getElementById("ch1").style.backgroundImage = "url(imgs/i4.jpg)";
    document.getElementById("ch2").style.backgroundImage = "url(imgs/i5.jpg)";
    document.getElementById("ch3").style.backgroundImage = "url(imgs/i6.jpg)";
});

document.getElementById("BG3").addEventListener("click", function(){
    document.getElementById("ch1").style.backgroundImage = "url(imgs/i7.jpg)";
    document.getElementById("ch2").style.backgroundImage = "url(imgs/i8.jpg)";
    document.getElementById("ch3").style.backgroundImage = "url(imgs/i9.jpg)";
});

document.getElementById("BG4").addEventListener("click", function(){
    document.getElementById("ch1").style.backgroundImage = "url(imgs/i10.jpg)";
    document.getElementById("ch2").style.backgroundImage = "url(imgs/i11.jpg)";
    document.getElementById("ch3").style.backgroundImage = "url(imgs/i12.jpg)";
});

document.getElementById("ch1").addEventListener("mouseenter", function(){
   document.getElementById("zoom").style.backgroundImage = document.getElementById("ch1").style.backgroundImage; 
});

document.getElementById("ch2").addEventListener("mouseenter", function(){
   document.getElementById("zoom").style.backgroundImage = document.getElementById("ch2").style.backgroundImage; 
});

document.getElementById("ch3").addEventListener("mouseenter", function(){
   document.getElementById("zoom").style.backgroundImage = document.getElementById("ch3").style.backgroundImage; 
});

document.getElementById("zoom").addEventListener("click", function(){
   document.getElementById("zoomcontrols").style.display = "block"; 
});

document.getElementById("plus").addEventListener("click", function(){
    h = h + (h*0.07);
    w = w + (w*0.1);
   document.getElementById("zoom").style.height = h+"vh";
    document.getElementById("zoom").style.width = w+"vw";
});

document.getElementById("minus").addEventListener("click", function(){
    h = h - (h*0.07);
    w = w - (w*0.1);
   document.getElementById("zoom").style.height = h+"vh";
    document.getElementById("zoom").style.width = w+"vw";
});













                                                  