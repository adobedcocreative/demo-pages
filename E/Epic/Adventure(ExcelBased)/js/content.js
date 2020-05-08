var feedTemplate1 = [] = [];
var feedContent = [], feedData = {}, getData;
var adData = [];
var loadTemplateFlag1 = false;
var getFeed1 = function(){
  var xmlhttp = new XMLHttpRequest();
  var url = "https://spreadsheets.google.com/feeds/list/1I0ot-cIqLxDcebfzpy5xizxiHKdJ5xpdkebRkkawKBw/1/public/values?alt=json";

  xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
          var JSONData = JSON.parse(this.responseText);
          JSONData.feed.entry.map(function(data){
            feedTemplate1.push({
              "Ad Size": data['gsx$adsize']['$t'],
              "Layout": data['gsx$layout']['$t'],
              "Language": data['gsx$language']['$t'],
              "Resort": data['gsx$resort']['$t'],
              "Smart Names": data['gsx$smartnames']['$t'],
              "frame1_BackgroundImage": data['gsx$frame1backgroundimage']['$t'],
              "frame1_Logo": data['gsx$frame1logo']['$t'],
              "frame2_BackgroundnBorder": data['gsx$frame2backgroundnborder']['$t'],
              "frame2_Logo": data['gsx$frame2logo']['$t'],
              "frame2_HeadlineText": data['gsx$frame2headlinetext']['$t'],
              "frame2_SubheadlineText": data['gsx$frame2subheadlinetext']['$t'],
              "frame3_Logo": data['gsx$frame3logo']['$t'],
              "frame3_HeadlineText": data['gsx$frame3headlinetext']['$t'],
              "frame3_SubheadlineText": data['gsx$frame3subheadlinetext']['$t'],
              "CTA": data['gsx$cta']['$t'],
              "clickURL": data['gsx$url']['$t'],
            });
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
    		if(data.Layout.indexOf('/') != -1){
                data.Layout.split('/').map(function(layout){
                    var obj = {};
                    for(var i in data) { obj[i] = data[i] }
                    obj['Layout'] = layout;
                    feedContent1.push(obj);
                });
            } else {
                feedContent1.push(data);
            }
    	});
    	feed.data = feedContent1;

      feed.data.map(function(data){
        if(!(data.Layout in feedData)) { feedData[data.Layout] = []; }
        feedData[data.Layout].push(data);
      });
    });
    for(var i in feedData) {
      var obj = {};
      obj.name = i;
      obj.data = [];
      var productName = [];
      feedData[i].map(function(data){productName.push(data['Resort']);});
      productName = productName.filter(function(value, index, self){ return self.indexOf(value) === index; })
      productName.map(function(productName){
        var smartObject = {};
        smartObject.name = productName;
        smartObject.data = feedData[i].filter(function(data){ return data['Resort'] == productName });
        obj.data.push(smartObject);
      });
      adData.push(obj);
    }
    getData = function(queryString) {
      var searchData;
      if(queryString) {
        if(queryString.indexOf('|') != -1) {
          var layout = queryString.split('|')[0];
          var productName = queryString.split('|')[1];
          var data = adData.find(function(data){ return data.name == layout })
          if(data) {
            data = data.data.find(function(data){ return data.name == productName })
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
