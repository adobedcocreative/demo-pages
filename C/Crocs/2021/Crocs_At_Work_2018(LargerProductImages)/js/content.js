var attributesContent = [], feedContent = [];
var celebritiesFeeds = {}, attributesData = [];
var getCelebrityData;
var attributesLoadFlag = false, feedLoadFlag = false;
const getAttributesJSON = function(){
  const xmlhttp = new XMLHttpRequest();
  const API_KEY = "AIzaSyA9UwsLAgEsktyccelGlG_AV37qUCL-Gqo";
  const sheetLocation = "1ijM26UjcpyeGL7Xr2lcJxkQykaSnzI11UTl2Ubt4jds/CAM";
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
            attributesContent.push(row.reduce((obj, cell, i) => { obj[headers[i]] = cell; return obj; }, {}));
            return true;
          });
          attributesLoadFlag = true;
          loadData();
      }
  };
  xmlhttp.open("GET", url, true);
  xmlhttp.send();
}
getAttributesJSON();
const getFeedJSON = function(){
  const xmlhttp = new XMLHttpRequest();
  const API_KEY = "AIzaSyA9UwsLAgEsktyccelGlG_AV37qUCL-Gqo";
  const sheetLocation = "1ijM26UjcpyeGL7Xr2lcJxkQykaSnzI11UTl2Ubt4jds/Feed";
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
            feedContent.push(row.reduce((obj, cell, i) => { obj[headers[i]] = cell; return obj; }, {}));
            return true;
          });
          feedLoadFlag = true;
          loadData();
      }
  };
  xmlhttp.open("GET", url, true);
  xmlhttp.send();
}
getFeedJSON();
var loadData = function(){
  if(attributesLoadFlag && feedLoadFlag) {
    attributesContent.map(function(data){
      if(!(data.Level1 in celebritiesFeeds)) { celebritiesFeeds[data.Level1] = []; }
      celebritiesFeeds[data.Level1].push(data);
    });
    for(var i in celebritiesFeeds) {
      var obj = {};
      obj.name = i;
      obj.data = [];
      var productNames = [];
      celebritiesFeeds[i].map(function(data){productNames.push(data.Level2);});
      productNames = productNames.filter(function(value, index, self){ return self.indexOf(value) === index; });
      productNames.map(function(productName){
        var productObject = {};
        productObject.name = productName;
        productObject.data = celebritiesFeeds[i].filter(function(data){ return data.Level2 == productName });
        obj.data.push(productObject);
      });
      attributesData.push(obj);
    }
    getCelebrityData = function(queryString) {
      var searchData;
      if(queryString) {
        if(queryString.indexOf('|') != -1) {
          var model = queryString.split('|')[0];
          var productName = queryString.split('|')[1];
          var data = attributesData.find(function(data){ return data.name == model })
          if(data) {
            data = data.data.find(function(data){ return data.name == productName })
            if(data) { searchData = data }
          }
        } else {
          var data = attributesData.find(function(data){ return data.name == queryString});
          if(data) { searchData = data.data[0] } else { searchData = attributesData[0].data[0] }
        }
      }
      return searchData ? searchData : attributesData[0].data[0];
    }
    loadPage();
  }

}
