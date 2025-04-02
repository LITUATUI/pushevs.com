// This script will be compiled into the JS bundle automatically.

// Show alternative content when adblock is present 

document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    let ads = document.querySelectorAll(".adsbygoogle");
    
    ads.forEach((ad, index) => {
      // Check if the AdSense container is hidden (blocked)
      let isBlocked = !ad || ad.offsetHeight === 0 || getComputedStyle(ad).display === "none";

      if (isBlocked) {
        console.log("AdBlock detected! Showing alternative ad...");

        let altAd = document.getElementById(`alternative-banner-${index + 1}`);
        if (altAd) {
          altAd.style.display = "block"; // Show alternative ad
        }
      }
    });
  }, 2000); // Delay check to allow AdSense to load (or fail)
});