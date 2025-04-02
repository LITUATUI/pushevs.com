// This script will be compiled into the JS bundle automatically.

// Show alternative content when adblock is present 

document.addEventListener("DOMContentLoaded", function () {
  let adScript = document.createElement("script");
  adScript.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";

  adScript.onerror = function () {
    console.log("AdBlock detected! Showing alternative ads...");
    
    // Find all blocked AdSense ads and show alternatives
    let ads = document.querySelectorAll(".adsbygoogle");
    ads.forEach((ad, index) => {
      let altAd = document.getElementById(`alternative-banner-${index + 1}`);
      if (altAd) {
        altAd.style.display = "block";
        ad.style.display = "none"; // Hide blocked AdSense ad
      }
    });
  };

  document.body.appendChild(adScript);
});