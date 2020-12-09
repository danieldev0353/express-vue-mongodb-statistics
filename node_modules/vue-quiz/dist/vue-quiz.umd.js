(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["vue-quiz"] = factory();
	else
		root["vue-quiz"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "5b49":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Nav_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("5d26");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Nav_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Nav_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Nav_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "5d26":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"43364990-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=template&id=20f8afa0&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.containerClass},[_c('quiz-question',{attrs:{"action":_vm.action,"question":_vm.question.text,"containerClass":_vm.containerClass,"questionClass":_vm.questionClass}},[_c('quiz-answer',{attrs:{"slot":"Answer","answerContainerClass":_vm.answerContainerClass,"answerClass":_vm.answerClass,"answerControlClass":_vm.answerControlClass,"answerCheckboxClass":_vm.answerCheckboxClass,"answerLabelClass":_vm.answerLabelClass,"answers":_vm.question.answers,"question":_vm.item},on:{"right":_vm.right},slot:"Answer",model:{value:(_vm.answered[_vm.item]),callback:function ($$v) {_vm.$set(_vm.answered, _vm.item, $$v)},expression:"answered[item]"}})],1),_c('quiz-nav',{attrs:{"pages_count":_vm.pages_count,"page":_vm.item,"completed":_vm.completed,"completed_question":_vm.completed_question,"buttonClass":_vm.buttonClass,"submitClass":_vm.submitClass,"submitValue":_vm.submitValue,"submitShow":_vm.submitShow,"submitDisabled":_vm.submitDisabled,"nextClass":_vm.nextClass,"nextValue":_vm.nextValue,"nextShow":_vm.nextShow,"prevousClass":_vm.prevousClass,"prevousValue":_vm.prevousValue,"prevousShow":_vm.prevousShow},on:{"prevous":_vm.prevousItem,"next":_vm.nextItem,"submit":_vm.formSubmit}})],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/App.vue?vue&type=template&id=20f8afa0&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"43364990-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Question.vue?vue&type=template&id=751018b0&
var Questionvue_type_template_id_751018b0_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('keep-alive',[_c('div',[_c('span',{class:_vm.questionClass},[_vm._v(_vm._s(_vm.question))]),_vm._t("Answer")],2)])}
var Questionvue_type_template_id_751018b0_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Question.vue?vue&type=template&id=751018b0&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Question.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Questionvue_type_script_lang_js_ = ({
  name: "QuizQuestion",
  props: ["question", "startPage", "action", "timer", "containerClass", "questionClass"]
});
// CONCATENATED MODULE: ./src/components/Question.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Questionvue_type_script_lang_js_ = (Questionvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/components/Question.vue





/* normalize component */

var component = normalizeComponent(
  components_Questionvue_type_script_lang_js_,
  Questionvue_type_template_id_751018b0_render,
  Questionvue_type_template_id_751018b0_staticRenderFns,
  false,
  null,
  null,
  null
  
)

component.options.__file = "Question.vue"
/* harmony default export */ var Question = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"43364990-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Answer.vue?vue&type=template&id=15e91df6&
var Answervue_type_template_id_15e91df6_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.answerContainerClass},_vm._l((_vm.answers),function(answer,index){return _c('div',{key:index},[_c('div',{class:_vm.answerClass},[_c('div',{class:_vm.answerControlClass},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.checkedAnswers),expression:"checkedAnswers"}],class:_vm.answerCheckboxClass,attrs:{"type":"checkbox","id":'checkbox_' + index},domProps:{"value":index,"checked":Array.isArray(_vm.checkedAnswers)?_vm._i(_vm.checkedAnswers,index)>-1:(_vm.checkedAnswers)},on:{"change":[function($event){var $$a=_vm.checkedAnswers,$$el=$event.target,$$c=$$el.checked?(true):(false);if(Array.isArray($$a)){var $$v=index,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&(_vm.checkedAnswers=$$a.concat([$$v]))}else{$$i>-1&&(_vm.checkedAnswers=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}}else{_vm.checkedAnswers=$$c}},_vm.changed]}}),_c('label',{class:_vm.answerLabelClass,attrs:{"type":"text","for":'checkbox_' + index}},[_vm._v(_vm._s(answer.text))])])])])}))}
var Answervue_type_template_id_15e91df6_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Answer.vue?vue&type=template&id=15e91df6&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Answer.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Answervue_type_script_lang_js_ = ({
  name: "QuizAnswer",
  props: ["value", "answers", "question", "answerContainerClass", "answerClass", "answerControlClass", "answerCheckboxClass", "answerLabelClass"],
  data: function data() {
    return {
      checkedAnswers: []
    };
  },
  watch: {
    question: function question() {
      this.checkedAnswers = this.value != null ? this.value : [];
    }
  },
  computed: {
    right: function right() {
      return this.answers.map(function (item, i) {
        return item.right == true ? i : "";
      }).filter(String); // return this.answers.filter(function (item){
      //   return item.right === true;
      // })
    }
  },
  methods: {
    changed: function changed() {
      this.$emit("right", JSON.stringify(this.checkedAnswers) === JSON.stringify(this.right));
      this.$emit("input", this.checkedAnswers);
    }
  }
});
// CONCATENATED MODULE: ./src/components/Answer.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Answervue_type_script_lang_js_ = (Answervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/Answer.vue





