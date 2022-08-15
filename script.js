var checks1= document.getElementById("checkbox1")
var submit= document.getElementById("submit")
// var image= document.getElementsByClassName("popbox")
var audio= document.getElementById("audio")
var audio2= document.getElementById("audio2")
var center2= document.querySelector(".center2")
var image= document.querySelector(".popbox")
var image2= document.querySelector(".popbox2")
var text= document.querySelector(".text")


function done(){
    if(checks1.checked ==true ){
       center2.style.display="none";
       text.style.display="none"
        image.style.display="block";
        audio.play()
    }
    else{

        alert("jyada hoshiyar na bno beta ..... box pe click karo")
    }
}

function done2(){
         image2.style.display="block";
         audio.pause();
         audio2.play();

}