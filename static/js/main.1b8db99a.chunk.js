(this["webpackJsonpcoin-exchange"]=this["webpackJsonpcoin-exchange"]||[]).push([[0],{36:function(n,e,t){},55:function(n,e,t){"use strict";t.r(e);var c=t(0),r=t(1),a=t.n(r),i=t(23),o=t.n(i),u=(t(36),t(5)),l=t.n(u),s=t(6),d=t(10),h=t(8),f=t(2),j=t(3);function b(){var n=Object(f.a)(["\nborder-radius: 30px;\nborder: 2px;\nmargin: 5px;\nbackground-color: #4169E1;\ncolor: white;\npadding: 0.3rem 0.3rem 0.3rem 0.3rem;\n"]);return b=function(){return n},n}function p(){var n=Object(f.a)(["\nborder: 1px solid #cccccc;\nwidth: 25vh;\n"]);return p=function(){return n},n}var A=j.a.td(p()),O=j.a.button(b());function x(n){return Object(c.jsxs)("tr",{children:[Object(c.jsx)(A,{children:n.name}),Object(c.jsx)(A,{children:n.ticker}),Object(c.jsxs)(A,{children:["$",n.price]}),n.showBalance?Object(c.jsx)(A,{children:n.balance}):null,Object(c.jsx)(A,{children:Object(c.jsxs)("form",{action:"#",method:"POST",children:[Object(c.jsx)(O,{onClick:function(e){e.preventDefault(),n.handleAPIActions(n.id,!1,!1)},children:"Refresh"}),Object(c.jsx)(O,{onClick:function(e){e.preventDefault(),n.handleAPIActions(n.id,!0,!1)},children:"Buy"}),Object(c.jsx)(O,{onClick:function(e){e.preventDefault(),n.handleAPIActions(n.id,!1,!0)},children:"Sell"})]})})]})}function m(){var n=Object(f.a)(["\nmargin: 50px auto 50px auto;\ndisplay: inline-block;\nfont-size: 1.4rem;\n"]);return m=function(){return n},n}var g=j.a.table(m());function v(n){return Object(c.jsxs)(g,{children:[Object(c.jsx)("thead",{children:Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{children:"Name"}),Object(c.jsx)("th",{children:"Ticker"}),Object(c.jsx)("th",{children:"Price"}),n.showBalance?Object(c.jsx)("th",{children:"Balance"}):null,Object(c.jsx)("th",{children:"Actions"})]})}),Object(c.jsx)("tbody",{children:n.coinData.map((function(e){var t=e.key,r=e.name,a=e.ticker,i=e.price,o=e.balance;return Object(c.jsx)(x,{id:t,handleAPIActions:n.handleAPIActions,showBalance:n.showBalance,name:r,ticker:a,balance:o,price:i},t)}))})]})}function B(){var n=Object(f.a)(["\nbackground-image: url(",");\nbackground-repeat: no-repeat;\nbackground-color: #4169E1;\nbackground-position: 50% 50%;\nborder-radius: 30px;\nborder: 2px;\ndisplay: inline-block;\npadding: 0.5em 1em;\nvertical-align: middle;\nmargin-left: 1.5em;\nwidth: 100px;\nheight: 28px;\ncolor: white;\n"]);return B=function(){return n},n}function w(){var n=Object(f.a)(["\ndisplay: inline-block;\npadding: 0.5em 1em;\nmargin-left: 1.5em;\nvertical-align: middle;\nbackground-color: #4169E1;\nborder-radius: 30px;\nborder: 2px;\ncolor: white;\n"]);return w=function(){return n},n}function k(){var n=Object(f.a)(["\nfont-size: 2rem;\ntext-align: left;\npadding: 1.5rem 0 1.5rem 5rem;\n"]);return k=function(){return n},n}var y=j.a.section(k()),C=j.a.button(w()),E=j.a.button(B(),"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAXCAYAAABJXhw0AAAACXBIWXMAAC4jAAAuIwF4pT92AAACPElEQVR4Xu1Wu0oDQRTNJptETExIXDRiIBDREAUFBQsRFP0AG63EzsLKxi/wF/wCC0srsRDEwkflB1hYaGFhUFFM1GRN3PEc2GKJRmezYyHswGE25M6Ze+7cuXcCAX/4EfAj8FMENMXh6QBfFAg6eE18vyne5wudrJAjrAwDH7ZTNcxEBXgGXjRNKwshypgrwWAQk0Z7fozU6/VzfIeAfXtdK11x/JEGOoEeIAUI4B2oAq/AI3DVTCArxG1AyUsHAtFodNE0zV2XBBQyChSAXltUty3wCfOaS772zHEKOk4lrut6KplMLuE70R6T/Cpd3lTOMhKJ9KbT6cVwOBxvNBp3sVhstlarneJUynIMLa2G8c+FRw655RDRl8/nmVJfYBiGKBQKV0g1OtTO2MMiFpM/Gz04gZ1isVhNJBLfinAKC4VCIpfL7SHtDBceHSA9j13YuzYdhAimzK8Cmm2y2ayAc0OSO57Bjpe85fBStSaRJifIffYNL4NBYDCY/5c2Ect8A2B5Zxlfz2Qy1VKpxGqmdKyCjY3O9Ul8s8ayo73g8JDBGQfmgQ2cXAnzHFJ3W6WKZZBxc68iGPEtSceuaYdKyD3ZKJWMLrDcexRzo8QTB4mXO8LIrADswP04/hR7CKqSJkTAFMISaIwGni0Vy7LKuEu8A7fAJvCgWohqPmeek3vG3mBa9UbNfCo6+xRIBwBWGPaGCXuTWcyHQATI/rUQL6nl9G0MP/gK5iuVnCwGLKl8rfrDj8B/jsAnoobFwdwUlG8AAAAASUVORK5CYII=");function I(n){var e=n.showBalance?"Hide Balance":"Show Balance";return Object(c.jsxs)(y,{children:[n.showBalance?"Balance: $".concat(n.amount):null,Object(c.jsx)(C,{onClick:function(e){e.preventDefault(),n.handleShowBalance(n.showBalance)},children:e}),Object(c.jsx)(E,{onClick:function(e){e.preventDefault(),n.handleAddBalance()}})]})}var D=t(27),S=t(28),K=t(30),G=t(29),F=t.p+"static/media/logo.6ce24c58.svg";function R(){var n=Object(f.a)(["\nbackground-color: #282c34;\nmin-height: 20vh;\ndisplay: flex;\nflex-direction: row;\nalign-items: center;\njustify-content: flex-start;\ncolor: white;\n"]);return R=function(){return n},n}function P(){var n=Object(f.a)(["\nfont-size: 4rem;\n"]);return P=function(){return n},n}function J(){var n=Object(f.a)(["\nheight: 8rem;\npointer-events: none;\n"]);return J=function(){return n},n}var T=j.a.img(J()),X=j.a.h1(P()),U=j.a.header(R()),z=function(n){Object(K.a)(t,n);var e=Object(G.a)(t);function t(){return Object(D.a)(this,t),e.apply(this,arguments)}return Object(S.a)(t,[{key:"render",value:function(){return Object(c.jsxs)(U,{children:[Object(c.jsx)(T,{src:F,alt:"React logo"}),Object(c.jsx)(X,{children:"Coin Exchange"})]})}}]),t}(r.Component),M=t(12),V=t.n(M);function N(){var n=Object(f.a)(["\ntext-align: center;\nbackground-color: rgb(12, 48, 88);\ncolor: #cccccc;\n"]);return N=function(){return n},n}var L=j.a.div(N()),Q=function(n){return parseFloat(Number(n).toFixed(4))};var Y=function(n){var e=Object(r.useState)(1e4),t=Object(h.a)(e,2),a=t[0],i=t[1],o=Object(r.useState)(!0),u=Object(h.a)(o,2),f=u[0],j=u[1],b=Object(r.useState)([]),p=Object(h.a)(b,2),A=p[0],O=p[1];Object(r.useEffect)((function(){0===A.length&&x()}));var x=function(){var n=Object(d.a)(l.a.mark((function n(){var e,t,c,r;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,V.a.get("https://api.coinpaprika.com/v1/tickers/").catch((function(n){console.log(n)}));case 2:e=n.sent,t=e.data,c=t.sort((function(n,e){return n.rank>e.rank?1:-1})).slice(0,10),r=c.map((function(n){var e=Object(s.a)({},n);return{key:e.id,name:e.name,ticker:e.symbol,balance:0,price:Q(e.quotes.USD.price)}})),O(r);case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),m=function(){var n=Object(d.a)(l.a.mark((function n(e,t,c){var r,a,i,o,u;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="https://api.coinpaprika.com/v1/tickers/".concat(e),n.next=3,V.a.get(r).catch((function(n){console.log(n)}));case 3:a=n.sent,i=a.data,o=Q(i.quotes.USD.price),u=A.map((function(n){var t=Object(s.a)({},n);return e===t.key&&(t.price=o),t})),O(u),t&&g(e,o),c&&B(e,o);case 10:case"end":return n.stop()}}),n)})));return function(e,t,c){return n.apply(this,arguments)}}(),g=function(n,e){var t=A.map((function(t){var c=Object(s.a)({},t);return n===c.key&&(a>=e?(c.price=e,c.balance+=1,i(a-e)):alert("Insufficient funds")),c}));O(t)},B=function(n,e){var t=A.map((function(t){var c=Object(s.a)({},t);return n===c.key&&c.balance>0&&(c.price=e,c.balance-=1,i(a+e)),c}));O(t)};return Object(c.jsxs)(L,{children:[Object(c.jsx)(z,{}),Object(c.jsx)(I,{amount:a,showBalance:f,handleShowBalance:function(n){j(!n)},handleAddBalance:function(){i(a+1200)}}),Object(c.jsx)(v,{coinData:A,handleAPIActions:m,showBalance:f})]})},H=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,56)).then((function(e){var t=e.getCLS,c=e.getFID,r=e.getFCP,a=e.getLCP,i=e.getTTFB;t(n),c(n),r(n),a(n),i(n)}))};o.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(Y,{})}),document.getElementById("root")),H()}},[[55,1,2]]]);
//# sourceMappingURL=main.1b8db99a.chunk.js.map