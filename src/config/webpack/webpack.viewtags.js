const fs = require('fs');
const path = require('path');

function setAssetTagFileNames(stats) {

  var webpackStats = stats.toJson();
  var webpackPublicPath = webpackStats.publicPath || '';

  function getStyleTag(html, style) {
    return html + '<link rel="stylesheet" href="' + style + '" />\n'
  }

  function getScriptTag(html, script) {
    return html + '<script src="' + script + '"></script>\n';
  }

  function getAssetChunks(name, ext) {

    var chunks = webpackStats.assetsByChunkName[name];
    if (!Array.isArray(chunks)) { chunks = [chunks]; }
    return chunks.filter(function (chunk) {
      return ext.test(path.extname(chunk));
    }).map(function (chunk) {
      return webpackPublicPath + chunk;
    });

  };

  var appEntryFileName = 'main';
  var scripts = getAssetChunks(appEntryFileName, /\.js$/).reduce(getScriptTag, '');
  var styles = getAssetChunks(appEntryFileName, /\.css$/).reduce(getStyleTag, '');

  var assetTagConfig = {
    scripts: scripts,  
    styles: styles,
    inlineStyles: '',
    deferredScripts: '',
    deferredStyles: ''
  }

  var tagConfigPath = path.join(__dirname, '../../../build/server/views/tags.json');

  fs.writeFileSync(tagConfigPath, JSON.stringify(assetTagConfig));

}

module.exports = setAssetTagFileNames;