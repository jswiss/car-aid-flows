webpackJsonp([9],{237:function(t,e,a){a(306);var n=a(15)(a(269),a(296),"data-v-aca1ff44",null);t.exports=n.exports},269:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"AidViaFunds",data:function(){return{data:[["2015",.301,.228],["2016",.259,.208],["2017",.209,.156]]}},mounted:function(){this.line()},methods:{line:function(){var t=anychart.data.set(this.data),e=t.mapAs({x:[0],value:[1]}),a=t.mapAs({x:[0],value:[2]}),n=anychart.line();n.grid().enabled(!0),n.interactivity().hoverMode("single");var i=n.line(e);i.name("% through all pooled funding instruments"),i.stroke("#45B9EA",4,"10 5","round"),i.hoverStroke("#45B9EA",5,"10 5","round"),i.selectStroke("#45B9EA",7,"10 5","round");var r=n.line(a);r.name("% through SDRF funds"),r.stroke("#00D1B2",4),r.hoverStroke("#00D1B2",5),r.selectStroke("#00D1B2",7),n.legend().enabled(!0),n.title("Declining Share of Development Aid Channeled Through Funds"),n.xAxis().title("Year"),n.yAxis().title("Annual Aid, %"),n.yAxis(0).labels().format(function(){return 100*this.value+"%"}),n.yScale().ticks().interval(.05),n.container("container"),n.draw()}}}},283:function(t,e,a){e=t.exports=a(14)(),e.push([t.i,"#container[data-v-aca1ff44],body[data-v-aca1ff44],html[data-v-aca1ff44]{width:100%;height:600px;margin:0;padding:0}.disclaimer-text[data-v-aca1ff44]{margin-left:10%;font-style:italic;font-size:12px;color:gray}",""])},296:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{attrs:{id:"container"}}),t._v(" "),a("div",{staticClass:"disclaimer"},[a("p",{staticClass:"disclaimer-text"},[t._v("\n      * For more information, please visit the "),a("router-link",{attrs:{to:"/tables/funds"}},[t._v("funds table")]),t._v(".\n    ")],1)])])},staticRenderFns:[]}},306:function(t,e,a){var n=a(283);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a(16)("855d2628",n,!0)}});
//# sourceMappingURL=9.16cf43ff0867cd35afad.js.map