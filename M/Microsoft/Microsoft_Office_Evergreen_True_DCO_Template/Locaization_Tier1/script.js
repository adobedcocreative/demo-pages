var data = JSON.parse(localStorage.microsoftETD), data2 = [];
var toPipe = function(str, color){
 color = color && color.length ? color : '<#505050>';
 str = 'color+\''+str.split('<br>').join('|').replace('Office','<#D83B01>Office');
 var addFlag = false;
 str = str.split('365')[0] + '365' + str.split('365')[1].split('').map(function(char){ if(char != ' ' && char != '|' && !addFlag) { addFlag = true; char = '\'+color+\'' + char } return char }).join('');
 var el = document.createElement('textarea');
  el.value = str;
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
 return str
}
var exceptionText = ['BUY NOW','COMPRAR AGORA','ACHETER MAINTENANT','ACHETER','JETZT KAUFEN','今すぐ購入','KOOP NU'];
var addData = function(textValue, j){
	var value = textValue.split('<br>').join('|')
    var ctaText = exceptionText.find(function(text) { return value.indexOf(text) != -1; });
    value = value.replace('|'+ctaText, '')
    value = toPipe(value);
    data2.push({text:value});
}
for(var i in data) {
	var dataContent = data[i];
	dataContent.filter(function(obj){return obj.Copy.indexOf('Access your world') != -1}).map(function(obj, j){
		for(var i in obj) { if(i.indexOf('Translation') != -1 && i.indexOf('300x250') != -1) { addData(obj[i], j); } }
		for(var i in obj) { if(i.indexOf('Translation') != -1 && i.indexOf('300x600') != -1) { addData(obj[i], j); } }
		for(var i in obj) { if(i.indexOf('Translation') != -1 && i.indexOf('160x600') != -1) { addData(obj[i], j); } }
		for(var i in obj) { if(i.indexOf('Translation') != -1 && i.indexOf('728x90') != -1) { addData(obj[i], j); } }
	});
}
var el = document.createElement('textarea');
el.value = JSON.stringify(data2);
document.body.appendChild(el);
el.select();
document.execCommand('copy');
document.body.removeChild(el);


/***********/
var textContent = ``;
var textContent1 = textContent.split(/\n/g);
var headers = textContent1.shift();
headers = headers.split(/\t/g)
textContent1 = textContent1.map(function(text){ var obj = {}; text.split(/\t/g).map(function(value, i){ obj[headers[i]] = value }); return obj; });
JSON.stringify(textContent1)


/************************/
https://spreadsheets.google.com/feeds/list/1Gjuv15Z_seKapvgi-eocF0TJlwZZPNAdepPNrcNhhYE/od6/public/values?alt=json
