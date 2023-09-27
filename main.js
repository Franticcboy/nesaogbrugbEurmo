function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);
    canvas = createCanvas(550,500);
    canvas.position(560,150);
poseNet= ml5.poseNet(video,modelloaded);
poseNet.on('pose',gotposes);

}
function draw() {
background("red");

}
function modelloaded(){
    console.log("poseNet is initialized");

}
function gotposes(result){
    if(result.length>0){
        console.log(result);
    }
}
