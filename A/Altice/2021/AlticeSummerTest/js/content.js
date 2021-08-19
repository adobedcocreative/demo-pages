var feedTemplate1 = [];
var feedContent = [], feedData = {}, getData;
var adData = [];
var loadTemplateFlag1 = false;
// var getFeed1 = function(){
//   var xmlhttp = new XMLHttpRequest();
//   var url = "https://spreadsheets.google.com/feeds/list/1AOqeyDj0s6f3KZ9s-nxJGNWBCOxK9Gh4qZUFkpCci_0/8/public/values?alt=json";

//   xmlhttp.onreadystatechange = function() {
//       if (this.readyState == 4 && this.status == 200) {
//           var JSONData = JSON.parse(this.responseText);
//           JSONData.feed.entry.map(function(data){
//             feedTemplate1.push({
//               "Ad Size": data['gsx$adsize']['$t'],
//               "Language": data['gsx$language']['$t'],
//               "Group": data['gsx$group']['$t'],
//               "Smart Names": data['gsx$smartnames']['$t'],
//               "Visibility": data['gsx$visibility']['$t'],
//             });
//           });
//           if(location.hostname && location.hostname != 'localhost') {
//             var tempFeed = [];
//             feedTemplate1.forEach(function(data){
//               if(!Boolean('Visibility' in data) || ('Visibility' in data && data.Visibility.toLowerCase() == 'true')) {
//                 tempFeed.push(data);
//               }
//             });
//             feedTemplate1 = tempFeed;
//           }
//           loadTemplateFlag1 = true;
//           loadData();
//       }
//   };
//   xmlhttp.open("GET", url, true);
//   xmlhttp.send();
// }



// var getFeed1 = function(){
//   var xmlhttp = new XMLHttpRequest();
//   var sheetID = "1AOqeyDj0s6f3KZ9s-nxJGNWBCOxK9Gh4qZUFkpCci_0/8";
//   var searchID = location.search.split('?')[1];
//   sheetID = searchID && searchID.length == 46 && searchID.indexOf('/') > 1 ? searchID : sheetID;
//   sheetID = searchID && searchID.length <= 2 && Boolean(parseInt(searchID)) ? sheetID.split('/')[0] + '/' + parseInt(searchID) : sheetID;
//   var url = "https://script.google.com/macros/s/AKfycby8Hrt5rvnJ01olPYTynL7DhW4_NFF6ne-jeX0It6JGhG3X4vCFHnVSv1mq3rDBC6rlzg/exec?id=" + sheetID;

//   xmlhttp.onreadystatechange = function() {
//       if (this.readyState == 4 && this.status == 200) {          
//           feedTemplate1 = [...JSON.parse(this.responseText)];
//           if(location.hostname && location.hostname != 'localhost') {
//             var tempFeed = [];
//             feedTemplate1.forEach(function(data){
//               if(!Boolean('Visibility' in data) || ('Visibility' in data && data.Visibility.toLowerCase() == 'true')) {
//                 tempFeed.push(data);
//               }
//             });
//             feedTemplate1 = tempFeed;
//           }
//           loadTemplateFlag1 = true;
//           loadData();
//       }
//   };
//   xmlhttp.open("GET", url, true);
//   xmlhttp.send();
// }