/* normalize component */

var Answer_component = normalizeComponent(
  components_Answervue_type_script_lang_js_,
  Answervue_type_template_id_15e91df6_render,
  Answervue_type_template_id_15e91df6_staticRenderFns,
  false,
  null,
  null,
  null
  
)

Answer_component.options.__file = "Answer.vue"
/* harmony default export */ var Answer = (Answer_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"43364990-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Nav.vue?vue&type=template&id=62955c7c&lang=html&
var Navvue_type_template_id_62955c7c_lang_html_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"quiz-nav"},[_c('input',{directives:[{name:"show",rawName:"v-show",value:(_vm.isPrevousShow),expression:"isPrevousShow"}],class:[_vm.buttonClass, _vm.nextClass],attrs:{"type":"button","disabled":_vm.isPrevousDisabled,"value":_vm.prevousValue},on:{"click":function($event){_vm.$emit('prevous')}}}),_c('input',{directives:[{name:"show",rawName:"v-show",value:(_vm.isNextShow),expression:"isNextShow"}],class:[_vm.buttonClass, _vm.nextClass],attrs:{"type":"button","disabled":_vm.isNextDisabled,"value":_vm.nextValue},on:{"click":function($event){_vm.$emit('next')}}}),_c('input',{directives:[{name:"show",rawName:"v-show",value:(_vm.isSubmitShow),expression:"isSubmitShow"}],class:[_vm.buttonClass, _vm.submitClass],attrs:{"type":"button","disabled":_vm.isSubmitDisabled,"value":_vm.submitValue},on:{"click":function($event){_vm.$emit('submit')}}})])}
var Navvue_type_template_id_62955c7c_lang_html_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Nav.vue?vue&type=template&id=62955c7c&lang=html&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Nav.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Navvue_type_script_lang_js_ = ({
  name: "QuizNav",
  // Buttons
  props: ["pages_count", "page", "completed", "completed_question", "buttonClass", "submitClass", "submitValue", "submitShow", "submitDisabled", "nextClass", "nextValue", "nextShow", "prevousClass", "prevousValue", "prevousShow"],
  computed: {
    isSubmitShow: function isSubmitShow() {
      return this.submitShow || this.completed == this.pages_count;
    },
    isSubmitDisabled: function isSubmitDisabled() {
      return this.submitDisabled && this.completed != this.pages_count;
    },
    isNextShow: function isNextShow() {
      return this.nextShow || this.completed_question;
    },
    isNextDisabled: function isNextDisabled() {
      return this.page >= this.pages_count - 1 || !this.completed_question;
    },
    isPrevousShow: function isPrevousShow() {
      return this.prevousShow;
    },
    isPrevousDisabled: function isPrevousDisabled() {
      return this.page <= 0;
    }
  }
});
// CONCATENATED MODULE: ./src/components/Nav.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Navvue_type_script_lang_js_ = (Navvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/Nav.vue?vue&type=style&index=0&lang=css&
var Navvue_type_style_index_0_lang_css_ = __webpack_require__("5b49");

