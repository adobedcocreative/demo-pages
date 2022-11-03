var feedTemplate1 = [];
var feedContent = [], feedData = {}, getData;
var adData = [];
var loadTemplateFlag1 = false;
var getFeed1 = function(){
  var xmlhttp = new XMLHttpRequest();
  const API_KEY = "AIzaSyA9UwsLAgEsktyccelGlG_AV37qUCL-Gqo";
  const sheetLocation = "1i564DiRU35eN8CpRMm-_dmIUUSHgm6oyAxMWEtfFtpI/Content";
  const searchId = location.search.split('?')[1];
  const sheetId = searchId && searchId.length >= 44 && searchId.indexOf('/') > 1 ? searchId : sheetLocation;
  const spreadsheetId = sheetId.split('/')[0];
  const sheetName = sheetId.split('/')[1];
  var url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${sheetName}?key=${API_KEY}`;

  xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
          const responseData = JSON.parse(this.responseText).values;
          let headers = responseData[0], rows = responseData.slice(1);
          var headerMap = {
            FILTER_1: 'Variation',
            PRODUCT_SKU: 'Place',
            PRODUCT_DESCRIPTION: 'textField1',
            IMAGE: 'textField2',
            TEXT_1: 'textField3',
            TEXT_2: 'textField4',
            TEXT_3: 'textField5'
          }
          headers = headers.map(function(header) {
            if(header in headerMap) header = headerMap[header];
            return header;
          });
          rows.every(row => {
            if(row.every(cell => cell === '')) return false; //isEmptyRow
            feedTemplate1.push(row.reduce((obj, cell, i) => { obj[headers[i]] = cell; return obj; }, {}));
            return true;
          });
          if(location.hostname && location.hostname != 'localhost') {
            var tempFeed = [];
            feedTemplate1.forEach(function(data){
              if(!Boolean('Visibility' in data) || ('Visibility' in data && data.Visibility.toLowerCase() == 'true')) {
                tempFeed.push(data);
              }
            });
            feedTemplate1 = tempFeed;
          }
          loadTemplateFlag1 = true;
          loadData();
      }
  };
  xmlhttp.open("GET", url, true);
  xmlhttp.send();
}
getFeed1();
var loadData = function(){
  if(loadTemplateFlag1) {
    feedContent = [];
    feedTemplate1.forEach(function(feed){
      var obj = {};
      for(var i in feed) { obj[i] = feed[i]; }
      obj['ads'] = feed['Ad Size'].split(',');
      feedContent.push(obj);
    });
    feedContent.map(function(data){
      if(!(data.Variation in feedData)) { feedData[data.Variation] = []; }
      feedData[data.Variation].push(data);
    });
    for(var i in feedData) {
      var obj = {};
      obj.name = i;
      obj.data = [];
      var smartNames = [];
      feedData[i].map(function(data){smartNames.push(data['Smart Names']);});
      smartNames = smartNames.filter(function(value, index, self){ return self.indexOf(value) === index; })
      smartNames.map(function(smartName){
        var smartObject = {};
        smartObject.name = smartName;
        smartObject.data = feedData[i].filter(function(data){ return data['Smart Names'] == smartName });
        obj.data.push(smartObject);
      });
      adData.push(obj);
    }
    getData = function(queryString) {
      var searchData, selectedAd;
      if(queryString) {
        if(queryString.indexOf('|') != -1) {
          var country = queryString.split('|')[0];
          var smartName = queryString.split('|')[1];
          selectedAd = queryString.split('|')[2];
          var data = adData.find(function(data){ return data.name == country })
          if(data) {
            data = data.data.find(function(data){ return data.name == smartName })
            if(data) { searchData = data }
          }
        } else {
          var data = adData.find(function(data){ return data.name == queryString});
          if(data) { searchData = data.data[0] } else { searchData = adData[0].data[0] }
        }
      }
      var selectedData = searchData ? searchData : adData[0].data[0];
      selectedAd = selectedAd ? selectedAd : '300x250';
      var obj = {};
      for(var i in selectedData) { obj[i] = selectedData[i]; }
      obj.selectedAd = obj.data.find(function(ad){ return ad['Ad Size'] == selectedAd }) ? selectedAd : obj.data[0].ads[0];
      return obj;
    }
    loadPage();
  }
}
