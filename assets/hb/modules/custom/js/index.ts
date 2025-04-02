// This script will be compiled into the JS bundle automatically.

// Show alternative content when adblock is present 

document.addEventListener("DOMContentLoaded", function () {
    let adScript = document.createElement("script");
    adScript.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
    
    adScript.onerror = function () {
      let adBlockMessage = document.getElementById("alternative-banner");
      if (adBlockMessage) {
        adBlockMessage.style.display = "block";
      }
    };
  
    document.body.appendChild(adScript);
  });  