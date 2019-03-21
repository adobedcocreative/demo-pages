// var feedTemplate1 = [{"Language":"English","Country":"Australia/Great Britain/New Zealand/Sinagpore","Segment":"Business","Smart Names":"Productivity_O365_OCM_DataManagement","Layout":"RealEstate","Ad Size":"300x250","headline1":"['<#505050>Spend less |time managing |customer data |with <#D83B01>Office 365','17px',165,47,'20','350', 'left']","rough":"_","headline2":"na","costline3":"na","costline1":"na","costline2":"na","CTA":"CLICK HERE"}];
// var feedTemplate2 = [{"Language":"English","Country":"Australia/Great Britain/New Zealand/Sinagpore","Segment":"Business","Smart Names":"Teamwork_O365_BP_Teams_Hub","Layout":"Collab","Ad Size":"300x250","headline1":"['<#505050>Meet the hub for teamwork in |<#D83B01>Office 365 <#505050>Business Premium','18.1px',17,149,'20','350', 'left']","headline2":"na","costline3":"na","costline1":"na","costline2":"na","CTA":"CLICK HERE"}];
// var feedTemplate3 = [{"Language":"English","Country":"Australia/Great Britain/New Zealand/Sinagpore","Segment":"Consumer","Smart Names":"Access_O365_UBL_CON","Layout":"Night","Ad Size":"300x250","headline1":"[color+'Access your world','20px',16,43,'22','350', 'left']","rough1":"_","headline2":"[color+'Share <#D83B01>Office 365 |'+color+'Home subscription |among 6 people |on multiple devices','13px',16,74,'15','350', 'left']","rough2":"_","headline3":"['<#505050> ','10.5px',16,122,'12','350', 'left']","headline4":"['<#FFFFFF> ','9px',16,237,'12','350', 'left']","CTA":"BUY NOW"}];
// var feedTemplate4 = [{"Language":"English","Country":"Australia/Great Britain/New Zealand/Sinagpore","Segment":"Consumer & Neutral","Smart Names":"Create_O365_PPT_3D","Layout":"PPTDesktop","Ad Size":"300x250","headline1":"['<#2e2e2e>Create your best work','20px',15,40,'20','350', 'left']","rough1":"_","headline2":"['<#2e2e2e>Show every |angle of your |story in 3D with |<#D83B01>Office 365','13px',15,75,'16','350', 'left']","rough2":"_","CTA":"BUY NOW"}];
// var feedContent = [
//   {
//     name: 'Template 1',
//     feed: feedTemplate1,
//   },
//   {
//     name: 'Template 2',
//     feed: feedTemplate2,
//   },
//   {
//     name: 'Template 3',
//     feed: feedTemplate3,
//   },
//   {
//     name: 'Template 4',
//     feed: feedTemplate4,
//   },
// ], feedData = {};
var feedTemplate1 = [], feedTemplate2 = [], feedTemplate3 = [], feedTemplate4 = [];
var feedContent = [], feedData = {}, getData;
var adData = [];
var loadTemplateFlag1 = false, loadTemplateFlag2 = false, loadTemplateFlag3 = false, loadTemplateFlag4 = false;
// var getFeed1 = function(){
//   var xmlhttp = new XMLHttpRequest();
//   var url = "https://spreadsheets.google.com/feeds/list/1Kx90hsEE_nVorA1D5Rs7p8rafNS4iJkzZqdll22A_RQ/2/public/values?alt=json";
//
//   xmlhttp.onreadystatechange = function() {
//       if (this.readyState == 4 && this.status == 200) {
//           var JSONData = JSON.parse(this.responseText);
//           JSONData.feed.entry.map(function(data){
//             feedTemplate1.push({
//               "Ad Size": data['gsx$adsize']['$t'],
//               "CTA": data['gsx$cta']['$t'],
//               "Country": data['gsx$country']['$t'],
//               "Language": data['gsx$language']['$t'],
//               "Layout": data['gsx$layout']['$t'],
//               "Segment": data['gsx$segment']['$t'],
//               "Smart Names": data['gsx$smartnames']['$t'],
//               "costline1": data['gsx$costline1']['$t'],
//               "costline2": data['gsx$costline2']['$t'],
//               "costline3": data['gsx$costline3']['$t'],
//               "headline1": data['gsx$headline1']['$t'],
//               "headline2": data['gsx$headline2']['$t'],
//             });
//           });
//           loadTemplateFlag1 = true;
//           loadData();
//       }
//   };
//   xmlhttp.open("GET", url, true);
//   xmlhttp.send();
// }
// getFeed1();
var getFeed2 = function(){
  var xmlhttp = new XMLHttpRequest();
  var url = "https://spreadsheets.google.com/feeds/list/1Kx90hsEE_nVorA1D5Rs7p8rafNS4iJkzZqdll22A_RQ/2/public/values?alt=json";

  xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
          var JSONData = JSON.parse(this.responseText);
          JSONData.feed.entry.map(function(data){
            feedTemplate2.push({
              "Ad Size": data['gsx$adsize']['$t'],
              "CTA": data['gsx$cta']['$t'],
              "Country": data['gsx$country']['$t'],
              "Language": data['gsx$language']['$t'],
              "Layout": data['gsx$layout']['$t'],
              "Segment": data['gsx$segment']['$t'],
              "Smart Names": data['gsx$smartnames']['$t'],
              "costline1": data['gsx$costline1']['$t'],
              "costline2": data['gsx$costline2']['$t'],
              "costline3": data['gsx$costline3']['$t'],
              "headline1": data['gsx$headline1']['$t'],
              "headline2": data['gsx$headline2']['$t'],
            });
          });
          loadTemplateFlag2 = true;
          loadData();
      }
  };
  xmlhttp.open("GET", url, true);
  xmlhttp.send();
}
getFeed2();
var getFeed3 = function(){
  var xmlhttp = new XMLHttpRequest();
  var url = "https://spreadsheets.google.com/feeds/list/1Kx90hsEE_nVorA1D5Rs7p8rafNS4iJkzZqdll22A_RQ/3/public/values?alt=json";

  xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
          var JSONData = JSON.parse(this.responseText);
          JSONData.feed.entry.map(function(data){
            feedTemplate3.push({
              "Ad Size": data['gsx$adsize']['$t'],
              "CTA": data['gsx$cta']['$t'],
              "Country": data['gsx$country']['$t'],
              "Language": data['gsx$language']['$t'],
              "Layout": data['gsx$layout']['$t'],
              "Segment": data['gsx$segment']['$t'],
              "Smart Names": data['gsx$smartnames']['$t'],
              "headline1": data['gsx$headline1']['$t'],
              "headline2": data['gsx$headline2']['$t'],
              "headline3": data['gsx$headline3']['$t'],
              "headline4": data['gsx$headline4']['$t'],
            });
          });
          loadTemplateFlag3 = true;
          loadData();
      }
  };
  xmlhttp.open("GET", url, true);
  xmlhttp.send();
}
getFeed3();
// var getFeed4 = function(){
//   var xmlhttp = new XMLHttpRequest();
//   var url = "https://spreadsheets.google.com/feeds/list/1Kx90hsEE_nVorA1D5Rs7p8rafNS4iJkzZqdll22A_RQ/5/public/values?alt=json";
//
//   xmlhttp.onreadystatechange = function() {
//       if (this.readyState == 4 && this.status == 200) {
//           var JSONData = JSON.parse(this.responseText);
//           JSONData.feed.entry.map(function(data){
//             feedTemplate4.push({
//               "Ad Size": data['gsx$adsize']['$t'],
//               "CTA": data['gsx$cta']['$t'],
//               "Country": data['gsx$country']['$t'],
//               "Language": data['gsx$language']['$t'],
//               "Layout": data['gsx$layout']['$t'],
//               "Segment": data['gsx$segment']['$t'],
//               "Smart Names": data['gsx$smartnames']['$t'],
//               "headline1": data['gsx$headline1']['$t'],
//               "headline2": data['gsx$headline2']['$t'],
//             });
//           });
//           loadTemplateFlag4 = true;
//           loadData();
//       }
//   };
//   xmlhttp.open("GET", url, true);
//   xmlhttp.send();
// }
// getFeed4();
var loadData = function(){
  // if(loadTemplateFlag1 && loadTemplateFlag2 && loadTemplateFlag3 && loadTemplateFlag4) {
  if(loadTemplateFlag2 && loadTemplateFlag3) {
    feedContent = [
      // {
      //   name: 'Template 1',
      //   feed: feedTemplate1,
      // },
      {
        name: 'Template 2',
        feed: feedTemplate2,
      },
      {
        name: 'Template 3',
        feed: feedTemplate3,
      },
      // {
      //   name: 'Template 4',
      //   feed: feedTemplate4,
      // },
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
      var searchData;
      if(queryString) {
        if(queryString.indexOf('|') != -1) {
          var country = queryString.split('|')[0];
          var smartName = queryString.split('|')[1];
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
      return searchData ? searchData : adData[0].data[0];
    }
    loadPage();
  }
}
