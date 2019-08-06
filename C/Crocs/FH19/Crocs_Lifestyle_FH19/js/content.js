// var celebritiesFeedContent = [{"MODEL":"Zooey Deschanel","AD_SIZE":"160x600","TEXT_1":"Classic Clog","TEXT_2":"ClassicClog","TEXT_3":"I CROCS!","TEXT_4":"NA","TEXT_5":"SHOP NOW","TEXT_6":"darkblue","TEXT_7":"#F1718B","IMAGE_URL":"1x1.png","IMAGE_URL1":"160x600_ClassicClog_evenRowsImage.png","IMAGE_URL2":"160x600_ClassicClog_oddRowsImage.png","IMAGE_URL3":"160x600_ClassicClog_ModelImage_Zooey.png","IMAGE_URL4":"ClassicClog_ProductImage.png","IMAGE_URL5":"ClassicClog_ProductImage_Shadow.png","PROVIDER_CATEGORY":"Classic Clog|#F1718B","PRODUCT_NAME":"Classic Clog|#F1718B","PRODUCT_URL":"https://www.crocs.com/p/classic-clog/10001.html?cid=737"}];
// var onFigFeedContent = [{"MODEL":"Zooey Deschanel","AD_SIZE":"300x600","TEXT_1":"Classic Clog","TEXT_2":"ClassicClog","TEXT_3":"I CROCS!","TEXT_4":"right","TEXT_5":"SHOP NOW","TEXT_6":"darkblue","TEXT_7":"#F1718B","PROMOTIONAL_COPY":"create laugh <unique>CROCS</unique> style color dream comfort love charm","IMAGE_URL":"1x1.png","IMAGE_URL3":"300x600_ClassicClog_FullBody_ModelImage_Zooey.png","IMAGE_URL4":"ClassicClog_ProductImage.png","IMAGE_URL5":"ClassicClog_ProductImage_Shadow.png","PROVIDER_CATEGORY":"Classic Clog|#F1718B","PRODUCT_NAME":"Classic Clog|#F1718B","PRODUCT_URL":"https://www.crocs.com/p/classic-clog/10001.html?cid=737"}];
var celebritiesFeedContent = [], onFigFeedContent = [];
var celebritiesFeeds = {}, celebritiesFeedData = [];
var onFigFeeds = {}, onFigFeedData = [];
var getCelebrityData, getOnFigData;
var celebritiesLoadFlag = false, onFigLoadFlag = false;
var getCelebrityFeed = function(){
  var xmlhttp = new XMLHttpRequest();
  // var url = "https://spreadsheets.google.com/feeds/list/1eEkudYUehS2fK6YGhuBAgR4oAsGiaPECD1Y4JmUaXEQ/od6/public/values?alt=json";
  var url = "https://spreadsheets.google.com/feeds/list/1tfzu-fF-hhtvc-eZ7fWH-IQzznTUwqTcnnpYMKHqx2g/od6/public/values?alt=json";

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
var getOnFigFeed = function(){
  var xmlhttp = new XMLHttpRequest();
  // var url = "https://spreadsheets.google.com/feeds/list/1-KqogCpPbv_VHMEAIckYTTUbgiNdd3jLjFq-8EBEJE4/od6/public/values?alt=json";
  var url = "https://spreadsheets.google.com/feeds/list/19f5NvuB8IM9-dWKHdxxFDHizGjxHbNd7ojCcl7ud7NI/od6/public/values?alt=json";

  xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
          var JSONData = JSON.parse(this.responseText);
          JSONData.feed.entry.map(function(data){
            onFigFeedContent.push({
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
              "PROMOTIONAL_COPY": data['gsx$promotionalcopy']['$t'],
              "IMAGE_URL": data['gsx$imageurl']['$t'],
              "IMAGE_URL3": data['gsx$imageurl3']['$t'],
              "IMAGE_URL4": data['gsx$imageurl4']['$t'],
              "IMAGE_URL5": data['gsx$imageurl5']['$t'],
              "PROVIDER_CATEGORY": data['gsx$providercategory']['$t'],
              "PRODUCT_NAME": data['gsx$productname']['$t'],
              "PRODUCT_URL": data['gsx$producturl']['$t'],
            });
          });
          onFigLoadFlag = true;
          loadData();
          // console.log(onFigFeedContent);
      }
  };
  xmlhttp.open("GET", url, true);
  xmlhttp.send();
}
getOnFigFeed();
var loadData = function(){
  if(celebritiesLoadFlag && onFigLoadFlag) {
    celebritiesFeedContent.map(function(data){
      if(!(data.MODEL in celebritiesFeeds)) { celebritiesFeeds[data.MODEL] = []; }
      celebritiesFeeds[data.MODEL].push(data);
    });
    for(var i in celebritiesFeeds) {
      var obj = {};
      obj.name = i;
      obj.data = [];
      var productNames = [];
      celebritiesFeeds[i].map(function(data){productNames.push(data['TEXT_2']);});
      productNames = productNames.filter(function(value, index, self){ return self.indexOf(value) === index; });
      productNames.map(function(productName){
        var productObject = {};
        productObject.name = productName;
        productObject.data = celebritiesFeeds[i].filter(function(data){ return data['TEXT_2'] == productName });
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

    onFigFeedContent.map(function(data){
      if(!(data.MODEL in onFigFeeds)) { onFigFeeds[data.MODEL] = []; }
      onFigFeeds[data.MODEL].push(data);
    });
    for(var i in onFigFeeds) {
      var obj = {};
      obj.name = i;
      obj.data = [];
      var productNames = [];
      onFigFeeds[i].map(function(data){productNames.push(data['TEXT_2']);});
      productNames = productNames.filter(function(value, index, self){ return self.indexOf(value) === index; });
      productNames.map(function(productName){
        var productObject = {};
        productObject.name = productName;
        productObject.data = onFigFeeds[i].filter(function(data){ return data['TEXT_2'] == productName });
        obj.data.push(productObject);
      });
      onFigFeedData.push(obj);
    }
    getOnFigData = function(queryString) {
      var searchData;
      if(queryString) {
        if(queryString.indexOf('|') != -1) {
          var model = queryString.split('|')[0];
          var productName = queryString.split('|')[1];
          var data = onFigFeedData.find(function(data){ return data.name == model })
          if(data) {
            data = data.data.find(function(data){ return data.name == productName })
            if(data) { searchData = data }
          }
        } else {
          var data = onFigFeedData.find(function(data){ return data.name == queryString});
          // if(data) { searchData = data.data[0] } else { searchData = onFigFeedData[0].data[0] }
          if(data) { searchData = data.data[0] } else { searchData = {} }
        }
      }
      // return searchData ? searchData : onFigFeedData[0].data[0];
      return searchData ? searchData : {};
    }
    loadPage();
  }

}
