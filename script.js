let ChangeDetectorIntervalID;
let PreviousURL = location.href;

function ForcePause() {
    document.getElementsByTagName("video")[0].onplay = (elem) => elem.target.pause();
}

function RevokeForcePause() {
    document.getElementsByTagName("video")[0].onplay = null;
}

function CringeDetector() {
    setTimeout(()=>{
        const ChannelName = document.getElementById("owner").getElementsByClassName("yt-core-attributed-string__link yt-core-attributed-string__link--display-type yt-core-attributed-string__link--call-to-action-color yt-core-attributed-string--link-inherit-color")[0].innerText;
        const VideoTitle = document.querySelector('.ytd-video-primary-info-renderer h1.title') ? document.querySelector('.ytd-video-primary-info-renderer h1.title').textContent.trim() : '';
        console.log(`Title: ${VideoTitle}`);
        console.log(`Channel: ${ChannelName}`);
    },3000);
}

//Starts The Process
setInterval(function () {
    if (location.href !== PreviousURL) {
        PreviousURL = location.href;
        if(location.href.startsWith("https://www.youtube.com/watch?")){
            CringeDetector();
        }
    } else if (document.hasFocus() && document.activeElement.tagName === 'IFRAME') {
        console.log('The user has clicked on the video');
    }
}, 1000);
