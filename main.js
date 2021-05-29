eye_leftX = 0;
eye_leftY = 0;

eye_rightX = 0;
eye_rightY = 0;

mouthX = 0;
mouthY = 0;

hairX = 0;
hairY = 0;


function preload(){
    IronMan = loadImage('IronMan.png');
}

function setup(){
    Canvas = createCanvas(400,300);
    Canvas.center();
    Video = createCapture(VIDEO);
    Video.size(400,300);
    Video.hide();

    pose_net = ml5.poseNet(Video,modelLoaded);
    pose_net.on('pose', gotPoses);
}

function modelLoaded(){
    console.log("Model Loaded");
}

function gotPoses(result){
        if(result.length>0){
            console.log(result);
            console.log("nose x = " + result[0].pose.nose.x);
            console.log("nose y = " + result[0].pose.nose.y);
            eye_leftX = result[0].pose.leftEye.x - 20;
            eye_leftY = result[0].pose.leftEye.y - 15;

            eye_rightX = result[0].pose.rightEye.x - 20;
            eye_rightY = result[0].pose.rightEye.y - 15;

        
        }
        else{
            console.log("person not detected")
        }
}

function take_snapshot(){
    save('img.png');
}
function draw(){
    image(Video,0,0,400,300);
    fill(0,0,0);
    stroke(0,0,0);
    

    image(IronMan,eye_leftX - 115,eye_rightY - 100,220,220);
}
