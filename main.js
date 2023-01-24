status="";
function setup(){
    canvas=createCanvas(350,350);
    canvas.center();
    video= createCapture(VIDEO)
    video.size(350,350);
    video.hide();
}
function start(){
    objectDetector=ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML="Status: Detecting Objects";
    input_box=document.getElementById("input").value;
}
function modelLoaded(){
    console.log("MODEL LOADED!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
    status=true;
}
function draw(){
    image(video,0,0,350,350);
}