// var getFeed1 = function(){ //Many ways
//   var xmlhttp = new XMLHttpRequest();
//   var sheetID = "1AOqeyDj0s6f3KZ9s-nxJGNWBCOxK9Gh4qZUFkpCci_0/8";
//   var searchID = location.search.split('?')[1];
//   sheetID = searchID && searchID.length == 46 && searchID.indexOf('/') > 1 ? searchID : sheetID;
//   sheetID = searchID && searchID.length <= 2 && Boolean(parseInt(searchID)) ? sheetID.split('/')[0] + '/' + parseInt(searchID) : sheetID;
//   var url = "https://script.google.com/macros/s/AKfycby8Hrt5rvnJ01olPYTynL7DhW4_NFF6ne-jeX0It6JGhG3X4vCFHnVSv1mq3rDBC6rlzg/exec?id=" + sheetID; //API
//   var url = "https://docs.google.com/spreadsheets/d/1AOqeyDj0s6f3KZ9s-nxJGNWBCOxK9Gh4qZUFkpCci_0/gviz/tq?tqx=out:json"; //JSON
//   var url = "https://docs.google.com/spreadsheets/d/1AOqeyDj0s6f3KZ9s-nxJGNWBCOxK9Gh4qZUFkpCci_0/gviz/tq?tqx=out:csv&gid=580157085"; //CSV
//   var url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSlajwfQcB5w62bhf0gB5LiIl0vvK2ZNiCc-Feu6S28ozXJz3SDlK5IdTEA-8UJGRtUoMmHlKmJ6lSQ/pub?output=tsv&gid=580157085"; //TSV
//   //https://docs.google.com/spreadsheets/d/1AOqeyDj0s6f3KZ9s-nxJGNWBCOxK9Gh4qZUFkpCci_0/gviz/tq?tqx=out:csv&sheet=SummerTest
//   //https://docs.google.com/spreadsheets/d/1AOqeyDj0s6f3KZ9s-nxJGNWBCOxK9Gh4qZUFkpCci_0/gviz/tq?tqx=out:csv&gid=580157085
//   //http://www.example.com/mydatasource?tqx=responseHandler:myHandlerFunction

//   xmlhttp.onreadystatechange = function() {
//       if (this.readyState == 4 && this.status == 200) {
//         var data = this.responseText;
//         debugger;
//         // const r = data.match(/google\.visualization\.Query\.setResponse\(([\s\S\w]+)\)/);
//         // if (r && r.length == 2) {
//         //   const obj = JSON.parse(r[1]);
//         //   const table = obj.table;
//         //   const header = table.cols.map(({label}) => label);
//         //   const rows = table.rows.map(({c}) => c.map(({v}) => v));
      
//         //   console.log(header);
//         //   console.log(rows);
//         // }      

//           // feedTemplate1 = [...JSON.parse(this.responseText)];
//           // if(location.hostname && location.hostname != 'localhost') {
//           //   var tempFeed = [];
//           //   feedTemplate1.forEach(function(data){
//           //     if(!Boolean('Visibility' in data) || ('Visibility' in data && data.Visibility.toLowerCase() == 'true')) {
//           //       tempFeed.push(data);
//           //     }
//           //   });
//           //   feedTemplate1 = tempFeed;
//           // }
//           // loadTemplateFlag1 = true;
//           // loadData();
//       }
//   };
//   xmlhttp.open("GET", url, true);
//   xmlhttp.send();
// }

