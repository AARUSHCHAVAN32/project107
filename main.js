function startClassifictaion() {
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/XSipLvQmK/model.json',modelReady);
}
function modelReady() {
    classifier.classify(gotResult);
}
var dog= 0
var cat= 0
var cow= 0
var lion= 0
function gotResult(error, results) {
    if(error){
        console.log(error);
    }
    else{
        document.getElementById("voice").innerHTML="detected voice is of "+ results[0].label
        document.getElementById("detected").innerHTML="detected dog-"+dog+" detected cat-"+cat+" detected cow-"+cow+" detected lion-"+lion
        console.log(results);
        img=document.getElementById("image");
        if(results[0].label=="Barking")
        {
        img.src="bark.gif"
        dog=dog+1
        }
        else if(results[0].label=="Meowing")
        {
            img.src="meow.gif"
            cat=cat+1
        }
        else if(results[0].label=="Mooing")
        {
            img.src="cow_gif.gif"
            cow=cow+1
        }
        else if(results[0].label=="Roar")
        {
            img.src="lion.gif"
            lion=lion+1
        }
        else if(results[0].label=="Background Noise")
        {
            img.src="https://shravaripatil.github.io/Sound_controlled_animals/listen.gif"
        }
    }
}
