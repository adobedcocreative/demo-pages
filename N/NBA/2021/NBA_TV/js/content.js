var feedTemplate1 = [];
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
  // var url = "https://spreadsheets.google.com/feeds/list/1AOqeyDj0s6f3KZ9s-nxJGNWBCOxK9Gh4qZUFkpCci_0/3/public/values?alt=json";
  var url = "https://spreadsheets.google.com/feeds/list/17ODXK0Dcr3yH9s-V47F4pOFInExMKktiyOv6G5oXmDw/1/public/values?alt=json";
  var url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTjD_69EtNq7SARD32h8t--ThREU5J3OMeYP2nefiL9Z1k0gawK7vsjrABV1tuxMdDaXB1kQ2FV9G73/pub?output=tsv";

  xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
          // var JSONData = JSON.parse(this.responseText);
          // JSONData.feed.entry.map(function(data){
          //   feedTemplate1.push({
          //     "Ad Size": data['gsx$adsize']['$t'],
          //     "CTA": data['gsx$cta']['$t'],
          //     "Country": data['gsx$country']['$t'],
          //     "Smart Names": data['gsx$smartnames']['$t'],
          //     "backgroundImage": data['gsx$backgroundimage']['$t'],
          //     "logoImage": data['gsx$logoimage']['$t'],
          //     "playerImage": data['gsx$playerimage']['$t'],
          //     "headlineText": data['gsx$headlinetext']['$t'],
          //     "styleProperties": data['gsx$styleproperties']['$t'],
          //     "clickURL": data['gsx$url']['$t'],
          //     // "Visibility": data['gsx$visibility']['$t'],
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
    feedContent = [];
    feedTemplate1.forEach(function(feed){
      var obj = {};
      for(var i in feed) { obj[i] = feed[i]; }
      obj['ads'] = feed['Ad Size'].split(',');
      feedContent.push(obj);
    });
    feedContent.map(function(data){
      if(!(data.Country in feedData)) { feedData[data.Country] = []; }
      feedData[data.Country].push(data);
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
