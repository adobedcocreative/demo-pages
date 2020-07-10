function textUpdate() {
  var textElements = ad.root.querySelectorAll('.text:not(.clip), .text-left:not(.clip), .text-right:not(.clip), .text-bottom:not(.clip), .text-top:not(.clip), .text-top-left:not(.clip), .text-bottom-left:not(.clip)');
  var clipTextElements = ad.root.querySelectorAll('.text.clip, .text-left.clip, .text-right.clip, .text-bottom.clip, .text-top.clip, .text-top-left.clip, .text-bottom-left.clip');
  if(clipTextElements && clipTextElements.length) {
    for(var k = 0; k < clipTextElements.length; k++) {
      var element = clipTextElements[k];
      var height = element.offsetHeight;
      var span = element.querySelector('span');
      if(span) {
        if(span.offsetHeight > height) {
          var content = span.innerHTML;
          var words = content.split(' ');
          var wordLength = words.length;
          for(var i = 0; i < wordLength; i++) {
            words.pop();
            span.innerHTML = words.join(' ') + '...';
            if(span.offsetHeight <= height) { break; }
          }
        }
      } else {
        var assignedHeight = element.style.height;
        element.style.height = 'auto';
        if(element.offsetHeight > height) {
          var content = element.innerHTML;
          var words = content.split(' ');
          var wordLength = words.length;
          for(var i = 0; i < wordLength; i++) {
            words.pop();
            element.innerHTML = words.join(' ') + '...';
            if(element.offsetHeight <= height) { break; }
          }
        }
        element.style.height = assignedHeight;
      }
    }
  }
  for(var k = 0; k < textElements.length; k++) {
    var element = textElements[k];
    var style = window.getComputedStyle(element, null).getPropertyValue('font-size');
    var fontSize = parseInt(style);
    var height = element.offsetHeight;
    var width = element.offsetWidth;
    var span = element.querySelector('span');
    if(span) {
      if(span.offsetHeight > height || span.offsetWidth > width) {
        for(var i = fontSize - 1; i > 0; i--) {
          element.style.fontSize = i + 'px';
          if(span.offsetHeight <= height && span.offsetWidth <= width) { break; }
        }
      }
    } else {
      var assignedHeight = element.style.height;
      element.style.height = 'auto';
      if(element.offsetHeight > height || element.offsetWidth > width) {
        for(var i = fontSize - 1; i > 0; i--) {
          element.style.fontSize = i + 'px';
          if(element.offsetHeight <= height && element.offsetWidth <= width) { break; }
        }
      }
      element.style.height = assignedHeight;
    }
  } // Resize Text
}
var clipText = function(text, limit) {
  if(text.length && text.length > limit) {
    var htmlTags = text.match(/\<.*?\>/g);
    text = text.split(/\<.*?\>/g);
    var textCount = 0, limitFlag = true;
    text = text.map(function(subText){
      if(limitFlag) {
        if((textCount + subText.length) > limit) {
            limitFlag = false;
            subText = subText.substring(0, (limit-textCount)) + '...';
        }
      } else { subText = ''; }
      textCount += subText.length;
      return subText;
    });
    var longList = text, shortList = htmlTags, temp;
    if(longList.length < shortList) { temp = longList; longList = shortList; shortList = temp; }
    shortList.push('');
    text = longList.map(function(text1, i) { return text1 + shortList[i]; }).join('');
  }
  return text;
}
var addTypingContent = function(element) {
  if(element) {
    var htmlTags = element.innerHTML.match(/\<.*?\>/g);
    htmlTags = htmlTags && htmlTags.length ? htmlTags : [];
    var text = element.innerHTML.split(/\<.*?\>/g);
    var textCount = 0, limitFlag = true;
    text = text.map(function(subText){
      return subText.split('').map(function(character){ return '<type class="transparent">' + character + '</type>'; }).join('');
    });
    var longList = text, shortList = htmlTags, temp;
    if(longList.length < shortList) { temp = longList; longList = shortList; shortList = temp; }
    shortList.push('');
    element.innerHTML = longList.map(function(text1, i) { return text1 + shortList[i]; }).join('');
  }
}
var removeTypingContent = function(element) {
  if(element) {
    element.innerHTML = element.innerHTML.split(/\<type\>/g).join('').split(/\<\/type\>/g).join('');
  }
}
var typingAnimation = function(element, duration, callbackFunction) {
  if(element) {
    addTypingContent(element);
    var typingTimer = setInterval(function(){
      var typeElements = element.querySelectorAll('type.transparent');
      if(typeElements && typeElements.length) {
        typeElements[0].removeAttribute('class');
      } else {
        clearInterval(typingTimer);
        removeTypingContent(element);
        if(callbackFunction && typeof callbackFunction == 'function') { callbackFunction(); }
      }
    }, duration);
    //setTimeout(function() { removeTypingContent(element); }, 5000);
  }
}
var Ad = function(config) {
  var width = config.width, height = config.height, root = config.root;
  var borderWidth = 'borderWidth' in config && config.borderWidth ? config.borderWidth : 1;
  var borderColor = 'borderColor' in config && config.borderColor ? config.borderColor : '#000';
  var layers = {}, frames = {}, adData = [];
  var loadAssets = function(list, callbackFunction){ //loadAssets(list of URLs, callback function)
      if(list && typeof list == 'string') {
          var path = list;
          list = [];
          list.push(path);
      }
      if(list && typeof list == 'object' && list.length) {
          var loadCounter = [];
          var head = document.querySelector('head');
          function loadCheck(e) {
              loadCounter.push(this);
              if(loadCounter.length == list.length) {
                  callbackFunction(loadCounter); //This function is called when all the provided assets are loaded properly.
              }
          }
          list.forEach(function(path) {
              if(path && typeof path == 'string' && path.length) {
                  if(path.indexOf('.js') > 0) { //For loading JS file
                      var script = document.createElement('script');
                      script.type = 'text/javascript';
                      script.onload = loadCheck;
                      script.src = path;
                      head.appendChild(script);
                  } else if(path.indexOf('.css') > 0) { //For loading CSS file
                      var style = document.createElement('style');
                      style.type = 'text/css';
                      style.setAttribute('rel', 'stylesheet');
                      style.onload = loadCheck;
                      style.setAttribute('href', path);
                      head.appendChild(style);
                  } else {	//For loading Image file
                      var image = new Image();
                      image.onload = loadCheck;
                      image.src = path;
                  }
              }
          });
      }
  }
  var setText = function(selector, text) {
      var element = typeof selector == 'string' && selector && selector.length && root.querySelector(selector) ? root.querySelector(selector) : selector;;
      if(element && text && text.length) {
          element.textContent = text;
          while(element.clientHeight < element.scrollHeight) {
            text = element.innerHTML.trim();
            if(text.split(' ').length <= 1) {
              break;
            }
            element.innerHTML = text.replace(/\W*\s(\S)*$/, '...');
          }
      }
  }
  var addBorder = function() {
    var htmlContent = '', width = root.offsetWidth, height = root.offsetHeight;
    var border = borderWidth + 'px solid ' + borderColor;
    htmlContent = '<div class="ad-border-top" style="position:absolute;display:inline-block;width:' + width + 'px;border-top:' + border + ';top:0px;left:0px;"></div>'+
      '<div class="ad-border-right" style="position:absolute;display:inline-block;height:' + height + 'px;border-left:' + border + ';top:0px;left:' + (width - borderWidth) + 'px;"></div>'+
      '<div class="ad-border-bottom" style="position:absolute;display:inline-block;width:' + width + 'px;border-top:' + border + ';top:' + (height - borderWidth) + 'px;left:0px;"></div>'+
      '<div class="ad-border-left" style="position:absolute;display:inline-block;height:' + height + 'px;border-left:' + border + ';top:0px;left:0px;"></div>';
    var div = document.createElement('div');
    div.className = 'ad-borders';
    div.innerHTML = htmlContent;
    root.appendChild(div);
  }
  // var replaceMacro = function(text, data) {
	// 	if(text.indexOf('!{') != -1 && text.indexOf('}') != -1) {
	// 		text = text.split('!{');
	// 		text = text.map(function(string){
	// 			if(string.indexOf('}') != -1) {
	// 				string = string.split('}');
  //         if(string[0].indexOf(' ' == -1)) {
  //           for(var key in data) { if(key == string[0]) { string[0] = data[key]; } }
  // 					string = string.join('');
  //         } else { string = string.join('}'); }
	// 			}
	// 			return string;
	// 		}).join('');
	// 	}
	// 	return text;
	// }
  var replaceMacro = function(text, data) {
    var macros = text.match(/\!\{(.*?)\}/g);
    if(macros) {
      macros.forEach(function(macro){
        var macroText = macro.split('!{').join('').split('}').join('');
        for(var key in data) { if(key == macroText) { macroText = data[key]; } }
        text = text.split(macro).join(macroText);
      });
    }
    return text;
  }
  var update = function() {
    var htmlContent = root.innerHTML.replace(/(\r\n|\n|\r)/gm," ").trim();
    var strings = htmlContent.split('  ');
    while(strings.length > 1) {
      htmlContent = htmlContent.split('  ').join(' ').split('> <').join('><');
      strings = htmlContent.split('  ');
    }
    var data = adData[0];
    //
    root.innerHTML = htmlContent;
    var images = root.querySelectorAll('[data-image]');
    if(images.length) {
      for(var i = 0; i< images.length; i++) {
        var element = images[i];
        var style = 'style' in element.dataset ? element.dataset.style : '';
        element.innerHTML = '<img ' + (style.length ? 'style="' + style + '"' : '') + ' src="' + data[element.dataset.image] + '" />';
        element.removeAttribute('data-image');
      }
    }
    var texts = root.querySelectorAll('[data-text]');
    if(texts.length) {
      for(var i = 0; i< texts.length; i++) {
        var element = texts[i];
        var style = 'style' in element.dataset ? element.dataset.style : '';
        element.innerHTML = '<span ' + (style.length ? 'style="' + style + '"' : '') + '>' + (element.dataset.text.indexOf('!{') == -1 ? (element.dataset.text in data ? data[element.dataset.text] : element.dataset.text) : replaceMacro(element.dataset.text, data)) + '</span>'
        element.removeAttribute('data-text');
      }
    }
    htmlContent = root.innerHTML;
    htmlContent = replaceMacro(htmlContent, data);
    root.innerHTML = htmlContent;
    var elements = document.querySelectorAll('[data-dynamic]');
    for(var i = 0; i < elements.length; i++) {
      var element = elements[i];
      element.innerHTML = replaceMacro(element.innerHTML, data);
    }
    var bgs = root.querySelectorAll('[data-backgroundImage]');
    if(bgs.length) {
      for(var i = 0; i< bgs.length; i++) {
        var element = bgs[i];
        element.style.backgroundImage = 'url(' + data[element.dataset.backgroundimage] + ')';
        element.removeAttribute('data-backgroundImage');
      }
    }
    textUpdate();
    var idElements = root.querySelectorAll('[id]');
    if(idElements && idElements.length) {
      for(var i = 0; i < idElements.length; i++) {
        var element = idElements[i];
        if(element) { layers[element.id] = element; }
      }
    }
  }
  var contentSetup = function(data, callbackFunction) {
    var assets = [], beforeLoadFunction;
    if(typeof data == 'object' && amo && 'attributes' in amo && Object.keys(amo.attributes).length ) { adData.push(amo.attributes); }
    else {
      if('cam' in data && Object.keys(data).length) { for(var key in data.cam) { amo.registerVariation(key, data.cam[key]); } }
      if('feed' in  data && data.feed.length) { data.feed.forEach(function(content) { amo.registerContent(content); }); }
      if('content' in amo && amo.content && amo.content.length) {
      		amo.content.forEach(function(content) {
            var obj = content;
            obj.feedData = content;
            if('variation' in amo && amo.variation && Object.keys(amo.variation).length) {
              for(var key in amo.variation) { obj[key] = amo.variation[key]; }
            }
            if('staticData' in data && data.staticData && Object.keys(data.staticData).length) {
              for(var key in data.staticData) { obj[key] = data.staticData[key]; }
            }
      			adData.push(obj);
      		});
        }
    }
    if('beforeLoad' in  data && typeof data.beforeLoad == 'function') { beforeLoadFunction = data.beforeLoad; }
    if(adData.length) {
      adData.map(function(content){
        if('staticData' in data && data.staticData && Object.keys(data.staticData).length) {
          for(var key in data.staticData) { content[key] = data.staticData[key]; }
        }
        for(var key in content) { content[key] = typeof content[key] == 'string' ? replaceMacro(content[key], content.feedData) : content[key]; }
			});
      adData = beforeLoadFunction(adData);
      adData.forEach(function(dataObject){
        for(var i in dataObject) {
          var value = dataObject[i];
          if(typeof value == 'string' && value.match(/\.(bmp|jpeg|jpg|gif|png|webp)$/) != null && value.indexOf('/') != -1) {
            assets.push(value);
          }
        }
      });
      if(assets && assets.length) {
        loadAssets(assets, function(assets){
          update();
          // root.addEventListener("click", function(e) { amo.onAdClick('clickUrl'); });
          callbackFunction(adData, assets);
          setTimeout(function(){ layers.overlay.style.opacity = 0; ad.addBorder(); }, 10);
          setTimeout(function(){ layers.overlay.style.visibility = 'hidden';  }, 510);
        });
      } else {
        update();
        // root.addEventListener("click", function(e) { amo.onAdClick('clickUrl'); });
        callbackFunction(adData);
        setTimeout(function(){ layers.overlay.style.opacity = 0; ad.addBorder(); }, 10);
        setTimeout(function(){ layers.overlay.style.visibility = 'hidden';  }, 510);
      }
    }

  }
  return { //exposed parameters and methods
      root: root,
      layers: layers,
      frames: frames,
      width: width,
      height: height,
      loadAssets: function(list, callbackFunction) { return loadAssets(list, callbackFunction); },
      setText: function(selector, text, type) { return setText(selector, text, type); },
      addBorder: function() { return addBorder(); },
      update: function() { return update(); },
      contentSetup: function(data, callbackFunction) { return contentSetup(data, callbackFunction); }
  }
};
