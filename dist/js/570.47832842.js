(self["webpackChunkwakuwaku"]=self["webpackChunkwakuwaku"]||[]).push([[570],{8471:function(t,e,a){
/*!
  * Bootstrap tab.js v5.2.0-beta1 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function(e,s){t.exports=s(a(4072),a(9286),a(8737),a(5695))})(0,(function(t,e,a,s){"use strict";const o=t=>t&&"object"===typeof t&&"default"in t?t:{default:t},r=o(e),i=o(a),l=o(s),n="tab",c="bs.tab",d=`.${c}`,u=`hide${d}`,p=`hidden${d}`,g=`show${d}`,h=`shown${d}`,b=`click${d}`,f=`keydown${d}`,_=`load${d}`,m="ArrowLeft",v="ArrowRight",w="ArrowUp",y="ArrowDown",k="active",x="fade",A="show",$="dropdown",C=".dropdown-toggle",D=".dropdown-menu",I=".dropdown-item",E=":not(.dropdown-toggle)",z='.list-group, .nav, [role="tablist"]',N=".nav-item, .list-group-item",O=`.nav-link${E}, .list-group-item${E}, [role="tab"]${E}`,L='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',q=`${O}, ${L}`,P=`.${k}[data-bs-toggle="tab"], .${k}[data-bs-toggle="pill"], .${k}[data-bs-toggle="list"]`;class j extends l.default{constructor(t){super(t),this._parent=this._element.closest(z),this._parent&&(this._setInitialAttributes(this._parent,this._getChildren()),r.default.on(this._element,f,(t=>this._keydown(t))))}static get NAME(){return n}show(){const t=this._element;if(this._elemIsActive(t))return;const e=this._getActiveElem(),a=e?r.default.trigger(e,u,{relatedTarget:t}):null,s=r.default.trigger(t,g,{relatedTarget:e});s.defaultPrevented||a&&a.defaultPrevented||(this._deactivate(e,t),this._activate(t,e))}_activate(e,a){if(!e)return;e.classList.add(k),this._activate(t.getElementFromSelector(e));const s=e.classList.contains(x),o=()=>{s&&e.classList.add(A),"tab"===e.getAttribute("role")&&(e.focus(),e.removeAttribute("tabindex"),e.setAttribute("aria-selected",!0),this._toggleDropDown(e,!0),r.default.trigger(e,h,{relatedTarget:a}))};this._queueCallback(o,e,s)}_deactivate(e,a){if(!e)return;e.classList.remove(k),e.blur(),this._deactivate(t.getElementFromSelector(e));const s=e.classList.contains(x),o=()=>{s&&e.classList.remove(A),"tab"===e.getAttribute("role")&&(e.setAttribute("aria-selected",!1),e.setAttribute("tabindex","-1"),this._toggleDropDown(e,!1),r.default.trigger(e,p,{relatedTarget:a}))};this._queueCallback(o,e,s)}_keydown(e){if(![m,v,w,y].includes(e.key))return;e.stopPropagation(),e.preventDefault();const a=[v,y].includes(e.key),s=t.getNextActiveElement(this._getChildren().filter((e=>!t.isDisabled(e))),e.target,a,!0);s&&j.getOrCreateInstance(s).show()}_getChildren(){return i.default.find(q,this._parent)}_getActiveElem(){return this._getChildren().find((t=>this._elemIsActive(t)))||null}_setInitialAttributes(t,e){this._setAttributeIfNotExists(t,"role","tablist");for(const a of e)this._setInitialAttributesOnChild(a)}_setInitialAttributesOnChild(t){t=this._getInnerElement(t);const e=this._elemIsActive(t),a=this._getOuterElement(t);t.setAttribute("aria-selected",e),a!==t&&this._setAttributeIfNotExists(a,"role","presentation"),e||t.setAttribute("tabindex","-1"),this._setAttributeIfNotExists(t,"role","tab"),this._setInitialAttributesOnTargetPanel(t)}_setInitialAttributesOnTargetPanel(e){const a=t.getElementFromSelector(e);a&&(this._setAttributeIfNotExists(a,"role","tabpanel"),e.id&&this._setAttributeIfNotExists(a,"aria-labelledby",`#${e.id}`))}_toggleDropDown(t,e){const a=this._getOuterElement(t);if(!a.classList.contains($))return;const s=(t,s)=>{const o=i.default.findOne(t,a);o&&o.classList.toggle(s,e)};s(C,k),s(D,A),s(I,k),a.setAttribute("aria-expanded",e)}_setAttributeIfNotExists(t,e,a){t.hasAttribute(e)||t.setAttribute(e,a)}_elemIsActive(t){return t.classList.contains(k)}_getInnerElement(t){return t.matches(q)?t:i.default.findOne(q,t)}_getOuterElement(t){return t.closest(N)||t}static jQueryInterface(t){return this.each((function(){const e=j.getOrCreateInstance(this);if("string"===typeof t){if(void 0===e[t]||t.startsWith("_")||"constructor"===t)throw new TypeError(`No method named "${t}"`);e[t]()}}))}}return r.default.on(document,b,L,(function(e){["A","AREA"].includes(this.tagName)&&e.preventDefault(),t.isDisabled(this)||j.getOrCreateInstance(this).show()})),r.default.on(window,_,(()=>{for(const t of i.default.find(P))j.getOrCreateInstance(t)})),t.defineJQueryPlugin(j),j}))},8357:function(t,e,a){"use strict";function s(t,e,a,s,o,r){const i={search:"",category:t};!1!==e&&(i.tag=e),!1!==a&&(i.author=a),!1!==s&&(i.publisher=s),!0===o&&(i.isPopular=!0),!0===r&&(i.isOnSale=!0),this.$router.push({path:"/search",query:i})}function o(t){console.log("add or remove favorites",t),this.favorArr=JSON.parse(localStorage.getItem("favor"))||[];const e=this.favorArr.indexOf(t);-1===e?this.favorArr.push(t):this.favorArr.splice(e,1),localStorage.setItem("favor",JSON.stringify(this.favorArr))}function r(t){console.log("add to cart",t);const e="https://vue3-course-api.hexschool.io/api/wakuwaku-api/cart";this.status.loadingItem=t;const a={product_id:t,qty:1};this.$http.post(e,{data:a}).then((t=>{this.status.loadingItem="",this.$emitter.emit("cartsUpdate",{}),console.log(t)}))}a.d(e,{Xq:function(){return r},ZP:function(){return s},ag:function(){return o}})},758:function(t,e,a){"use strict";a.r(e),a.d(e,{default:function(){return Yt}});var s=a(6252),o=a(3577);const r=t=>((0,s.dD)("data-v-1f4bf4c0"),t=t(),(0,s.Cn)(),t),i={class:"container"},l={class:"my-2"},n={style:{"--bs-breadcrumb-divider":"'>'"},"aria-label":"product breadcrumb"},c={class:"breadcrumb my-0 product-breadcrumb"},d={class:"breadcrumb-item"},u=(0,s.Uk)("Home"),p={class:"breadcrumb-item"},g={class:"breadcrumb-item active","aria-current":"page"},h={class:"row justify-content-center align-item-center"},b={class:"col-10 col-md-6 col-lg-4"},f={class:"pic-box mx-auto"},_={class:"product-pics"},m=["onClick"],v=(0,s.uE)('<button class="btn swiper-btn-prev" data-v-1f4bf4c0><i class="fa-solid fa-angle-left" data-v-1f4bf4c0></i></button><button class="btn swiper-btn-next" data-v-1f4bf4c0><i class="fa-solid fa-angle-right" data-v-1f4bf4c0></i></button><div class="product-swiper-pagination" data-v-1f4bf4c0></div>',3),w={class:"modal",tabindex:"-1",ref:"pic_modal"},y={class:"modal-dialog"},k={class:"modal-content"},x=r((()=>(0,s._)("div",{class:"modal-header"},[(0,s._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1))),A={class:"modal-body p-1"},$={id:"picCarouselBox",class:"carousel slide",ref:"pic_carousel","data-bs-touch":"false"},C={class:"carousel-indicators"},D=["data-bs-slide-to","aria-label"],I={class:"carousel-inner"},E=["src"],z=(0,s.uE)('<button class="carousel-control-prev" type="button" data-bs-target="#picCarouselBox" data-bs-slide="prev" data-v-1f4bf4c0><span class="carousel-control-prev-icon" aria-hidden="true" data-v-1f4bf4c0></span><span class="visually-hidden" data-v-1f4bf4c0>Previous</span></button><button class="carousel-control-next" type="button" data-bs-target="#picCarouselBox" data-bs-slide="next" data-v-1f4bf4c0><span class="carousel-control-next-icon" aria-hidden="true" data-v-1f4bf4c0></span><span class="visually-hidden" data-v-1f4bf4c0>Next</span></button>',2),N={class:"col-11 col-md-6 col-lg-8"},O={class:"my-3 title-info mx-lg-5 mt-lg-4"},L={class:"fw-semibold text-dark"},q={class:"mb-lg-3"},P=(0,s.Uk)(" 作者："),j={key:0,class:"text-black"},T=(0,s.Uk)(" 出版社："),U={class:"col-auto product-price mx-lg-5 mt-lg-5"},F={class:"fs-1 fs-lg-3 text-danger fw-bold"},H={key:0,class:"fs-6 fw-normal text-secondary text-decoration-line-through"},M={key:1,class:"fs-4 text-success fw-bolder ms-3"},S={class:"row justify-content-center justify-content-lg-start product-control mx-lg-5"},Z={key:0},W=r((()=>(0,s._)("i",{class:"fa-solid fa-sun"},null,-1))),Y=(0,s.Uk)(" 取消收藏"),B=[W,Y],K={key:1},R=r((()=>(0,s._)("i",{class:"fa-regular fa-sun"},null,-1))),J=(0,s.Uk)(" 加入收藏 "),X=[R,J],Q=r((()=>(0,s._)("button",{class:"btn col-5 col-lg-3"},[(0,s._)("span",null,[(0,s._)("i",{class:"fa-solid fa-cart-arrow-down"}),(0,s.Uk)(" 加入購物車")])],-1))),G=r((()=>(0,s._)("hr",{class:"my-4"},null,-1))),V=r((()=>(0,s._)("div",{class:"nav nav-tabs",id:"info-tab",role:"tablist"},[(0,s._)("button",{class:"nav-link active",id:"nav-description-tab","data-bs-toggle":"tab","data-bs-target":"#info-description",type:"button",role:"tab","aria-controls":"info-description","aria-selected":"true"}," 內容簡介 "),(0,s._)("button",{class:"nav-link",id:"nav-description-tab","data-bs-toggle":"tab","data-bs-target":"#info-author",type:"button",role:"tab","aria-controls":"info-author","aria-selected":"true"}," 作者簡介 "),(0,s._)("button",{class:"nav-link",id:"nav-detail-tab","data-bs-toggle":"tab","data-bs-target":"#info-detail",type:"button",role:"tab","aria-controls":"info-detail","aria-selected":"false"}," 詳細資料 ")],-1))),tt={class:"tab-content",id:"nav-tabContent"},et={class:"tab-pane fade show active",id:"info-description",role:"tabpanel","aria-labelledby":"description"},at=["innerHTML"],st={class:"tab-pane fade",id:"info-author",role:"tabpanel","aria-labelledby":"author"},ot=["innerHTML"],rt={class:"tab-pane fade",id:"info-detail",role:"tabpanel","aria-labelledby":"detail information"},it={class:"mx-3"},lt={class:"table table-striped"},nt=r((()=>(0,s._)("thead",null,[(0,s._)("tr",null,[(0,s._)("th",{class:"col-4"}),(0,s._)("th")])],-1))),ct={key:0},dt=r((()=>(0,s._)("th",null,"系列",-1))),ut={key:1},pt=r((()=>(0,s._)("th",null,"書名",-1))),gt={key:2},ht=r((()=>(0,s._)("th",null,"副標",-1))),bt={key:3},ft=r((()=>(0,s._)("th",null,"作者",-1))),_t={key:4},mt=r((()=>(0,s._)("th",null,"原作",-1))),vt={key:5},wt=r((()=>(0,s._)("th",null,"繪師",-1))),yt={key:6},kt=r((()=>(0,s._)("th",null,"譯者",-1))),xt={key:7},At=r((()=>(0,s._)("th",null,"頁數",-1))),$t=r((()=>(0,s._)("th",null,"出版社",-1))),Ct=r((()=>(0,s._)("th",null,"出版日期",-1))),Dt=r((()=>(0,s._)("hr",{class:"my-3"},null,-1))),It={class:"mx-1"},Et=r((()=>(0,s._)("h2",null,"Tags",-1))),zt={class:"row mx-0 tag-list"},Nt={class:"mt-5"},Ot=r((()=>(0,s._)("h3",null,"| 你可能還喜歡",-1)));function Lt(t,e,a,r,W,Y){const R=(0,s.up)("router-link"),J=(0,s.up)("swiper-slide"),Lt=(0,s.up)("swiper-item"),qt=(0,s.up)("recommend-swiper");return(0,s.wg)(),(0,s.iD)("div",i,[(0,s._)("div",l,[(0,s._)("nav",n,[(0,s._)("ol",c,[(0,s._)("li",d,[(0,s.Wm)(R,{to:"/home"},{default:(0,s.w5)((()=>[u])),_:1})]),(0,s._)("li",p,[(0,s.Wm)(R,{to:`/search?search=&category=${W.product.category}`},{default:(0,s.w5)((()=>[(0,s.Uk)((0,o.zw)(W.categoryCN),1)])),_:1},8,["to"])]),(0,s._)("li",g,[(0,s.Wm)(R,{to:`/search?category=all&search=${W.product.series}`},{default:(0,s.w5)((()=>[(0,s.Uk)((0,o.zw)(W.product.series),1)])),_:1},8,["to"])])])])]),(0,s._)("div",h,[(0,s._)("div",b,[(0,s._)("div",f,[(0,s._)("div",_,[(0,s.Wm)(Lt,{pagination:W.swiperOptions.pagination,navigation:W.swiperOptions.navigation,modules:W.modules,class:"productSwiper"},{default:(0,s.w5)((()=>[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(W.product.images,((t,a)=>((0,s.wg)(),(0,s.j4)(J,{class:"m-0",key:a},{default:(0,s.w5)((()=>[(0,s._)("div",{class:"w-100 product-pic",style:(0,o.j5)(`\n                    background-image: url(${t});`),onMouseenter:e[0]||(e[0]=(...t)=>Y.addZoomFn&&Y.addZoomFn(...t)),onMousemove:e[1]||(e[1]=(...t)=>Y.moveHandler&&Y.moveHandler(...t)),onMouseleave:e[2]||(e[2]=(...t)=>Y.removeZoomFn&&Y.removeZoomFn(...t)),onClick:t=>(W.picModal.show(),W.picCarousel.to(a))},null,44,m)])),_:2},1024)))),128))])),_:1},8,["pagination","navigation","modules"])]),v]),(0,s._)("div",w,[(0,s._)("div",y,[(0,s._)("div",k,[x,(0,s._)("div",A,[(0,s._)("div",$,[(0,s._)("div",C,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(W.product.images,((t,e)=>((0,s.wg)(),(0,s.iD)("button",{type:"button","data-bs-target":"#picCarouselBox",key:"indicator-"+e,"data-bs-slide-to":e,class:(0,o.C_)({active:0===e}),"aria-current":"true","aria-label":"Slide"+(e+1)},null,10,D)))),128))]),(0,s._)("div",I,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(W.product.images,((t,e)=>((0,s.wg)(),(0,s.iD)("div",{key:"inner-"+e,class:(0,o.C_)(["carousel-item",{active:0===e}])},[(0,s._)("img",{class:"d-block w-100",src:t,alt:"pic"},null,8,E)],2)))),128))]),z],512)])])])],512)]),(0,s._)("div",N,[(0,s._)("div",O,[(0,s._)("h1",L,(0,o.zw)(W.product.title),1),(0,s._)("h5",q,(0,o.zw)(W.product.subtitle),1),(0,s._)("p",null,[P,((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(W.product.author,((t,e)=>((0,s.wg)(),(0,s.j4)(R,{class:"",key:"author-"+e,to:`/search?search=&category=all&author=${t}`},{default:(0,s.w5)((()=>[e>=1?((0,s.wg)(),(0,s.iD)("span",j,"、")):(0,s.kq)("",!0),(0,s.Uk)((0,o.zw)(t),1)])),_:2},1032,["to"])))),128))]),(0,s._)("p",null,[T,(0,s.Wm)(R,{class:"",to:`/search?search=&category=all&publisher=${W.product.publisher}`},{default:(0,s.w5)((()=>[(0,s.Uk)((0,o.zw)(W.product.publisher),1)])),_:1},8,["to"])]),(0,s._)("p",null,"出版日期："+(0,o.zw)(t.$filters.date(W.product.pub_date)),1)]),(0,s._)("div",U,[(0,s._)("p",F,[(0,s.Uk)(" $"+(0,o.zw)(W.product.price)+" ",1),W.product.origin_price>W.product.price?((0,s.wg)(),(0,s.iD)("span",H,"$"+(0,o.zw)(W.product.origin_price),1)):(0,s.kq)("",!0),W.product.origin_price>W.product.price?((0,s.wg)(),(0,s.iD)("span",M,(0,o.zw)(Y.discount)+"% ",1)):(0,s.kq)("",!0)])]),(0,s._)("div",S,[(0,s._)("button",{class:"btn col-5 col-lg-3",onClick:e[3]||(e[3]=t=>W.isFavorite=!W.isFavorite)},[W.isFavorite?((0,s.wg)(),(0,s.iD)("span",Z,B)):((0,s.wg)(),(0,s.iD)("span",K,X))]),Q])])]),G,V,(0,s._)("div",tt,[(0,s._)("div",et,[(0,s._)("div",{class:"my-1 mx-4 content-des",innerHTML:W.product.description},null,8,at)]),(0,s._)("div",st,[(0,s._)("div",{class:"my-1 mx-4 author-des",innerHTML:W.product.author_des},null,8,ot)]),(0,s._)("div",rt,[(0,s._)("div",it,[(0,s._)("table",lt,[nt,(0,s._)("tbody",null,[W.product.series?((0,s.wg)(),(0,s.iD)("tr",ct,[dt,(0,s._)("td",null,(0,o.zw)(W.product.series),1)])):(0,s.kq)("",!0),W.product.title?((0,s.wg)(),(0,s.iD)("tr",ut,[pt,(0,s._)("td",null,(0,o.zw)(W.product.title),1)])):(0,s.kq)("",!0),W.product.subtitle?((0,s.wg)(),(0,s.iD)("tr",gt,[ht,(0,s._)("td",null,(0,o.zw)(W.product.subtitle),1)])):(0,s.kq)("",!0),W.product.author?((0,s.wg)(),(0,s.iD)("tr",bt,[ft,(0,s._)("td",null,(0,o.zw)(W.product.author.length>1?W.product.author.join("、"):W.product.author[0]),1)])):(0,s.kq)("",!0),W.product.original_author?((0,s.wg)(),(0,s.iD)("tr",_t,[mt,(0,s._)("td",null,(0,o.zw)(W.product.original_author.length>1?W.product.original_author.join("、"):W.product.original_author[0]),1)])):(0,s.kq)("",!0),W.product.illustrator?((0,s.wg)(),(0,s.iD)("tr",vt,[wt,(0,s._)("td",null,(0,o.zw)(W.product.illustrator.length>1?W.product.illustrator.join("、"):W.product.illustrator[0]),1)])):(0,s.kq)("",!0),W.product.translator?((0,s.wg)(),(0,s.iD)("tr",yt,[kt,(0,s._)("td",null,(0,o.zw)(W.product.translator.length>1?W.product.translator.join("、"):W.product.translator[0]),1)])):(0,s.kq)("",!0),W.product.pages_num?((0,s.wg)(),(0,s.iD)("tr",xt,[At,(0,s._)("td",null,(0,o.zw)(W.product.pages_num),1)])):(0,s.kq)("",!0),(0,s._)("tr",null,[$t,(0,s._)("td",null,(0,o.zw)(W.product.publisher),1)]),(0,s._)("tr",null,[Ct,(0,s._)("td",null,(0,o.zw)(t.$filters.date(W.product.pub_date)),1)])])])])])]),Dt,(0,s._)("div",It,[Et,(0,s._)("div",zt,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(W.product.tags,((t,e)=>((0,s.wg)(),(0,s.j4)(R,{class:"btn btn-outline-secondary d-flex col-auto",key:"tag-"+e,to:`/search?search=&category=${W.product.category}&tag=${t}`},{default:(0,s.w5)((()=>[(0,s.Uk)(" #"+(0,o.zw)(t),1)])),_:2},1032,["to"])))),128))])]),(0,s._)("div",Nt,[Ot,(0,s.Wm)(qt,{"listbox-name":"recommend_products","products-list":Y.recommendProducts},null,8,["products-list"])])])}a(6699);var qt=a(1911),Pt=a(8471),jt=a.n(Pt),Tt=a(4210),Ut=a(7424),Ft=a.n(Ut),Ht=a(8048),Mt=a.n(Ht),St={components:{RecommendSwiper:Tt.Z},data(){return{modules:[qt.tl,qt.W_],swiperOptions:{navigation:{nextEl:".swiper-btn-next",prevEl:".swiper-btn-prev"},pagination:{type:"fraction",el:".product-swiper-pagination"}},isFavorite:!1,picModal:{},picCarousel:{},product:{},categoryCN:"",id:""}},props:{filteredList:{type:[Object,Array],default(){return{}}}},watch:{"product.category"(){"comic"===this.product.category?this.categoryCN="漫畫":"lightNovel"===this.product.category?this.categoryCN="輕小說":"novel"===this.product.category?this.categoryCN="文學小說":"nonfiction"===this.product.category&&(this.categoryCN="實用書")},"$route.params.productId"(){this.id=this.$route.params.productId,this.getProduct()}},computed:{recommendProducts(){const t=[...this.filteredList.latestProducts];let e;return t.forEach(((t,a)=>{t.id===this.id&&(e=a)})),e||0===e?t.splice(e,1):t.splice(10,1),t},discount(){const t=this.product.price-this.product.origin_price,e=this.product.origin_price,a=Math.round(t/e*100);return a}},methods:{addZoomFn(t){t.target.className+=" pic-zoom"},removeZoomFn(t){t.target.classList.remove("pic-zoom")},moveHandler(t){let e,a,s=t.target.getBoundingClientRect();["touchstart","touchmove","touchend"].includes(t.type)?(e=t.changedTouches[0].clientX-s.left,a=t.changedTouches[0].clientY-s.top,t.preventDefault()):(e=t.offsetX,a=t.offsetY);let o=e/s.width,r=a/s.height;t.target.style.setProperty("--x",o),t.target.style.setProperty("--y",r)},getProduct(){window.scroll({top:0,behavior:"instant"});const t=`https://vue3-course-api.hexschool.io/api/wakuwaku-api/product/${this.id}`;this.$http.get(t).then((t=>{t.data.success&&(this.product=t.data.product,console.log("temp product",this.product),this.$emit("temp-selection",this.product.category))}))}},created(){this.id=this.$route.params.productId,this.getProduct()},mounted(){const t=document.querySelectorAll("#info-tab button");t.forEach((t=>{const e=new(jt())(t);t.addEventListener("click",(t=>{t.preventDefault(),e.show()}))})),this.picModal=new(Ft())(this.$refs.pic_modal),this.picCarousel=new(Mt())(this.$refs.pic_carousel)}},Zt=a(3744);const Wt=(0,Zt.Z)(St,[["render",Lt],["__scopeId","data-v-1f4bf4c0"]]);var Yt=Wt}}]);
//# sourceMappingURL=570.47832842.js.map