// alert("working perfect");
var randomNum1=Math.floor(Math.random()*6)+1;

var randomDiceImage ="dice"+randomNum1+".png";

var randomImageSource ="images/"+randomDiceImage;

var image1=document.querySelectorAll("img")[0];

image1.setAttribute("src",randomImageSource);


var randomNum2=Math.floor(Math.random()*6)+1;

var randomDiceImage2 ="dice"+randomNum2+".png";

var randomImageSource2="images/"+randomDiceImage2;

var image2=document.querySelectorAll("img")[1];

image2.setAttribute("src",randomImageSource2)


if(randomNum1>randomNum2){
        document.querySelector("h1").innerHTML="🏆player1 wins!";
}
else if(randomNum2>randomNum1){
        document.querySelector("h1").innerHTML="🏆player2 wins!";
}
else{
        document.querySelector("h1").innerHTML="😯Draw";
}
