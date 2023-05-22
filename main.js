difference = 0;
leftWristX = 0;
rightWristX = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(400,400);

    canvas = createCanvas(400,400);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded(){
    console.log('Pose net is intialized.');
}
function gotPoses(results){
    if (results.length>0){
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);

        console.log("Left Wrist X = " + leftWristX + "Right Wrist X = " + rightWristX + "Difference = " + difference);
    }
}
function draw(){
    background('white');

    document.getElementById("font_size").innerHTML="Font Size of the Text is " + difference + "px";

    fill('red');
    textSize(difference);
    text('Avaneesh', 50, 400);
}