// CONCATENATED MODULE: ./src/components/Nav.vue






/* normalize component */

var Nav_component = normalizeComponent(
  components_Navvue_type_script_lang_js_,
  Navvue_type_template_id_62955c7c_lang_html_render,
  Navvue_type_template_id_62955c7c_lang_html_staticRenderFns,
  false,
  null,
  null,
  null
  
)

Nav_component.options.__file = "Nav.vue"
/* harmony default export */ var Nav = (Nav_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var Appvue_type_script_lang_js_ = ({
  name: "vue-quiz",
  components: {
    QuizQuestion: Question,
    QuizAnswer: Answer,
    QuizNav: Nav
  },
  props: {
    questions: {
      type: Array,
      default: function _default() {
        return [{
          text: "Vue.JS is",
          answers: [{
            text: "JS framework",
            right: true
          }, {
            text: "PHP framework"
          }, {
            text: "Something from space",
            right: true
          }]
        }, {
          text: "This is second question?",
          answers: [{
            text: "No"
          }, {
            text: "Both"
          }, {
            text: "Yes",
            right: true
          }]
        }, {
          text: "This is third question?",
          answers: [{
            text: "No!"
          }, {
            text: "Yes!",
            right: true
          }, {
            text: "Both?"
          }]
        }];
      }
    },
    containerClass: {
      type: String,
      default: "jumbotron"
    },
    questionClass: {
      type: String,
      default: "h5"
    },
    answerContainerClass: {
      type: String,
      default: "col-auto my-1"
    },
    answerClass: {
      type: String,
      default: "alert alert-dark"
    },
    answerControlClass: {
      type: String,
      default: "custom-control custom-checkbox mr-sm-2"
    },
    answerCheckboxClass: {
      type: String,
      default: "custom-control-input"
    },
    answerLabelClass: {
      type: String,
      default: "custom-control-label"
    },
    // Buttons
    buttonClass: {
      type: String,
      default: "btn btn-primary"
    },
    // Submit
    submitClass: {
      type: String,
      default: ""
    },
    submitValue: {
      type: String,
      default: "Submit"
    },
    submitShow: {
      type: Boolean,
      default: false
    },
    submitDisabled: {
      type: Boolean,
      default: true
    },
    // Next
    nextClass: {
      type: String,
      default: ""
    },
    nextValue: {
      type: String,
      default: "Next"
    },
    nextShow: {
      type: Boolean,
      default: true
    },
    // Prevous
    prevousClass: {
      type: String,
      default: ""
    },
    prevousValue: {
      type: String,
      default: "Back"
    },
    prevousShow: {
      type: Boolean,
      default: true
    },
    // Submit form action
    action: {
      type: String,
      default: "#"
    }
  },
  data: function data() {
    return {
      item: 0,
      answered: [],
      // all answers
      right_answers: [] // right or false answers

    };
  },
  computed: {
    pages_count: function pages_count() {
      return this.questions.length;
    },
    question: function question() {
      return this.questions[this.item];
    },
    completed: function completed() {
      return this.answered != null ? this.answered.filter(String).length : 0;
    },
    completed_question: function completed_question() {
      return this.answered[this.item] != null ? this.answered[this.item].filter(String).length : false;
    }
  },
  methods: {
    nextItem: function nextItem() {
      return this.item < this.pages_count ? this.item++ : void 0;
    },
    prevousItem: function prevousItem() {
      return this.item > 0 ? this.item-- : void 0;
    },
    right: function right(val) {
      this.right_answers[this.item] = val;
    },
    formSubmit: function formSubmit() {
      // TODO: return JSON values
      this.$emit("complete", {
        answers: this.answered,
        right_answers: this.right_answers
      });
    }
  }
});
// CONCATENATED MODULE: ./src/App.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_Appvue_type_script_lang_js_ = (Appvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/App.vue





/* normalize component */

var App_component = normalizeComponent(
  src_Appvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

App_component.options.__file = "App.vue"
/* harmony default export */ var App = (App_component.exports);
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (App);



/***/ })

/******/ })["default"];
});
//# sourceMappingURL=vue-quiz.umd.js.map