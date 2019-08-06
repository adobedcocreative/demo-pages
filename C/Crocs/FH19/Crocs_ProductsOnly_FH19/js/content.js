var normalFeedContent = [], scrollingTextFeedContent = [];
var normalFeeds = {}, normalFeedData = [];
var scrollingTextFeeds = {}, scrollingTextFeedData = [];
var getNormalData, getScrollingTextData;
var normalLoadFlag = false, scrollingTextLoadFlag = false;
var getNormalFeed = function(){
  var xmlhttp = new XMLHttpRequest();
  // var url = "https://spreadsheets.google.com/feeds/list/1f0MD169zlWhyBsovfFqo2HOD7ZX1IW_O5eR0JoF5_vo/od6/public/values?alt=json";
  var url = "https://spreadsheets.google.com/feeds/list/1YsYmUyMM-9KPGoGbRBXr8k2HmD15XO33k5Ps1-qmlwg/od6/public/values?alt=json";

  xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
          var JSONData = JSON.parse(this.responseText);
          JSONData.feed.entry.map(function(data){
            normalFeedContent.push({
              "LANGUAGE": data['gsx$language']['$t'],
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
              "IMAGE_URL4": data['gsx$imageurl4']['$t'],
              "IMAGE_URL5": data['gsx$imageurl5']['$t'],
              "PROVIDER_CATEGORY": data['gsx$providercategory']['$t'],
              "PRODUCT_NAME": data['gsx$productname']['$t'],
              "PRODUCT_URL": data['gsx$producturl']['$t'],
            });
          });
          normalLoadFlag = true;
          loadData();
          // console.log(normalFeedContent);
      }
  };
  xmlhttp.open("GET", url, true);
  xmlhttp.send();
}
getNormalFeed();
var getScrollingTextFeed = function(){
  var xmlhttp = new XMLHttpRequest();
  // var url = "https://spreadsheets.google.com/feeds/list/1hUuIoaEMqyiq3YD3CrH3neP3L_Gds04HhdBu3s1VerI/od6/public/values?alt=json";
  var url = "https://spreadsheets.google.com/feeds/list/12xgUm9eRMjMvxJFNVABIM2n6W_lPk6i8CHm5kJsTFHc/od6/public/values?alt=json";

  xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
          var JSONData = JSON.parse(this.responseText);
          JSONData.feed.entry.map(function(data){
            scrollingTextFeedContent.push({
              "LANGUAGE": data['gsx$language']['$t'],
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
              "IMAGE_URL4": data['gsx$imageurl4']['$t'],
              "IMAGE_URL5": data['gsx$imageurl5']['$t'],
              "PROVIDER_CATEGORY": data['gsx$providercategory']['$t'],
              "PRODUCT_NAME": data['gsx$productname']['$t'],
              "PRODUCT_URL": data['gsx$producturl']['$t'],
            });
          });
          scrollingTextLoadFlag = true;
          loadData();
          // console.log(scrollingTextFeedContent);
      }
  };
  xmlhttp.open("GET", url, true);
  xmlhttp.send();
}
getScrollingTextFeed();
var loadData = function(){
  if(normalLoadFlag && scrollingTextLoadFlag) {
    normalFeedContent.map(function(data){
      if(!(data.TEXT_2 in normalFeeds)) { normalFeeds[data.TEXT_2] = []; }
      normalFeeds[data.TEXT_2].push(data);
    });
    for(var i in normalFeeds) {
      var obj = {};
      obj.name = i;
      obj.data = [];
      normalFeeds[i].forEach(function(data){ obj.data.push(data); });
      normalFeedData.push(obj);
    }
    getNormalData = function(queryString) {
      var searchData;
      if(queryString) {
        if(queryString.indexOf('|') != -1) {
          var productName = queryString.split('|')[0];
          var data = normalFeedData.find(function(data){ return data.name == productName })
          if(data) { searchData = data }
        } else {
          var data = normalFeedData.find(function(data){ return data.name == queryString});
          if(data) { searchData = data } else { searchData = normalFeedData[0] }
        }
      }
      return searchData ? searchData : normalFeedData[0];
    }

    scrollingTextFeedContent.map(function(data){
      if(!(data.TEXT_2 in scrollingTextFeeds)) { scrollingTextFeeds[data.TEXT_2] = []; }
      scrollingTextFeeds[data.TEXT_2].push(data);
    });
    for(var i in scrollingTextFeeds) {
      var obj = {};
      obj.name = i;
      obj.data = [];
      scrollingTextFeeds[i].forEach(function(data){ obj.data.push(data); });
      scrollingTextFeedData.push(obj);
    }
    getScrollingTextData = function(queryString) {
      var searchData;
      if(queryString) {
        if(queryString.indexOf('|') != -1) {
          var productName = queryString.split('|')[0];
          var data = scrollingTextFeedData.find(function(data){ return data.name == productName })
          if(data) { searchData = data }
        } else {
          var data = scrollingTextFeedData.find(function(data){ return data.name == queryString});
          if(data) { searchData = data } else { searchData = {} }
        }
      }
      // return searchData ? searchData : scrollingTextFeedData[0].data[0];
      return searchData ? searchData : {};
    }
    loadPage();
  }

}
