var amoAd = (function(){
  var playClickFlag = false;
  var ctaAlignment = function(position){
    var layers = exportRoot.mainMC;
    // var adWidth = document.querySelector('#animation_container').offsetWidth;
    var ctaWidth = layers.playTxt.children[0].children[0].getBounds().width + 30;
    var width = Math.ceil(ctaWidth/2);
    layers.playBtn.shape.graphics._activeInstructions.map(function(data){ if('x' in data) { data.x = width * (data.x > 0 ? 1 : (-1)); } return data; });
    exportRoot.mainMC.cta1.arrow.regY += 1;
    layers.cta.arrow.y = 2;
  //   var layers = exportRoot.mainMC;
  //   var adWidth = document.querySelector('#animation_container').offsetWidth;
  //   var adHeight = document.querySelector('#animation_container').offsetHeight;
  //   var ctaBackgroundColor = layers.cta.children[0].graphics._fill.style;
  //   var yPoints = layers.cta.children[0].graphics._activeInstructions.map(function(point){ return(point.y) });
  //   var yTemp = [];
  //   yPoints.forEach(function(y){
  //       if(y && (!yTemp.length || !Boolean(Math.abs(yTemp.find(function(z){return y == z}))))) {
  //   				yTemp.push(y);
  //       }
  //   });
  //   var ctaScaleX = layers.cta.scaleX, ctaScaleY = layers.cta.scaleY;
  //   var ctaHeight = Math.ceil(Math.abs(yTemp[0]) + Math.abs(yTemp[1]));
  //   ctaHeight *= ctaScaleY * layers.cta.children[0].scaleY;
  //   var ctaCalculatedWidth = Math.round(layers.txtCta.children[0].children[0].getBounds().width);
  //   var ctaWidth =  Math.round(ctaCalculatedWidth * adWidth/ctaCalculatedWidth);
  //  //var ctaWidth = layers.txtCta.children[0].children[0].getBounds().width + 45;
  //   position = position ? position : (layers.cta.x > adWidth/2 ? 'right' : 'left');
  //   layers.txtCta.regX = 0;
  //   layers.txtCta.children[0].x = 0;
  //   layers.txtCta.children[0].y = 0;
  //   layers.txtCta.scaleX = 1;
  //   layers.txtCta.scaleY = 1;
  //   layers.cta.regX = 0;
  //   layers.cta.regY = 0;
  //   layers.cta.scaleX = 1;
  //   layers.cta.scaleY = 1;
  //   layers.cta.arrow.y = 0;
  //   layers.cta.arrow.arrow_1.x = 0;
  //   layers.cta.arrow.arrow.x = 0;
  //   layers.cta.arrow.arrow_1.regX = 0;
  //   layers.cta.arrow.arrow.regX = 0;
  //   layers.cta.arrow.regX = 0;
  //   layers.cta.arrow.arrow.scaleX = layers.cta.arrow.arrow_1.scaleX = ctaScaleX;
  //   layers.cta.arrow.arrow.scaleY = layers.cta.arrow.arrow_1.scaleY = ctaScaleY;
  //   layers.cta.children[0].x = 0;
  //   layers.cta.children[0].y = 0;
  //   layers.cta.children[0].scaleX = 1;
  //   layers.cta.children[0].scaleY = 1;
  //   layers.cta.children[0].regX = 0;
  //   layers.cta.children[0].regY = 0;
  //   layers.cta.children[0].graphics.clear();
  //   // layers.cta.children[0].graphics.beginFill(ctaBackgroundColor).drawRect(0, -15, ctaWidth, 30);
  //   layers.cta.children[0].graphics.beginFill(ctaBackgroundColor).drawRect(0, -ctaHeight/2, ctaWidth, ctaHeight);
  //   console.log(layers)
  //   if(position == 'right') {
  //   	layers.cta.x = adWidth - ctaWidth;
  //   	//layers.txtCta.x = adWidth - ctaWidth + 15;
  //   	layers.cta.arrow.x = ctaWidth - 20;
  //     layers.txtCta.y = adHeight - ctaHeight/2 + 5;
  //     layers.txtCta.x = ctaWidth - ctaCalculatedWidth - 30;
  //     layers.cta.arrow.y = 2;
  //   } else {
  //   	layers.cta.x = 0;
  //   	layers.txtCta.x = 15;
  //   	layers.cta.arrow.x = ctaWidth - 20;
  //   }
  }
  var iframe = window.frameElement;
  var parentWindow = iframe.contentWindow.parent ? iframe.contentWindow.parent  : iframe.contentWindow;
  var bannerData = parentWindow.getBannerData();
  function init() {
    bannerData.headline1 = eval(bannerData.textField1);
    bannerData.headline2 = eval(bannerData.textField2);
    if(typeof bannerData.ctaText === "string") {
      bannerData.ctaText = bannerData.ctaText.split(',');
    }
    bannerData.CTA = bannerData.ctaText[1] ? addDynamicText(bannerData.ctaText[1], ["Shop now",'14px',0,0,"19","300", "right", "Segoe Pro", "#ffffff"]) : '';
    bannerData.CTA1 = bannerData.ctaText[1] ? addDynamicText(bannerData.ctaText[1], ["Shop now",'12px',0,0,"8","300", "right", "Segoe Pro", "#058475"]) : '';
    bannerData.replaybtn = bannerData.ctaText[2] ? addDynamicText(bannerData.ctaText[2], ["Play again",'14px',0,0,'19','300', 'left','Segoe Pro', '#FFFFFF']) : '';
    bannerData.playTxt = bannerData.ctaText[0] ? addDynamicText(bannerData.ctaText[0], ["PLAY NOW",'12px',0,0,'16','300', 'center','Segoe Pro', '#FFFFFF']) : '';
    resizeCTA();
    resizeLandingCTA();
    fireImpression();
    window.bannerData = bannerData;
  }

  function addDynamicText(value, data){
    value = value.trim().replace('<br>', '\n');
    var font = value.split('|').length > 1 ? value.split('|')[1] : '0';
    if(Boolean(parseFloat(font))) data[1] = parseFloat(font) + 'px';
    value = value.split('|')[0];
    data[0] = value ? value : data[0];
    return data;
  }

  function fireImpression() {
    if(bannerData.impressionTracker) {
      var impressionTrackers = bannerData.impressionTracker.split('^');
      impressionTrackers.forEach(function(url){
        if(url && url.toLowerCase() != 'na') {
            (new Image()).src = url;
        }
      });
    }
  }

  function resizeCTA() {
    var layers = exportRoot.mainMC;
  	var yPoints = layers.cta.children[0].graphics._activeInstructions.map(function(point){ return(point.y) })

  	var yTemp = [];

  	yPoints.forEach(function(y){
  	    if(y && (!yTemp.length || !Boolean(Math.abs(yTemp.find(function(z){return y == z}))))) {
  					yTemp.push(y);
  	    }
  	});
  	var ctaScaleX = layers.cta.scaleX, ctaScaleY = layers.cta.scaleY;
  	var ctaHeight = Math.ceil(Math.abs(yTemp[0]) + Math.abs(yTemp[1]));
  	ctaHeight *= ctaScaleY * layers.cta.children[0].scaleY;
    var ctaMaxWidth = 140, ctaMaxHeight = ctaHeight;
    var ctaElement = document.createElement('div');
    ctaElement.innerHTML = bannerData.ctaText[1] ? bannerData.ctaText[1].trim().replace('\n', '<br>'): '';
    ctaElement.style.display = 'inline-block';
    ctaElement.style.fontFamily = 'Segoe Pro';
    var ctaFont = ctaElement.style.fontSize = bannerData.CTA[1];
    ctaElement.style.lineHeight = 1.2;
    ctaElement.style.padding = '0px 30px 0px 15px';
    document.body.appendChild(ctaElement);
    if(ctaElement.offsetWidth > ctaMaxWidth || ctaElement.offsetHeight > ctaMaxHeight) {
      for(var i = parseFloat(bannerData.CTA[1]); i > 0; i-=0.1) {
        ctaElement.style.fontSize = i + 'px';
        if(ctaElement.offsetWidth <= ctaMaxWidth && ctaElement.offsetHeight <= ctaMaxHeight) { break; }
      }
      bannerData.CTA[1] = i + 'px';
      if (bannerData.replaybtn[1]) { bannerData.replaybtn[1] = i + 'px'; }
    }
    document.body.removeChild(ctaElement);
  }

  function resizeLandingCTA() {
    var layers = exportRoot.mainMC;
  	var yPoints = layers.cta1.children[0].graphics._activeInstructions.map(function(point){ return(point.y) })

  	var yTemp = [];

  	yPoints.forEach(function(y){
  	    if(y && (!yTemp.length || !Boolean(Math.abs(yTemp.find(function(z){return y == z}))))) {
  					yTemp.push(y);
  	    }
  	});
  	var ctaScaleX = layers.cta1.scaleX, ctaScaleY = layers.cta1.scaleY;
  	var ctaHeight = Math.ceil(Math.abs(yTemp[0]) + Math.abs(yTemp[1]));
  	ctaHeight *= ctaScaleY * layers.cta1.children[0].scaleY;
    var ctaMaxWidth = 70, ctaMaxHeight = ctaHeight, newCTAwidth = 80;
    var ctaElement = document.createElement('div');
    ctaElement.innerHTML = bannerData.ctaText[1] ? bannerData.ctaText[1].trim().replace('\n', '<br>'): '';
    ctaElement.style.display = 'inline-block';
    ctaElement.style.fontFamily = 'Segoe Pro';
    var ctaFont = ctaElement.style.fontSize = bannerData.CTA1[1];
    ctaElement.style.lineHeight = 1.2;
    ctaElement.style.padding = '0px 15px 0px 0px';
    document.body.appendChild(ctaElement);
    console.log(ctaElement.offsetWidth)
    if(ctaElement.offsetWidth > newCTAwidth || ctaElement.offsetHeight > ctaMaxHeight) {
      if(ctaElement.textContent.indexOf('-') === -1) {
        ctaElement.innerHTML = ctaElement.textContent.replace(' ', '<br>');
        bannerData.CTA1[0] = bannerData.CTA1[0].trim().replace(' ', '\n');
      } else {
        ctaElement.innerHTML = ctaElement.textContent.replace('-', '<br>-');
        bannerData.CTA1[0] = bannerData.CTA1[0].trim().replace('-', '\n-');
      }
    }
    if(ctaElement.offsetWidth > ctaMaxWidth || ctaElement.offsetHeight > ctaMaxHeight) {
      for(var i = parseFloat(bannerData.CTA1[1]); i > 0; i-=0.1) {
        ctaElement.style.fontSize = i + 'px';
        if(ctaElement.offsetWidth <= ctaMaxWidth && ctaElement.offsetHeight <= ctaMaxHeight) { break; }
      }
      bannerData.CTA1[1] = i + 'px';
    }
    document.body.removeChild(ctaElement);
  }

  function click(id) {
    parentWindow.amo.onDynAdClick(parentWindow.adData.feedData, "CLICK", parentWindow.adClickUrl.split('^').length > 1 && id >= 0 ? parentWindow.adClickUrl.split('^')[id] : parentWindow.adClickUrl, parentWindow.layout + '|' + bannerData.ctaText[1].trim());
    if(bannerData.clickTracker) {
      var clickTrackers = bannerData.clickTracker.split('^');
      clickTrackers.forEach(function(url){
        if(url && url.toLowerCase() != 'na') {
            (new Image()).src = url;
        }
      });
    }
  }
  
  function onInteraction(text, id) {
    if(!playClickFlag && (text === 'PLAY' || text === 'PLAY AGAIN')) playClickFlag = true;
		if(!playClickFlag && text === 'BACKPACK') text += ' - GAME AUTOPLAY';
  	var parentWindows = window.parent.parent.window;
  	if (parentWindows && 'amoUtils' in parentWindows && 'onInteraction' in parentWindows.amoUtils) {
  		try {
        var productId = ('id' in parentWindow.adData.feedData ? ('|' + parentWindow.adData.feedData.id) : '');
       
  			parentWindows.amoUtils.onInteraction(parentWindow.layout + '|' + (text === 'PLAY' ? bannerData.ctaText[0].trim() : bannerData.ctaText[2].trim()) + ' - ' + text + productId, parentWindow.adData.feedData);
  		} catch (e) {}
  	}
  }
  return {
    init: function(){ init(); },
  	click: function(id) { click(id); },
  	ctaAlignment: function(position){ ctaAlignment(position); },
  	onInteraction: function(text, id) { onInteraction(text, id); }
  };
})();
