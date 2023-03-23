// ==UserScript==
// @name         CringeShieldX
// @namespace    http://github.com/NurTasin
// @version      1.0 (Beta)
// @description  Filters Out The Cringe (Or Inappropriate) Side Of Youtube
// @author       NurTasin (@nurtasin)
// @match        https://www.youtube.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// @grant        none
// ==/UserScript==

(function () {
    'use strict';
    let PreviousURL = location.href;
    let DB = { "channels": [], "keywords": [] }
    // Change the Database Link According to Your Choice
    const DatabaseLink="https://raw.githubusercontent.com/NurTasin/CringeShieldX/main/tasin-db.json";
    fetch(DatabaseLink, {
        "method": "GET"
    })
        .then(response => response.json())
        .then(data => DB = data)
        .catch(err => console.log(err))
    function ForcePause() {
        document.getElementsByTagName("video")[0].onplay = (elem) => elem.target.pause();
    }

    function RevokeForcePause() {
        document.getElementsByTagName("video")[0].onplay = null;
    }
    function IsTitleUnsafe(title) {
        for(let i=0;i<DB.keywords.length;i++){
            if(title.includes(DB.keywords[i].toLowerCase())){
                return true;
            }
        }
        return false;
    }
    function CringeDetector() {
        setTimeout(() => {
            const ChannelName = document.getElementById("owner").getElementsByClassName("yt-core-attributed-string__link yt-core-attributed-string__link--display-type yt-core-attributed-string__link--call-to-action-color yt-core-attributed-string--link-inherit-color")[0].innerText;
            const VideoTitle = document.querySelector('.ytd-video-primary-info-renderer h1.title') ? document.querySelector('.ytd-video-primary-info-renderer h1.title').textContent.trim() : '';
            if (DB.channels.includes(ChannelName) || IsTitleUnsafe(VideoTitle.toLowerCase())) {
                //blocks the content from playing back
                ForcePause();
                const overlay = document.createElement("div");
                overlay.setAttribute("id", "cringeshieldx-overlay");
                overlay.textContent = "This content is blocked by CringeShieldX";
                overlay.style.position = "fixed";
                overlay.style.top = "0";
                overlay.style.left = "0";
                overlay.style.width = "100%";
                overlay.style.height = "100%";
                overlay.style.backgroundColor = "rgba(0, 0, 0, 0.85)";
                overlay.style.color = "white";
                overlay.style.fontSize = "24px";
                overlay.style.textAlign = "center";
                overlay.style.paddingTop = "50%";
                overlay.style.zIndex = "3000";
                const watchAnywayBtn = document.createElement("button");
                watchAnywayBtn.textContent = "Watch Anyway";
                watchAnywayBtn.style.backgroundColor = "white";
                watchAnywayBtn.style.color = "black";
                watchAnywayBtn.style.border = "none";
                watchAnywayBtn.style.borderRadius = "5px";
                watchAnywayBtn.style.padding = "10px";
                watchAnywayBtn.style.fontSize = "16px";
                watchAnywayBtn.style.cursor = "pointer";
                watchAnywayBtn.onclick=(ev)=>{
                    overlay.remove();
                    RevokeForcePause();
                }
                overlay.appendChild(document.createElement("br"));
                overlay.appendChild(document.createElement("br"));
                overlay.appendChild(watchAnywayBtn);
                document.body.appendChild(overlay);
            }
        }, 3000);
    }
    setInterval(function () {
        if (location.href !== PreviousURL) {
            PreviousURL = location.href;
            const overlay_=document.getElementById("cringeshieldx-overlay")
            if(overlay_){
                overlay_.remove();
            }
            if (location.href.startsWith("https://www.youtube.com/watch?")) {
                CringeDetector();
            }
        }
    }, 1000);
})();