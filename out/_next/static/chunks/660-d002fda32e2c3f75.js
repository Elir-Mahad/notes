(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[660],{8e3:function(e,t,r){"use strict";var n;Object.defineProperty(t,"__esModule",{value:!0}),t.AmpStateContext=void 0;var o=((n=r(7294))&&n.__esModule?n:{default:n}).default.createContext({});t.AmpStateContext=o},5646:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isInAmpMode=i,t.useAmp=function(){return i(o.default.useContext(a.AmpStateContext))};var n,o=(n=r(7294))&&n.__esModule?n:{default:n},a=r(8e3);function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,r=void 0!==t&&t,n=e.hybrid,o=void 0!==n&&n,a=e.hasQuery,i=void 0!==a&&a;return r||o&&i}},2717:function(e,t,r){"use strict";var n=r(930);function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}Object.defineProperty(t,"__esModule",{value:!0}),t.defaultHead=u,t.default=void 0;var a,i=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(7294)),s=(a=r(1585))&&a.__esModule?a:{default:a},h=r(8e3),c=r(5850),l=r(5646);function u(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[i.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(i.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function d(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===i.default.Fragment?e.concat(i.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var p=["name","httpEquiv","charSet","itemProp"];function f(e,t){return e.reduce((function(e,t){var r=i.default.Children.toArray(t.props.children);return e.concat(r)}),[]).reduce(d,[]).reverse().concat(u(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,r=new Set,n={};return function(o){var a=!0,i=!1;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){i=!0;var s=o.key.slice(o.key.indexOf("$")+1);e.has(s)?a=!1:e.add(s)}switch(o.type){case"title":case"base":t.has(o.type)?a=!1:t.add(o.type);break;case"meta":for(var h=0,c=p.length;h<c;h++){var l=p[h];if(o.props.hasOwnProperty(l))if("charSet"===l)r.has(l)?a=!1:r.add(l);else{var u=o.props[l],d=n[l]||new Set;"name"===l&&i||!d.has(u)?(d.add(u),n[l]=d):a=!1}}}return a}}()).reverse().map((function(e,r){var a=e.key||r;if(!t.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some((function(t){return e.props.href.startsWith(t)}))){var s=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e.props||{});return s["data-href"]=s.href,s.href=void 0,s["data-optimized-fonts"]=!0,i.default.cloneElement(e,s)}return i.default.cloneElement(e,{key:a})}))}var m=function(e){var t=e.children,r=i.useContext(h.AmpStateContext),n=i.useContext(c.HeadManagerContext);return i.default.createElement(s.default,{reduceComponentsToState:f,headManager:n,inAmpMode:l.isInAmpMode(r)},t)};t.default=m},1585:function(e,t,r){"use strict";var n=r(7980),o=r(3227),a=r(8361),i=(r(2191),r(5971)),s=r(2715),h=r(1193);function c(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=h(e);if(t){var o=h(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return s(this,r)}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(7294));var u=function(e){i(r,e);var t=c(r);function r(e){var a;return o(this,r),(a=t.call(this,e)).emitChange=function(){a._hasHeadManager&&a.props.headManager.updateHead(a.props.reduceComponentsToState(n(a.props.headManager.mountedInstances),a.props))},a._hasHeadManager=a.props.headManager&&a.props.headManager.mountedInstances,a}return a(r,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),r}(l.Component);t.default=u},8660:function(e,t,r){"use strict";r.r(t);var n=r(9008),o=r(3401),a=r(214),i=r.n(a),s=r(5893);t.default=function(){return(0,s.jsxs)("div",{children:[(0,s.jsxs)(n.default,{children:[(0,s.jsx)("title",{children:"How to code with other people"}),(0,s.jsx)("meta",{name:"keywords",content:"Github, Git, frontend development, JavaScript, Tutorial, Pair progamming"}),(0,s.jsx)("meta",{name:"description",content:"Programming with other people. Github workflow. Pair programming."}),(0,s.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300&display=swap",rel:"stylesheet"})]}),(0,s.jsx)(o.DZ,{className:i().weight100,children:"How to code with other people"}),(0,s.jsxs)(o.HK,{children:[(0,s.jsxs)(o.cj,{children:["When i was learning how to code, i spent a lot of time coding by myself. During this time, the one question that i consistently asked myself was:"," ",(0,s.jsx)("span",{style:{color:"darkblue"},children:"Is the code that i'm writing going to work ?"})," ","No other questions occupied my mind. Everytime that my code worked, i felt a sense of accomplishment; and everytime that it didn't work, i found myself haunted by the new question:"," ",(0,s.jsx)("span",{style:{color:"darkblue"},children:"Why didn't it work ? "})]}),(0,s.jsxs)(o.cj,{children:["Eventually, i started to collaborate with other developers; and here, i found myself haunted by a new set of questions:",(0,s.jsx)("span",{style:{color:"darkblue"},children:"Can another person understand my coding process, by simply reading my commits ?"})," ","This question indicated a major philosophical shift in my persepective. I'll dig into this shift, and its meaning, in another post. For now, i will leave you with a set of instructions that i often return to whenever i'm coding with others."]}),(0,s.jsx)(o.cj,{children:"1. Pull the repo"}),(0,s.jsx)(o.ro,{children:"If the main code is in the branch \u2018master\u2019 then "}),(0,s.jsx)(o.EK,{children:"git pull master"}),(0,s.jsx)(o.cj,{children:"2. Work on a issues"}),(0,s.jsx)(o.ro,{children:"Before you create a branch, write an issue outlining all the new tasks / features that you will be coding out."}),(0,s.jsx)(o.cj,{children:"3. Create a branch of the master branch"}),(0,s.jsx)(o.ro,{children:"For example, if you want to create a branch called header of the master branch, first make sure that you are on the master branch:"}),(0,s.jsx)(o.EK,{children:"git branch"}),(0,s.jsx)(o.ro,{children:"terminal response: "}),(0,s.jsx)(o.EK,{children:"master"}),(0,s.jsx)(o.ro,{children:"Then create the header branch:"}),(0,s.jsx)(o.EK,{children:"git branch header"}),(0,s.jsx)(o.ro,{children:"Enter the header branch:"}),(0,s.jsx)(o.EK,{children:"git checkout header"}),(0,s.jsx)(o.ro,{children:"Check which branch you are currenlty in:"}),(0,s.jsx)(o.EK,{children:"git branch"}),(0,s.jsx)(o.ro,{children:"Terminal response:"}),(0,s.jsx)(o.EK,{children:"Switched to branch 'header'"}),(0,s.jsx)("litem",{children:"Finally, write the code for the header feature in this branch."}),(0,s.jsx)(o.cj,{children:"4. Push your new branch into the master branch:"}),(0,s.jsx)(o.ro,{children:"For example, if you just finished writing all your code for the header branch then in the terminal write:"}),(0,s.jsxs)(o.EK,{children:["git add . ",(0,s.jsx)("br",{}),"git commit -m 'Add header code' ",(0,s.jsx)("br",{}),"git push ",(0,s.jsx)("br",{})]}),(0,s.jsx)(o.ro,{children:"If this is your first push, then you will get this response:"}),(0,s.jsx)(o.EK,{children:"git push --set-upstream origin master"}),(0,s.jsx)(o.ro,{children:"Copy and paste this into the terminal so that from now onwards whenever you want to push to your branch you will only type \u2018git push\u2019"}),(0,s.jsx)(o.cj,{children:"5. Create a pull request:"}),(0,s.jsx)(o.ro,{children:"Make sure that the branch that you are requesting to merge your branch into, is the correct branch."}),(0,s.jsx)(o.Cp,{children:"For example: If you are working on a branch called \u2018header\u2019 and you want to merge this header branch into the \u2018master\u2019, then on the top of the pull request it should say that you want to merge header into master."}),(0,s.jsx)(o.ro,{children:"In the pull request message, explain all the things that happened in this branch. Specify next steps."}),(0,s.jsx)(o.ro,{children:"Assign a reviewer. If your\u2019e working by yourself then you can leave this as blank."}),(0,s.jsx)(o.ro,{children:"Assign an assignee. If your\u2019e working by yourself assign this to yourself."}),(0,s.jsx)(o.ro,{children:"Fill out the other specifications."}),(0,s.jsx)(o.ro,{children:"Submit the pull request."}),(0,s.jsx)(o.ro,{children:"After its submitted, attach the issue name that was associated with this pull request in the add issue block on the bottom right."}),(0,s.jsx)(o.ro,{children:"If your\u2019e working with a group, wait for the reviewer to review it and either accept it or reject it."}),(0,s.jsx)(o.ro,{children:"If your\u2019e working by yourself, go to the bottom of the pull request and click on merge."}),(0,s.jsx)(o.cj,{children:"6. Create a new branch:"}),(0,s.jsx)(o.ro,{children:"Change the branch back to the master or whatever the branch that you're going to be merging into is called."}),(0,s.jsx)(o.ro,{children:"Switch to the master branch"}),(0,s.jsx)(o.EK,{children:"git checkout master"}),(0,s.jsx)(o.ro,{children:"Update your local repo master branch with the latest changes:"}),(0,s.jsx)(o.EK,{children:"git pull master"}),(0,s.jsx)(o.ro,{children:"This is an important step, especially when your\u2019e working with multiple people who are all working on different branches."}),(0,s.jsx)(o.Cp,{children:"For example: Imagine that you were working on the header branch, and another person was working on the menu branch."}),(0,s.jsx)(o.Cp,{children:"Then you finished working on the header branch, submitted it, and it got merged into the master."}),(0,s.jsx)(o.Cp,{children:"Also, the other person finished working on the menu branch, they submitted it, and it got merged into the master."}),(0,s.jsx)(o.Cp,{children:"Now, imagine your next branch is about creating a button."}),(0,s.jsx)(o.Cp,{children:"Before you create the button branch, you must first update your local repo with all the code that has been merged into it so far (ie, header + menu)."}),(0,s.jsx)(o.ro,{children:"If your local repo is updated, then you should see \u2018Already up to date\u2019 in the terminal."}),(0,s.jsx)(o.ro,{children:"Create a new branch called button, off the updated local repo master branch:"}),(0,s.jsx)(o.EK,{children:"git branch \u2018button\u2019"}),(0,s.jsx)(o.ro,{children:"Enter the new button branch:"}),(0,s.jsx)(o.EK,{children:"git checkout button"})]})]})}},214:function(e){e.exports={weight100:"Home_weight100__7sKo3"}},9008:function(e,t,r){e.exports=r(2717)}}]);