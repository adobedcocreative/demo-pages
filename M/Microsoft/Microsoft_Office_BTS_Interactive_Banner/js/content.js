var feedTemplate1 = [] = [];
var feedContent = [], feedData = {}, getData;
var adData = [];
var loadTemplateFlag1 = false;
var getFeed1 = function(){
  var xmlhttp = new XMLHttpRequest();
  var url = "https://spreadsheets.google.com/feeds/list/10kUUGvK5IrSXUKFbf51SVhvHu3sjqmuOIEuclZoKcxA/1/public/values?alt=json";

  xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
          var JSONData = JSON.parse(this.responseText);
          JSONData.feed.entry.map(function(data){
            feedTemplate1.push({
              "Ad Size": data['gsx$adsize']['$t'],
              "CTA": data['gsx$cta']['$t'],
              "Country": data['gsx$country']['$t'],
              "Language": data['gsx$language']['$t'],
              "Layout": data['gsx$layout']['$t'],
              "Segment": data['gsx$segment']['$t'],
              "Smart Names": data['gsx$smartnames']['$t'],
              "headline1": data['gsx$headline1']['$t'],
              "opts": data['gsx$opts']['$t'],
              "click": data['gsx$click']['$t'],
              "page_1_1": data['gsx$page11']['$t'],
              "page_1_2": data['gsx$page12']['$t'],
              "opt1": data['gsx$opt1']['$t'],
              "opt1_click": data['gsx$opt1click']['$t'],
              "page_2_1": data['gsx$page21']['$t'],
              "page_2_2": data['gsx$page22']['$t'],
              "opt2": data['gsx$opt2']['$t'],
              "opt2_click": data['gsx$opt2click']['$t'],
              "page_3_1": data['gsx$page31']['$t'],
              "page_3_2": data['gsx$page32']['$t'],
              "opt3": data['gsx$opt3']['$t'],
              "opt3_click": data['gsx$opt3click']['$t'],
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
