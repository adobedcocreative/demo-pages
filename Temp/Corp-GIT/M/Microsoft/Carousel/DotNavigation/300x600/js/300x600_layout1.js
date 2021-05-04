var loadAdditionalContent = function(overlayDuration){
  overlayDuration = overlayDuration ? overlayDuration : 3;
  if(overlayDuration < 15) overlayDuration *= 1000;
  var overlayHeadline = adContent[0].overlayDescription.split('|')[4].split('^')[0];
  var overlaySubHeadline = adContent[0].overlayDescription.split('|')[4].split('^')[1];
  var overlayCTAColor = adContent[0].overlayDescription.split('|')[4].split('^').length >= 4 ? adContent[0].overlayDescription.split('|')[4].split('^')[2] : '#000';
  // ad.layers.backgroundColor.style.backgroundColor = '#F1F1F1';
  ad.layers.overlayContainer.style.webkitTransition = 'opacity ease-out 0.3s';
  ad.layers.overlayContainer.style.transition = 'opacity ease-out 0.3s';
  ad.layers.overlayContainer.innerHTML = '<div id="overlayImage" class="asset" style="position:absolute;top:0px;left:0px;width:inherit;height:inherit;"><img src="' + adContent[0].overlayImage + '" /></div>'+
  '<div id="overlayHeadline" class="text-left SegoeUISemilight" style="position:absolute;top:46px;left:15px;width:270px;height:36px;font-size:22px;font-weight:bold;-webkit-transform:translateX(0%);transform:translateX(0%);-webkit-transition:transform 0.5s ease-out 0s;transition:transform 0.5s ease-out 0s;"><span>' + overlayHeadline + '</span></div>'+
  '<div id="overlaySubHeadline" class="text-top-left SegoeUISemilight" style="position:absolute;top:89px;left:15px;width:270px;height:40px;font-size:11px;font-weight:bold;line-height:1.2;-webkit-transform:translateX(0%);transform:translateX(0%);-webkit-transition:transform 0.5s ease-out 0.25s;transition:transform 0.5s ease-out 0.25s;"><span>' + overlaySubHeadline + '</span></div>'+
  '<div id="overlayClick" data-button="overlay" style="position:absolute;top:0px;left:0px;width:inherit;height:inherit;"></div>'+
  '<div id="overlayCta" data-button="overlay" class="text-left SegoeUISemilight" style="position:absolute;top:123px;left:15px;width:100px;height:26px;font-size:13px;color:' + overlayCTAColor + ';font-weight:bold;-webkit-transform:translateX(0%);transform:translateX(0%);-webkit-transition:transform 0.5s ease-out 0.5s;transition:transform 0.5s ease-out 0.5s;"><span>' + adContent[0].overlayCTAText + '</span></div>';
  ad.update();
  ad.root.querySelector('#overlayCta').onmouseover = function(){
    this.dataset.color = this.style.color;
    this.style.color = '#666';
  }
  ad.root.querySelector('#overlayCta').onmouseout = function(){
    this.style.color = this.dataset.color;
  }
  ad.loadAssets(adData.overlayImpressionTracker, function(){});
  setTimeout(function(){
    ad.layers.overlayHeadline.style.webkitTransform = '';
    ad.layers.overlayHeadline.style.transform = '';
    ad.layers.overlaySubHeadline.style.webkitTransform = '';
    ad.layers.overlaySubHeadline.style.transform = '';
    ad.layers.overlayCta.style.webkitTransform = '';
    ad.layers.overlayCta.style.transform = '';
    setTimeout(function(){
      ad.layers.logo.style.opacity = 1;
      setTimeout(function(){
        ad.layers.overlayContainer.style.visibility = 'hidden';
        animateAd();
      }, 300);
    }, overlayDuration);
  }, 500);

}
