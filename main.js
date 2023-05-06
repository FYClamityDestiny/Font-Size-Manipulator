function preload(){

}
wristrx = 0;
wristlx = 0;
difference = 0;
function setup(){
canvas = createCanvas(400,400);
canvas.position(900,150);
video = createCapture(VIDEO);
video.size(400,400)
video.position(250,150)
posenet = ml5.poseNet(video,modelLoaded)
posenet.on("pose",gotPoses)
}
function draw(){
background("#ff7a8c");
text("Lorem ipsum ",50,110);
text("dolor amet. ",50,340);
textSize(difference);
}
function modelLoaded(){
console.log("In this web session, the JS library Posenet has been imported, loaded and has now initialized online.")
}
function gotPoses(results){
        if(results.length>0){
        console.log(results);
wristrx = results[0].pose.rightWrist.x;
wristlx = results[0].pose.leftWrist.x;
difference = floor(wristlx - wristrx);
        }
}