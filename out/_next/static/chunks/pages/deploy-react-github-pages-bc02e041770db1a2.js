(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[548],{8e3:function(e,t,r){"use strict";var n;Object.defineProperty(t,"__esModule",{value:!0}),t.AmpStateContext=void 0;var o=((n=r(7294))&&n.__esModule?n:{default:n}).default.createContext({});t.AmpStateContext=o},5646:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isInAmpMode=i,t.useAmp=function(){return i(o.default.useContext(a.AmpStateContext))};var n,o=(n=r(7294))&&n.__esModule?n:{default:n},a=r(8e3);function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,r=void 0!==t&&t,n=e.hybrid,o=void 0!==n&&n,a=e.hasQuery,i=void 0!==a&&a;return r||o&&i}},2717:function(e,t,r){"use strict";var n=r(930);function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}Object.defineProperty(t,"__esModule",{value:!0}),t.defaultHead=p,t.default=void 0;var a,i=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(7294)),s=(a=r(1585))&&a.__esModule?a:{default:a},c=r(8e3),u=r(5850),d=r(5646);function p(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[i.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(i.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function l(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===i.default.Fragment?e.concat(i.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var h=["name","httpEquiv","charSet","itemProp"];function f(e,t){return e.reduce((function(e,t){var r=i.default.Children.toArray(t.props.children);return e.concat(r)}),[]).reduce(l,[]).reverse().concat(p(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,r=new Set,n={};return function(o){var a=!0,i=!1;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){i=!0;var s=o.key.slice(o.key.indexOf("$")+1);e.has(s)?a=!1:e.add(s)}switch(o.type){case"title":case"base":t.has(o.type)?a=!1:t.add(o.type);break;case"meta":for(var c=0,u=h.length;c<u;c++){var d=h[c];if(o.props.hasOwnProperty(d))if("charSet"===d)r.has(d)?a=!1:r.add(d);else{var p=o.props[d],l=n[d]||new Set;"name"===d&&i||!l.has(p)?(l.add(p),n[d]=l):a=!1}}}return a}}()).reverse().map((function(e,r){var a=e.key||r;if(!t.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some((function(t){return e.props.href.startsWith(t)}))){var s=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e.props||{});return s["data-href"]=s.href,s.href=void 0,s["data-optimized-fonts"]=!0,i.default.cloneElement(e,s)}return i.default.cloneElement(e,{key:a})}))}var y=function(e){var t=e.children,r=i.useContext(c.AmpStateContext),n=i.useContext(u.HeadManagerContext);return i.default.createElement(s.default,{reduceComponentsToState:f,headManager:n,inAmpMode:d.isInAmpMode(r)},t)};t.default=y},1585:function(e,t,r){"use strict";var n=r(7980),o=r(3227),a=r(8361),i=(r(2191),r(5971)),s=r(2715),c=r(1193);function u(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=c(e);if(t){var o=c(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return s(this,r)}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var d=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(7294));var p=function(e){i(r,e);var t=u(r);function r(e){var a;return o(this,r),(a=t.call(this,e)).emitChange=function(){a._hasHeadManager&&a.props.headManager.updateHead(a.props.reduceComponentsToState(n(a.props.headManager.mountedInstances),a.props))},a._hasHeadManager=a.props.headManager&&a.props.headManager.mountedInstances,a}return a(r,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),r}(d.Component);t.default=p},4222:function(e,t,r){"use strict";r.r(t);var n=r(9008),o=r(3401),a=r(214),i=r.n(a),s=r(5893);t.default=function(){return(0,s.jsxs)("div",{children:[(0,s.jsxs)(n.default,{children:[(0,s.jsx)("title",{children:"How to deploy a react site on github pages"}),(0,s.jsx)("meta",{name:"keywords",content:"Github, Git, frontend development, JavaScript, React, Github pages, Deploy website"}),(0,s.jsx)("meta",{name:"description",content:"Instructions on how to deploy a react application on github pages"}),(0,s.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300&display=swap",rel:"stylesheet"})]}),(0,s.jsx)(o.DZ,{className:i().weight100,children:"How to deploy a react site on github pages"}),(0,s.jsxs)(o.HK,{children:[(0,s.jsx)(o.cj,{children:"1. Connect your local folder to your repo and make your first commit."}),(0,s.jsx)(o.cj,{children:"2. Add github pages dependency."}),(0,s.jsx)(o.EK,{children:"yarn add gh-pages"}),(0,s.jsx)(o.cj,{children:"3. Grab github pages url."}),(0,s.jsx)(o.ro,{children:"Go into the settings of your repository."}),(0,s.jsx)(o.ro,{children:"Go into the pages tab."}),(0,s.jsx)(o.ro,{children:"Change the branch to master branch & click save."}),(0,s.jsx)(o.ro,{children:"Refresh the page, and you will see your react apps url."}),(0,s.jsx)(o.ro,{children:"Copy and paste the url."}),(0,s.jsx)(o.cj,{children:"4. Make edits to the package.json ."}),(0,s.jsx)(o.ro,{children:"Open the 'package.json' file."}),(0,s.jsx)(o.ro,{children:"In the package.json, under [ private : true ] type:"}),(0,s.jsx)(o.EK,{children:"'homepage': 'https://elir-mahad.github.io/reactapp/',"}),(0,s.jsx)(o.ro,{children:"In the package.json, in the scripts object, under [ eject : react-scripts-eject ] type:"}),(0,s.jsxs)(o.EK,{children:["'predeploy': 'yarn build',",(0,s.jsx)("br",{}),"'deploy': 'gh-pages -d build'"]}),(0,s.jsx)(o.cj,{children:"5. Deploy the app."}),(0,s.jsx)(o.ro,{children:"In the laptop or vsc terminal:"}),(0,s.jsxs)(o.EK,{children:[" ","git commit -m \u201cAdd Github Pages config.\u201d ",(0,s.jsx)("br",{}),"yarn run deploy"," "]}),(0,s.jsx)(o.ro,{children:"In the github website:"}),(0,s.jsx)(o.Cp,{children:"go to settings, enter the branches tab, and change the branch from master to gh-pages branch."}),(0,s.jsx)(o.Cp,{children:"Insert your react apps url into the browser. The react site should be live."}),(0,s.jsx)(o.cj,{children:" 6. To make changes to your app"}),(0,s.jsx)(o.ro,{children:"After pushing your code, in the terminal type: yarn run deploy."}),(0,s.jsx)(o.ro,{children:"yarn run deploy will update the github pages the site with the new changes."})]})]})}},2244:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/deploy-react-github-pages",function(){return r(4222)}])},214:function(e){e.exports={weight100:"Home_weight100__7sKo3",description:"Home_description__41Owk",oneLiner:"Home_oneLiner__S91zd",words:"Home_words__rk1Z1",word:"Home_word__3Rnwl",slideWords:"Home_slideWords__9Pq_g"}},9008:function(e,t,r){e.exports=r(2717)}},function(e){e.O(0,[774,888,179],(function(){return t=2244,e(e.s=t);var t}));var t=e.O();_N_E=t}]);