var feedTemplate1 = [] = [];
var feedContent = [], feedData = {}, getData;
var adData = [];
var loadTemplateFlag1 = false;
const tsvTojson = (data) => {
  const rowsData = data.split('\r\n').map(row => row.split('\t'));
  const headers = rowsData[0], rows = rowsData.slice(1);
  data = [];
  rows.every(row => {
    if(row.every(cell => cell === '')) return false; //isEmptyRow
    let obj = {};
    row.forEach((cell, i) => obj[headers[i]] = cell);
    data.push(obj);
    return true;
  });
  return data;
}
var getFeed1 = function(){
  var xmlhttp = new XMLHttpRequest();
  var sheetID = "1hOKKv_Q_-l3eNRXX3No-nUgEz9h1YPtuImZbJW8TygA/1";
  var searchID = location.search.split('?')[1];
  sheetID = searchID && searchID.length == 46 && searchID.indexOf('/') > 1 ? searchID : sheetID;
  sheetID = searchID && searchID.length <= 2 && Boolean(parseInt(searchID)) ? sheetID.split('/')[0] + '/' + parseInt(searchID) : sheetID;
  var url = "https://spreadsheets.google.com/feeds/list/" + sheetID + "/public/values?alt=json";
  var url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSjbwICX3eG-SIfUtLiEQR8fvXCelaeNu9ZSnFoeM6hIp9dWkr51Pul1VIL93mcHncAB5EnHl28LFtG/pub?output=tsv";

  xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
          // var JSONData = JSON.parse(this.responseText);
          // JSONData.feed.entry.map(function(data){
          //   feedTemplate1.push({
          //     "Ad Size": data['gsx$adsize']['$t'],
          //     "CTA": data['gsx$cta']['$t'],
          //     "Country": data['gsx$country']['$t'],
          //     "Language": data['gsx$language']['$t'],
          //     "Layout": data['gsx$layout']['$t'],
          //     "Segment": data['gsx$segment']['$t'],
          //     "Smart Names": data['gsx$smartnames']['$t'],
          //     "textField1": data['gsx$textfield1']['$t'],
          //     "textField2": data['gsx$textfield2']['$t'],
          //     "textField3": data['gsx$textfield3']['$t'],
          //     "textField4": data['gsx$textfield4']['$t'],
          //     "textField5": data['gsx$textfield5']['$t'],
          //   });
          // });
          feedTemplate1 = tsvTojson(this.responseText);
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
