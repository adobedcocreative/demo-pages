var fs = require('fs');
var path = require('path');
var AdmZip = require('adm-zip');
var masterPath = __dirname + '/';
var folderPath = __dirname + '/publish/';
var removeFiles = function(location) {
  try {
    var files = fs.readdirSync(location);
    files.forEach(function(file){
      //console.log(file);
      var stats = fs.statSync(location + file);
      if (stats.isFile()) { fs.unlinkSync(location + file); }
      if (stats.isDirectory()) { removeFiles(location + file + '/'); }
    });
    if(folderPath != location) fs.rmdirSync(location);
  } catch(err) { console.log(err); }
}
if(!fs.existsSync(folderPath)) { fs.mkdirSync(folderPath); } else { removeFiles(folderPath); }
// eval(fs.readFileSync('./temp/OPT_Movers/300x250/300x250.html', 'utf8'));
var frames = {}
var adsLocation = masterPath + 'ads/';
var files = fs.readdirSync(adsLocation);
files.forEach(function(file){
  var stats = fs.statSync(adsLocation + file);
  if (stats.isDirectory()) {
    var foldersLocation = adsLocation + file + '/';
    var folders = fs.readdirSync(foldersLocation);
    folders.forEach(function(folder){
      var stats = fs.statSync(foldersLocation + folder);
      // console.log(stats);
      if (stats.isDirectory()) {
        var creativesLocation = foldersLocation + folder + '/';
        var creatives = fs.readdirSync(creativesLocation);
        creatives.forEach(function(creative){
          var stats = fs.statSync(creativesLocation + creative);
          // console.log(stats);
          if(creative.indexOf(folder+'.html') != -1) {
            var creativeFolder = 'ads/' + file + '/' + folder + '/';
            var creativePath = creativeFolder +  creative;
            // console.log('ads/' + file + '/' + folder + '/' +  creative);
            fs.readFile(creativesLocation + creative, 'utf8', function(err, data) {
                // console.log(data);
                var obj = {};
                if(data.indexOf('amo.registerAttribute("frameText1"') != -1 || data.indexOf('amo.registerAttribute("frameImage1"') != -1) {
                  // console.log('frame1 exist');
                  obj['frame1'] = creativeFolder + creative.split('.').join('_frame1.');
                  var htmlContent = data;
                  htmlContent = htmlContent.replace('var playOtherFrames = function()',`var playOtherFrames = function(){};
                  var playOtherFrames1 = function()`)
                  fs.writeFile(obj['frame1'], htmlContent, 'utf8',  function (err) {
                    if (err) throw err;
                  });
                  frameCount++;
                }
                var frameCount = 1;
                for(var i=2; i<=6; i++) {
                  if(data.indexOf('amo.registerAttribute("frameText' + i + '1"') != -1) {
                    frameCount++
                  }
                }
                for(var i=2; i<=frameCount; i++) {
                  if(data.indexOf('amo.registerAttribute("frameText' + i + '1"') != -1) {
                    // console.log('frame' + i + ' exist');
                    obj['frame'+i] = creativeFolder + creative.split('.').join('_frame'+i+'.');
                    var htmlContent = data;
                    htmlContent = htmlContent.replace('var playOtherFrames = function()',
                    `var playOtherFrames = function(){};
                      (function(){
                      ad.layers.cta.style.opacity = 1;
                      ad.layers.frame1.remove();
                      `+
                      (i>2?`ad.layers.frameImage2.style.opacity = 0;
                      ad.layers.frameText21.style.opacity = 0;
                      ad.layers.frameText22.style.opacity = 0;
                      ad.layers.frameText23.style.opacity = 0;
                      setTimeout(function(){
                        ad.layers.frameImage${i}.style.webkitTransform = '';
                        ad.layers.frameImage${i}.style.transform = '';
                        ad.layers.frameText${i}1.style.webkitTransform = '';
                        ad.layers.frameText${i}1.style.transform = '';
                        ad.layers.frameText${i}2.style.webkitTransform = '';
                        ad.layers.frameText${i}2.style.transform = '';
                        ad.layers.frameText${i}3.style.webkitTransform = '';
                        ad.layers.frameText${i}3.style.transform = '';
                        `+(i==frameCount? `
                          if('priceLabel' in ad.layers) {
                            ad.layers.priceLabel.style.webkitTransform = '';
                            ad.layers.priceLabel.style.transform = '';
                          }
                          ` :'')+`
                      },1000);`:'')+
                    `}())
                    var playOtherFrames1 = function()`);
                    fs.writeFile(obj['frame'+i], htmlContent, 'utf8',  function (err) {
                      if (err) throw err;
                    });
                  }
                }
                frames[creativePath] = obj;
                // console.log(frames);
                fs.writeFile(masterPath + 'frames.js', 'var frames='+JSON.stringify(frames), 'utf8',  function (err) {
                  if (err) throw err;
                });
            });
          }
          // if (stats.isDirectory()) {
          //   console.log(folder);
          // }
        });
      }
    });
  }
});

// fs.readFile('./temp/OPT_Movers/300x250/300x250.html', 'utf8', function(err, data) {
//     // console.log(data);
//     if(data.indexOf('amo.registerAttribute("frameText1"') != -1 || data.indexOf('amo.registerAttribute("frameImage1"') != -1) {
//       console.log('frame1 exist');
//
//       // fs.writeFile(htmlFile, htmlContent, 'utf8',  function (err) {
//       //   if (err) throw err;
//       // });
//     }
//     for(var i=2; i<=6; i++) {
//       if(data.indexOf('amo.registerAttribute("frameText' + i + '1"') != -1) {
//         console.log('frame' + i + ' exist');
//       }
//     }
//
// });
