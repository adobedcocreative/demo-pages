var feedTemplate1 = [] = [];
var feedContent = [], feedData = {}, getData;
var adData = [];
var loadTemplateFlag1 = false;
// var getFeed1 = function(){
//   var xmlhttp = new XMLHttpRequest();
//   var url = "https://spreadsheets.google.com/feeds/list/1FH55usQaYNdCOmyXfB4a9Dal2JpCsZbCtyuDtnZI2uU/1/public/values?alt=json";

//   xmlhttp.onreadystatechange = function() {
//       if (this.readyState == 4 && this.status == 200) {
//           var JSONData = JSON.parse(this.responseText);
//           JSONData.feed.entry.map(function(data){
//             feedTemplate1.push({
//               "Ad Size": data['gsx$adsize']['$t'],
//               "Template": data['gsx$template']['$t'],
//               "Language": data['gsx$language']['$t'],
//               "Resort": data['gsx$resort']['$t'],
//               "Product": data['gsx$product']['$t'],
//               "layout": data['gsx$layout']['$t'],
//               "backgroundImage1": data['gsx$backgroundimage1']['$t'],
//               "backgroundImage2": data['gsx$backgroundimage2']['$t'],
//               "backgroundImage3": data['gsx$backgroundimage3']['$t'],
//               "backgroundImage4": data['gsx$backgroundimage4']['$t'],
//               "logoImage": data['gsx$logoimage']['$t'],
//               "saleImage": data['gsx$saleimage']['$t'],
//               "frameText1": data['gsx$frametext1']['$t'],
//               "frameText2": data['gsx$frametext2']['$t'],
//               "frameText3": data['gsx$frametext3']['$t'],
//               "frameText4": data['gsx$frametext4']['$t'],
//               "CTA": data['gsx$cta']['$t'],
//               "clickURL": data['gsx$url']['$t'],
//             });
//           });
//           loadTemplateFlag1 = true;
//           loadData();
//       }
//   };
//   xmlhttp.open("GET", url, true);
//   xmlhttp.send();
// }
var getFeed1 = function(){
  var xmlhttp = new XMLHttpRequest();
  const API_KEY = "AIzaSyA9UwsLAgEsktyccelGlG_AV37qUCL-Gqo";
  const sheetLocation = "1fgTB9t9HWZz5epnJ4_nu1fSBbsDFVS8QukMXQc63Pb4/ContentTemplate10";
  const searchId = location.search.split('?')[1];
  const sheetId = searchId && searchId.length >= 44 && searchId.indexOf('/') > 1 ? searchId : sheetLocation;
  const spreadsheetId = sheetId.split('/')[0];
  const sheetName = sheetId.split('/')[1];
  var url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${sheetName}?key=${API_KEY}`;

  xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
          const responseData = JSON.parse(this.responseText).values;
          const headers = responseData[0], rows = responseData.slice(1);
          rows.every(row => {
            if(row.every(cell => cell === '')) return false; //isEmptyRow
            feedTemplate1.push(row.reduce((obj, cell, i) => { obj[headers[i]] = cell; return obj; }, {}));
            return true;
          });
          if(location.hostname && location.hostname != 'localhost') {
            var tempFeed = [];
            feedTemplate1.forEach(function(data){
              if(!Boolean('Visibility' in data) || ('Visibility' in data && data.Visibility.toLowerCase() == 'true')) {
                tempFeed.push(data);
              }
            });
            feedTemplate1 = tempFeed;
          }
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
    		if(data.Template.indexOf('/') != -1){
                data.Template.split('/').map(function(layout){
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
        if(!(data.Template in feedData)) { feedData[data.Template] = []; }
        feedData[data.Template].push(data);
      });
    });
    for(var i in feedData) {
      var obj = {};
      obj.name = i;
      obj.data = [];
      var resortName = [];
      feedData[i].map(function(data){resortName.push(data['Resort']);});
      resortName = resortName.filter(function(value, index, self){ return self.indexOf(value) === index; })
      resortName.map(function(resortName){
        var smartObject = {};
        smartObject.name = resortName;
        smartObject.data = feedData[i].filter(function(data){ return data['Resort'] == resortName });
        obj.data.push(smartObject);
      });
      adData.push(obj);
    }
    getData = function(queryString) {
      var searchData;
      if(queryString) {
        if(queryString.indexOf('|') != -1) {
          var layout = queryString.split('|')[0];
          var resortName = queryString.split('|')[1];
          var data = adData.find(function(data){ return data.name == layout })
          if(data) {
            data = data.data.find(function(data){ return data.name == resortName })
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
