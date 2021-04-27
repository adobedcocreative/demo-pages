var amoAd = (function(){
  var reservedKeywords = ['Microsoft 365'];
  var brStyleFlag = false;
  var addStyleSheet = function(styles) {
    if(styles && styles.length) {
      var style = document.createElement('style');
      var head = document.head || document.getElementsByTagName('head')[0]
      style.type = 'text/css';
      // var css = 't.br::before { content: "\\a"; white-space: pre; }';
      if (style.styleSheet){
        // This is required for IE8 and below.
        style.styleSheet.cssText = styles;
      } else {
        style.appendChild(document.createTextNode(styles));
      }
      head.appendChild(style);
    }
    return style;
  }
  var getText = function(texts, refTexts, bound) {
		if(typeof texts[0] == 'string') {
      if(!brStyleFlag) {
          addStyleSheet('t.br::before { content: "\\a"; white-space: pre; }');
          brStyleFlag = true;
      }
			var polygonPoints = bound;
			var div = document.createElement('div');
			div.style.position = 'absolute';
			div.style.width = '100%';
			div.style.top = 0;
			div.style.left = 0;
			div.style.bottom = 0;
			// div.innerHTML = '<svg width="100%" height="100%"><polygon points="20,40 280,40 250,110 160,150 160,200 20,200" style="fill:#e5e5e5;stroke:#ccc;stroke-width:1" /></svg>'
			div.innerHTML = '<svg width="100%" height="100%"><polygon points="' + polygonPoints + '" style="fill:#ff000080;stroke:#000;stroke-width:1" /></svg>'
			document.body.appendChild(div);
      var points = polygonPoints.trim().split(' '), pointLimits = { xMin: 0, xMax: 0, yMin: 0, yMax: 0 };
      points = points.map(function(point){
        var x = +point.split(',')[0], y = +point.split(',')[1];
        pointLimits.xMin = pointLimits.xMin > x ? x : pointLimits.xMin;
        pointLimits.xMax = pointLimits.xMax < x ? x : pointLimits.xMax;
        pointLimits.yMin = pointLimits.yMin > y ? y : pointLimits.yMin;
        pointLimits.yMax = pointLimits.yMax < y ? y : pointLimits.yMax;
        return {x: x,y: y}
      });

      points.push(points[0])
      // var xValues = [], yValues = [];
      // points.forEach(function(point) { xValues.push(point.x) });
      // points.forEach(function(point) { yValues.push(point.y) });
      // var xMin = xValues.sort(function(a, b) { return a - b; })[0];
      // var xMax = xValues.sort(function(a, b) { return b - a; })[0];
      // var yMin = yValues.sort(function(a, b) { return a - b; })[0];
      // var yMax = yValues.sort(function(a, b) { return b - a; })[0];
      var lines = [];
      for(var i = 0; i < points.length - 1; i++) {
        var A = points[i]; //startPoint
        var B = points[i + 1]; //endPoint
        var m = (B.y - A.y)/(B.x - A.x); //Slope = (change in y)/(change in x)
        var x = Math.abs(m) == Infinity ? A.x : (m == 0 ? 0 : (1/m) + ' * y + ' + (A.x - (A.y/m))); //Point Slope Formula: (y - y1) =  m(x - x1); x = [(y - y1) + mx1]/m;
        var yRange = [A.y, B.y].sort(function(a,b){ return a - b; });
        lines.push({A: A, B: B, m: m, x: x, yRange: yRange});
      }
      var getXRange = function(y){
        var xRange = [];
        var intersectingLines = lines.filter(function(line){ return line.yRange[0] <= y && line.yRange[1] >= y })
        if(intersectingLines && intersectingLines.length) {
          intersectingLines.map(function(line){ xRange.push(eval(line.x)) });
        }
        return xRange.sort(function(a, b){ return a - b; });
      }
      var blockToWords = function(element){
        if(element) {
          element.dataset.content = element.innerHTML;
          if(reservedKeywords && reservedKeywords.length) {
            reservedKeywords.forEach(function(reservedKeyword){
              element.innerHTML = element.innerHTML.split(reservedKeyword).join(reservedKeyword.replace(' ', '_'));
            });
          }
          element.dataset.height = element.style.height;
          var htmlTags = element.innerHTML.match(/\<.*?\>/g);
          htmlTags = htmlTags && htmlTags.length ? htmlTags : [];
          var text = element.innerHTML.split(/\<.*?\>/g);
          text = text.map(function(subText){
            return subText.split(' ').map(function(word){ return word ? ('<t>' + word + '</t>') : ''; }).join(' ');
          });
          var longList = text, shortList = htmlTags, temp;
          if(longList.length < shortList) { temp = longList; longList = shortList; shortList = temp; }
          shortList.push('');
          element.innerHTML = longList.map(function(text1, i) { return text1 + shortList[i]; }).join('');
        }
      }
      var wordsToBlock = function(element) {
        if(element) {
          var wordChanges = element.querySelectorAll('t.br');
          if(wordChanges && wordChanges.length) {
            wordChanges.forEach(function(word){
              word.parentNode.insertBefore(document.createElement('br'), word);
              word.removeAttribute('class');
            });
          }
          element.innerHTML = element.innerHTML.split(/\<t\>/g).join('').split(/\<\/t\>/g).join('');
          if(reservedKeywords && reservedKeywords.length) {
            reservedKeywords.forEach(function(reservedKeyword){
              element.innerHTML = element.innerHTML.split(reservedKeyword.replace(' ', '_')).join(reservedKeyword);
            });
          }
          element.removeAttribute('data-content')
        }
      }
      var resizeText = function(element){
        if(element) {
          var fontSize = parseFloat(window.getComputedStyle(element, null).getPropertyValue('font-size'));
          var width = element.offsetWidth;
          var height = element.offsetHeight;
          var span = element.querySelector('span');
          if(span) {
            if(span.offsetHeight > height || span.offsetWidth > width) {
              for(var i = fontSize; i > 0; i-=0.1) {
                element.style.fontSize = i + 'px';
                if(span.offsetHeight <= height && span.offsetWidth <= width) { break; }
              }
            }
          }
        }
      }
      var alignWords = function(element) {
        if(element) {
          var words1 = words = element.querySelectorAll('t');
          var span = element.querySelector('span');
          if(words && words.length) { words.forEach(function(word, i){ word.removeAttribute('class'); }); }
          if( span.offsetHeight > element.offsetHeight || span.offsetWidth > element.offsetWidth) { resizeText(element); }
          var elementY = element.offsetTop;
          var elementX = element.offsetLeft;
          if(words && words.length) {
            words.forEach(function(word, i){
              // word.removeAttribute('class');
              var x = word.offsetLeft + elementX;
              var y = word.offsetTop;
              var width = word.offsetWidth;
              var height = word.offsetHeight;
              var lineY = elementY + y + height/2;
              var xRange = getXRange(lineY);
              var wordText = word.innerHTML;
              if(x < xRange[0] || (x + width) > xRange[1]) {
                var availableWidth = xRange[1] - xRange[0];
                if(width > availableWidth) {
									//////////////////
                }
                if(word.offsetLeft != 0) { word.classList.add('br'); }
              }
              // else if(i > 0 && word.offsetTop != words1[i-1].offsetTop && !words1[i-1].classList.contains('br')) { word.classList.add('br'); }
							else if(i > 0 && word.offsetTop != word.previousElementSibling.offsetTop && !word.previousElementSibling.classList.contains('br')) { word.classList.add('br'); }
            });
          }
          element.innerHTML = element.innerHTML;//.split('<br>').join(' ');
          if(element.style.height) {
            var span = element.querySelector('span');
            if(element.offsetHeight < span.offsetHeight || element.offsetWidth < span.offsetWidth) {
              var fontSize = parseFloat(window.getComputedStyle(element, null).getPropertyValue('font-size'));
              element.style.fontSize = (fontSize - 0.1) + 'px';
              alignWords(element);
            }
          }
        }
      }
      var levelWords = function(element, flag) {
        if(element) {
          var words1 = words = element.querySelectorAll('t');
          var span = element.querySelector('span');
					span.style.display = 'inline-block';
          if(!span.dataset.height) { span.dataset.height = span.offsetHeight; }
					if(!span.dataset.maxWidth) {
						var maxWidth = 0;
						if(words && words.length) {
						 words.forEach(function(word, i){
							 var brFlag = word.classList.contains('br');
							 if(brFlag) { word.classList.remove('br'); }
							 var wordWidth = word.offsetWidth;
							 word.dataset.width = wordWidth
							 maxWidth = maxWidth < wordWidth ? wordWidth : maxWidth;
							 // if(brFlag) { word.classList.add('br'); }
						 });
					 	}
						span.dataset.maxWidth = maxWidth;
					}
          var spanHeight = parseFloat(span.dataset.height);
					var spanMaxWidth = parseFloat(span.dataset.maxWidth);
					var spanWidth = (flag ? (span.offsetWidth + 1) : (span.offsetWidth - 5));
					spanWidth = spanWidth < spanMaxWidth ? spanMaxWidth : spanWidth;
					flag = typeof flag == 'undefined' ? Boolean(spanWidth <= spanMaxWidth) : flag;
          span.style.width = spanWidth + 'px';
          var elementY = element.offsetTop;
          var elementX = element.offsetLeft;
          if(words && words.length) {
            words.forEach(function(word, i){
              word.removeAttribute('class');
              var x = word.offsetLeft + elementX;
              var y = word.offsetTop;
              var width = parseFloat(word.dataset.width); //word.offsetWidth;
              var height = word.offsetHeight;
              var lineY = elementY + y + height/2;
              var xRange = getXRange(lineY);
              var wordText = word.innerHTML;
              if(x < xRange[0] || (x + width) > xRange[1]) {
                var availableWidth = xRange[1] - xRange[0];
                if(width > availableWidth) {
									//////////////////
                }
                if(word.offsetLeft != 0) { word.classList.add('br'); }
              }
              // else if((i > 0 && word.offsetTop != words1[i-1].offsetTop && !words1[i-1].classList.contains('br'))) { word.classList.add('br'); }
							else if(i > 0 && word.offsetTop != word.previousElementSibling.offsetTop && word.previousElementSibling.tagName != 'BR' && (!word.previousElementSibling.classList.contains('br') || (width + parseFloat(word.previousElementSibling.dataset.width)) > spanWidth)) { word.classList.add('br'); }
            });
          }
          if(spanHeight == span.offsetHeight && !flag) {
            levelWords(element);
          } else if(spanHeight != span.offsetHeight) {
            levelWords(element, true);
          } else {
            span.removeAttribute('style');
            span.removeAttribute('data-height');
						words.forEach(function(word, i){
              word.removeAttribute('data-width');
						});
          }
        }
      }
      var createField = function(texts) {
        var textFields = [];
        texts.forEach(function(text, i){
          var refText = refTexts[i];
          var textField = document.createElement('div');
          textField.style.position = 'absolute';
          textField.style.top = refText[3] + 'px';
          textField.style.left = refText[2] + 'px';
          textField.style.height = (pointLimits.yMax - parseFloat(refText[3])) + 'px';// '155px';
          textField.style.fontFamily = 'Segoe Pro';
          textField.style.fontSize = refText[1];
          textField.style.lineHeight = Math.ceil((parseFloat(refText[4])/parseFloat(refText[1]))*100)/100;

          div.appendChild(textField);
          // var textField = document.querySelector('#textField');
          textField.innerHTML = text.split('|').join('<br>');
          if(!(textField.childElementCount == 1 && textField.firstChild.tagName == 'SPAN')) {
            var span = document.createElement('span');
            span.innerHTML = textField.innerHTML;
            textField.innerHTML = '';
            textField.appendChild(span);
          }
          var textAlignment = window.getComputedStyle(textField).textAlign;
          if(textAlignment == 'start' || textAlignment == 'left') {

            if(textField.style.right){
              //Pending
            } else if(textField.style.left && pointLimits.xMin > parseFloat(textField.style.left)){
              textField.style.left = pointLimits.xMin + 'px';
              if((pointLimits.xMax - pointLimits.xMin) < textField.offsetWidth) {
                textField.style.width = (pointLimits.xMax - pointLimits.xMin) + 'px';
              }
            }
          } else if(textAlignment == 'right') {
            //Pending
          } else if(textAlignment == 'center') {
            //Pending
          }
          textFields.push(textField);
        });
        return textFields;
      }

      var textFields = createField(texts);
      textFields.forEach(function(textField) {
        blockToWords(textField);
        alignWords(textField);
        levelWords(textField);
      });

      textFields.forEach(function(textField) {
        wordsToBlock(textField);
      });
      // blockToWords(textField);
      // alignWords(textField);
      // levelWords(textField);
      // wordsToBlock(textField);
		}
		return texts;
	}
  var ctaAlignment = function(position){
    var layers = exportRoot.mainMC;
    var adWidth = document.querySelector('#animation_container').offsetWidth;
    var ctaBackgroundColor = layers.cta.children[0].graphics._fill.style;
    var yPoints = layers.cta.children[0].graphics._activeInstructions.map(function(point){ return(point.y) });
    var yTemp = [];
    yPoints.forEach(function(y){
        if(y && (!yTemp.length || !Boolean(Math.abs(yTemp.find(function(z){return y == z}))))) {
    				yTemp.push(y);
        }
    });
    var ctaScaleX = layers.cta.scaleX, ctaScaleY = layers.cta.scaleY;
    var ctaHeight = Math.ceil(Math.abs(yTemp[0]) + Math.abs(yTemp[1]));
    ctaHeight *= ctaScaleY * layers.cta.children[0].scaleY;
    var ctaWidth = layers.txtCta.children[0].children[0].getBounds().width + 45;
    position = position ? position : (layers.cta.x > adWidth/2 ? 'right' : 'left');
    layers.txtCta.regX = 0;
    layers.txtCta.children[0].x = 0;
    // layers.txtCta.children[0].y -= 2;
    layers.txtCta.scaleX = 1;
    layers.txtCta.scaleY = 1;
    layers.cta.regX = 0;
    layers.cta.regY = 0;
    layers.cta.scaleX = 1;
    layers.cta.scaleY = 1;
    layers.cta.arrow.y = 0;
    layers.cta.arrow.arrow_1.x = 0;
    layers.cta.arrow.arrow.x = 0;
    layers.cta.arrow.arrow_1.regX = 0;
    layers.cta.arrow.arrow.regX = 0;
    layers.cta.arrow.regX = 0;
    layers.cta.arrow.arrow.scaleX = layers.cta.arrow.arrow_1.scaleX = ctaScaleX;
    layers.cta.arrow.arrow.scaleY = layers.cta.arrow.arrow_1.scaleY = ctaScaleY;
    layers.cta.children[0].x = 0;
    layers.cta.children[0].y = 0;
    layers.cta.children[0].scaleX = 1;
    layers.cta.children[0].scaleY = 1;
    layers.cta.children[0].regX = 0;
    layers.cta.children[0].regY = 0;
    layers.cta.children[0].graphics.clear();
    // layers.cta.children[0].graphics.beginFill(ctaBackgroundColor).drawRect(0, -15, ctaWidth, 30);
    layers.cta.children[0].graphics.beginFill(ctaBackgroundColor).drawRect(0, -ctaHeight/2, ctaWidth, ctaHeight);
    if(position == 'right') {
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
    // ['<#FFFFFF>Unlock added|benefits','18px',16,43,'20','100', 'left']
    // ['<#FFFFFF>from brands|we love','18px',16,43,'20','100', 'left']
    // ['<#FFFFFF>Access benefits |from brands |we love','18px',16,43,'20','100', 'left']
    // ['<#FFFFFF>Unlock more with |a Microsoft 365 |subscription','12px',16,112,'14','350','left']
    // var introText1 = getText(['Unlock added|benefits'], [['<#FFFFFF>dummyText','18px',16,43,'20','100', 'left']], '16,40 140,40 170,100 122,120 147,170 90,195 16,195');
    // var introText2 = getText(['from brands|we love'], [['<#FFFFFF>dummyText','18px',16,43,'20','100', 'left']], '16,40 140,40 170,100 122,120 147,170 90,195 16,195');
    var texts = getText(['Access benefits from brands |we love', 'Unlock more with a Microsoft 365 subscription'], [['<#FFFFFF>Access benefits |from brands |we love','18px',16,44,'20','100', 'left'], ['<#FFFFFF>Unlock more with |a Microsoft 365 |subscription','12px',16,112,'14','350','left']], '16,40 280,40 175,96 166,120 92,180 90,234 16,234');
    // var texts = getText([bannerData.textField1, bannerData.textField2], [['<#505050>dummyText','19px',16,41,'20','100', 'left'],['<#505050>dummyText​','11px',16,110,'15','350','left']], '16,40 140,40 170,100 122,120 147,170 90,195 16,195');
    bannerData.headline1 = eval(bannerData.textField1);
    bannerData.headline2 = eval(bannerData.textField2);
    bannerData.headline3 = eval(bannerData.textField3);
    bannerData.headline4 = eval(bannerData.textField4);
    bannerData.ctaText = bannerData.ctaText.replace('<br>', '\n');
  	var CTAFont = bannerData.ctaText.split('|').length > 1 ? bannerData.ctaText.split('|')[1] : '0';
  	CTAFont = (Boolean(parseFloat(CTAFont)) ? parseFloat(CTAFont) : 12) + 'px';
  	bannerData.ctaText = bannerData.ctaText.split('|')[0];
  	bannerData.CTA = bannerData.ctaText ? ['<#0078D4>' + bannerData.ctaText,CTAFont,0,0,"50","300", "center"] : '';
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
  	var yPoints = layers.cta.children[0].graphics._activeInstructions.map(function(point){ return(point.y) });
  	var yTemp = [];
  	yPoints.forEach(function(y){
  	    if(y && (!yTemp.length || !Boolean(Math.abs(yTemp.find(function(z){return y == z}))))) {
  					yTemp.push(y);
  	    }
  	});
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
