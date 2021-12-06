var amoAd = (function(){
  var ctaAlignment = function(position){
    var layers = exportRoot.mainMC;
    console.log(layers.cta)
    var adWidth = document.querySelector('#animation_container').offsetWidth;
    var ctaBackgroundColor = layers.cta.children[0].shape.graphics._fill.style;
    // var ctaBackgroundColorRatios = layers.cta.children[0].shape.graphics._fill.style.props.ratios;
    // var ctaBackgroundColorGradient = ['#F00', '#000']
    // var ctaBackgroundColorRatios = [0, 0.51]
    // var ctaBackgroundX0 = layers.cta.children[0].shape.graphics._fill.style.props.x0;
    // var ctaBackgroundX1 = layers.cta.children[0].shape.graphics._fill.style.props.x1;
    // var ctaBackgroundY0 = layers.cta.children[0].shape.graphics._fill.style.props.y0;
    // var ctaBackgroundY1 = layers.cta.children[0].shape.graphics._fill.style.props.y1;
    var yPoints = layers.cta.children[0].shape.graphics._activeInstructions.map(function(point){ return(point.y) });
    console.log(yPoints);
    var yTemp = [];
    yPoints.forEach(function(y){
        if(y && (!yTemp.length || !Boolean(Math.abs(yTemp.find(function(z){return y == z}))))) {
    				yTemp.push(y);
        }
    });
    console.log(yTemp);
    var ctaScaleX = layers.cta.scaleX, ctaScaleY = layers.cta.scaleY;
    var ctaHeight = Math.ceil(Math.abs(yTemp[0]) + Math.abs(yTemp[1]));
    ctaHeight *= ctaScaleY * layers.cta.children[0].scaleY;
    var ctaWidth = layers.txtCta.children[0].children[0].getBounds().width + 45;
    console.log(ctaWidth)
    position = position ? position : (layers.cta.x > adWidth/2 ? 'right' : 'left');
    layers.txtCta.regX = 0;
    //layers.scaleX = 1;
    //layers.scaleY = 1;
    layers.txtCta.children[0].x = 0;
    layers.txtCta.children[0].y -= 0.5;
    layers.txtCta.scaleX = 1;
    layers.txtCta.scaleY = 1;
    layers.cta.regX = 0;
    layers.cta.regY = 0;
    layers.cta.scaleX = 1;
    //layers.cta.scaleY = 1;
    //layers.cta.arrow.y = 0;
    layers.cta.arrow.arrow_1.x = 0;
    layers.cta.arrow.arrow.x = 0;
    layers.cta.arrow.arrow_1.regX = 0;
    layers.cta.arrow.arrow.regX = 0;
    layers.cta.arrow.regX = 0;
    layers.cta.arrow.arrow.scaleX = layers.cta.arrow.arrow_1.scaleX = ctaScaleX;
    layers.cta.arrow.arrow.scaleY = layers.cta.arrow.arrow_1.scaleY = ctaScaleY;

    // layers.cta.children[0].shape.x = 0;
    // layers.cta.children[0].shape.y = 0;
    // layers.cta.children[0].shape.scaleX = 1;
    // layers.cta.children[0].shape.scaleY = 1;
    // layers.cta.children[0].shape.regX = 0;
    // layers.cta.children[0].shape.regY = 0;

    // layers.cta.children[0].shape_1.x = 0;
    // layers.cta.children[0].shape_1.y = 0;
    // layers.cta.children[0].shape_1.scaleX = 1;
    // layers.cta.children[0].shape_1.scaleY = 1;
    // layers.cta.children[0].shape_1.regX = 0;
    // layers.cta.children[0].shape_1.regY = 0;

    layers.cta.children[0].x = 0;
    layers.cta.children[0].y = 0;
    layers.cta.children[0].scaleX = 1;
    layers.cta.children[0].scaleY = 1;
    layers.cta.children[0].regX = 0;
    layers.cta.children[0].regY = 0;

    layers.cta.children[0].shape.graphics.clear();
    // layers.cta.cta_glare.shape.graphics.clear();
    // layers.cta.children[1].shape.graphics.clear();
    // layers.cta.cta_glare.shape_1.graphics.clear();

    // layers.cta.children[0].graphics.beginFill(ctaBackgroundColor).drawRect(0, -15, ctaWidth, 30);
    //layers.cta.children[0].shape.graphics.beginFill(ctaBackgroundColor).drawRect(0, -ctaHeight/2, ctaWidth, ctaHeight);
    //layers.cta.cta_glare.shape.graphics.beginLinearGradientFill(ctaBackgroundColorGradient, ctaBackgroundColorRatios, ctaBackgroundX0, ctaBackgroundX1, ctaBackgroundY0, ctaBackgroundY1).drawRect(0, -ctaHeight/2, ctaWidth, ctaHeight);
    if(position == 'right') {
      console.log(layers)
    	layers.cta.x = adWidth - ctaWidth;
    	layers.txtCta.x = adWidth - ctaWidth + 15;
    	layers.cta.arrow.x = ctaWidth - 20;
    } else {
    	layers.cta.x = 0;
    	layers.txtCta.x = 15;
    	layers.cta.arrow.x = ctaWidth - 20;
    }
  }
  var iframe = window.frameElement;
  var parentWindow = iframe.contentWindow.parent ? iframe.contentWindow.parent  : iframe.contentWindow;
  var bannerData = parentWindow.getBannerData();
  function init() {
    bannerData.headline1 = eval(bannerData.textField1);
    bannerData.headline2 = eval(bannerData.textField2);
    bannerData.headline3 = eval(bannerData.textField3);
    bannerData.ctaText = bannerData.ctaText.replace('<br>', '\n');
  	var CTAFont = bannerData.ctaText.split('|').length > 1 ? bannerData.ctaText.split('|')[1] : '0';
  	CTAFont = (Boolean(parseFloat(CTAFont)) ? parseFloat(CTAFont) : 9.2) + 'px';
  	bannerData.ctaText = bannerData.ctaText.split('|')[0];
  	bannerData.CTA = bannerData.ctaText ? ['<#ffffff>' + bannerData.ctaText,CTAFont,0,0,"50","300", "left", "Segoe Pro"] : '';
    resizeCTA();
    fireImpression();
    window.bannerData = bannerData;
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
  	var yPoints = layers.cta.children[0].shape.graphics._activeInstructions.map(function(point){ return(point.y) });
    console.log(yPoints)
  	var yTemp = [];
  	yPoints.forEach(function(y){
  	    if(y && (!yTemp.length || !Boolean(Math.abs(yTemp.find(function(z){return y == z}))))) {
  					yTemp.push(y);
  	    }
  	});
    console.log(yTemp)
  	var ctaScaleX = layers.cta.scaleX, ctaScaleY = layers.cta.scaleY;
  	var ctaHeight = Math.ceil(Math.abs(yTemp[0]) + Math.abs(yTemp[1]));
  	ctaHeight *= ctaScaleY * layers.cta.children[0].scaleY;
    var ctaMaxWidth = 180, ctaMaxHeight = ctaHeight;
    var ctaElement = document.createElement('div');
    ctaElement.innerHTML = bannerData.ctaText.replace('\n', '<br>');
    ctaElement.style.display = 'inline-block';
    ctaElement.style.fontFamily = 'Segoe Pro';
    var ctaFont = ctaElement.style.fontSize = bannerData.CTA[1];
    ctaElement.style.lineHeight = 1.2;
    ctaElement.style.padding = '0px 30px 0px 15px';
    document.body.appendChild(ctaElement);
    console.log(ctaElement.offsetWidth)
    if(ctaElement.offsetWidth > ctaMaxWidth || ctaElement.offsetHeight > ctaMaxHeight) {
      for(var i = parseFloat(bannerData.CTA[1]); i > 0; i-=0.1) {
        ctaElement.style.fontSize = i + 'px';
        if(ctaElement.offsetWidth <= ctaMaxWidth && ctaElement.offsetHeight <= ctaMaxHeight) { break; }
      }
      bannerData.CTA[1] = i + 'px';
    }
    document.body.removeChild(ctaElement);
  }
  function click(id) {
    parentWindow.amo.onDynAdClick(parentWindow.adData.feedData, "CLICK", parentWindow.adClickUrl.split('^').length > 1 && id >= 0 ? parentWindow.adClickUrl.split('^')[id] : parentWindow.adClickUrl, parentWindow.layout + '|' + bannerData.ctaText);
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
  	var parentWindows = window.parent.parent.window;
  	if (parentWindows && 'amoUtils' in parentWindows && 'onInteraction' in parentWindows.amoUtils) {
  		try {
        var productId = ('id' in parentWindow.adData.feedData ? ('|' + parentWindow.adData.feedData.id) : '')
  			parentWindows.amoUtils.onInteraction(parentWindow.layout + '|' + bannerData.ctaText + ' - ' + text + productId, parentWindow.adData.feedData);
  		} catch (e) {}
  	}
  }
  return {
    init: function(){ init(); },
  	click: function(id) { click(id); },
  	ctaAlignment: function(){ ctaAlignment(); },
  	onInteraction: function(id) { onInteraction(text, id); }
  };
})();
