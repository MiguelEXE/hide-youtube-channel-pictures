// ==UserScript==
// @name         Hide YouTube Channel Pictures
// @version      1.0.1
// @description  Hide youtube channel pictures
// @author       MiguelEX3
// @match        https://www.youtube.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// @supportURL   https://github.com/MiguelEXE/hide-youtube-channel-pictures/issues
// @homepage     https://github.com/MiguelEXE/hide-youtube-channel-pictures
// @downloadURL  https://github.com/MiguelEXE/hide-youtube-channel-pictures/raw/master/hide-youtube-channel-pictures.user.js
// @updateURL    https://github.com/MiguelEXE/hide-youtube-channel-pictures/raw/master/hide-youtube-channel-pictures.user.js
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';

    let observer = new MutationObserver(function(mutations){
        mutations.forEach(function(mutation){
            for(const node of mutation.addedNodes){
                if(node.id === "avatar"){
                    console.debug("Channel avatar: ", node);
                    node.style.display = "none";
                }
            }
            if(mutation.target.id === "avatar"){
                console.debug("Channel avatar: ", mutation.target);
                mutation.target.style.display = "none";
            }
        });
    });
    observer.observe(document, {subtree: true, childList: true});
})();
