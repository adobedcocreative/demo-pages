data.match(/google\.visualization\.Query\.setResponse\(([\s\S\w]+)\)/);
https://docs.google.com/spreadsheets/d/1l7VfPOI3TYtPuBZlZ-JMMiZW1OK6rzIBt8RFd6KmwbA/gviz/tq?tqx=out:csv
https://docs.google.com/spreadsheets/d/1l7VfPOI3TYtPuBZlZ-JMMiZW1OK6rzIBt8RFd6KmwbA/gviz/tq?tqx=out:json
https://stackoverflow.com/questions/66472824/google-sheets-v4-update-effect-json-endpoint-data-shut-down-on-june-8-2021

function doGet(e){

    // Change Spread Sheet url
    var ss = SpreadsheetApp.openByUrl("Your Spread Sheet URL");
   
   // Sheet Name, Chnage Sheet1 to Users in Spread Sheet. Or any other name as you wish
    var sheet = ss.getSheetByName("Users");
     
    return getUsers(sheet); 
     
   }
   
   
   function getUsers(sheet){
     var jo = {};
     var dataArray = [];
   
   // collecting data from 2nd Row , 1st column to last row and last column
     var rows = sheet.getRange(2,1,sheet.getLastRow()-1, sheet.getLastColumn()).getValues();
     
     for(var i = 0, l= rows.length; i<l ; i++){
       var dataRow = rows[i];
       var record = {};
       record['id'] = dataRow[0];
       record['name'] = dataRow[1];
       
       dataArray.push(record);
       
     }  
     
     jo.user = dataArray;
     
     var result = JSON.stringify(jo);
     
     return ContentService.createTextOutput(result).setMimeType(ContentService.MimeType.JSON);
     
   }  
     
     
   
   