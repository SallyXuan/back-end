(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"/VYK":function(n,t,l){"use strict";l.d(t,"a",function(){return a}),l.d(t,"b",function(){return s}),l("dWZg"),l("CcnG");var o=l("n6gG"),e=(l("G5J1"),l("K9Ia")),i=l("bne5"),u=l("Rney"),r=l("ny24"),a=function(){function n(n,t,l){this._elementRef=n,this._platform=t,this._ngZone=l,this._destroyed=new e.a,this._enabled=!0,this._previousMinRows=-1,this._textareaElement=this._elementRef.nativeElement}return Object.defineProperty(n.prototype,"minRows",{get:function(){return this._minRows},set:function(n){this._minRows=n,this._setMinHeight()},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"maxRows",{get:function(){return this._maxRows},set:function(n){this._maxRows=n,this._setMaxHeight()},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"enabled",{get:function(){return this._enabled},set:function(n){n=Object(o.c)(n),this._enabled!==n&&((this._enabled=n)?this.resizeToFitContent(!0):this.reset())},enumerable:!0,configurable:!0}),n.prototype._setMinHeight=function(){var n=this.minRows&&this._cachedLineHeight?this.minRows*this._cachedLineHeight+"px":null;n&&(this._textareaElement.style.minHeight=n)},n.prototype._setMaxHeight=function(){var n=this.maxRows&&this._cachedLineHeight?this.maxRows*this._cachedLineHeight+"px":null;n&&(this._textareaElement.style.maxHeight=n)},n.prototype.ngAfterViewInit=function(){var n=this;this._platform.isBrowser&&(this._initialHeight=this._textareaElement.style.height,this.resizeToFitContent(),this._ngZone.runOutsideAngular(function(){Object(i.a)(window,"resize").pipe(Object(u.a)(16),Object(r.a)(n._destroyed)).subscribe(function(){return n.resizeToFitContent(!0)})}))},n.prototype.ngOnDestroy=function(){this._destroyed.next(),this._destroyed.complete()},n.prototype._cacheTextareaLineHeight=function(){if(!this._cachedLineHeight){var n=this._textareaElement.cloneNode(!1);n.rows=1,n.style.position="absolute",n.style.visibility="hidden",n.style.border="none",n.style.padding="0",n.style.height="",n.style.minHeight="",n.style.maxHeight="",n.style.overflow="hidden",this._textareaElement.parentNode.appendChild(n),this._cachedLineHeight=n.clientHeight,this._textareaElement.parentNode.removeChild(n),this._setMinHeight(),this._setMaxHeight()}},n.prototype.ngDoCheck=function(){this._platform.isBrowser&&this.resizeToFitContent()},n.prototype.resizeToFitContent=function(n){var t=this;if(void 0===n&&(n=!1),this._enabled&&(this._cacheTextareaLineHeight(),this._cachedLineHeight)){var l=this._elementRef.nativeElement,o=l.value;if(n||this._minRows!==this._previousMinRows||o!==this._previousValue){var e=l.placeholder;l.classList.add("cdk-textarea-autosize-measuring"),l.placeholder="",l.style.height=l.scrollHeight-4+"px",l.classList.remove("cdk-textarea-autosize-measuring"),l.placeholder=e,this._ngZone.runOutsideAngular(function(){"undefined"!=typeof requestAnimationFrame?requestAnimationFrame(function(){return t._scrollToCaretPosition(l)}):setTimeout(function(){return t._scrollToCaretPosition(l)})}),this._previousValue=o,this._previousMinRows=this._minRows}}},n.prototype.reset=function(){void 0!==this._initialHeight&&(this._textareaElement.style.height=this._initialHeight)},n.prototype._noopInputHandler=function(){},n.prototype._scrollToCaretPosition=function(n){this._destroyed.isStopped||document.activeElement!==n||n.setSelectionRange(n.selectionStart,n.selectionEnd)},n}(),s=function(){return function(){}}()},Iab2:function(n,t,l){var o,e;void 0===(e="function"==typeof(o=function(){"use strict";function t(n,t,l){var o=new XMLHttpRequest;o.open("GET",n),o.responseType="blob",o.onload=function(){i(o.response,t,l)},o.onerror=function(){console.error("could not download file")},o.send()}function l(n){var t=new XMLHttpRequest;t.open("HEAD",n,!1);try{t.send()}catch(n){}return 200<=t.status&&299>=t.status}function o(n){try{n.dispatchEvent(new MouseEvent("click"))}catch(t){var l=document.createEvent("MouseEvents");l.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),n.dispatchEvent(l)}}var e="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof global&&global.global===global?global:void 0,i=e.saveAs||("object"!=typeof window||window!==e?function(){}:"download"in HTMLAnchorElement.prototype?function(n,i,u){var r=e.URL||e.webkitURL,a=document.createElement("a");a.download=i=i||n.name||"download",a.rel="noopener","string"==typeof n?(a.href=n,a.origin===location.origin?o(a):l(a.href)?t(n,i,u):o(a,a.target="_blank")):(a.href=r.createObjectURL(n),setTimeout(function(){r.revokeObjectURL(a.href)},4e4),setTimeout(function(){o(a)},0))}:"msSaveOrOpenBlob"in navigator?function(n,e,i){if(e=e||n.name||"download","string"!=typeof n)navigator.msSaveOrOpenBlob(function(n,t){return void 0===t?t={autoBom:!1}:"object"!=typeof t&&(console.warn("Deprecated: Expected third argument to be a object"),t={autoBom:!t}),t.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(n.type)?new Blob(["\ufeff",n],{type:n.type}):n}(n,i),e);else if(l(n))t(n,e,i);else{var u=document.createElement("a");u.href=n,u.target="_blank",setTimeout(function(){o(u)})}}:function(n,l,o,i){if((i=i||open("","_blank"))&&(i.document.title=i.document.body.innerText="downloading..."),"string"==typeof n)return t(n,l,o);var u="application/octet-stream"===n.type,r=/constructor/i.test(e.HTMLElement)||e.safari,a=/CriOS\/[\d]+/.test(navigator.userAgent);if((a||u&&r)&&"object"==typeof FileReader){var s=new FileReader;s.onloadend=function(){var n=s.result;n=a?n:n.replace(/^data:[^;]*;/,"data:attachment/file;"),i?i.location.href=n:location=n,i=null},s.readAsDataURL(n)}else{var c=e.URL||e.webkitURL,b=c.createObjectURL(n);i?i.location=b:location.href=b,i=null,setTimeout(function(){c.revokeObjectURL(b)},4e4)}});e.saveAs=i.saveAs=i,n.exports=i})?o.apply(t,[]):o)||(n.exports=e)},L6id:function(n,t,l){"use strict";l.r(t);var o=l("CcnG"),e=function(){return function(){}}(),i=l("pMnS"),u=l("gIcY"),r=l("Ip0R"),a=l("bujt"),s=l("UodH"),c=l("dWZg"),b=l("lLAP"),d=l("wFw1"),p=l("Mr+X"),f=l("SMsm"),g=l("fqlJ"),h=l("Iab2"),m=function(){function n(n,t){this.router=n,this.libService=t,this.searched_b=null,this.book_name=null,this.book_list=null,this.welcome=null}return n.prototype.ngOnInit=function(){this.bookList()},n.prototype.bookList=function(){var n=this;this.libService.get_booklist().subscribe(function(t){n.book_list=t})},n.prototype.download_a_book=function(n){console.log(n),this.libService.download_a_book(n).subscribe(function(t){Object(h.saveAs)(new File([t],n))})},n.prototype.searchBook=function(n){var t=this;null!=n?this.libService.search_a_book(n).subscribe(function(n){n.error?alert(n.error):n.success?(t.book_name=n,console.log(t.book_name)):(t.searched_b=n,console.log(t.searched_b))}):alert("null value is not exceptable")},n.prototype.addBook=function(){this.router.navigate(["/home/addBook"])},n}(),_=l("ZYCi"),y=o.pb({encapsulation:0,styles:[["p[_ngcontent-%COMP%]{padding:16px;text-align:center}.book[_ngcontent-%COMP%]{margin-top:25px;margin-bottom:30px}.mat-card-cvr[_ngcontent-%COMP%]{top:50%;width:100%;text-align:center;position:fixed}.add-book-button[_ngcontent-%COMP%]{z-index:5;position:fixed;display:flex;align-self:flex-end;bottom:7%;margin-bottom:5px;margin-left:80%}input[type=text][_ngcontent-%COMP%]{width:30%;padding:12px 20px;margin:50px 500px;display:inline-block;border:1px solid #b3a9a9;box-sizing:border-box}input[type=submit][_ngcontent-%COMP%]{padding:12px 20px;display:inline-block;border:1px solid #b3a9a9;box-sizing:border-box}#bookSearchButton[_ngcontent-%COMP%]{margin:8px -500px;background-color:#fff;color:#000;border:2px solid #555;border-radius:8px;-webkit-transition-duration:.4s}#bookSearchButton[_ngcontent-%COMP%]:hover, #uploadBookButton[_ngcontent-%COMP%]:hover{background-color:#4169e1;color:#fff}#uploadBookButton[_ngcontent-%COMP%]{background-color:#fff;color:#000;border:2px solid #555;border-radius:8px;-webkit-transition-duration:.4s}#uploadfile[_ngcontent-%COMP%]{margin-left:550px}.hide_file[_ngcontent-%COMP%]{position:absolute;z-index:1000;opacity:0;cursor:pointer;right:0;top:0;height:100%;font-size:24px;width:100%}.mat-button[_ngcontent-%COMP%]{border:1px solid #4169e1}.uploadPic[_ngcontent-%COMP%]{position:relative;text-align:center;float:left;cursor:pointer;margin-left:10%}body[_ngcontent-%COMP%]{background:url(/assets/img/homegb.jpg) center center no-repeat fixed}"]],data:{}});function v(n){return o.Jb(0,[(n()(),o.rb(0,0,null,null,15,"div",[],null,null,null,null,null)),(n()(),o.rb(1,0,null,null,2,"p",[],null,null,null,null,null)),(n()(),o.rb(2,0,null,null,1,"button",[],null,[[null,"click"]],function(n,t,l){var o=!0,e=n.component;return"click"===t&&(o=!1!==e.download_a_book(e.book_list[0])&&o),o},null,null)),(n()(),o.Hb(3,null,[" "," "])),(n()(),o.rb(4,0,null,null,2,"p",[],null,null,null,null,null)),(n()(),o.rb(5,0,null,null,1,"button",[],null,[[null,"click"]],function(n,t,l){var o=!0,e=n.component;return"click"===t&&(o=!1!==e.download_a_book(e.book_list[1])&&o),o},null,null)),(n()(),o.Hb(6,null,[" "," "])),(n()(),o.rb(7,0,null,null,2,"p",[],null,null,null,null,null)),(n()(),o.rb(8,0,null,null,1,"button",[],null,[[null,"click"]],function(n,t,l){var o=!0,e=n.component;return"click"===t&&(o=!1!==e.download_a_book(e.book_list[2])&&o),o},null,null)),(n()(),o.Hb(9,null,[" ",""])),(n()(),o.rb(10,0,null,null,2,"p",[],null,null,null,null,null)),(n()(),o.rb(11,0,null,null,1,"button",[],null,[[null,"click"]],function(n,t,l){var o=!0,e=n.component;return"click"===t&&(o=!1!==e.download_a_book(e.book_list[3])&&o),o},null,null)),(n()(),o.Hb(12,null,[" ",""])),(n()(),o.rb(13,0,null,null,2,"p",[],null,null,null,null,null)),(n()(),o.rb(14,0,null,null,1,"button",[],null,[[null,"click"]],function(n,t,l){var o=!0,e=n.component;return"click"===t&&(o=!1!==e.download_a_book(e.book_list[4])&&o),o},null,null)),(n()(),o.Hb(15,null,[" ",""]))],null,function(n,t){var l=t.component;n(t,3,0,l.book_list[0]),n(t,6,0,l.book_list[1]),n(t,9,0,l.book_list[2]),n(t,12,0,l.book_list[3]),n(t,15,0,l.book_list[4])})}function k(n){return o.Jb(0,[(n()(),o.rb(0,0,null,null,13,"div",[],null,null,null,null,null)),(n()(),o.rb(1,0,null,null,12,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],function(n,t,l){var e=!0,i=n.component;return"submit"===t&&(e=!1!==o.Ab(n,3).onSubmit(l)&&e),"reset"===t&&(e=!1!==o.Ab(n,3).onReset()&&e),"ngSubmit"===t&&(e=!1!==i.searchBook(o.Ab(n,3).value)&&e),e},null,null)),o.qb(2,16384,null,0,u.q,[],null,null),o.qb(3,4210688,[["bookTag",4]],0,u.l,[[8,null],[8,null]],null,{ngSubmit:"ngSubmit"}),o.Eb(2048,null,u.b,null,[u.l]),o.qb(5,16384,null,0,u.k,[[4,u.b]],null,null),(n()(),o.rb(6,0,null,null,5,"input",[["name","book_name"],["ngModel",""],["placeholder","Enter book name"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(n,t,l){var e=!0;return"input"===t&&(e=!1!==o.Ab(n,7)._handleInput(l.target.value)&&e),"blur"===t&&(e=!1!==o.Ab(n,7).onTouched()&&e),"compositionstart"===t&&(e=!1!==o.Ab(n,7)._compositionStart()&&e),"compositionend"===t&&(e=!1!==o.Ab(n,7)._compositionEnd(l.target.value)&&e),e},null,null)),o.qb(7,16384,null,0,u.c,[o.F,o.k,[2,u.a]],null,null),o.Eb(1024,null,u.h,function(n){return[n]},[u.c]),o.qb(9,671744,null,0,u.m,[[2,u.b],[8,null],[8,null],[6,u.h]],{name:[0,"name"],model:[1,"model"]},null),o.Eb(2048,null,u.i,null,[u.m]),o.qb(11,16384,null,0,u.j,[[4,u.i]],null,null),(n()(),o.rb(12,0,null,null,0,"input",[["class","mybutton"],["id","bookSearchButton"],["type","submit"],["value","submit"]],null,null,null,null,null)),(n()(),o.rb(13,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),o.rb(14,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),o.Hb(-1,null,["Some available books of our library: "])),(n()(),o.ib(16777216,null,null,1,null,v)),o.qb(17,16384,null,0,r.j,[o.Q,o.N],{ngIf:[0,"ngIf"]},null),(n()(),o.rb(18,0,null,null,5,"div",[["class","add-book-button"]],null,null,null,null,null)),(n()(),o.rb(19,0,null,null,4,"a",[["color","primary"],["mat-fab",""],["style","margin-right: 14px"]],[[1,"tabindex",0],[1,"disabled",0],[1,"aria-disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],function(n,t,l){var e=!0,i=n.component;return"click"===t&&(e=!1!==o.Ab(n,20)._haltDisabledEvents(l)&&e),"click"===t&&(e=!1!==i.addBook()&&e),e},a.c,a.a)),o.qb(20,180224,null,0,s.a,[c.a,b.j,o.k,[2,d.a]],{color:[0,"color"]},null),(n()(),o.rb(21,0,null,0,2,"mat-icon",[["class","mat-icon notranslate"],["role","img"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],null,null,p.b,p.a)),o.qb(22,9158656,null,0,f.b,[o.k,f.d,[8,null],[2,f.a]],null,null),(n()(),o.Hb(-1,0,["add"]))],function(n,t){var l=t.component;n(t,9,0,"book_name",""),n(t,17,0,null!=l.book_list),n(t,20,0,"primary"),n(t,22,0)},function(n,t){n(t,1,0,o.Ab(t,5).ngClassUntouched,o.Ab(t,5).ngClassTouched,o.Ab(t,5).ngClassPristine,o.Ab(t,5).ngClassDirty,o.Ab(t,5).ngClassValid,o.Ab(t,5).ngClassInvalid,o.Ab(t,5).ngClassPending),n(t,6,0,o.Ab(t,11).ngClassUntouched,o.Ab(t,11).ngClassTouched,o.Ab(t,11).ngClassPristine,o.Ab(t,11).ngClassDirty,o.Ab(t,11).ngClassValid,o.Ab(t,11).ngClassInvalid,o.Ab(t,11).ngClassPending),n(t,19,0,o.Ab(t,20).disabled?-1:o.Ab(t,20).tabIndex||0,o.Ab(t,20).disabled||null,o.Ab(t,20).disabled.toString(),"NoopAnimations"===o.Ab(t,20)._animationMode),n(t,21,0,o.Ab(t,22).inline,"primary"!==o.Ab(t,22).color&&"accent"!==o.Ab(t,22).color&&"warn"!==o.Ab(t,22).color)})}function x(n){return o.Jb(0,[(n()(),o.rb(0,0,null,null,1,"app-home",[],null,null,null,k,y)),o.qb(1,114688,null,0,m,[_.k,g.a],null,null)],function(n,t){n(t,1,0)},null)}var w=o.nb("app-home",m,x,{},{},[]),C=function(){function n(n,t){this.router=n,this.libService=t,this.fileToUpload=null,this.formdata=null,this.upload_mess=null}return n.prototype.ngOnInit=function(){this.formdata=new u.e({})},n.prototype.handleFileInput=function(n){this.fileToUpload=n.item(0)},n.prototype.uploadFileToActivity=function(){var n=this;null!=this.fileToUpload?(this.libService.add_a_book(this.fileToUpload).subscribe(function(t){n.upload_mess=t.success,alert(n.upload_mess)}),this.router.navigate(["/home"])):(alert("null value is not exceptable"),this.router.navigate(["/home"]))},n}(),A=o.pb({encapsulation:0,styles:[["p[_ngcontent-%COMP%]{padding:16px;text-align:center}.book[_ngcontent-%COMP%]{margin-top:25px;margin-bottom:30px}.add-book-button[_ngcontent-%COMP%]{z-index:5;position:fixed;display:flex;align-self:flex-end;bottom:7%;margin-bottom:5px;margin-left:80%}input[type=text][_ngcontent-%COMP%]{width:30%;padding:12px 20px;margin:50px 500px;display:inline-block;border:1px solid #b3a9a9;box-sizing:border-box}input[type=submit][_ngcontent-%COMP%]{padding:12px 20px;display:inline-block;border:1px solid #b3a9a9;box-sizing:border-box}#bookSearchButton[_ngcontent-%COMP%]{margin:8px -500px;background-color:#fff;color:#000;border:2px solid #555;border-radius:8px;-webkit-transition-duration:.4s}#bookSearchButton[_ngcontent-%COMP%]:hover, #uploadBookButton[_ngcontent-%COMP%]:hover{background-color:#4169e1;color:#fff}#uploadBookButton[_ngcontent-%COMP%]{background-color:#fff;color:#000;border:2px solid #555;border-radius:8px;-webkit-transition-duration:.4s}#uploadfile[_ngcontent-%COMP%]{margin-left:550px}.hide_file[_ngcontent-%COMP%]{position:absolute;z-index:1000;opacity:0;cursor:pointer;right:0;top:0;height:100%;font-size:24px;width:100%}.mat-button[_ngcontent-%COMP%]{border:1px solid #4169e1}.uploadPic[_ngcontent-%COMP%]{position:relative;text-align:center;float:left;cursor:pointer;margin-left:10%}body[_ngcontent-%COMP%]{background:url(/assets/img/homegb.jpg) center center no-repeat fixed}"]],data:{}});function M(n){return o.Jb(0,[(n()(),o.rb(0,0,null,null,8,"div",[["class","container"]],null,null,null,null,null)),(n()(),o.rb(1,0,null,null,4,"div",[["class","uploadPic"]],null,null,null,null,null)),(n()(),o.rb(2,0,null,null,0,"input",[["class","hide_file"],["type","file"]],null,[[null,"change"]],function(n,t,l){var o=!0;return"change"===t&&(o=!1!==n.component.handleFileInput(l.target.files)&&o),o},null,null)),(n()(),o.rb(3,0,null,null,2,"button",[["color","primary"],["mat-flat-button",""]],[[8,"disabled",0],[2,"_mat-animation-noopable",null]],null,null,a.d,a.b)),o.qb(4,180224,null,0,s.b,[o.k,c.a,b.j,[2,d.a]],{color:[0,"color"]},null),(n()(),o.Hb(-1,0,["Upload File"])),(n()(),o.rb(6,0,null,null,2,"button",[["class","uploadButton"],["color","primary"],["mat-button",""]],[[8,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],function(n,t,l){var o=!0;return"click"===t&&(o=!1!==n.component.uploadFileToActivity()&&o),o},a.d,a.b)),o.qb(7,180224,null,0,s.b,[o.k,c.a,b.j,[2,d.a]],{color:[0,"color"]},null),(n()(),o.Hb(-1,0,["submit"]))],function(n,t){n(t,4,0,"primary"),n(t,7,0,"primary")},function(n,t){n(t,3,0,o.Ab(t,4).disabled||null,"NoopAnimations"===o.Ab(t,4)._animationMode),n(t,6,0,o.Ab(t,7).disabled||null,"NoopAnimations"===o.Ab(t,7)._animationMode)})}function O(n){return o.Jb(0,[(n()(),o.rb(0,0,null,null,1,"app-add-book",[],null,null,null,M,A)),o.qb(1,114688,null,0,C,[_.k,g.a],null,null)],function(n,t){n(t,1,0)},null)}var P=o.nb("app-add-book",C,O,{},{},[]),H=function(){function n(){}return n.prototype.ngOnInit=function(){},n}(),R=o.pb({encapsulation:0,styles:[[""]],data:{}});function S(n){return o.Jb(0,[(n()(),o.rb(0,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),o.Hb(-1,null,[" book-list works!\n"]))],null,null)}function j(n){return o.Jb(0,[(n()(),o.rb(0,0,null,null,1,"app-book-list",[],null,null,null,S,R)),o.qb(1,114688,null,0,H,[],null,null)],function(n,t){n(t,1,0)},null)}var E=o.nb("app-book-list",H,j,{},{},[]),L=l("M2Lx"),T=l("Wf4p"),B=function(){return function(){}}(),q=l("Fzqc"),F=l("ZYjt"),I=l("4c35");l("mrSG"),l("K9Ia"),l("pugT"),l("bne5"),l("F/XL"),l("p0ib"),l("gI3B"),l("ihYY"),l("p0Sj"),l("ad02"),l("ny24"),l("n6gG"),l("YSh2");var z=function(){return function(){}}(),U=l("FVSy"),J=l("/VYK"),G=l("seP3"),V=l("b716");l.d(t,"HomeModuleNgFactory",function(){return Y});var Y=o.ob(e,[],function(n){return o.xb([o.yb(512,o.j,o.db,[[8,[i.a,w,P,E]],[3,o.j],o.y]),o.yb(4608,r.l,r.k,[o.v,[2,r.v]]),o.yb(4608,u.d,u.d,[]),o.yb(4608,u.r,u.r,[]),o.yb(4608,L.b,L.b,[]),o.yb(4608,T.b,T.b,[]),o.yb(1073742336,r.b,r.b,[]),o.yb(1073742336,_.m,_.m,[[2,_.s],[2,_.k]]),o.yb(1073742336,B,B,[]),o.yb(1073742336,u.p,u.p,[]),o.yb(1073742336,u.n,u.n,[]),o.yb(1073742336,q.a,q.a,[]),o.yb(1073742336,T.h,T.h,[[2,T.c],[2,F.g]]),o.yb(1073742336,I.g,I.g,[]),o.yb(1073742336,c.b,c.b,[]),o.yb(1073742336,T.o,T.o,[]),o.yb(1073742336,L.c,L.c,[]),o.yb(1073742336,b.a,b.a,[]),o.yb(1073742336,z,z,[]),o.yb(1073742336,U.a,U.a,[]),o.yb(1073742336,f.c,f.c,[]),o.yb(1073742336,s.c,s.c,[]),o.yb(1073742336,J.b,J.b,[]),o.yb(1073742336,G.a,G.a,[]),o.yb(1073742336,V.a,V.a,[]),o.yb(1073742336,u.f,u.f,[]),o.yb(1073742336,e,e,[]),o.yb(1024,_.i,function(){return[[{path:"",component:m},{path:"addBook",component:C},{path:"bookList",component:H}]]},[])])})},b716:function(n,t,l){"use strict";l.d(t,"a",function(){return o}),l("mrSG"),l("/VYK"),l("CcnG"),l("n6gG"),l("dWZg"),l("Wf4p"),l("K9Ia");var o=function(){return function(){}}()}}]);