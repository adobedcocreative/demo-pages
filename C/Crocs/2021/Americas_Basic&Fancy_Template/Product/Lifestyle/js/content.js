var celebritiesFeedContent = [];
var celebritiesFeeds = {}, celebritiesFeedData = [];
var getCelebrityData;
var celebritiesLoadFlag = false;
var getCelebrityFeed = function(){
  var xmlhttp = new XMLHttpRequest();
  var url = "https://spreadsheets.google.com/feeds/list/13VLAZFDR5Z0_b7PGLCG7cP_HZWrv_zmzDBUNhENRYww/2/public/values?alt=json";

  xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
          var JSONData = JSON.parse(this.responseText);
          JSONData.feed.entry.map(function(data){
            celebritiesFeedContent.push({
              "LANGUAGE": data['gsx$language']['$t'],
              "MODEL": data['gsx$model']['$t'],
              "AD_SIZE": data['gsx$adsize']['$t'],
              "smartName": data['gsx$smartname']['$t'],
              "Label": data['gsx$label']['$t'],
              "styleProperties": data['gsx$styleproperties']['$t'],
              "ctaText": data['gsx$ctatext']['$t'],
              "backgroundImage": data['gsx$backgroundimage']['$t'],
              "frameImage11": data['gsx$frameimage11']['$t'],
              "frameImage12": data['gsx$frameimage12']['$t'],
              "frameImage21": data['gsx$frameimage21']['$t'],
              "frameImage22": data['gsx$frameimage22']['$t'],
              "frameImage31": data['gsx$frameimage31']['$t'],
              "frameImage32": data['gsx$frameimage32']['$t'],
              "frameImage41": data['gsx$frameimage41']['$t'],
              "frameImage42": data['gsx$frameimage42']['$t'],
              "frameImage43": data['gsx$frameimage43']['$t'],
              "headlineText": data['gsx$headlinetext']['$t'],
              "clickUrl": data['gsx$url']['$t'],
            });
          });
          celebritiesLoadFlag = true;
          loadData();
          // console.log(celebritiesFeedContent);
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
      celebritiesFeeds[i].map(function(data){productNames.push(data['smartName']);});
      productNames = productNames.filter(function(value, index, self){ return self.indexOf(value) === index; });
      productNames.map(function(productName){
        var productObject = {};
        productObject.name = productName;
        productObject.data = celebritiesFeeds[i].filter(function(data){ return data['smartName'] == productName });
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
