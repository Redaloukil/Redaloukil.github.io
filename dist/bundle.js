!function(o){function t(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return o[e].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};t.m=o,t.c=n,t.d=function(o,n,e){t.o(o,n)||Object.defineProperty(o,n,{configurable:!1,enumerable:!0,get:e})},t.n=function(o){var n=o&&o.__esModule?function(){return o.default}:function(){return o};return t.d(n,"a",n),n},t.o=function(o,t){return Object.prototype.hasOwnProperty.call(o,t)},t.p="",t(t.s=0)}([function(o,t){$(document).ready(function(){$(function(){$(document).scroll(function(){var o=$(".navbar-fixed-top");o.toggleClass("scrolled",$(this).scrollTop()>o.height())})}),$(".index").click(function(){console.log("hooooooooooop");var o=$(this).attr("href");$("body").stop().animate({scrollTop:$(o).offset().top},1e3)})})}]);