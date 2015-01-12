// ==UserScript==
// @name        Trade Offer Single Click
// @namespace   http://www.doctormckay.com
// @description Add items to a trade offer using a single click
// @match       *://steamcommunity.com/tradeoffer/*
// @version     1.0.0
// @grant       none
// ==/UserScript==

var win = (typeof unsafeWindow === 'undefined' ? window : unsafeWindow);

win.MakeItemDraggable = function(element) {
  element.style.zIndex = 3;
  win.Event.observe(element, 'click', win.OnDoubleClickItem.bindAsEventListener(null, element));
}

win.MakeCurrencyDraggable = function(element) {
  element.style.zIndex = 3;
  win.Event.observe(element, 'click', win.OnDoubleClickItem.bindAsEventListener(null, element));
}