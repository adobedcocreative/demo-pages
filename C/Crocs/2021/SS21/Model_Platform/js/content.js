var celebritiesFeedContent = [];
var celebritiesFeeds = {}, celebritiesFeedData = [];
var getCelebrityData;
var celebritiesLoadFlag = false;
var getCelebrityFeed = function(){
  var xmlhttp = new XMLHttpRequest();
  var url = "https://spreadsheets.google.com/feeds/list/16OmbousgQGvjfhEpYqIuwoVj-A_h3LhOhMDqRSiocdI/1/public/values?alt=json";

  xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
          var JSONData = JSON.parse(this.responseText);
          JSONData.feed.entry.map(function(data){
            celebritiesFeedContent.push({
              "LANGUAGE": data['gsx$language']['$t'],
              "MODEL": data['gsx$model']['$t'],
              "AD_SIZE": data['gsx$adsize']['$t'],
              "TEXT_1": data['gsx$text1']['$t'],
              "TEXT_2": data['gsx$text2']['$t'],
              "TEXT_3": data['gsx$text3']['$t'],
              "TEXT_4": data['gsx$text4']['$t'],
              "TEXT_5": data['gsx$text5']['$t'],
              "TEXT_6": data['gsx$text6']['$t'],
              "TEXT_7": data['gsx$text7']['$t'],
              "IMAGE_URL": data['gsx$imageurl']['$t'],
              "IMAGE_URL1": data['gsx$imageurl1']['$t'],
              "IMAGE_URL2": data['gsx$imageurl2']['$t'],
              "IMAGE_URL3": data['gsx$imageurl3']['$t'],
              "IMAGE_URL4": data['gsx$imageurl4']['$t'],
              "IMAGE_URL5": data['gsx$imageurl5']['$t'],
              "PROVIDER_CATEGORY": data['gsx$providercategory']['$t'],
              "PRODUCT_NAME": data['gsx$productname']['$t'],
              "PRODUCT_URL": data['gsx$producturl']['$t'],
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