// //Approach TSV
// const tsvTojson = (data) => {
//   const rowsData = data.split('\r\n').map(row => row.split('\t'));
//   const headers = rowsData[0], rows = rowsData.slice(1);
//   data = [];
//   rows.every(row => {
//     if(row.every(cell => cell === '')) return false; //isEmptyRow
//     let obj = {};
//     row.forEach((cell, i) => obj[headers[i]] = cell);
//     data.push(obj);
//     return true;
//   });
//   return data;
// }
// var getFeed1 = function(){
//   var xmlhttp = new XMLHttpRequest();
//   var sheetID = "1AOqeyDj0s6f3KZ9s-nxJGNWBCOxK9Gh4qZUFkpCci_0/8";
//   var searchID = location.search.split('?')[1];
//   sheetID = searchID && searchID.length == 46 && searchID.indexOf('/') > 1 ? searchID : sheetID;
//   sheetID = searchID && searchID.length <= 2 && Boolean(parseInt(searchID)) ? sheetID.split('/')[0] + '/' + parseInt(searchID) : sheetID;
//   var url = "https://script.google.com/macros/s/AKfycby8Hrt5rvnJ01olPYTynL7DhW4_NFF6ne-jeX0It6JGhG3X4vCFHnVSv1mq3rDBC6rlzg/exec?id=" + sheetID; //API
//   // var url = "https://docs.google.com/spreadsheets/d/1AOqeyDj0s6f3KZ9s-nxJGNWBCOxK9Gh4qZUFkpCci_0/gviz/tq?tqx=out:json"; //JSON
//   // var url = "https://docs.google.com/spreadsheets/d/1AOqeyDj0s6f3KZ9s-nxJGNWBCOxK9Gh4qZUFkpCci_0/gviz/tq?tqx=out:csv&gid=580157085"; //CSV
//   // var url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSlajwfQcB5w62bhf0gB5LiIl0vvK2ZNiCc-Feu6S28ozXJz3SDlK5IdTEA-8UJGRtUoMmHlKmJ6lSQ/pub?output=tsv&gid=580157085"; //TSV
//   // var url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSlajwfQcB5w62bhf0gB5LiIl0vvK2ZNiCc-Feu6S28ozXJz3SDlK5IdTEA-8UJGRtUoMmHlKmJ6lSQ/pub?gid=580157085&output=tsv";
//   // var url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSlajwfQcB5w62bhf0gB5LiIl0vvK2ZNiCc-Feu6S28ozXJz3SDlK5IdTEA-8UJGRtUoMmHlKmJ6lSQ/pub?gid=580157085&output=tsv";

//   //https://docs.google.com/spreadsheets/d/1AOqeyDj0s6f3KZ9s-nxJGNWBCOxK9Gh4qZUFkpCci_0/gviz/tq?tqx=out:csv&sheet=SummerTest
//   //https://docs.google.com/spreadsheets/d/1AOqeyDj0s6f3KZ9s-nxJGNWBCOxK9Gh4qZUFkpCci_0/gviz/tq?tqx=out:csv&gid=580157085
//   //http://www.example.com/mydatasource?tqx=responseHandler:myHandlerFunction

//   xmlhttp.onreadystatechange = function() {
//       if (this.readyState == 4 && this.status == 200) {
//           // feedTemplate1 = tsvTojson(this.responseText);
//           feedTemplate1 = [...JSON.parse(this.responseText)];
//           if(location.hostname && location.hostname != 'localhost') {
//             var tempFeed = [];
//             feedTemplate1.forEach(function(data){
//               if(!Boolean('Visibility' in data) || ('Visibility' in data && data.Visibility.toLowerCase() == 'true')) {
//                 tempFeed.push(data);
//               }
//             });
//             feedTemplate1 = tempFeed;
//           }
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
  const sheetLocation = "1AOqeyDj0s6f3KZ9s-nxJGNWBCOxK9Gh4qZUFkpCci_0/SummerTest";
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
    feedContent = [];
    feedTemplate1.forEach(function(feed){
      var obj = {};
      for(var i in feed) { obj[i] = feed[i]; }
      obj['ads'] = feed['Ad Size'].split(',');
      feedContent.push(obj);
    });
    feedContent.map(function(data){
      if(!(data.Group in feedData)) { feedData[data.Group] = []; }
      feedData[data.Group].push(data);
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
      var searchData, selectedAd;
      if(queryString) {
        if(queryString.indexOf('|') != -1) {
          var country = queryString.split('|')[0];
          var smartName = queryString.split('|')[1];
          selectedAd = queryString.split('|')[2];
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
      var selectedData = searchData ? searchData : adData[0].data[0];
      selectedAd = selectedAd ? selectedAd : '300x250';
      var obj = {};
      for(var i in selectedData) { obj[i] = selectedData[i]; }
      obj.selectedAd = obj.data[0].ads.find(function(ad){ return ad == selectedAd }) ? selectedAd : obj.data[0].ads[0];
      return obj;
    }
    loadPage();
  }
}
