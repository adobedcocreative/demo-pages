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
  var sheetID = "1i564DiRU35eN8CpRMm-_dmIUUSHgm6oyAxMWEtfFtpI/1";
  var searchID = location.search.split('?')[1];
  sheetID = searchID && searchID.length == 46 && searchID.indexOf('/') > 1 ? searchID : sheetID;
  sheetID = searchID && searchID.length <= 2 && Boolean(parseInt(searchID)) ? sheetID.split('/')[0] + '/' + parseInt(searchID) : sheetID;
  var url = "https://spreadsheets.google.com/feeds/list/" + sheetID + "/public/values?alt=json";
  var url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQvw4CgKDU5aOvbFTUyS9HvF94aj5awVd61lVtw7ME1bgeWG-b3sigRbmGCL1R_sM-qraSQ-_5IfWU1/pub?output=tsv";

  xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
          // var JSONData = JSON.parse(this.responseText);
          // JSONData.feed.entry.map(function(data){
          //   feedTemplate1.push({
          //     "Ad Size": data['gsx$adsize']['$t'],
          //     "CTA": data['gsx$cta']['$t'],
          //     "Place": data['gsx$place']['$t'],
          //     "Variation": data['gsx$variation']['$t'],
          //     "Smart Names": data['gsx$smartnames']['$t'],
          //     "textField1": data['gsx$textfield1']['$t'],
          //     "textField2": data['gsx$textfield2']['$t'],
          //     "textField3": data['gsx$textfield3']['$t'],
          //     "textField4": data['gsx$textfield4']['$t'],
          //     "textField5": data['gsx$textfield5']['$t'],
          //     "endFrameImage": data['gsx$endframeimage']['$t'],
          //     "URL": data['gsx$url']['$t'],
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
