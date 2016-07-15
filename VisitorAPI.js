/*
 ============== DO NOT ALTER ANYTHING BELOW THIS LINE ! ============

 Adobe Visitor API for JavaScript version: 1.5.7
 Copyright 1996-2015 Adobe, Inc. All Rights Reserved
 More info available at http://www.omniture.com
*/
function Visitor(m,t){if(!m)throw"Visitor requires Adobe Marketing Cloud Org ID";var a=this;a.version="1.5.7";var l=window,i=l.Visitor;i.version=a.version;l.s_c_in||(l.s_c_il=[],l.s_c_in=0);a._c="Visitor";a._il=l.s_c_il;a._in=l.s_c_in;a._il[a._in]=a;l.s_c_in++;a.pa={Ka:[]};var o=l.document,h=i.Ma;h||(h=null);var z=i.Na;z||(z=void 0);var j=i.ja;j||(j=!0);var k=i.La;k||(k=!1);a.S=function(a){var c=0,b,e;if(a)for(b=0;b<a.length;b++)e=a.charCodeAt(b),c=(c<<5)-c+e,c&=c;return c};a.r=function(a){var c=
"0123456789",b="",e="",f,g=8,n=10,h=10;if(1==a){c+="ABCDEF";for(a=0;16>a;a++)f=Math.floor(Math.random()*g),b+=c.substring(f,f+1),f=Math.floor(Math.random()*g),e+=c.substring(f,f+1),g=16;return b+"-"+e}for(a=0;19>a;a++)f=Math.floor(Math.random()*n),b+=c.substring(f,f+1),0==a&&9==f?n=3:(1==a||2==a)&&10!=n&&2>f?n=10:2<a&&(n=10),f=Math.floor(Math.random()*h),e+=c.substring(f,f+1),0==a&&9==f?h=3:(1==a||2==a)&&10!=h&&2>f?h=10:2<a&&(h=10);return b+e};a.ma=function(){var a;!a&&l.location&&(a=l.location.hostname);
if(a)if(/^[0-9.]+$/.test(a))a="";else{var c=a.split("."),b=c.length-1,e=b-1;1<b&&2>=c[b].length&&(2==c[b-1].length||0>",ac,ad,ae,af,ag,ai,al,am,an,ao,aq,ar,as,at,au,aw,ax,az,ba,bb,be,bf,bg,bh,bi,bj,bm,bo,br,bs,bt,bv,bw,by,bz,ca,cc,cd,cf,cg,ch,ci,cl,cm,cn,co,cr,cu,cv,cw,cx,cz,de,dj,dk,dm,do,dz,ec,ee,eg,es,et,eu,fi,fm,fo,fr,ga,gb,gd,ge,gf,gg,gh,gi,gl,gm,gn,gp,gq,gr,gs,gt,gw,gy,hk,hm,hn,hr,ht,hu,id,ie,im,in,io,iq,ir,is,it,je,jo,jp,kg,ki,km,kn,kp,kr,ky,kz,la,lb,lc,li,lk,lr,ls,lt,lu,lv,ly,ma,mc,md,me,mg,mh,mk,ml,mn,mo,mp,mq,mr,ms,mt,mu,mv,mw,mx,my,na,nc,ne,nf,ng,nl,no,nr,nu,nz,om,pa,pe,pf,ph,pk,pl,pm,pn,pr,ps,pt,pw,py,qa,re,ro,rs,ru,rw,sa,sb,sc,sd,se,sg,sh,si,sj,sk,sl,sm,sn,so,sr,st,su,sv,sx,sy,sz,tc,td,tf,tg,th,tj,tk,tl,tm,tn,to,tp,tr,tt,tv,tw,tz,ua,ug,uk,us,uy,uz,va,vc,ve,vg,vi,vn,vu,wf,ws,yt,".indexOf(","+
c[b]+","))&&e--;if(0<e)for(a="";b>=e;)a=c[b]+(a?".":"")+a,b--}return a};a.cookieRead=function(a){var a=encodeURIComponent(a),c=(";"+o.cookie).split(" ").join(";"),b=c.indexOf(";"+a+"="),e=0>b?b:c.indexOf(";",b+1);return 0>b?"":decodeURIComponent(c.substring(b+2+a.length,0>e?c.length:e))};a.cookieWrite=function(d,c,b){var e=a.cookieLifetime,f,c=""+c,e=e?(""+e).toUpperCase():"";b&&"SESSION"!=e&&"NONE"!=e?(f=""!=c?parseInt(e?e:0,10):-60)?(b=new Date,b.setTime(b.getTime()+1E3*f)):1==b&&(b=new Date,f=
b.getYear(),b.setYear(f+2+(1900>f?1900:0))):b=0;return d&&"NONE"!=e?(o.cookie=encodeURIComponent(d)+"="+encodeURIComponent(c)+"; path=/;"+(b?" expires="+b.toGMTString()+";":"")+(a.cookieDomain?" domain="+a.cookieDomain+";":""),a.cookieRead(d)==c):0};a.g=h;a.A=function(a,c){try{"function"==typeof a?a.apply(l,c):a[1].apply(a[0],c)}catch(b){}};a.ra=function(d,c){c&&(a.g==h&&(a.g={}),a.g[d]==z&&(a.g[d]=[]),a.g[d].push(c))};a.m=function(d,c){if(a.g!=h){var b=a.g[d];if(b)for(;0<b.length;)a.A(b.shift(),
c)}};a.j=h;a.oa=function(d,c,b){var e=0,f=0,g;if(c&&o){for(g=0;!e&&2>g;){try{e=(e=o.getElementsByTagName(0<g?"HEAD":"head"))&&0<e.length?e[0]:0}catch(n){e=0}g++}if(!e)try{o.body&&(e=o.body)}catch(j){e=0}if(e)for(g=0;!f&&2>g;){try{f=o.createElement(0<g?"SCRIPT":"script")}catch(i){f=0}g++}}!c||!e||!f?b&&b():(f.type="text/javascript",f.setAttribute("async","async"),f.src=c,e.firstChild?e.insertBefore(f,e.firstChild):e.appendChild(f),a.pa.Ka.push(c),b&&(a.j==h&&(a.j={}),a.j[d]=setTimeout(b,a.loadTimeout)))};
a.ka=function(d){a.j!=h&&a.j[d]&&(clearTimeout(a.j[d]),a.j[d]=0)};a.T=k;a.U=k;a.isAllowed=function(){if(!a.T&&(a.T=j,a.cookieRead(a.cookieName)||a.cookieWrite(a.cookieName,"T",1)))a.U=j;return a.U};a.a=h;a.d=h;var B=i.$a;B||(B="MC");var s=i.fb;s||(s="MCMID");var C=i.ab;C||(C="MCCIDH");var D=i.eb;D||(D="MCSYNCS");var F=i.bb;F||(F="MCIDTS");var x=i.cb;x||(x="MCOPTOUT");var A=i.Ya;A||(A="A");var p=i.Va;p||(p="MCAID");var y=i.Za;y||(y="AAM");var w=i.Xa;w||(w="MCAAMLH");var q=i.Wa;q||(q="MCAAMB");var r=
i.gb;r||(r="NONE");a.C=0;a.R=function(){if(!a.C){var d=a.version;a.audienceManagerServer&&(d+="|"+a.audienceManagerServer);a.audienceManagerServerSecure&&(d+="|"+a.audienceManagerServerSecure);a.C=a.S(d)}return a.C};a.V=k;a.f=function(){if(!a.V){a.V=j;var d=a.R(),c=k,b=a.cookieRead(a.cookieName),e,f,g,n,i=new Date;a.a==h&&(a.a={});if(b&&"T"!=b){b=b.split("|");b[0].match(/^[\-0-9]+$/)&&(parseInt(b[0],10)!=d&&(c=j),b.shift());1==b.length%2&&b.pop();for(d=0;d<b.length;d+=2)if(e=b[d].split("-"),f=e[0],
g=b[d+1],1<e.length?(n=parseInt(e[1],10),e=0<e[1].indexOf("s")):(n=0,e=k),c&&(f==C&&(g=""),0<n&&(n=i.getTime()/1E3-60)),f&&g&&(a.c(f,g,1),0<n&&(a.a["expire"+f]=n+(e?"s":""),i.getTime()>=1E3*n||e&&!a.cookieRead(a.sessionCookieName))))a.d||(a.d={}),a.d[f]=j}if(!a.b(p)&&(b=a.cookieRead("s_vi")))b=b.split("|"),1<b.length&&0<=b[0].indexOf("v1")&&(g=b[1],d=g.indexOf("["),0<=d&&(g=g.substring(0,d)),g&&g.match(/^[0-9a-fA-F\-]+$/)&&a.c(p,g))}};a.ta=function(){var d=a.R(),c,b;for(c in a.a)!Object.prototype[c]&&
a.a[c]&&"expire"!=c.substring(0,6)&&(b=a.a[c],d+=(d?"|":"")+c+(a.a["expire"+c]?"-"+a.a["expire"+c]:"")+"|"+b);a.cookieWrite(a.cookieName,d,1)};a.b=function(d,c){return a.a!=h&&(c||!a.d||!a.d[d])?a.a[d]:h};a.c=function(d,c,b){a.a==h&&(a.a={});a.a[d]=c;b||a.ta()};a.na=function(d,c){var b=a.b(d,c);return b?b.split("*"):h};a.sa=function(d,c,b){a.c(d,c?c.join("*"):"",b)};a.Sa=function(d,c){var b=a.na(d,c);if(b){var e={},f;for(f=0;f<b.length;f+=2)e[b[f]]=b[f+1];return e}return h};a.Ua=function(d,c,b){var e=
h,f;if(c)for(f in e=[],c)Object.prototype[f]||(e.push(f),e.push(c[f]));a.sa(d,e,b)};a.k=function(d,c,b){var e=new Date;e.setTime(e.getTime()+1E3*c);a.a==h&&(a.a={});a.a["expire"+d]=Math.floor(e.getTime()/1E3)+(b?"s":"");0>c?(a.d||(a.d={}),a.d[d]=j):a.d&&(a.d[d]=k);b&&(a.cookieRead(a.sessionCookieName)||a.cookieWrite(a.sessionCookieName,"1"))};a.Q=function(a){if(a&&("object"==typeof a&&(a=a.d_mid?a.d_mid:a.visitorID?a.visitorID:a.id?a.id:a.uuid?a.uuid:""+a),a&&(a=a.toUpperCase(),"NOTARGET"==a&&(a=
r)),!a||a!=r&&!a.match(/^[0-9a-fA-F\-]+$/)))a="";return a};a.i=function(d,c){a.ka(d);a.h!=h&&(a.h[d]=k);if(d==B){var b=a.b(s);if(!b){b="object"==typeof c&&c.mid?c.mid:a.Q(c);if(!b){if(a.v){a.getAnalyticsVisitorID(h,k,j);return}b=a.r()}a.c(s,b)}if(!b||b==r)b="";"object"==typeof c&&((c.d_region||c.dcs_region||c.d_blob||c.blob)&&a.i(y,c),a.v&&c.mid&&a.i(A,{id:c.id}));a.m(s,[b])}if(d==y&&"object"==typeof c){b=604800;c.id_sync_ttl!=z&&c.id_sync_ttl&&(b=parseInt(c.id_sync_ttl,10));var e=a.b(w);e||((e=c.d_region)||
(e=c.dcs_region),e&&(a.k(w,b),a.c(w,e)));e||(e="");a.m(w,[e]);e=a.b(q);if(c.d_blob||c.blob)(e=c.d_blob)||(e=c.blob),a.k(q,b),a.c(q,e);e||(e="");a.m(q,[e]);!c.error_msg&&a.t&&a.c(C,a.t)}if(d==A){b=a.b(p);b||((b=a.Q(c))?b!==r&&a.k(q,-1):b=r,a.c(p,b));if(!b||b==r)b="";a.m(p,[b])}a.idSyncDisableSyncs?u.ba=j:(u.ba=k,b={},b.ibs=c.ibs,b.subdomain=c.subdomain,u.Ia(b));c===Object(c)&&(b=r,c.d_optout&&c.d_optout instanceof Array&&(b=c.d_optout.join(",")),e=parseInt(c.d_ottl,10),isNaN(e)&&(e=7200),a.k(x,e,!0),
a.c(x,b),a.m(x,[b]))};a.h=h;a.n=function(d,c,b,e){var f="",g;if(a.isAllowed()&&(a.f(),f=a.b(d),!f&&(d==s||d==x?g=B:d==w||d==q?g=y:d==p&&(g=A),g))){if(c&&(a.h==h||!a.h[g]))a.h==h&&(a.h={}),a.h[g]=j,a.oa(g,c,function(){if(!a.b(d)){var b="";d==s?b=a.r():g==y&&(b={error_msg:"timeout"});a.i(g,b)}});a.ra(d,b);c||a.i(g,{id:r});return""}if((d==s||d==p)&&f==r)f="",e=j;b&&e&&a.A(b,[f]);return f};a._setMarketingCloudFields=function(d){a.f();a.i(B,d)};a.setMarketingCloudVisitorID=function(d){a._setMarketingCloudFields(d)};
a.v=k;a.getMarketingCloudVisitorID=function(d,c){if(a.isAllowed()){a.marketingCloudServer&&0>a.marketingCloudServer.indexOf(".demdex.net")&&(a.v=j);var b=a.s("_setMarketingCloudFields");return a.n(s,b,d,c)}return""};a.qa=function(){a.getAudienceManagerBlob()};i.AuthState={UNKNOWN:0,AUTHENTICATED:1,LOGGED_OUT:2};a.q={};a.P=k;a.t="";a.setCustomerIDs=function(d){if(a.isAllowed()&&d){a.f();var c,b;for(c in d)if(!Object.prototype[c]&&(b=d[c]))if("object"==typeof b){var e={};b.id&&(e.id=b.id);b.authState!=
z&&(e.authState=b.authState);a.q[c]=e}else a.q[c]={id:b};var d=a.getCustomerIDs(),e=a.b(C),f="";e||(e=0);for(c in d)Object.prototype[c]||(b=d[c],f+=(f?"|":"")+c+"|"+(b.id?b.id:"")+(b.authState?b.authState:""));a.t=a.S(f);a.t!=e&&(a.P=j,a.qa())}};a.getCustomerIDs=function(){a.f();var d={},c,b;for(c in a.q)Object.prototype[c]||(b=a.q[c],d[c]||(d[c]={}),b.id&&(d[c].id=b.id),d[c].authState=b.authState!=z?b.authState:i.AuthState.UNKNOWN);return d};a._setAnalyticsFields=function(d){a.f();a.i(A,d)};a.setAnalyticsVisitorID=
function(d){a._setAnalyticsFields(d)};a.getAnalyticsVisitorID=function(d,c,b){if(a.isAllowed()){var e="";b||(e=a.getMarketingCloudVisitorID(function(){a.getAnalyticsVisitorID(d,j)}));if(e||b){var f=b?a.marketingCloudServer:a.trackingServer,g="";a.loadSSL&&(b?a.marketingCloudServerSecure&&(f=a.marketingCloudServerSecure):a.trackingServerSecure&&(f=a.trackingServerSecure));f&&(g="http"+(a.loadSSL?"s":"")+"://"+f+"/id?d_visid_ver="+a.version+"&callback=s_c_il%5B"+a._in+"%5D._set"+(b?"MarketingCloud":
"Analytics")+"Fields&mcorgid="+encodeURIComponent(a.marketingCloudOrgID)+(e?"&mid="+encodeURIComponent(e):"")+(a.idSyncDisable3rdPartySyncing?"&d_coppa=true":""));return a.n(b?s:p,g,d,c)}}return""};a._setAudienceManagerFields=function(d){a.f();a.i(y,d)};a.s=function(d){var c=a.audienceManagerServer,b="",e=a.b(s),f=a.b(q,j),g=a.b(p),g=g&&g!=r?"&d_cid_ic=AVID%01"+encodeURIComponent(g):"";a.loadSSL&&a.audienceManagerServerSecure&&(c=a.audienceManagerServerSecure);if(c){var b=a.getCustomerIDs(),h,i;if(b)for(h in b)Object.prototype[h]||
(i=b[h],g+="&d_cid_ic="+encodeURIComponent(h)+"%01"+encodeURIComponent(i.id?i.id:"")+(i.authState?"%01"+i.authState:""));d||(d="_setAudienceManagerFields");b="http"+(a.loadSSL?"s":"")+"://"+c+"/id?d_visid_ver="+a.version+"&d_rtbd=json&d_ver=2"+(!e&&a.v?"&d_verify=1":"")+"&d_orgid="+encodeURIComponent(a.marketingCloudOrgID)+"&d_nsid="+(a.idSyncContainerID||0)+(e?"&d_mid="+encodeURIComponent(e):"")+(a.idSyncDisable3rdPartySyncing?"&d_coppa=true":"")+(f?"&d_blob="+encodeURIComponent(f):"")+g+"&d_cb=s_c_il%5B"+
a._in+"%5D."+d}return b};a.getAudienceManagerLocationHint=function(d,c){if(a.isAllowed()&&a.getMarketingCloudVisitorID(function(){a.getAudienceManagerLocationHint(d,j)})){var b=a.b(p);b||(b=a.getAnalyticsVisitorID(function(){a.getAudienceManagerLocationHint(d,j)}));if(b)return b=a.s(),a.n(w,b,d,c)}return""};a.getAudienceManagerBlob=function(d,c){if(a.isAllowed()&&a.getMarketingCloudVisitorID(function(){a.getAudienceManagerBlob(d,j)})){var b=a.b(p);b||(b=a.getAnalyticsVisitorID(function(){a.getAudienceManagerBlob(d,
j)}));if(b)return b=a.s(),a.P&&a.k(q,-1),a.n(q,b,d,c)}return""};a.o="";a.u={};a.D="";a.F={};a.getSupplementalDataID=function(d,c){!a.o&&!c&&(a.o=a.r(1));var b=a.o;a.D&&!a.F[d]?(b=a.D,a.F[d]=j):b&&(a.u[d]&&(a.D=a.o,a.F=a.u,a.o=b=!c?a.r(1):"",a.u={}),b&&(a.u[d]=j));return b};i.OptOut={GLOBAL:"global"};a.getOptOut=function(d,c){if(a.isAllowed()){var b=a.s("_setMarketingCloudFields");return a.n(x,b,d,c)}return""};a.isOptedOut=function(d,c,b){return a.isAllowed()?(c||(c=i.OptOut.GLOBAL),(b=a.getOptOut(function(b){a.A(d,
[b==i.OptOut.GLOBAL||0<=b.indexOf(c)])},b))?b==i.OptOut.GLOBAL||0<=b.indexOf(c):h):k};var v={l:!!l.postMessage,ha:1,O:864E5};a.Oa=v;a.X={postMessage:function(a,c,b){var e=1;c&&(v.l?b.postMessage(a,c.replace(/([^:]+:\/\/[^\/]+).*/,"$1")):c&&(b.location=c.replace(/#.*$/,"")+"#"+ +new Date+e++ +"&"+a))},K:function(a,c){var b;try{if(v.l)if(a&&(b=function(b){if("string"===typeof c&&b.origin!==c||"[object Function]"===Object.prototype.toString.call(c)&&!1===c(b.origin))return!1;a(b)}),window.addEventListener)window[a?
"addEventListener":"removeEventListener"]("message",b,!1);else window[a?"attachEvent":"detachEvent"]("onmessage",b)}catch(e){}}};var G={Y:function(){if(o.addEventListener)return function(a,c,b){a.addEventListener(c,function(a){"function"===typeof b&&b(a)},k)};if(o.attachEvent)return function(a,c,b){a.attachEvent("on"+c,function(a){"function"===typeof b&&b(a)})}}(),map:function(a,c){if(Array.prototype.map)return a.map(c);if(void 0===a||a===h)throw new TypeError;var b=Object(a),e=b.length>>>0;if("function"!==
typeof c)throw new TypeError;for(var f=Array(e),g=0;g<e;g++)g in b&&(f[g]=c.call(c,b[g],g,b));return f},za:function(a,c){return this.map(a,function(a){return encodeURIComponent(a)}).join(c)}};a.Ta=G;var u={ia:3E4,N:649,fa:k,id:h,I:h,aa:function(a){if("string"===typeof a)return a=a.split("/"),a[0]+"//"+a[2]},e:h,url:h,Aa:function(){var d="http://fast.",c="?d_nsid="+a.idSyncContainerID+"#"+encodeURIComponent(o.location.href);this.e||(this.e="nosubdomainreturned");a.loadSSL&&(d=a.idSyncSSLUseAkamai?
"https://fast.":"https://");d=d+this.e+".demdex.net/dest5.html"+c;this.I=this.aa(d);this.id="destination_publishing_iframe_"+this.e+"_"+a.idSyncContainerID;return d},va:function(){var d="?d_nsid="+a.idSyncContainerID+"#"+encodeURIComponent(o.location.href);"string"===typeof a.B&&a.B.length&&(this.id="destination_publishing_iframe_"+(new Date).getTime()+"_"+a.idSyncContainerID,this.I=this.aa(a.B),this.url=a.B+d)},ba:h,H:k,M:k,w:h,hb:h,Ga:h,ib:h,L:k,z:[],Ea:[],Fa:[],ca:v.l?15:100,J:[],Ca:[],$:j,da:k,
Z:function(){function a(){e=document.createElement("iframe");e.sandbox="allow-scripts allow-same-origin";e.id=b.id;e.style.cssText="display: none; width: 0; height: 0;";e.src=b.url;b.Ga=j;c();document.body.appendChild(e)}function c(){G.Y(e,"load",function(){e.className="aamIframeLoaded";b.w=j;b.p()})}this.M=j;var b=this,e=document.getElementById(this.id);e?"IFRAME"!==e.nodeName?(this.id+="_2",a()):"aamIframeLoaded"!==e.className?c():(this.w=j,this.p()):a();this.Ba=e},p:function(d){var c=this;d===
Object(d)&&this.J.push(d);if((this.da||!v.l||this.w)&&this.J.length)this.Ha(this.J.shift()),this.p();!a.idSyncDisableSyncs&&this.w&&this.z.length&&!this.L&&(this.fa||(this.fa=j,setTimeout(function(){c.ca=v.l?15:150},this.ia)),this.L=j,this.ea())},Ha:function(a){var c=encodeURIComponent,b,e,f,g,h;if((b=a.ibs)&&b instanceof Array&&(e=b.length))for(f=0;f<e;f++)g=b[f],h=[c("ibs"),c(g.id||""),c(g.tag||""),G.za(g.url||[],","),c(g.ttl||""),"","",g.fireURLSync?"true":"false"],this.$?this.G(h.join("|")):g.fireURLSync&&
this.wa(g,h.join("|"));this.Ca.push(a)},wa:function(d,c){a.f();var b=a.b(D),e=k,f=k,g=Math.ceil((new Date).getTime()/v.O);if(b){if(b=b.split("*"),f=this.Ja(b,d.id,g),e=f.xa,f=f.ya,!e||!f)this.G(c),b.push(d.id+"-"+(g+Math.ceil(d.ttl/60/24))),this.Da(b),a.c(D,b.join("*"))}else this.G(c),a.c(D,d.id+"-"+(g+Math.ceil(d.ttl/60/24)))},Ja:function(a,c,b){var e=k,f=k,g,h,i;for(h=0;h<a.length;h++)g=a[h],i=parseInt(g.split("-")[1],10),g.match("^"+c+"-")?(e=j,b<i?f=j:(a.splice(h,1),h--)):b>=i&&(a.splice(h,1),
h--);return{xa:e,ya:f}},Da:function(a){if(a.join("*").length>this.N)for(a.sort(function(a,b){return parseInt(a.split("-")[1],10)-parseInt(b.split("-")[1],10)});a.join("*").length>this.N;)a.shift()},G:function(d){var c=encodeURIComponent;this.z.push((a.Qa?c("---destpub-debug---"):c("---destpub---"))+d)},ea:function(){var d=this,c;this.z.length?(c=this.z.shift(),a.X.postMessage(c,this.url,this.Ba.contentWindow),this.Ea.push(c),setTimeout(function(){d.ea()},this.ca)):this.L=k},K:function(a){var c=/^---destpub-to-parent---/;
"string"===typeof a&&c.test(a)&&(c=a.replace(c,"").split("|"),"canSetThirdPartyCookies"===c[0]&&(this.$="true"===c[1]?j:k,this.da=j,this.p()),this.Fa.push(a))},Ia:function(d){this.url===h&&(this.e="string"===typeof a.W&&a.W.length?a.W:d.subdomain||"",this.url=this.Aa());d.ibs instanceof Array&&d.ibs.length&&(this.H=j);if(!a.idSyncDisable3rdPartySyncing&&(this.H||a.la)&&this.e&&"nosubdomainreturned"!==this.e&&!this.M)(i.ga||"complete"===o.readyState||"loaded"===o.readyState)&&this.Z();"function"===
typeof a.idSyncIDCallResult?a.idSyncIDCallResult(d):this.p(d);"function"===typeof a.idSyncAfterIDCallResult&&a.idSyncAfterIDCallResult(d)},ua:function(d,c){return a.Ra||!d||c-d>v.ha}};a.Pa=u;0>m.indexOf("@")&&(m+="@AdobeOrg");a.marketingCloudOrgID=m;a.cookieName="AMCV_"+m;a.sessionCookieName="AMCVS_"+m;a.cookieDomain=a.ma();a.cookieDomain==l.location.hostname&&(a.cookieDomain="");a.loadSSL=0<=l.location.protocol.toLowerCase().indexOf("https");a.loadTimeout=500;a.marketingCloudServer=a.audienceManagerServer=
"dpm.demdex.net";if(t&&"object"==typeof t){for(var E in t)!Object.prototype[E]&&(a[E]=t[E]);a.idSyncContainerID=a.idSyncContainerID||0;a.f();E=a.b(F);var H=Math.ceil((new Date).getTime()/v.O);!a.idSyncDisableSyncs&&u.ua(E,H)&&(a.k(q,-1),a.c(F,H));a.getMarketingCloudVisitorID();a.getAudienceManagerLocationHint();a.getAudienceManagerBlob()}if(!a.idSyncDisableSyncs){u.va();G.Y(window,"load",function(){var d=u;i.ga=j;!a.idSyncDisable3rdPartySyncing&&(d.H||a.la)&&d.e&&"nosubdomainreturned"!==d.e&&d.url&&
!d.M&&d.Z()});try{a.X.K(function(a){u.K(a.data)},u.I)}catch(I){}}}Visitor.getInstance=function(m,t){var a,l=window.s_c_il,i;0>m.indexOf("@")&&(m+="@AdobeOrg");if(l)for(i=0;i<l.length;i++)if((a=l[i])&&"Visitor"==a._c&&a.marketingCloudOrgID==m)return a;return new Visitor(m,t)};(function(){function m(){t.ga=a}var t=window.Visitor,a=t.ja;a||(a=!0);window.addEventListener?window.addEventListener("load",m):window.attachEvent&&window.attachEvent("onload",m)})();
