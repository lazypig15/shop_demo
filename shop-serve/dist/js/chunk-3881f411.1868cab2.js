(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3881f411"],{"159b":function(t,e,i){var a=i("da84"),s=i("fdbc"),r=i("17c2"),n=i("9112");for(var o in s){var c=a[o],l=c&&c.prototype;if(l&&l.forEach!==r)try{n(l,"forEach",r)}catch(u){l.forEach=r}}},"17c2":function(t,e,i){"use strict";var a=i("b727").forEach,s=i("b301");t.exports=s("forEach")?function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}:[].forEach},"1dde":function(t,e,i){var a=i("d039"),s=i("b622"),r=i("60ae"),n=s("species");t.exports=function(t){return r>=51||!a((function(){var e=[],i=e.constructor={};return i[n]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},7523:function(t,e,i){"use strict";var a=i("e65c"),s=i.n(a);s.a},a434:function(t,e,i){"use strict";var a=i("23e7"),s=i("23cb"),r=i("a691"),n=i("50c4"),o=i("7b0b"),c=i("65f0"),l=i("8418"),u=i("1dde"),f=Math.max,d=Math.min,m=9007199254740991,p="Maximum allowed length exceeded";a({target:"Array",proto:!0,forced:!u("splice")},{splice:function(t,e){var i,a,u,h,g,v,b=o(this),w=n(b.length),x=s(t,w),_=arguments.length;if(0===_?i=a=0:1===_?(i=0,a=w-x):(i=_-2,a=d(f(r(e),0),w-x)),w+i-a>m)throw TypeError(p);for(u=c(b,a),h=0;h<a;h++)g=x+h,g in b&&l(u,h,b[g]);if(u.length=a,i<a){for(h=x;h<w-a;h++)g=h+a,v=h+i,g in b?b[v]=b[g]:delete b[v];for(h=w;h>w-a+i;h--)delete b[h-1]}else if(i>a)for(h=w-a;h>x;h--)g=h+a-1,v=h+i-1,g in b?b[v]=b[g]:delete b[v];for(h=0;h<i;h++)b[h+x]=arguments[h+2];return b.length=w-a+i,u}})},b301:function(t,e,i){"use strict";var a=i("d039");t.exports=function(t,e){var i=[][t];return!i||!a((function(){i.call(null,e||function(){throw 1},1)}))}},c84b:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"safe_view",staticStyle:{width:"1000px"}},[i("el-button",{staticClass:"back",attrs:{icon:"el-icon-back"},on:{click:function(e){return t.$router.back()}}},[t._v("返回")]),t.item?i("div",{staticClass:"view clearfix"},[i("div",{staticClass:"left"},[i("div",{ref:"img_box",staticClass:"img_box",on:{mousemove:t.move,mouseover:function(e){t.flag=!0},mouseout:function(e){t.flag=!1}}},[i("img",{attrs:{src:t.mid_img,alt:""}}),i("div",{directives:[{name:"show",rawName:"v-show",value:t.flag,expression:"flag"}],staticClass:"big_img_box"},[i("img",{style:{left:t.left+"px",top:t.top+"px"},attrs:{src:t.mid_img,alt:""}})]),i("div",{directives:[{name:"show",rawName:"v-show",value:t.flag,expression:"flag"}],staticClass:"mark",style:{left:t.l+"px",top:t.t+"px"}})]),i("div",{staticClass:"img_btns clearfix"},t._l(t.item.imgs,(function(e){return i("img",{key:e,class:{con:e==t.mid_img},attrs:{src:e,alt:""},on:{click:function(i){t.mid_img=e}}})})),0)]),i("div",{staticClass:"left right"},[i("h2",{staticClass:"title"},[t._v(t._s(t.item.title))]),i("p",{staticClass:"supplier"},[t._v(t._s(t.item.supplier))]),i("p",{staticClass:"price"},[t._v("￥"+t._s(t.item.price))]),i("el-rate",{staticStyle:{margin:"10px 0"},attrs:{value:3.7,disabled:"","show-score":"","text-color":"purple"}}),i("el-button",{attrs:{type:"danger"},on:{click:function(e){return t.add()}}},[t._v("添加到购物车")])],1)]):t._e(),i("div",{staticClass:"same"},[i("h4",[t._v("相似商品推荐")]),i("list",{staticClass:"list",attrs:{list:t.same_list}})],1)],1)},s=[],r=(i("fb6a"),i("a434"),i("d3b7"),i("e25e"),i("159b"),i("96cf"),i("b3f5")),n={beforeRouteEnter:function(t,e,i){var a;return regeneratorRuntime.async((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,regeneratorRuntime.awrap(Object(r["a"])("/detail?goodId="+t.params.goodId));case 2:a=e.sent,i((function(t){t.item=a.data[0],t.item.imgs=JSON.parse(t.item.imgs),t.mid_img=t.item.imgs[0]}));case 4:case"end":return e.stop()}}))},beforeRouteUpdate:function(t,e,i){var a;return regeneratorRuntime.async((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,regeneratorRuntime.awrap(Object(r["a"])("/detail?goodId="+t.params.goodId));case 2:a=e.sent,this.item=a.data[0],this.item.imgs=JSON.parse(this.item.imgs),this.mid_img=this.item.imgs[0],this.$store.commit("loading",!1),i();case 8:case"end":return e.stop()}}),null,this)},data:function(){return{item:null,mid_img:"",left:0,top:0,l:0,t:0,flag:!1,same_list:[]}},watch:{item:function(t){var e,i,a,s,r,n,o,c;return regeneratorRuntime.async((function(l){while(1)switch(l.prev=l.next){case 0:return n=function(t){return Math.floor(Math.random()*(t+1))},e=t.type_one,i=t.type_two,a=t.Id,s=t.title,document.title=s,this.same_list=[],l.next=6,regeneratorRuntime.awrap(this.$ajax("/goodList?type_one="+e+"&type_two="+i));case 6:if(r=l.sent,r.data.forEach((function(t,e){t.Id==a&&r.data.splice(e,1)})),r.data.length>10)for(o=0;o<10;o++)c=n(r.data.length-1),this.same_list.push(r.data[c]),r.data.splice(c,1);else this.same_list=r.data.slice(0,10);case 9:case"end":return l.stop()}}),null,this)}},computed:{value:function(){return Math.abs(parseInt(this.item.nice)%10-5)}},methods:{move:function(t){var e=t.clientX,i=t.clientY,a=this.$refs.img_box.offsetTop,s=this.$refs.img_box.offsetLeft,r=document.body.scrollTop||document.documentElement.scrollTop;e-=s,i=i-a+r,e=e<130?130:e,e=e>270?270:e,i=i<130?130:i,i=i>270?270:i,this.left=-e/2*3+200,this.top=-i/2*3+200,this.l=e-130,this.t=i-130},add:function(){var t=this,e=this.$store.state.token;e?function(){var i,a;regeneratorRuntime.async((function(s){while(1)switch(s.prev=s.next){case 0:return s.next=2,regeneratorRuntime.awrap(t.$ajax("/add?goodId="+t.item.Id+"&token="+e));case 2:i=s.sent,a=i.data.code,0==a?(t.$message({message:"登录过期，即将跳转到登录页",type:"warning"}),setTimeout((function(){t.$router.push("/login?url="+t.$route.fullPath)}),2e3)):1==a?t.$message({type:"success",message:"添加成功"}):t.$message.error("添加失败,请稍后再试");case 5:case"end":return s.stop()}}))}():(this.$message({message:"您还没有登录，即将跳转到登录页",type:"warning"}),setTimeout((function(){t.$router.push("/login?url="+t.$route.fullPath)}),2e3))}}},o=n,c=(i("7523"),i("2877")),l=Object(c["a"])(o,a,s,!1,null,"4b266084",null);e["default"]=l.exports},e25e:function(t,e,i){var a=i("23e7"),s=i("e583");a({global:!0,forced:parseInt!=s},{parseInt:s})},e583:function(t,e,i){var a=i("da84"),s=i("58a8").trim,r=i("5899"),n=a.parseInt,o=/^[+-]?0[Xx]/,c=8!==n(r+"08")||22!==n(r+"0x16");t.exports=c?function(t,e){var i=s(String(t));return n(i,e>>>0||(o.test(i)?16:10))}:n},e65c:function(t,e,i){},fb6a:function(t,e,i){"use strict";var a=i("23e7"),s=i("861d"),r=i("e8b5"),n=i("23cb"),o=i("50c4"),c=i("fc6a"),l=i("8418"),u=i("1dde"),f=i("b622"),d=f("species"),m=[].slice,p=Math.max;a({target:"Array",proto:!0,forced:!u("slice")},{slice:function(t,e){var i,a,u,f=c(this),h=o(f.length),g=n(t,h),v=n(void 0===e?h:e,h);if(r(f)&&(i=f.constructor,"function"!=typeof i||i!==Array&&!r(i.prototype)?s(i)&&(i=i[d],null===i&&(i=void 0)):i=void 0,i===Array||void 0===i))return m.call(f,g,v);for(a=new(void 0===i?Array:i)(p(v-g,0)),u=0;g<v;g++,u++)g in f&&l(a,u,f[g]);return a.length=u,a}})}}]);
//# sourceMappingURL=chunk-3881f411.1868cab2.js.map