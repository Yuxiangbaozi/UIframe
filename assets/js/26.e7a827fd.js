(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{264:function(n,t,o){"use strict";o.r(t);o(32);var e=o(0),c=o(151),l=o(54);e.a.use(c.a);var s={name:"demo-toast-2",components:{"g-button":l.a},methods:{onClick:function(){this.$toast("我是Toast",{closeButton:{text:"关闭",callback:function(){console.log("ok")}}})}},data:function(){return{content:"\n<style>\n  .toast {\n    z-index: 30;\n  }\n</style>\n\n<g-button @click=\"onClick\">上方弹出</g-button>\n\nmethods: {\n  tonClick () {\n    this.$toast('我是Toast', {\n      closeButton: {\n        text: '关闭',\n        callback: () => {\n          console.log('ok')\n        }\n      }\n    })\n  }\n}".trim()}}},a=o(1),i=Object(a.a)(s,function(){var n=this,t=n.$createElement,o=n._self._c||t;return o("div",[o("h4",[n._v("预览")]),n._v(" "),o("g-button",{on:{click:n.onClick}},[n._v("上方弹出")]),n._v(" "),o("h4",[n._v("代码")]),n._v(" "),o("pre",[o("code",[n._v(n._s(n.content))])])],1)},[],!1,null,null,null);t.default=i.exports}}]);