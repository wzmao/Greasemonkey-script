// ==UserScript==
// @name        Weibo
// @namespace   weibo
// @version     1
// @grant       none
// @include http://weibo.com/*
// ==/UserScript==
window.extendpaper = function () {
  var findpapers,
  paper,
  dirtys,
  dirty;
  findpapers = document.evaluate('//div[@class=\'WB_editor_iframe\']', document, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);
  for (var i = 0; i < findpapers.snapshotLength; i++) {
    paper = findpapers.snapshotItem(i);
    paper.style.height = null;
  }
  dirtys = document.evaluate('//div[@node-type=\'maskContent\']', document, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);
  for (var i = 0; i < dirtys.snapshotLength; i++) {
    dirty = dirtys.snapshotItem(i);
    dirty.parentNode.removeChild(dirty);
  }
}
window.setTimeout('extendpaper()', 1000);
