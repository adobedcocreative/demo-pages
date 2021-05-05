var loadAdditionalContent = function(overlayDuration){
  overlayDuration = overlayDuration ? overlayDuration : 3;
  if(overlayDuration < 15) overlayDuration *= 1000;
  ad.layers.overlayContainer.style.webkitTransition = 'opacity ease-out 0.3s';
  ad.layers.overlayContainer.style.transition = 'opacity ease-out 0.3s';
  ad.layers.overlayContainer.innerHTML = '<div id="overlayImage" class="asset" style="position:absolute;top:0px;left:0px;width:inherit;height:inherit;"><img src="' + adContent[0].overlayImage + '" /></div>'+
  ad.update();
  ad.loadAssets(adData.overlayImpressionTracker, function(){});
  setTimeout(function(){
    setTimeout(function(){
      ad.layers.logo.style.opacity = 1;
      setTimeout(function(){
        ad.layers.overlayContainer.style.visibility = 'hidden';
        animateAd();
      }, 300);
    }, overlayDuration);
  }, 500);

}
