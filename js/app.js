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


let iTitle = 0;
let speedTitle = 500;
let title = '6lyxt';

let iDesc = 0;
let speedDesc = 250;
let desc = 'web developer';

function typeWriterTitle() {
    if (iTitle < title.length) {
        document.getElementById('title').innerHTML += title.charAt(iTitle);
        iTitle++;
        setTimeout(typeWriterTitle, speedTitle);
    }
}

function typeWriterDesc() {
    if (iDesc < desc.length) {
        document.getElementById('desc').innerHTML += desc.charAt(iDesc);
        iDesc++;
        setTimeout(typeWriterDesc, speedDesc);
    }
}

var intervalID = window.setInterval(randomText, 10000);

function randomText(){
    var strs = ['founder & backend dev @ zap/', 'web dev @ cic ebusiness/', 'check out my github!']  
    var randomStr = strs[Math.floor(Math.random() * strs.length)];
    document.getElementById('rawry').innerText = randomStr;
}

window.onload = () => {
    typeWriterTitle();
    typeWriterDesc();
    randomText();
}
