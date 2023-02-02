/*!
 * pace.js v1.2.4
 * https://github.com/CodeByZach/pace/
 * Licensed MIT © HubSpot, Inc.
 */
(function(){function t(t,e){return function(){return t.apply(e,arguments)}}var e,n,r,s,o,i,a,u,c,l,p,h,f,g,d,m,y,v,w,b,k,S,q,L,x,P,T,R,j,O,E,M,A,C,N,_,F,U,W,X,D,H,I,z,G,B,J=[].slice,K={}.hasOwnProperty,Q=function(t,e){for(var n in e)K.call(e,n)&&(t[n]=e[n]);function r(){this.constructor=t}return r.prototype=e.prototype,t.prototype=new r,t.__super__=e.prototype,t},V=[].indexOf||function(t){for(var e=0,n=this.length;e<n;e++)if(e in this&&this[e]===t)return e;return-1};function Y(){}for(v={className:"",catchupTime:100,initialRate:.03,minTime:250,ghostTime:100,maxProgressPerFrame:20,easeFactor:1.25,startOnPageLoad:!0,restartOnPushState:!0,restartOnRequestAfter:500,target:"body",elements:{checkInterval:100,selectors:["body"]},eventLag:{minSamples:10,sampleCount:3,lagThreshold:3},ajax:{trackMethods:["GET"],trackWebSockets:!0,ignoreURLs:[]}},P=function(){var t;return null!=(t="undefined"!=typeof performance&&null!==performance&&"function"==typeof performance.now?performance.now():void 0)?t:+new Date},R=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame,y=window.cancelAnimationFrame||window.mozCancelAnimationFrame,h=function(t,e,n){if("function"==typeof t.addEventListener)return t.addEventListener(e,n,!1);var r;"function"!=typeof t["on"+e]||"object"!=typeof t["on"+e].eventListeners?(r=new s,"function"==typeof t["on"+e]&&r.on(e,t["on"+e]),t["on"+e]=function(t){return r.trigger(e,t)},t["on"+e].eventListeners=r):r=t["on"+e].eventListeners,r.on(e,n)},null==R&&(R=function(t){return setTimeout(t,50)},y=function(t){return clearTimeout(t)}),O=function(t){var e=P(),n=function(){var r=P()-e;return 33<=r?(e=P(),t(r,(function(){return R(n)}))):setTimeout(n,33-r)};return n()},j=function(){var t=arguments[0],e=arguments[1],n=3<=arguments.length?J.call(arguments,2):[];return"function"==typeof t[e]?t[e].apply(t,n):t[e]},w=function(){for(var t,e,n,r=arguments[0],s=2<=arguments.length?J.call(arguments,1):[],o=0,i=s.length;o<i;o++)if(e=s[o])for(t in e)K.call(e,t)&&(n=e[t],null!=r[t]&&"object"==typeof r[t]&&null!=n&&"object"==typeof n?w(r[t],n):r[t]=n);return r},g=function(t){for(var e,n,r=e=0,s=0,o=t.length;s<o;s++)n=t[s],r+=Math.abs(n),e++;return r/e},k=function(t,e){var n,r;if(null==t&&(t="options"),null==e&&(e=!0),r=document.querySelector("[data-pace-"+t+"]")){if(n=r.getAttribute("data-pace-"+t),!e)return n;try{return JSON.parse(n)}catch(t){return"undefined"!=typeof console&&null!==console?console.error("Error parsing inline pace options",t):void 0}}},Y.prototype.on=function(t,e,n,r){var s;return null==r&&(r=!1),null==this.bindings&&(this.bindings={}),null==(s=this.bindings)[t]&&(s[t]=[]),this.bindings[t].push({handler:e,ctx:n,once:r})},Y.prototype.once=function(t,e,n){return this.on(t,e,n,!0)},Y.prototype.off=function(t,e){var n,r,s;if(null!=(null!=(r=this.bindings)?r[t]:void 0)){if(null==e)return delete this.bindings[t];for(n=0,s=[];n<this.bindings[t].length;)this.bindings[t][n].handler===e?s.push(this.bindings[t].splice(n,1)):s.push(n++);return s}},Y.prototype.trigger=function(){var t,e,n,r,s,o,i=arguments[0],a=2<=arguments.length?J.call(arguments,1):[];if(null!=(r=this.bindings)&&r[i]){for(n=0,o=[];n<this.bindings[i].length;)e=(s=this.bindings[i][n]).handler,t=s.ctx,s=s.once,e.apply(null!=t?t:this,a),s?o.push(this.bindings[i].splice(n,1)):o.push(n++);return o}},B=Y,i=window.Pace||{},window.Pace=i,w(i,B.prototype),T=i.options=w({},v,window.paceOptions,k()),X=0,H=(z=["ajax","document","eventLag","elements"]).length;X<H;X++)!0===T[C=z[X]]&&(T[C]=v[C]);function Z(){return Z.__super__.constructor.apply(this,arguments)}function $(){this.progress=0}function tt(){this.bindings={}}function et(){var t,e=this;et.__super__.constructor.apply(this,arguments),t=function(t){var n=t.open;return t.open=function(r,s,o){return A(r)&&e.trigger("request",{type:r,url:s,request:t}),n.apply(t,arguments)}},window.XMLHttpRequest=function(e){return e=new W(e),t(e),e};try{b(window.XMLHttpRequest,W)}catch(t){}if(null!=U){window.XDomainRequest=function(){var e=new U;return t(e),e};try{b(window.XDomainRequest,U)}catch(t){}}if(null!=F&&T.ajax.trackWebSockets){window.WebSocket=function(t,n){var r=null!=n?new F(t,n):new F(t);return A("socket")&&e.trigger("request",{type:"socket",url:t,protocols:n,request:r}),r};try{b(window.WebSocket,F)}catch(t){}}}function nt(){this.complete=t(this.complete,this);var e=this;this.elements=[],S().on("request",(function(){return e.watch.apply(e,arguments)}))}function rt(e){var n,s,o,i;for(null==e&&(e={}),this.complete=t(this.complete,this),this.elements=[],null==e.selectors&&(e.selectors=[]),s=0,o=(i=e.selectors).length;s<o;s++)n=i[s],this.elements.push(new r(n,this.complete))}function st(t,e){this.selector=t,this.completeCallback=e,this.progress=0,this.check()}function ot(){var t,e,n=this;this.progress=null!=(e=this.states[document.readyState])?e:100,t=document.onreadystatechange,document.onreadystatechange=function(){return null!=n.states[document.readyState]&&(n.progress=n.states[document.readyState]),"function"==typeof t?t.apply(null,arguments):void 0}}function it(t){this.source=t,this.last=this.sinceLastUpdate=0,this.rate=T.initialRate,this.catchup=0,this.progress=this.lastProgress=0,null!=this.source&&(this.progress=j(this.source,"progress"))}Q(Z,B=Error),o=Z,$.prototype.getElement=function(){var t;if(null==this.el){if(!(t=document.querySelector(T.target)))throw new o;this.el=document.createElement("div"),this.el.className="pace pace-active",document.body.className=document.body.className.replace(/(pace-done )|/,"pace-running ");var e=""!==T.className?" "+T.className:"";this.el.innerHTML='<div class="pace-progress'+e+'">\n  <div class="pace-progress-inner"></div>\n</div>\n<div class="pace-activity"></div>',null!=t.firstChild?t.insertBefore(this.el,t.firstChild):t.appendChild(this.el)}return this.el},$.prototype.finish=function(){var t=this.getElement();return t.className=t.className.replace("pace-active","pace-inactive"),document.body.className=document.body.className.replace("pace-running ","pace-done ")},$.prototype.update=function(t){return this.progress=t,i.trigger("progress",t),this.render()},$.prototype.destroy=function(){try{this.getElement().parentNode.removeChild(this.getElement())}catch(t){o=t}return this.el=void 0},$.prototype.render=function(){var t,e,n,r,s,o,a;if(null==document.querySelector(T.target))return!1;for(t=this.getElement(),r="translate3d("+this.progress+"%, 0, 0)",s=0,o=(a=["webkitTransform","msTransform","transform"]).length;s<o;s++)e=a[s],t.children[0].style[e]=r;return(!this.lastRenderedProgress||this.lastRenderedProgress|0!==this.progress|0)&&(t.children[0].setAttribute("data-progress-text",(0|this.progress)+"%"),100<=this.progress?n="99":(n=this.progress<10?"0":"",n+=0|this.progress),t.children[0].setAttribute("data-progress",""+n)),i.trigger("change",this.progress),this.lastRenderedProgress=this.progress},$.prototype.done=function(){return 100<=this.progress},n=$,tt.prototype.trigger=function(t,e){var n,r,s,o,i;if(null!=this.bindings[t]){for(i=[],r=0,s=(o=this.bindings[t]).length;r<s;r++)n=o[r],i.push(n.call(this,e));return i}},tt.prototype.on=function(t,e){var n;return null==(n=this.bindings)[t]&&(n[t]=[]),this.bindings[t].push(e)},s=tt,W=window.XMLHttpRequest,U=window.XDomainRequest,F=window.WebSocket,b=function(t,e){var n,r=[];for(n in e.prototype)try{null==t[n]&&"function"!=typeof e[n]?"function"==typeof Object.defineProperty?r.push(Object.defineProperty(t,n,{get:function(t){return function(){return e.prototype[t]}}(n),configurable:!0,enumerable:!0})):r.push(t[n]=e.prototype[n]):r.push(void 0)}catch(t){}return r},L=[],i.ignore=function(){var t=arguments[0],e=2<=arguments.length?J.call(arguments,1):[];return L.unshift("ignore"),e=t.apply(null,e),L.shift(),e},i.track=function(){var t=arguments[0],e=2<=arguments.length?J.call(arguments,1):[];return L.unshift("track"),e=t.apply(null,e),L.shift(),e},A=function(t){if(null==t&&(t="GET"),"track"===L[0])return"force";if(!L.length&&T.ajax){if("socket"===t&&T.ajax.trackWebSockets)return!0;if(t=t.toUpperCase(),0<=V.call(T.ajax.trackMethods,t))return!0}return!1},Q(et,s),a=et,D=null,M=function(t){for(var e,n=T.ajax.ignoreURLs,r=0,s=n.length;r<s;r++)if("string"==typeof(e=n[r])){if(-1!==t.indexOf(e))return!0}else if(e.test(t))return!0;return!1},(S=function(){return D=null==D?new a:D})().on("request",(function(t){var n,r=t.type,s=t.request,o=t.url;if(!M(o))return i.running||!1===T.restartOnRequestAfter&&"force"!==A(r)?void 0:(n=arguments,"boolean"==typeof(o=T.restartOnRequestAfter||0)&&(o=0),setTimeout((function(){var t,o,a,u,c="socket"===r?s.readyState<1:0<(c=s.readyState)&&c<4;if(c){for(i.restart(),u=[],t=0,o=(a=i.sources).length;t<o;t++){if((C=a[t])instanceof e){C.watch.apply(C,n);break}u.push(void 0)}return u}}),o))})),nt.prototype.watch=function(t){var e=t.type,n=t.request;t=t.url;if(!M(t))return n=new("socket"===e?l:p)(n,this.complete),this.elements.push(n)},nt.prototype.complete=function(t){return this.elements=this.elements.filter((function(e){return e!==t}))},e=nt,p=function(t,e){var n,r,s,o,i=this;if(this.progress=0,null!=window.ProgressEvent)for(h(t,"progress",(function(t){return t.lengthComputable?i.progress=100*t.loaded/t.total:i.progress=i.progress+(100-i.progress)/2})),n=0,r=(o=["load","abort","timeout","error"]).length;n<r;n++)h(t,o[n],(function(){return e(i),i.progress=100}));else s=t.onreadystatechange,t.onreadystatechange=function(){var n;return 0===(n=t.readyState)||4===n?(e(i),i.progress=100):3===t.readyState&&(i.progress=50),"function"==typeof s?s.apply(null,arguments):void 0}},l=function(t,e){for(var n,r=this,s=this.progress=0,o=(n=["error","open"]).length;s<o;s++)h(t,n[s],(function(){return e(r),r.progress=100}))},rt.prototype.complete=function(t){return this.elements=this.elements.filter((function(e){return e!==t}))},k=rt,st.prototype.check=function(){var t=this;return document.querySelector(this.selector)?this.done():setTimeout((function(){return t.check()}),T.elements.checkInterval)},st.prototype.done=function(){return this.completeCallback(this),this.completeCallback=null,this.progress=100},r=st,ot.prototype.states={loading:0,interactive:50,complete:100},B=ot,Q=function(){var t,e,n,r,s,o=this;this.progress=0,s=[],r=0,n=P(),e=setInterval((function(){var i=P()-n-50;return n=P(),s.push(i),s.length>T.eventLag.sampleCount&&s.shift(),t=g(s),++r>=T.eventLag.minSamples&&t<T.eventLag.lagThreshold?(o.progress=100,clearInterval(e)):o.progress=3/(t+3)*100}),50)},it.prototype.tick=function(t,e){return 100<=(e=null==e?j(this.source,"progress"):e)&&(this.done=!0),e===this.last?this.sinceLastUpdate+=t:(this.sinceLastUpdate&&(this.rate=(e-this.last)/this.sinceLastUpdate),this.catchup=(e-this.progress)/T.catchupTime,this.sinceLastUpdate=0,this.last=e),e>this.progress&&(this.progress+=this.catchup*t),e=1-Math.pow(this.progress/100,T.easeFactor),this.progress+=e*this.rate*t,this.progress=Math.min(this.lastProgress+T.maxProgressPerFrame,this.progress),this.progress=Math.max(0,this.progress),this.progress=Math.min(100,this.progress),this.lastProgress=this.progress,this.progress},c=it,m=f=_=d=E=N=null,i.running=!1,q=function(){if(T.restartOnPushState)return i.restart()},null!=window.history.pushState&&(I=window.history.pushState,window.history.pushState=function(){return q(),I.apply(window.history,arguments)}),null!=window.history.replaceState&&(G=window.history.replaceState,window.history.replaceState=function(){return q(),G.apply(window.history,arguments)}),u={ajax:e,elements:k,document:B,eventLag:Q},(x=function(){var t,e,r,s,o,a,l,p;for(i.sources=N=[],e=0,s=(a=["ajax","elements","document","eventLag"]).length;e<s;e++)!1!==T[t=a[e]]&&N.push(new u[t](T[t]));for(r=0,o=(p=null!=(l=T.extraSources)?l:[]).length;r<o;r++)C=p[r],N.push(new C(T));return i.bar=d=new n,E=[],_=new c})(),i.stop=function(){return i.trigger("stop"),i.running=!1,d.destroy(),m=!0,null!=f&&("function"==typeof y&&y(f),f=null),x()},i.restart=function(){return i.trigger("restart"),i.stop(),i.start()},i.go=function(){var t;return i.running=!0,d.render(),t=P(),m=!1,f=O((function(e,n){d.progress;for(var r,s,o,a,u,l,p,h,f,g,y=l=0,v=!0,w=p=0,b=N.length;p<b;w=++p)for(C=N[w],u=null!=E[w]?E[w]:E[w]=[],o=h=0,f=(s=null!=(g=C.elements)?g:[C]).length;h<f;o=++h)a=s[o],v&=(a=null!=u[o]?u[o]:u[o]=new c(a)).done,a.done||(y++,l+=a.tick(e));return r=l/y,d.update(_.tick(e,r)),d.done()||v||m?(d.update(100),i.trigger("done"),setTimeout((function(){return d.finish(),i.running=!1,i.trigger("hide")}),Math.max(T.ghostTime,Math.max(T.minTime-(P()-t),0)))):n()}))},i.start=function(t){w(T,t),i.running=!0;try{d.render()}catch(t){o=t}return document.querySelector(".pace")?(i.trigger("start"),i.go()):setTimeout(i.start,50)},"function"==typeof define&&define.amd?define((function(){return i})):"object"==typeof exports?module.exports=i:T.startOnPageLoad&&i.start()}).call(this);
//# sourceMappingURL=index.f95906aa.js.map
