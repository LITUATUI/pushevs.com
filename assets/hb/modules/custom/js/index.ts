// This script will be compiled into the JS bundle automatically.

/* ------------- Disable Disqus ads ----------------------- */	

setTimeout(function () {
	var disqus = document.querySelector('#disqus_thread');
  
	if (disqus) {
	  var adFound = false;
  
	  const removead = () => {
		let ad = disqus.querySelector('iframe');
		if (ad) {
		  ad.remove();
		  adFound = true;
		} else {
		  setTimeout(removead, 500);
		}
	  };
  
	  setTimeout(function () {
		removead();
	  }, 1000);
	}
  }, 1000);