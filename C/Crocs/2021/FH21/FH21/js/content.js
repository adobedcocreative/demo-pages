var celebritiesFeedContent = [];
var celebritiesFeeds = {}, celebritiesFeedData = [];
var getCelebrityData;
var celebritiesLoadFlag = false;
const getCelebrityFeed = function(){
  const xmlhttp = new XMLHttpRequest();
  const API_KEY = "AIzaSyA9UwsLAgEsktyccelGlG_AV37qUCL-Gqo";
  const sheetLocation = "18T0H_5jKaQ21f8Lb4oODecYV3OlJbIP_41AhrDPUxh0/Sheet1";
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
            celebritiesFeedContent.push(row.reduce((obj, cell, i) => { obj[headers[i]] = cell; return obj; }, {}));
            return true;
          });
          celebritiesLoadFlag = true;
          loadData();
      }
  };
  xmlhttp.open("GET", url, true);
  xmlhttp.send();
}
getCelebrityFeed();
var loadData = function(){
  if(celebritiesLoadFlag) {
    celebritiesFeedContent.map(function(data){
      if(!(data.MODEL in celebritiesFeeds)) { celebritiesFeeds[data.MODEL] = []; }
      celebritiesFeeds[data.MODEL].push(data);
    });
    for(var i in celebritiesFeeds) {
      var obj = {};
      obj.name = i;
      obj.data = [];
      var productNames = [];
      celebritiesFeeds[i].map(function(data){productNames.push(data['TEXT_1']);});
      productNames = productNames.filter(function(value, index, self){ return self.indexOf(value) === index; });
      productNames.map(function(productName){
        var productObject = {};
        productObject.name = productName;
        productObject.data = celebritiesFeeds[i].filter(function(data){ return data['TEXT_1'] == productName });
        obj.data.push(productObject);
      });
      celebritiesFeedData.push(obj);
    }
    getCelebrityData = function(queryString) {
      var searchData;
      if(queryString) {
        if(queryString.indexOf('|') != -1) {
          var model = queryString.split('|')[0];
          var productName = queryString.split('|')[1];
          var data = celebritiesFeedData.find(function(data){ return data.name == model })
          if(data) {
            data = data.data.find(function(data){ return data.name == productName })
            if(data) { searchData = data }
          }
        } else {
          var data = celebritiesFeedData.find(function(data){ return data.name == queryString});
          if(data) { searchData = data.data[0] } else { searchData = celebritiesFeedData[0].data[0] }
        }
      }
      return searchData ? searchData : celebritiesFeedData[0].data[0];
    }
    loadPage();
  }

}