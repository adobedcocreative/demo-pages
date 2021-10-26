var feedTemplate1 = [] = [];
var feedContent = [], feedData = {}, getData;
var adData = [];
var loadTemplateFlag1 = false;
const getFeed1 = function(){
  const xmlhttp = new XMLHttpRequest();
  const API_KEY = "AIzaSyA9UwsLAgEsktyccelGlG_AV37qUCL-Gqo";
  const sheetLocation = "1QUtN7b2MwrAJKPu4LWsaxH0mSLTocYVtJ-LPFR7zSHc/Content";
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
          loadData();
      }
  };
  xmlhttp.open("GET", url, true);
  xmlhttp.send();
}
getFeed1();

var loadData = function(){
  if(loadTemplateFlag1) {
    feedContent = [
      {
        name: 'Simplified',
        feed: feedTemplate1,
      },
    ]
    feedContent.map(function(feed){
    	var feedContent1 = [];
    	feed.feed.map(function(data){
        data.template = feed.name;
    		if(data.Country.indexOf('/') != -1){
                data.Country.split('/').map(function(country){
                    var obj = {};
                    for(var i in data) { obj[i] = data[i] }
                    obj['Country'] = country;
                    feedContent1.push(obj);
                });
            } else {
                feedContent1.push(data);
            }
    	});
    	feed.data = feedContent1;

      feed.data.map(function(data){
        if(!(data.Country in feedData)) { feedData[data.Country] = []; }
        feedData[data.Country].push(data);
      });
    });
    for(var i in feedData) {
      var obj = {};
      obj.name = i;
      obj.data = [];
      var layoutNames = [];
      feedData[i].map(function(data){layoutNames.push(data['Layout']);});
      layoutNames = layoutNames.filter(function(value, index, self){ return self.indexOf(value) === index; })
      layoutNames.map(function(layoutName){
        var smartObject = {};
        smartObject.name = layoutName;
        smartObject.data = feedData[i].filter(function(data){ return data['Layout'] == layoutName });
        obj.data.push(smartObject);
      });
      adData.push(obj);
    }
    getData = function(queryString) {
      var searchData;
      if(queryString) {
        if(queryString.indexOf('|') != -1) {
          var country = queryString.split('|')[0];
          var layoutName = queryString.split('|')[1];
          var data = adData.find(function(data){ return data.name == country })
          if(data) {
            data = data.data.find(function(data){ return data.name == layoutName })
            if(data) { searchData = data }
          }
        } else {
          var data = adData.find(function(data){ return data.name == queryString});
          if(data) { searchData = data.data[0] } else { searchData = adData[0].data[0] }
        }
      }
      return searchData ? searchData : adData[0].data[0];
    }
    loadPage();
  }
}
