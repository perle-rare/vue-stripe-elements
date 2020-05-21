!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("vue-stripe-elements",[],t):"object"==typeof exports?exports["vue-stripe-elements"]=t():e["vue-stripe-elements"]=t()}(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=16)}([function(e,t,n){var r=n(2)(n(15),n(18),null,null);r.options.__file="C:\\Projects\\MurrayFieldAndco\\vue-stripe-elements\\src\\StripeElement.vue",r.esModule&&Object.keys(r.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] StripeElement.vue: functional components are not supported with templates, they should use render functions."),e.exports=r.exports},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={stripe:{type:[String,Object],required:!0},value:{type:String,required:!1},options:{type:Object,required:!1},version:{type:String,required:!1}}},function(e,t){e.exports=function(e,t,n,r){var o,u=e=e||{},i=typeof e.default;"object"!==i&&"function"!==i||(o=e,u=e.default);var s="function"==typeof u?u.options:u;if(t&&(s.render=t.render,s.staticRenderFns=t.staticRenderFns),n&&(s._scopeId=n),r){var c=s.computed||(s.computed={});Object.keys(r).forEach(function(e){var t=r[e];c[e]=function(){return t}})}return{esModule:o,exports:u,options:s}}},function(e,t,n){"use strict";function r(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;"object"===(void 0===e?"undefined":i(e))&&"function"==typeof e.elements&&(s.instance=e),void 0===window.Stripe&&null===s.instance?console.error("Stripe V3 library not loaded!"):null===s.instance&&(s.instance=n?window.Stripe(e,{apiVersion:n}):window.Stripe(e)),s.instance.elements?null===s.elements&&(s.elements=s.instance.elements(t)):console.error("Stripe V3 library not loaded!")}function o(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;r(t,n.elements||{},o),n.style=Object.assign({},n.style||c);var u=s.elements.create(e,n);return s.createToken=function(e){return s.instance.createToken(u,e)},s.createSource=function(e){return s.instance.createSource(u,e)},s.retrieveSource=function(e){return s.instance.retrieveSource(e)},s.paymentRequest=function(e){return s.instance.paymentRequest(e)},s.redirectToCheckout=function(e){return s.instance.redirectToCheckout(e)},s.retrievePaymentIntent=function(e){return s.instance.retrievePaymentIntent(e)},s.handleCardPayment=function(e,t){return s.instance.handleCardPayment(e,u,t)},s.handleCardSetup=function(e,t){return s.instance.handleCardSetup(e,u,t)},s.handleCardAction=function(e){return s.instance.handleCardAction(e)},s.confirmCardPayment=function(e,t){return s.instance.confirmCardPayment(e,{payment_method:{card:u}},t)},s.confirmPaymentIntent=function(e,t){return s.instance.confirmPaymentIntent(e,u,t)},s.createPaymentMethod=function(e,t){return s.instance.createPaymentMethod(e,u,t)},s.setStripeAccount=function(e,t){s.instance=window.Stripe(t,{stripeAccount:e})},u}function u(){s.instance=null,s.elements=null,s.createToken=null,s.createSource=null,s.retrieveSource=null,s.paymentRequest=null,s.redirectToCheckout=null,s.retrievePaymentIntent=null,s.handleCardPayment=null,s.handleCardSetup=null,s.handleCardAction=null,s.confirmCardPayment=null,s.confirmPaymentIntent=null,s.createPaymentMethod=null}Object.defineProperty(t,"__esModule",{value:!0});var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.create=o,t.destroy=u;var s=t.Stripe={instance:null,createToken:null,createSource:null,retrieveSource:null,paymentRequest:null,redirectToCheckout:null,retrievePaymentIntent:null,handleCardPayment:null,handleCardSetup:null,handleCardAction:null,confirmCardPayment:null,confirmPaymentIntent:null,createPaymentMethod:null,elements:null,setStripeAccount:null},c=t.baseStyle={base:{color:"#32325d",lineHeight:"24px",fontFamily:"Helvetica Neue",fontSmoothing:"antialiased",fontSize:"16px","::placeholder":{color:"#aab7c4"}},invalid:{color:"#fa755a",iconColor:"#fa755a"}}},function(e,t,n){"use strict";"function"!=typeof Object.assign&&(Object.assign=function(e,t){if(null==e)throw new TypeError("Cannot convert undefined or null to object");for(var n=Object(e),r=1;r<arguments.length;r++){var o=arguments[r];if(null!=o)for(var u in o)Object.prototype.hasOwnProperty.call(o,u)&&(n[u]=o[u])}return n}),e.exports=Object.assign},function(e,t,n){var r=n(2)(n(10),n(22),null,null);r.options.__file="C:\\Projects\\MurrayFieldAndco\\vue-stripe-elements\\src\\Card.vue",r.esModule&&Object.keys(r.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] Card.vue: functional components are not supported with templates, they should use render functions."),e.exports=r.exports},function(e,t,n){var r=n(2)(n(11),n(19),null,null);r.options.__file="C:\\Projects\\MurrayFieldAndco\\vue-stripe-elements\\src\\CardCvc.vue",r.esModule&&Object.keys(r.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] CardCvc.vue: functional components are not supported with templates, they should use render functions."),e.exports=r.exports},function(e,t,n){var r=n(2)(n(12),n(21),null,null);r.options.__file="C:\\Projects\\MurrayFieldAndco\\vue-stripe-elements\\src\\CardExpiry.vue",r.esModule&&Object.keys(r.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] CardExpiry.vue: functional components are not supported with templates, they should use render functions."),e.exports=r.exports},function(e,t,n){var r=n(2)(n(13),n(20),null,null);r.options.__file="C:\\Projects\\MurrayFieldAndco\\vue-stripe-elements\\src\\CardNumber.vue",r.esModule&&Object.keys(r.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] CardNumber.vue: functional components are not supported with templates, they should use render functions."),e.exports=r.exports},function(e,t,n){var r=n(2)(n(14),n(17),null,null);r.options.__file="C:\\Projects\\MurrayFieldAndco\\vue-stripe-elements\\src\\PostalCode.vue",r.esModule&&Object.keys(r.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] PostalCode.vue: functional components are not supported with templates, they should use render functions."),e.exports=r.exports},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),u=r(o),i=n(0),s=r(i);t.default={props:u.default,components:{StripeElement:s.default},methods:{blur:function(){this.$refs.element.blur()},clear:function(){this.$refs.element.clear()},focus:function(){this.$refs.element.focus()},update:function(e){this.$refs.element.update(e)}}}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),u=r(o),i=n(0),s=r(i);t.default={props:u.default,components:{StripeElement:s.default},methods:{blur:function(){this.$refs.element.blur()},clear:function(){this.$refs.element.clear()},focus:function(){this.$refs.element.focus()},update:function(e){this.$refs.element.update(e)}}}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),u=r(o),i=n(0),s=r(i);t.default={props:u.default,components:{StripeElement:s.default},methods:{blur:function(){this.$refs.element.blur()},clear:function(){this.$refs.element.clear()},focus:function(){this.$refs.element.focus()},update:function(e){this.$refs.element.update(e)}}}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),u=r(o),i=n(0),s=r(i);t.default={props:u.default,components:{StripeElement:s.default},methods:{blur:function(){this.$refs.element.blur()},clear:function(){this.$refs.element.clear()},focus:function(){this.$refs.element.focus()},update:function(e){this.$refs.element.update(e)}}}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),u=r(o),i=n(0),s=r(i);t.default={props:u.default,components:{StripeElement:s.default},methods:{blur:function(){this.$refs.element.blur()},clear:function(){this.$refs.element.clear()},focus:function(){this.$refs.element.focus()},update:function(e){this.$refs.element.update(e)}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),o=function(e){return e&&e.__esModule?e:{default:e}}(r),u=n(3);t.default={props:Object.assign({type:{type:String,required:!0}},o.default),beforeMount:function(){var e=this;this._element=(0,u.create)(this.type,this.stripe,this.options,this.version),this._element.on("blur",function(t){return e.$emit("blur")}),this._element.on("focus",function(t){return e.$emit("focus")}),this._element.on("change",function(t){return e.$emit("change",t)})},mounted:function(){var e=document.createElement("div");this._element.mount(e),this.$el.appendChild(e)},beforeDestroy:function(){this._element.unmount(),this._element.destroy(),(0,u.destroy)()},methods:{blur:function(){this._element.blur()},clear:function(){this._element.clear()},focus:function(){this._element.focus()},update:function(){this._element.update()}}}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}n(4);var o=n(3),u=n(0),i=r(u),s=n(5),c=r(s),l=n(7),a=r(l),f=n(6),d=r(f),p=n(8),m=r(p),h=n(9),v=r(h);e.exports={Card:c.default,CardNumber:m.default,CardExpiry:a.default,CardCvc:d.default,PostalCode:v.default,StripeElement:i.default,baseStyle:o.baseStyle,get instance(){return o.Stripe.instance},get createToken(){return o.Stripe.createToken},get createSource(){return o.Stripe.createSource},get retrieveSource(){return o.Stripe.retrieveSource},get paymentRequest(){return o.Stripe.paymentRequest},get redirectToCheckout(){return o.Stripe.redirectToCheckout},get retrievePaymentIntent(){return o.Stripe.retrievePaymentIntent},get handleCardPayment(){return o.Stripe.handleCardPayment},get handleCardSetup(){return o.Stripe.handleCardSetup},get handleCardAction(){return o.Stripe.handleCardAction},get confirmCardPayment(){return o.Stripe.confirmCardPayment},get confirmPaymentIntent(){return o.Stripe.confirmPaymentIntent},get createPaymentMethod(){return o.Stripe.createPaymentMethod},get setStripeAccount(){return o.Stripe.setStripeAccount}}},function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("stripe-element",{ref:"element",attrs:{type:"postalCode",stripe:e.stripe,value:e.value,options:e.options,version:e.version},on:{blur:function(t){e.$emit("blur")},focus:function(t){e.$emit("focus")},empty:function(t){e.$emit("empty")},change:function(t){e.$emit("change",t)}}})},staticRenderFns:[]},e.exports.render._withStripped=!0},function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("div")},staticRenderFns:[]},e.exports.render._withStripped=!0},function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("stripe-element",{ref:"element",attrs:{type:"cardCvc",stripe:e.stripe,value:e.value,options:e.options,version:e.version},on:{blur:function(t){e.$emit("blur")},focus:function(t){e.$emit("focus")},change:function(t){e.$emit("change",t)}}})},staticRenderFns:[]},e.exports.render._withStripped=!0},function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("stripe-element",{ref:"element",attrs:{type:"cardNumber",stripe:e.stripe,value:e.value,options:e.options,version:e.version},on:{blur:function(t){e.$emit("blur")},focus:function(t){e.$emit("focus")},change:function(t){e.$emit("change",t)}}})},staticRenderFns:[]},e.exports.render._withStripped=!0},function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("stripe-element",{ref:"element",attrs:{type:"cardExpiry",stripe:e.stripe,value:e.value,options:e.options,version:e.version},on:{blur:function(t){e.$emit("blur")},focus:function(t){e.$emit("focus")},change:function(t){e.$emit("change",t)}}})},staticRenderFns:[]},e.exports.render._withStripped=!0},function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("stripe-element",{ref:"element",attrs:{type:"card",stripe:e.stripe,value:e.value,options:e.options,version:e.version},on:{blur:function(t){e.$emit("blur")},focus:function(t){e.$emit("focus")},change:function(t){e.$emit("change",t)}}})},staticRenderFns:[]},e.exports.render._withStripped=!0}])});