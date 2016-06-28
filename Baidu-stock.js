// ==UserScript==
// @name        Baidu-stock
// @namespace   baidu
// @include     http://www.baidu.com/
// @include     https://www.baidu.com/
// @include     https://www.baidu.com
// @include     http://www.baidu.com
// @version     1
// @grant       none
// ==/UserScript==
// window.addstock = function () {
var findpics,
findpic;
findpics = document.evaluate('//div[@id=\'lg\']', document, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);
for (var i = 0; i < 1; i++) {
  findpic = findpics.snapshotItem(i);
  newele = document.createElement('div');
  newele.innerHTML = '<img src="http://pifm3.eastmoney.com/EM_Finance2014PictureInterface/Index.aspx?id=0000011&amp;imageType=r&amp;token=44c9d251add88e27b65ed86506f6e5da" border="0" height="276" width="578">';
  findpic.parentNode.insertBefore(newele, findpic.parentNode.nextSibling);
  break;
} // }
// window.setTimeout('addstock()', 0);
