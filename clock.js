status =  "";

function preload(){
    img = loadImage("clock.jpg");
}

function setup(){
    canvas = createCanvas();
    canvas.center();
    objectDetector = ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("status").innerHTML = "status : Detecting Objects"
}

function modelLoaded(){
    console.log("model Loaded");
    status = true;

}

function gotResults(error , result){
    if(error){
        console.log(error);
    }
    else{
        console.log(result);
    }
}