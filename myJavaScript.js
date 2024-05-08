function setup(){
    vide = createCapture(VIDEO)
    vide.size(1000, 733)
    vide.position(100, 150)

    canve = createCanvas(1000, 733)
    canve.position(1200, 150)

    possum = ml5.poseNet(vide, IAmNotInTheMood)
    possum.on("pose", IGotYourPosesComeAndCatchMe)
}
function draw(){
    background("#FFA500")
}

function IAmNotInTheMood(){
    console.warn("Go away, or else bad things will come for you... just saying :o")
}

function IGotYourPosesComeAndCatchMe(results){
    if(results.length > 0){
        //something will happen here... we just don't know what
    }
}