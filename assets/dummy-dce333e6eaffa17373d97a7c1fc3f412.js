define("dummy/app",["exports","ember","ember/resolver","ember/load-initializers","dummy/config/environment"],function(e,t,n,r,a){"use strict";var i=void 0;t["default"].MODEL_FACTORY_INJECTIONS=!0,i=t["default"].Application.extend({modulePrefix:a["default"].modulePrefix,podModulePrefix:a["default"].podModulePrefix,Resolver:n["default"]}),r["default"](i,a["default"].modulePrefix),e["default"]=i}),define("dummy/controllers/array",["exports","ember"],function(e,t){"use strict";e["default"]=t["default"].Controller}),define("dummy/controllers/object",["exports","ember"],function(e,t){"use strict";e["default"]=t["default"].Controller}),define("dummy/initializers/app-version",["exports","dummy/config/environment","ember"],function(e,t,n){"use strict";var r=n["default"].String.classify,a=!1;e["default"]={name:"App Version",initialize:function(e,i){if(!a){var o=r(i.toString());n["default"].libraries.register(o,t["default"].APP.version),a=!0}}}}),define("dummy/initializers/ember-perf",["exports","ember-perf/services/ember-perf","dummy/config/environment"],function(e,t,n){"use strict";function r(e,n,r){var a=e.injectionFactories;r.register("config:ember-perf",e,{instantiate:!1}),r.register("service:ember-perf",t["default"]),a.forEach(function(e){r.inject(e,"perfService","service:ember-perf")})}function a(){m.reopen({activate:function(){this.get("perfService").routeActivated(this),this._super.apply(this,arguments)},deactivate:function(){this.get("perfService").routeDeactivated(this),this._super.apply(this,arguments)},render:function(){return this._super.apply(this,arguments)}}),d.reopen({perfService:u(function(){return this.container.lookup("service:ember-perf")}),_doURLTransition:function(){var e=this._super.apply(this,arguments);return this.trigger("willTransition",{promise:e}),e},_doTransition:function(){var e=this._super.apply(this,arguments);return this.trigger("willTransition",{promise:e}),e},_beginPerfDataCollection:function(e){this.get("perfService").measureTransition(e)},_transitionStartListener:l("willTransition",function(e){this._beginPerfDataCollection(e)})})}function i(e,t){function i(){return u||(u=e.lookup("service:ember-perf")),u}var o=n["default"].emberPerf;r(o,e,t),a();var u=null;Ember.subscribe("render",{before:function(e,t,n){i().renderBefore(e,t,n)},after:function(e,t,n){i().renderAfter(e,t,n)}})}e.initialize=i;var o=Ember,u=o.computed,l=o.on,d=o.Router,m=o.Route;e["default"]={name:"ember-perf",initialize:i}}),define("dummy/initializers/export-application-global",["exports","ember","dummy/config/environment"],function(e,t,n){"use strict";function r(e,r){if(n["default"].exportApplicationGlobal!==!1){var a,i=n["default"].exportApplicationGlobal;a="string"==typeof i?i:t["default"].String.classify(n["default"].modulePrefix),window[a]||(window[a]=r,r.reopen({willDestroy:function(){this._super.apply(this,arguments),delete window[a]}}))}}e.initialize=r,e["default"]={name:"export-application-global",initialize:r}}),define("dummy/models/building",["exports","ember-data"],function(e,t){"use strict";var n=t["default"].belongsTo,r=t["default"].hasMany,a=t["default"].attr;e["default"]=t["default"].Model.extend({name:a("string"),company:n("company"),floors:r("floor")})}),define("dummy/models/company",["exports","ember-data"],function(e,t){"use strict";var n=t["default"].hasMany,r=t["default"].attr;e["default"]=t["default"].Model.extend({name:r("string"),buildings:n("building")})}),define("dummy/router",["exports","ember","dummy/config/environment"],function(e,t,n){"use strict";var r=/^([0-9]+)\.([0-9]+)\.([0-9]+)(?:(?:\-(alpha|beta)\.([0-9]+)(?:\.([0-9]+))?)?)?(?:\+(canary))?(?:\.([0-9abcdef]+))?(?:\-([A-Za-z0-9\.\-]+))?(?:\+([A-Za-z0-9\.\-]+))?$/,a=r.exec(t["default"].VERSION),i=parseInt(a[1],10)<2&&parseInt(a[2],10)<7,o=i?"resource":"route",u=t["default"].Router.extend({location:n["default"].locationType});u.map(function(){this[o]("companies",function(){this.route("info")}),this[o]("company",{path:"company/:id"},function(){this[o]("buildings"),this[o]("building",{path:"building/:id"},function(){this.route("floors"),this.route("floor",{path:"floor/:id"})})})}),e["default"]=u}),define("dummy/routes/base",["exports","ember"],function(e,t){"use strict";e["default"]=t["default"].Route.extend({})}),define("dummy/routes/companies",["exports","ember","dummy/utils/random-wait","dummy/utils/sample-data","dummy/routes/base"],function(e,t,n,r,a){"use strict";e["default"]=a["default"].extend({model:function(){return n["default"](t["default"].testing?10:3e3,t["default"].testing?10:300).then(function(){return t["default"].A(r.COMPANIES)})}})}),define("dummy/routes/companies/info",["exports","dummy/routes/base"],function(e,t){"use strict";e["default"]=t["default"].extend({})}),define("dummy/routes/company",["exports","ember","dummy/routes/base","dummy/utils/random-wait","dummy/utils/sample-data"],function(e,t,n,r,a){"use strict";e["default"]=n["default"].extend({model:function(e){return r["default"](3e3,300).then(function(){return t["default"].A(a.COMPANIES).findBy("id",parseInt(e.id,10))})}})}),define("dummy/routes/company/index",["exports","ember"],function(e,t){"use strict";e["default"]=t["default"].Route.extend({redirect:function(){this.transitionTo("company.buildings")}})}),define("dummy/routes/index",["exports","dummy/routes/base"],function(e,t){"use strict";e["default"]=t["default"].extend({redirect:function(){this.transitionTo("companies")}})}),define("dummy/services/ember-perf",["exports","ember-perf/services/ember-perf"],function(e,t){"use strict";e["default"]=t["default"]}),define("dummy/templates/application",["exports"],function(e){"use strict";e["default"]=Ember.HTMLBars.template(function(){return{meta:{revision:"Ember@1.13.5+d731c70e",loc:{source:null,start:{line:1,column:0},end:{line:3,column:10}},moduleName:"dummy/templates/application.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createElement("h2");e.setAttribute(n,"id","title");var r=e.createTextNode("Ember.js Performance Instrumentation");e.appendChild(n,r),e.appendChild(t,n);var n=e.createTextNode("\n\n");e.appendChild(t,n);var n=e.createComment("");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var r=new Array(1);return r[0]=e.createMorphAt(t,2,2,n),e.insertBoundary(t,null),r},statements:[["content","outlet",["loc",[null,[3,0],[3,10]]]]],locals:[],templates:[]}}())}),define("dummy/templates/companies",["exports"],function(e){"use strict";e["default"]=Ember.HTMLBars.template(function(){var e=function(){return{meta:{revision:"Ember@1.13.5+d731c70e",loc:{source:null,start:{line:2,column:0},end:{line:4,column:0}},moduleName:"dummy/templates/companies.hbs"},arity:1,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("  ");e.appendChild(t,n);var n=e.createElement("li");e.setAttribute(n,"class","company");var r=e.createComment("");e.appendChild(n,r),e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var r=new Array(1);return r[0]=e.createMorphAt(e.childAt(t,[1]),0,0),r},statements:[["inline","link-to",[["get","company.name",["loc",[null,[3,32],[3,44]]]],"company",["get","company",["loc",[null,[3,55],[3,62]]]]],[],["loc",[null,[3,22],[3,64]]]]],locals:["company"],templates:[]}}();return{meta:{revision:"Ember@1.13.5+d731c70e",loc:{source:null,start:{line:1,column:0},end:{line:7,column:10}},moduleName:"dummy/templates/companies.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createElement("ul");e.setAttribute(n,"class","companies-list");var r=e.createTextNode("\n");e.appendChild(n,r);var r=e.createComment("");e.appendChild(n,r),e.appendChild(t,n);var n=e.createTextNode("\n\n");e.appendChild(t,n);var n=e.createComment("");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var r=new Array(2);return r[0]=e.createMorphAt(e.childAt(t,[0]),1,1),r[1]=e.createMorphAt(t,2,2,n),e.insertBoundary(t,null),r},statements:[["block","each",[["get","content",["loc",[null,[2,19],[2,26]]]]],[],0,null,["loc",[null,[2,0],[4,9]]]],["content","outlet",["loc",[null,[7,0],[7,10]]]]],locals:[],templates:[e]}}())}),define("dummy/templates/companies/info",["exports"],function(e){"use strict";e["default"]=Ember.HTMLBars.template(function(){return{meta:{revision:"Ember@1.13.5+d731c70e",loc:{source:null,start:{line:1,column:0},end:{line:1,column:13}},moduleName:"dummy/templates/companies/info.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createElement("h4"),r=e.createTextNode("Info");return e.appendChild(n,r),e.appendChild(t,n),t},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}())}),define("dummy/templates/company",["exports"],function(e){"use strict";e["default"]=Ember.HTMLBars.template(function(){var e=function(){return{meta:{revision:"Ember@1.13.5+d731c70e",loc:{source:null,start:{line:2,column:1},end:{line:4,column:1}},moduleName:"dummy/templates/company.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("		< Back to Companies\n");return e.appendChild(t,n),t},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}();return{meta:{revision:"Ember@1.13.5+d731c70e",loc:{source:null,start:{line:1,column:0},end:{line:7,column:10}},moduleName:"dummy/templates/company.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createElement("p"),r=e.createTextNode("\n");e.appendChild(n,r);var r=e.createComment("");e.appendChild(n,r),e.appendChild(t,n);var n=e.createTextNode("\n");e.appendChild(t,n);var n=e.createElement("h2"),r=e.createComment("");e.appendChild(n,r),e.appendChild(t,n);var n=e.createTextNode("\n");e.appendChild(t,n);var n=e.createComment("");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var r=new Array(3);return r[0]=e.createMorphAt(e.childAt(t,[0]),1,1),r[1]=e.createMorphAt(e.childAt(t,[2]),0,0),r[2]=e.createMorphAt(t,4,4,n),e.insertBoundary(t,null),r},statements:[["block","link-to",["companies.info"],[],0,null,["loc",[null,[2,1],[4,13]]]],["content","content.name",["loc",[null,[6,4],[6,20]]]],["content","outlet",["loc",[null,[7,0],[7,10]]]]],locals:[],templates:[e]}}())}),define("dummy/templates/company/buildings",["exports"],function(e){"use strict";e["default"]=Ember.HTMLBars.template(function(){return{meta:{revision:"Ember@1.13.5+d731c70e",loc:{source:null,start:{line:1,column:0},end:{line:2,column:10}},moduleName:"dummy/templates/company/buildings.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createElement("h3"),r=e.createTextNode("Buildings");e.appendChild(n,r),e.appendChild(t,n);var n=e.createTextNode("\n");e.appendChild(t,n);var n=e.createComment("");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var r=new Array(1);return r[0]=e.createMorphAt(t,2,2,n),e.insertBoundary(t,null),r},statements:[["content","outlet",["loc",[null,[2,0],[2,10]]]]],locals:[],templates:[]}}())}),define("dummy/templates/loading",["exports"],function(e){"use strict";e["default"]=Ember.HTMLBars.template(function(){return{meta:{revision:"Ember@1.13.5+d731c70e",loc:{source:null,start:{line:1,column:0},end:{line:1,column:19}},moduleName:"dummy/templates/loading.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createElement("h3"),r=e.createTextNode("loading...");return e.appendChild(n,r),e.appendChild(t,n),t},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}())}),define("dummy/utils/random-wait",["exports","ember"],function(e,t){"use strict";e["default"]=function(){var e=arguments.length<=0||void 0===arguments[0]?2e3:arguments[0],n=arguments.length<=1||void 0===arguments[1]?0:arguments[1];return new t["default"].RSVP.Promise(function(t){var r=n+Math.random()*(e-n);setTimeout(t,r)})}}),define("dummy/utils/sample-data",["exports"],function(e){"use strict";var t=[{id:1,name:"Yahoo HQ, Building A"},{id:2,name:"Yahoo HQ, Building B"},{id:3,name:"Yahoo HQ, Building C"}],n=[{id:1,name:"Yahoo Inc",buildings:[1,2,3]}];e.BUILDINGS=t,e.COMPANIES=n}),define("dummy/config/environment",["ember"],function(e){var t="dummy";try{var n=t+"/config/environment",r=e["default"].$('meta[name="'+n+'"]').attr("content"),a=JSON.parse(unescape(r));return{"default":a}}catch(i){throw new Error('Could not read config from meta tag with name "'+n+'".')}}),runningTests?require("dummy/tests/test-helper"):require("dummy/app")["default"].create({LOG_TRANSITIONS:!0,LOG_TRANSITIONS_INTERNAL:!0,name:"ember-perf",version:"0.0.8+23c608fb"});