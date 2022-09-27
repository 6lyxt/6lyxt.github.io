var playing = false;
function playMusic() {
    var video = document.getElementById('video');
    video.volume = 0.05;
    if (playing == false) {
        document.getElementsByClassName('muted')[0].innerText = '';
        video.play();
        video.volume = 0.007;
        playing = true;
        video.style = "filter: brightness(100%) blur(0px)";
    } else {
        video.pause();
    }
    video.addEventListener("ended", function() {
        video.currentTime = 0;
        video.play();
    })
}

var intervalID = window.setInterval(randomText, 10000);

function randomText(){
    var strs = ['whats up?', 'step aside or get wet' , 'kush kein haze' , 'tilidin in meinem blut', 'eyes red', 'switche auf die fast lane', 'fuck sleep !', 'cold dreams & dirty sprite', 'fsociety', 'fuckthepopulation', 'fuck love', 'lost and tired'];
    var randomStr = strs[Math.floor(Math.random() * strs.length)];
    document.getElementById('rawry').innerText = randomStr;
}
