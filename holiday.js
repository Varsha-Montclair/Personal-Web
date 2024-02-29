var audio = document.getElementById('audio');
var playPauseBTN = document.getElementById('playPauseBTN');
var count = 0;
 function playPause() {
   if (count == 0) {
     count =1;
     audio.play();
     playPauseBTN.innerHTML = "pause &#9208;";
   } else { 
     count=0;
       audio.pause();
     playPauseBTN.innerHTML = "play &#9208;";

     }
 }
//changing paragraph text
var paragraph = $('.para1');
var button=$('.button');
button.on("click",changetext1);
function changetext1(){
paragraph.text("We pray to god by presenting with banana leaves and food that we made, after praying to god only we can touch the food and sweets. ");
}
//changing picture 
var picture = $('.pongal1');
var button=$('.button');
button.on("click",changepicture);
function changepicture(){
picture.attr("src","https://cheatdayrecipe.files.wordpress.com/2020/01/dsc_0201.jpg?w=8286" );
}

var button = $('.Homebutton');
button.on("click",goHome);

function goHome() {
   window.location = ("https://my-personal-website.varsharamachan1.repl.co/");
}