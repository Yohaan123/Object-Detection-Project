status =  "";
object = [];

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
        object = result;
    }
}

function draw(){
    if(status != ""){
       for(i = 0;i < object.length;i++){
          fill(red);
          percent = floor(object[i].confidence*100);
          label = object[i].label;
          x = object[i].x;
          y = object[i].y;
          text(label + " " + percent + "%",x + 15,y + 15);
          noFill();
          stroke(red);
          rect(object[i].x, object[i].y, object[i].width, object[i].height);
       }
    }
}