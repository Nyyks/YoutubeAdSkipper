// ==UserScript==
// @name         YouTube Ad skipper
// @version      1.0.0
// @description  Skipps youtube ads.
// @author       Janik313 [github.com/Janik313]
// @match	     www.youtube.com/*
// @grant        none
// @namespace    https://github.com/Janik313/
// ==/UserScript==

(function() {
    'use strict';
    var skipInt;
    var log=function(msg){
       // unsafeWindow.console.log (msg);
    };
    var skipAd=function(){
        //ytp-ad-preview-text
        //ytp-ad-skip-button
        var skipbtn=document.querySelector(".ytp-ad-skip-button.ytp-button")||document.querySelector(".videoAdUiSkipButton ");
        //var skipbtn=document.querySelector(".ytp-ad-skip-button ")||document.querySelector(".videoAdUiSkipButton ");
        if(skipbtn){
           skipbtn=document.querySelector(".ytp-ad-skip-button.ytp-button")||document.querySelector(".videoAdUiSkipButton ");
           log("skip");
           skipbtn.click();
           if(skipInt) {clearTimeout(skipInt);}
           skipInt=setTimeout(skipAd,500);
         }else{
              log("checking...");
              if(skipInt) {clearTimeout(skipInt);}
              skipInt=setTimeout(skipAd,500);
         }
    };
    skipAd();

})();