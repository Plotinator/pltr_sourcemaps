!function(e){function r(r){for(var n,c,i=r[0],s=r[1],a=r[2],p=0,f=[];p<i.length;p++)c=i[p],o[c]&&f.push(o[c][0]),o[c]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);for(l&&l(r);f.length;)f.shift()();return u.push.apply(u,a||[]),t()}function t(){for(var e,r=0;r<u.length;r++){for(var t=u[r],n=!0,i=1;i<t.length;i++){var s=t[i];0!==o[s]&&(n=!1)}n&&(u.splice(r--,1),e=c(c.s=t[0]))}return e}var n={},o={4:0},u=[];function c(r){if(n[r])return n[r].exports;var t=n[r]={i:r,l:!1,exports:{}};return e[r].call(t.exports,t,t.exports,c),t.l=!0,t.exports}c.m=e,c.c=n,c.d=function(e,r,t){c.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:t})},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,r){if(1&r&&(e=c(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(c.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var n in e)c.d(t,n,function(r){return e[r]}.bind(null,n));return t},c.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(r,"a",r),r},c.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},c.p="";var i=window.webpackJsonp=window.webpackJsonp||[],s=i.push.bind(i);i.push=r,i=i.slice();for(var a=0;a<i.length;a++)r(i[a]);var l=s;u.push([849,1,0]),t()}({12:function(e,r){e.exports=require("electron")},23:function(e,r){e.exports=require("path")},29:function(e,r){e.exports=require("fs")},33:function(e,r){e.exports=require("util")},37:function(e,r){e.exports=require("crypto")},392:function(e,r,t){"use strict";t.d(r,"a",(function(){return s}));var n=t(0),o=t.n(n),u=t(12),c=t(112);const i=u.remote.getCurrentWindow();class s extends n.Component{constructor(...e){var r,t,n;super(...e),n=e=>{u.ipcRenderer.send("chose-template",e),i.close()},(t="handleChooseTemplate")in(r=this)?Object.defineProperty(r,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):r[t]=n}render(){return o.a.createElement(c.a,{type:["project","plotlines"],modal:!1,close:()=>i.close(),onChooseTemplate:this.handleChooseTemplate})}}},57:function(e,r){e.exports=require("assert")},63:function(e,r){e.exports=require("url")},77:function(e,r){e.exports=require("os")},78:function(e,r){e.exports=require("http")},849:function(e,r,t){"use strict";t.r(r),function(e){var r=t(23),n=t.n(r),o=t(46),u=t.n(o),c=t(0),i=t.n(c),s=t(8),a=t(392),l=t(3),p=t.n(l);const{remote:f}=t(12),d=f.app;p.a.setup({translations:t(130),locale:d.getLocale()||"en"});const h=n.a.resolve(e,"..",".env");t(171).config({path:h});var v=new(t(148))({accessToken:process.env.ROLLBAR_ACCESS_TOKEN||"",handleUncaughtExceptions:!0,handleUnhandledRejections:!0,payload:{environment:"production",version:d.getVersion(),where:"dashboard.html",os:process.platform}});process.on("uncaughtException",(function(e){u.a.error(e),v.error(e)}));const b=document.getElementById("dashboard__react__root");Object(s.render)(i.a.createElement(a.a,null),b)}.call(this,"/")},90:function(e,r){e.exports=require("events")},91:function(e,r){e.exports=require("https")}});
//# sourceMappingURL=https://raw.githubusercontent.com/Plotinator/pltr_sourcemaps/main/2020.11.3/dashboard.map