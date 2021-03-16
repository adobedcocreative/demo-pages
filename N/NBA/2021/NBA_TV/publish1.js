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
eval(fs.readFileSync('./js/layout.min.js', 'utf8'));
var getLayouts = function() { return layouts; };
//console.log(renderLayout.toString());
var masterFiles = fs.readdirSync(masterPath);
var discardFiles = ['.DS_Store', 'ads.html', 'publish', 'publish.js', 'publish.min.js', 'package-lock.json', 'package.json', 'publish.zip',];
masterFiles = masterFiles.filter(function(file) { return !Boolean(discardFiles.find(function(discard) { return discard == file; })); });
var jsFiles = [];
if(fs.existsSync(masterPath + 'js')) {
  var discardJSFiles = ['.DS_Store', 'attributes.js', 'attributes.min.js', 'layout.js', 'layout.min.js', 'script.js', 'script.min.js'];
  jsFiles = fs.readdirSync(masterPath + 'js');
  jsFiles = jsFiles.filter(function(file) { return !Boolean(discardJSFiles.find(function(discard) { return discard == file; })); });
}
var cssFiles = [];
if(fs.existsSync(masterPath + 'css')) {
  var discardCSSFiles = ['.DS_Store', 'style.css', 'style.min.css'];
  cssFiles = fs.readdirSync(masterPath + 'css');
  cssFiles = cssFiles.filter(function(file) { return !Boolean(discardCSSFiles.find(function(discard) { return discard == file; })); });
}
var assetFiles = [];
if(fs.existsSync(masterPath + 'assets')) {
  var discardAssetFiles = ['.DS_Store'];
  assetFiles = fs.readdirSync(masterPath + 'assets');
  assetFiles = assetFiles.filter(function(file) { return !Boolean(discardAssetFiles.find(function(discard) { return discard == file; })); });
}
// console.log(masterFiles);
fs.readFile('./js/attributes.min.js', 'utf8', function(err, data) {
  eval(data);
  if(attributes && attributes.length) {
    attributes.forEach(function(data) {
      if('layout' in data && 'templates' in data) {
          var layout = data.layout;
          var layoutPath = folderPath + layout;
          if(!fs.existsSync(layoutPath)) { fs.mkdirSync(layoutPath); }
          var templates = data.templates;
          if(templates && templates.length) {
            templates.forEach(function(template) {
              var templatePath = layoutPath + '/' + template.size + '/';
              var zipPath = layoutPath + '/' + template.size + '_flex_' + layout + '.zip';
              var htmlFile = templatePath + 'index.html';
              if(!fs.existsSync(templatePath)) { fs.mkdirSync(templatePath); }
              masterFiles.forEach(function(file) {
                var stats = fs.statSync(masterPath + file);
                //console.log(templatePath + '/' + file);
                if (stats.isFile()) { fs.copyFileSync(masterPath + file, templatePath + file); }
                //if (stats.isDirectory()) { removeFiles(location + file + '/'); }
              });
              // if(fs.existsSync(masterPath + 'js')) {
              //   fs.mkdirSync(templatePath + 'js');
              //   var discardFiles = ['attributes.js', 'attributes.min.js', 'publish', 'publish.js', 'publish.min.js'];
              //   var masterFiles = fs.readdirSync(masterPath);
              //   fs.copyFileSync(masterPath + 'js/AMOLibrary.js', templatePath + 'js/AMOLibrary.js');
              // }
              if(jsFiles.length) {
                fs.mkdirSync(templatePath + 'js');
                jsFiles.forEach(function(file) {
                  var stats = fs.statSync(masterPath + 'js/' + file);
                  if (stats.isFile()) { fs.copyFileSync(masterPath + 'js/' + file, templatePath + 'js/' + file); }
                });
              }
              if(cssFiles.length) {
                fs.mkdirSync(templatePath + 'css');
                cssFiles.forEach(function(file) {
                  var stats = fs.statSync(masterPath + 'css/' + file);
                  if (stats.isFile()) { fs.copyFileSync(masterPath + 'css/' + file, templatePath + 'css/' + file); }
                });
              }
              if(assetFiles.length) {
                fs.mkdirSync(templatePath + 'assets');
                assetFiles.forEach(function(file) {
                  var stats = fs.statSync(masterPath + 'assets/' + file);
                  if (stats.isFile()) { fs.copyFileSync(masterPath + 'assets/' + file, templatePath + 'assets/' + file); }
                  else if (stats.isDirectory() && file == layout) {
                      var layoutPath = templatePath + 'assets/' + file + '/';
                      fs.mkdirSync(layoutPath);
                      if(fs.existsSync(masterPath + 'assets/' + file)) {
                        var layoutFiles = fs.readdirSync(masterPath + 'assets/' + file);
                        layoutFiles.forEach(function(layoutFile){
                          var stats1 = fs.statSync(masterPath + 'assets/' + file + '/' + layoutFile);
                          if (stats1.isFile()) { fs.copyFileSync(masterPath + 'assets/' + file + '/' + layoutFile, layoutPath + layoutFile); }
                          else if (stats1.isDirectory() && layoutFile == template.size) {
                            var layoutAssetsPath = layoutPath + layoutFile + '/';
                            fs.mkdirSync(layoutAssetsPath);
                            if(fs.existsSync(masterPath + 'assets/' + file + '/' + layoutFile)) {
                              var layoutAssets = fs.readdirSync(masterPath + 'assets/' + file + '/' + layoutFile);
                              layoutAssets.forEach(function(layoutAsset){
                                var stats2 = fs.statSync(masterPath + 'assets/' + file + '/' + layoutFile + '/' + layoutAsset);
                                if (stats2.isFile()) { fs.copyFileSync(masterPath + 'assets/' + file + '/' + layoutFile + '/' + layoutAsset, layoutAssetsPath + layoutAsset); }
                              });
                            }
                          }
                        });
                      }
                  }
                });
              }
              if(fs.existsSync(htmlFile)) {
                fs.readFile(htmlFile, 'utf8', function(err, htmlContent) {
                  //console.log('Read');
                  htmlContent = htmlContent.replace('<!-- <script type="text/javascript" src="https://ads.everesttech.net/ads/static/local/AMOLibrary.js"></script> -->','<script type="text/javascript" src="https://ads.everesttech.net/ads/static/local/AMOLibrary.js"></script>');
                  htmlContent = htmlContent.replace('<link rel="stylesheet" href="css/style.min.css">', '<style media="screen">'+fs.readFileSync(masterPath + 'css/style.min.css', 'utf8')+'</style>');
                  htmlContent = htmlContent.replace('<script src="js/script.min.js" charset="utf-8"></script>', '<script type="text/javascript">'+fs.readFileSync(masterPath + 'js/script.min.js', 'utf8')+'</script>');
                  // var attributesHTMLContext = '<script type="text/javascript">\n\n';
                  // attributesHTMLContext += registerAttributes(layout, template.size);
                  // attributesHTMLContext += '\n</script>';
                  // htmlContent = htmlContent.repl ace('<script src="js/attributes.min.js" charset="utf-8"></script>', attributesHTMLContext);
                  htmlContent = htmlContent.replace('<script src="js/attributes.min.js" charset="utf-8"></script>', '');
                  htmlContent = htmlContent.replace('var adWidth = window.innerWidth;', 'var adWidth = ' + template.size.split('x')[0] + ';');
                  htmlContent = htmlContent.replace('var adHeight = window.innerHeight;', 'var adHeight = ' + template.size.split('x')[1] + ';');
                  // htmlContent = htmlContent.replace('registerAttributes(layout, adSize);', registerAttributes(layout, template.size));
                  htmlContent = htmlContent.replace('registerAttributes(layout, adSize);', '');
                  htmlContent = htmlContent.replace('<!-- Dynamic Attributes -->', '<script>' + registerAttributes(layout, template.size) + '</script>');
                  htmlContent = htmlContent.replace('ad.loadAssets([(location.hostname', '//ad.loadAssets([(location.hostname');
                  htmlContent = htmlContent.replace('});//load', '//});//load');
                  //registerAttributes(layout, adSize);
                  var layoutHTMLContent = '';
                  layoutHTMLContent = '<script type="text/javascript">';
                  //for(var key in copyLayouts) { if(key == layout) { for(var i in copyLayouts[key]) { console.log(i); if(i != template.size) { delete copyLayouts[key][i] } } } else { delete copyLayouts[key] } }
                  //layoutHTMLContent += 'var layouts = ' + JSON.stringify(copyLayouts) + ';\n';
                  //layoutHTMLContent += 'var renderLayout = ' + renderLayout.toString().replace('=layouts[layout][adSize];', '=' + JSON.stringify(layouts[layout][template.size]) + ';') + ';';
                  layoutHTMLContent += 'var renderLayout = ' + renderLayout.toString().replace('=layouts[layout][adSize];', '=' + JSON.stringify(layouts[layout][template.size],function(key, value) {if (typeof value === 'function') {return value.toString();} else {return value;}}) + ';') + ';';
                  layoutHTMLContent += '</script>';
                  htmlContent = htmlContent.replace('<script src="js/layout.min.js" charset="utf-8"></script>', layoutHTMLContent);
                  fs.writeFile(htmlFile, htmlContent, 'utf8',  function (err) {
                    if (err) throw err;
                    var zip = new AdmZip();

                    // add file directly
                    // var content = "inner content of the file";
                    // zip.addFile("test.txt", Buffer.alloc(content.length, content), "entry comment goes here");
                    // add local file
                    //zip.addLocalFile(htmlFile);
                    //zip.addLocalFile(htmlFile);
                    var files = fs.readdirSync(templatePath);
                    files.forEach(function(file){
                      var stats = fs.statSync(templatePath + file);
                      //zip.addLocalFile(file);
                      if (stats.isFile()) { zip.addLocalFile(templatePath + file); }
                      else if (stats.isDirectory()) { zip.addLocalFolder(templatePath + file, file); }
                    });
                    // zip.addLocalFile(htmlFile);
                    // get everything as a buffer
                    //var willSendthis = zip.toBuffer();
                    // or write everything to disk
                    zip.writeZip(zipPath);
                    removeFiles(templatePath);
                    //console.log('Saved!');
                  });
                });

              }
              //console.log(registerAttributes(layout, template.size));
              //console.log(template.size + '_' + layout + '.zip');
            });
          }
      }
    });
  }
});
