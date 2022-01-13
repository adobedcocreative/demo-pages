var feedTemplate1 = [] = [];
var feedContent = [], feedData = {}, getData, feedInfo = [];
var adData = [];
var loadTemplateFlag1 = false;
var filters = {
  L1: 'Language',
  L2: 'Market',
  L3: 'Version',
  L4: 'Smart Names'
};
const getFeed1 = function(){
  const xmlhttp = new XMLHttpRequest();
  const API_KEY = "AIzaSyA9UwsLAgEsktyccelGlG_AV37qUCL-Gqo";
  const sheetLocation = "1R3EZiVM_YN5QPKA8XqE0gANPl6eVW8uZAy2tqSL6E-s/Azure_Static_Background_Refresh";
  const searchId = location.search.split('?')[1];
  const sheetId = searchId && searchId.length >= 44 && searchId.indexOf('/') > 1 ? searchId : sheetLocation;
  const spreadsheetId = sheetId.split('/')[0];
  const sheetName = sheetId.split('/')[1];
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${sheetName}?key=${API_KEY}`;

  xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
          const responseData = JSON.parse(this.responseText).values;
          const headers = responseData[0], rows = responseData.slice(1);
          rows.every(row => {
            if(row.every(cell => cell === '')) return false; //isEmptyRow
            feedTemplate1.push(row.reduce((obj, cell, i) => { obj[headers[i]] = cell; return obj; }, {}));
            return true;
          });
          loadTemplateFlag1 = true;
          // loadData();
          loadPage();
      }
  };
  xmlhttp.open("GET", url, true);
  xmlhttp.send();
}
getFeed1();

// var loadData = function(){
//   if(loadTemplateFlag1) {
//     feedContent = [
//       {
//         name: 'Simplified',
//         feed: feedTemplate1,
//       },
//     ]
//     feedContent.map(function(feed){
//     	var feedContent1 = [];
//     	feed.feed.map(function(data){
//         data.template = feed.name;
//     		if(data.Country.indexOf('/') != -1){
//                 data.Country.split('/').map(function(country){
//                     var obj = {};
//                     for(var i in data) { obj[i] = data[i] }
//                     obj['Country'] = country;
//                     feedContent1.push(obj);
//                 });
//             } else {
//                 feedContent1.push(data);
//             }
//     	});
//     	feed.data = feedContent1;

//       feed.data.map(function(data){
//         if(!(data.Country in feedData)) { feedData[data.Country] = []; }
//         feedData[data.Country].push(data);
//       });
//     });
//     for(var i in feedData) {
//       var obj = {};
//       obj.name = i;
//       obj.data = [];
//       var smartNames = [];
//       feedData[i].map(function(data){smartNames.push(data['Smart Names']);});
//       smartNames = smartNames.filter(function(value, index, self){ return self.indexOf(value) === index; })
//       smartNames.map(function(smartName){
//         var smartObject = {};
//         smartObject.name = smartName;
//         smartObject.data = feedData[i].filter(function(data){ return data['Smart Names'] == smartName });
//         obj.data.push(smartObject);
//       });
//       adData.push(obj);
//     }
//     getData = function(queryString) {
//       var searchData;
//       if(queryString) {
//         if(queryString.indexOf('|') != -1) {
//           var country = queryString.split('|')[0];
//           var smartName = queryString.split('|')[1];
//           var data = adData.find(function(data){ return data.name == country })
//           if(data) {
//             data = data.data.find(function(data){ return data.name == smartName })
//             if(data) { searchData = data }
//           }
//         } else {
//           var data = adData.find(function(data){ return data.name == queryString});
//           if(data) { searchData = data.data[0] } else { searchData = adData[0].data[0] }
//         }
//       }
//       return searchData ? searchData : adData[0].data[0];
//     }
//     loadPage();
//   }
// }
var loadData1 = function() {
  var feedInfo = JSON.parse(JSON.stringify(feedTemplate1));
  feedInfo.map(function(data){
    var query = [];
    for(var level in filters) {
      data[level] = data[filters[level]];
      query.push(data[level]);
    }
    data.levelQueryString = query.join('^|^')
  });
  return feedInfo;
}
var bindFilters = function(queryString) {
  queries = queryString ? queryString.split('^|^') : '';
  var filterContainer = document.querySelector('#filterContainer');
  var data = JSON.parse(JSON.stringify(feedInfo));
  filterContainer.innerHTML = '';
  for(var level in filters) {
    var query = queries.length ? queries.shift() : data[0][filters[level]];
    var div = document.createElement('div');
    var ul = document.createElement('ul');
    var options = {}
    var selectedDiv = document.createElement('div');
    div.appendChild(selectedDiv);
    div.appendChild(ul);
    filterContainer.appendChild(div);
    data = data.filter(function(object){ 
      if(!(object[filters[level]] in options))
        options[object[filters[level]]] = object.levelQueryString; 
      return object[filters[level]] === query;
    });
    if(!data.length) return;
    for(var option in options) {
      var li = document.createElement('li');
      if(option === query) {
        selectedDiv.textContent = option;
        li.classList.add('selected');
      } 
      li.textContent = option;
      li.dataset.query = options[option];
      li.onclick = function() {
        var data = bindFilters(this.dataset.query); 
        if(!data || !data.length) bindFilters('');
        loadAd(data);
      }
      ul.appendChild(li);     
    }
    if(!ul.querySelector('li.selected')) {
      ul.querySelector('li:first-child').classList.add('selected');
      selectedDiv.textContent = ul.querySelector('li:first-child').textContent;
    }
  }
  location.hash = btoa(data[0].levelQueryString).replace('==','');
  adjustFilters();
  return data;
}
var adjustFilters = function() {
  var divs = document.querySelectorAll('#filterContainer > div');
  divs.forEach(function(div){
    var firstChild = div.children[0];
    var secondChild = div.children[1];
    var maxHeight = firstChild.offsetHeight;
    if(secondChild.offsetHeight > maxHeight) maxHeight = secondChild.offsetHeight;
    firstChild.style.height = secondChild.style.height = maxHeight + 'px' 
  });
}
var resetAds = function() {
  document.querySelector('#adContainer').innerHTML = '<div class="frame-wrapper" id="ad160x600"></div>'+
    '<div class="frame-wrapper" id="ad300x600"></div>'+
    '<div style="display:inline-block;max-width:800px;text-align:left;">'+
      '<div class="frame-wrapper" id="ad300x250"></iframe></div>'+
      '<div class="frame-wrapper" id="ad728x90"></div>'+
    '</div>';
}
var loadAd = function(data) {
  resetAds();
  data.map(function(data){
    var adSize = data['Ad Size'];
    var adWidth = adSize.split('x')[0];
    var adHeight = adSize.split('x')[1];
    // var cam = getCAMData(data);
    var adScript = `
    -1==navigator.userAgent.indexOf("MSIE")&&-1==navigator.userAgent.indexOf("Trident")||Object.keys||(Object.keys=function(d){var f=[],e;for(e in d)d.hasOwnProperty(e)&&f.push(e);return f});var amo;
  amo=new function(){var d={};this.variation={};this.attributes={};this.content=[];var f={name:"1",description:"1",provider:"1",brand:"1",display_advertiser_category_name:"1",price:"1",discount_price:"1",picture_url:"1",product_url:"1",passthroughfield1:"1",passthroughfield2:"1",passthroughfield3:"1",passthroughfield4:"1",passthroughfield5:"1",image_url1:"1",image_url2:"1",image_url3:"1",image_url4:"1",image_url5:"1"},e=0;this.registerClick=function(a,c){d[a]=c};this.registerVariation=function(a,c){a&&
  c?"string"!==typeof a||"string"!==typeof c?alert("ERROR: key and value needs to be string"):this.variation[a]=c:alert("ERROR: key or/and value is not passed")};this.registerAttribute=function(a,c,b){a&&b&&c?"TEXT"!=c&&"IMAGE"!=c?alert("ERROR: type needs to be TEXT/IMAGE"):"string"!==typeof a||"string"!==typeof b?alert("ERROR: name and value needs to be string"):this.attributes[a]=b:alert("ERROR: name or/and type or/and value is not passed")};this.registerContent=function(a){if(a)if(validHeader=!0,
  void 0==a.length){for(var c=Object.keys(a),b=0;b<c.length;b++){var d=c[b],g=0;if(1==f[d])g=1;else{alert("Invalid Header in Content: "+d);break}}0!=g&&(a.gid=++e,this.content.push(a))}else alert("Content Data needs to be a JSON Object. Passed in Content Data seems to be an Array");else alert("ERROR: Content Data is not passed")};this.onDynAdClick=function(a,c,b,d,e){a=b?b:a?a.product_url:"";0<a.length&&(0==a.indexOf("http://")||0==a.indexOf("https://")||0==a.indexOf("//"))?window.open(a):alert("ERROR: Click URL is not available or is not valid.")};
  this.onAdClick=function(a,c){var b;a?(0==a.indexOf("http://")||0==a.indexOf("https://")||0==a.indexOf("//")?b=a:d[a]&&(b=d[a]),b?window.open(b):alert("ERROR: Click Parameter "+a+" not registered. Register landing page using amo.registerClick")):alert("ERROR: null or undefined Click Parameter passed")}};
    var cam = {
      backgroundImage: "../../assets/${data.backgroundImage}",
      headline: "${data.headline}",
      subHeadline: "${data.subHeadline}",
      ctaText: "${data.ctaText}",
      impressionTracker: "na",
      clickUrl: "https://microsoft.com/",
    };
    for(var i in cam) { amo.registerVariation(i, cam[i]); }
    amo.registerVariation = function(){}`;
    var scriptTag = document.createElement('script');
    scriptTag.type= 'text/javascript';
    var inlineScript = document.createTextNode(adScript);
    scriptTag.appendChild(inlineScript);
    var iframe = document.createElement('iframe');
    iframe.id = adSize;
    iframe.style.width = adWidth + 'px';
    iframe.style.height = adHeight + 'px';
    iframe.style.border = 'none';
    document.querySelector('#ad' + adSize).innerHTML = '';
    document.querySelector('#ad' + adSize).appendChild(iframe);
    var iframeDoc = iframe.contentWindow ? iframe.contentWindow : iframe.contentDocument && iframe.contentDocument.document ? iframe.contentDocument.document : iframe.contentDocument;
    iframeDoc.document.open();
    iframeDoc.document.write('<iframe src="ads/'+adSize+'/'+adSize+'.html" width="'+adWidth+'" height="'+adHeight+'" style="display:block;" scrolling="no" frameborder="0" allowtransparency="true" hspace="0" vspace="0" marginwidth="0" marginheight="0"></iframe>');
    iframeDoc.document.close();
    iframeDoc.document.body.style.margin = 0;
    iframeDoc.document.head.appendChild(scriptTag);
  });

}

var loadPage = function(){
  var queryString = location.hash;
  if(queryString) {
    var selector = location.hash.split('#')[1];
    queryString = selector ? atob(selector) : '';
  }
  feedInfo = loadData1();
  var data = bindFilters(queryString);
  if(!data || !data.length) bindFilters('');
  loadAd(data);
  // adjustFilters();
}