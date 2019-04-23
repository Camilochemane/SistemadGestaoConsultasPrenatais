/* dropdown49894-1554400546-form20887-1554400546-g2.boot8896-1554400546-g2.forms19375-1554400546-g21105-1554400546-transition13315-1554400546 */
/*!
 * # Semantic UI 2.2.11 - Transition
 * http://github.com/semantic-org/semantic-ui/
 *
 *
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 *
 */
!function(n,i,e,t){"use strict";i=void 0!==i&&i.Math==Math?i:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),n.fn.transition=function(){var t,a=n(this),o=a.selector||"",r=(new Date).getTime(),s=[],l=arguments,d=l[0],u=[].slice.call(arguments,1),c="string"==typeof d;i.requestAnimationFrame||i.mozRequestAnimationFrame||i.webkitRequestAnimationFrame||i.msRequestAnimationFrame;return a.each(function(i){var m,f,p,g,v,b,y,h,w,C=n(this),A=this;w={initialize:function(){m=w.get.settings.apply(A,l),g=m.className,p=m.error,v=m.metadata,h="."+m.namespace,y="module-"+m.namespace,f=C.data(y)||w,b=w.get.animationEndEvent(),c&&(c=w.invoke(d)),!1===c&&(w.verbose("Converted arguments into settings object",m),m.interval?w.delay(m.animate):w.animate(),w.instantiate())},instantiate:function(){w.verbose("Storing instance of module",w),f=w,C.data(y,f)},destroy:function(){w.verbose("Destroying previous module for",A),C.removeData(y)},refresh:function(){w.verbose("Refreshing display type on next animation"),delete w.displayType},forceRepaint:function(){w.verbose("Forcing element repaint");var n=C.parent(),i=C.next();0===i.length?C.detach().appendTo(n):C.detach().insertBefore(i)},repaint:function(){w.verbose("Repainting element");A.offsetWidth},delay:function(n){var e,t,o=w.get.animationDirection();o||(o=w.can.transition()?w.get.direction():"static"),n=void 0!==n?n:m.interval,e="auto"==m.reverse&&o==g.outward,t=e||1==m.reverse?(a.length-i)*m.interval:i*m.interval,w.debug("Delaying animation by",t),setTimeout(w.animate,t)},animate:function(n){if(m=n||m,!w.is.supported())return w.error(p.support),!1;if(w.debug("Preparing animation",m.animation),w.is.animating()){if(m.queue)return!m.allowRepeats&&w.has.direction()&&w.is.occurring()&&!0!==w.queuing?w.debug("Animation is currently occurring, preventing queueing same animation",m.animation):w.queue(m.animation),!1;if(!m.allowRepeats&&w.is.occurring())return w.debug("Animation is already occurring, will not execute repeated animation",m.animation),!1;w.debug("New animation started, completing previous early",m.animation),f.complete()}w.can.animate()?w.set.animating(m.animation):w.error(p.noAnimation,m.animation,A)},reset:function(){w.debug("Resetting animation to beginning conditions"),w.remove.animationCallbacks(),w.restore.conditions(),w.remove.animating()},queue:function(n){w.debug("Queueing animation of",n),w.queuing=!0,C.one(b+".queue"+h,function(){w.queuing=!1,w.repaint(),w.animate.apply(this,m)})},complete:function(n){w.debug("Animation complete",m.animation),w.remove.completeCallback(),w.remove.failSafe(),w.is.looping()||(w.is.outward()?(w.verbose("Animation is outward, hiding element"),w.restore.conditions(),w.hide()):w.is.inward()?(w.verbose("Animation is outward, showing element"),w.restore.conditions(),w.show()):(w.verbose("Static animation completed"),w.restore.conditions(),m.onComplete.call(A)))},force:{visible:function(){var n=C.attr("style"),i=w.get.userStyle(),e=w.get.displayType(),t=i+"display: "+e+" !important;",a=C.css("display"),o=void 0===n||""===n;a!==e?(w.verbose("Overriding default display to show element",e),C.attr("style",t)):o&&C.removeAttr("style")},hidden:function(){var n=C.attr("style"),i=C.css("display"),e=void 0===n||""===n;"none"===i||w.is.hidden()?e&&C.removeAttr("style"):(w.verbose("Overriding default display to hide element"),C.css("display","none"))}},has:{direction:function(i){var e=!1;return i=i||m.animation,"string"==typeof i&&(i=i.split(" "),n.each(i,function(n,i){i!==g.inward&&i!==g.outward||(e=!0)})),e},inlineDisplay:function(){var i=C.attr("style")||"";return n.isArray(i.match(/display.*?;/,""))}},set:{animating:function(n){var i;w.remove.completeCallback(),n=n||m.animation,i=w.get.animationClass(n),w.save.animation(i),w.force.visible(),w.remove.hidden(),w.remove.direction(),w.start.animation(i)},duration:function(n,i){i=i||m.duration,((i="number"==typeof i?i+"ms":i)||0===i)&&(w.verbose("Setting animation duration",i),C.css({"animation-duration":i}))},direction:function(n){n=n||w.get.direction(),n==g.inward?w.set.inward():w.set.outward()},looping:function(){w.debug("Transition set to loop"),C.addClass(g.looping)},hidden:function(){C.addClass(g.transition).addClass(g.hidden)},inward:function(){w.debug("Setting direction to inward"),C.removeClass(g.outward).addClass(g.inward)},outward:function(){w.debug("Setting direction to outward"),C.removeClass(g.inward).addClass(g.outward)},visible:function(){C.addClass(g.transition).addClass(g.visible)}},start:{animation:function(n){n=n||w.get.animationClass(),w.debug("Starting tween",n),C.addClass(n).one(b+".complete"+h,w.complete),m.useFailSafe&&w.add.failSafe(),w.set.duration(m.duration),m.onStart.call(A)}},save:{animation:function(n){w.cache||(w.cache={}),w.cache.animation=n},displayType:function(n){"none"!==n&&C.data(v.displayType,n)},transitionExists:function(i,e){n.fn.transition.exists[i]=e,w.verbose("Saving existence of transition",i,e)}},restore:{conditions:function(){var n=w.get.currentAnimation();n&&(C.removeClass(n),w.verbose("Removing animation class",w.cache)),w.remove.duration()}},add:{failSafe:function(){var n=w.get.duration();w.timer=setTimeout(function(){C.triggerHandler(b)},n+m.failSafeDelay),w.verbose("Adding fail safe timer",w.timer)}},remove:{animating:function(){C.removeClass(g.animating)},animationCallbacks:function(){w.remove.queueCallback(),w.remove.completeCallback()},queueCallback:function(){C.off(".queue"+h)},completeCallback:function(){C.off(".complete"+h)},display:function(){C.css("display","")},direction:function(){C.removeClass(g.inward).removeClass(g.outward)},duration:function(){C.css("animation-duration","")},failSafe:function(){w.verbose("Removing fail safe timer",w.timer),w.timer&&clearTimeout(w.timer)},hidden:function(){C.removeClass(g.hidden)},visible:function(){C.removeClass(g.visible)},looping:function(){w.debug("Transitions are no longer looping"),w.is.looping()&&(w.reset(),C.removeClass(g.looping))},transition:function(){C.removeClass(g.visible).removeClass(g.hidden)}},get:{settings:function(i,e,t){return"object"==typeof i?n.extend(!0,{},n.fn.transition.settings,i):"function"==typeof t?n.extend({},n.fn.transition.settings,{animation:i,onComplete:t,duration:e}):"string"==typeof e||"number"==typeof e?n.extend({},n.fn.transition.settings,{animation:i,duration:e}):"object"==typeof e?n.extend({},n.fn.transition.settings,e,{animation:i}):"function"==typeof e?n.extend({},n.fn.transition.settings,{animation:i,onComplete:e}):n.extend({},n.fn.transition.settings,{animation:i})},animationClass:function(n){var i=n||m.animation,e=w.can.transition()&&!w.has.direction()?w.get.direction()+" ":"";return g.animating+" "+g.transition+" "+e+i},currentAnimation:function(){return!(!w.cache||void 0===w.cache.animation)&&w.cache.animation},currentDirection:function(){return w.is.inward()?g.inward:g.outward},direction:function(){return w.is.hidden()||!w.is.visible()?g.inward:g.outward},animationDirection:function(i){var e;return i=i||m.animation,"string"==typeof i&&(i=i.split(" "),n.each(i,function(n,i){i===g.inward?e=g.inward:i===g.outward&&(e=g.outward)})),e||!1},duration:function(n){return n=n||m.duration,!1===n&&(n=C.css("animation-duration")||0),"string"==typeof n?n.indexOf("ms")>-1?parseFloat(n):1e3*parseFloat(n):n},displayType:function(n){return n=void 0===n||n,m.displayType?m.displayType:(n&&void 0===C.data(v.displayType)&&w.can.transition(!0),C.data(v.displayType))},userStyle:function(n){return n=n||C.attr("style")||"",n.replace(/display.*?;/,"")},transitionExists:function(i){return n.fn.transition.exists[i]},animationStartEvent:function(){var n,i=e.createElement("div"),t={animation:"animationstart",OAnimation:"oAnimationStart",MozAnimation:"mozAnimationStart",WebkitAnimation:"webkitAnimationStart"};for(n in t)if(void 0!==i.style[n])return t[n];return!1},animationEndEvent:function(){var n,i=e.createElement("div"),t={animation:"animationend",OAnimation:"oAnimationEnd",MozAnimation:"mozAnimationEnd",WebkitAnimation:"webkitAnimationEnd"};for(n in t)if(void 0!==i.style[n])return t[n];return!1}},can:{transition:function(i){var e,t,a,o,r,s,l=m.animation,d=w.get.transitionExists(l),u=w.get.displayType(!1);if(void 0===d||i){if(w.verbose("Determining whether animation exists"),e=C.attr("class"),t=C.prop("tagName"),a=n("<"+t+" />").addClass(e).insertAfter(C),o=a.addClass(l).removeClass(g.inward).removeClass(g.outward).addClass(g.animating).addClass(g.transition).css("animationName"),r=a.addClass(g.inward).css("animationName"),u||(u=a.attr("class",e).removeAttr("style").removeClass(g.hidden).removeClass(g.visible).show().css("display"),w.verbose("Determining final display state",u),w.save.displayType(u)),a.remove(),o!=r)w.debug("Direction exists for animation",l),s=!0;else{if("none"==o||!o)return void w.debug("No animation defined in css",l);w.debug("Static animation found",l,u),s=!1}w.save.transitionExists(l,s)}return void 0!==d?d:s},animate:function(){return void 0!==w.can.transition()}},is:{animating:function(){return C.hasClass(g.animating)},inward:function(){return C.hasClass(g.inward)},outward:function(){return C.hasClass(g.outward)},looping:function(){return C.hasClass(g.looping)},occurring:function(n){return n=n||m.animation,n="."+n.replace(" ","."),C.filter(n).length>0},visible:function(){return C.is(":visible")},hidden:function(){return"hidden"===C.css("visibility")},supported:function(){return!1!==b}},hide:function(){w.verbose("Hiding element"),w.is.animating()&&w.reset(),A.blur(),w.remove.display(),w.remove.visible(),w.set.hidden(),w.force.hidden(),m.onHide.call(A),m.onComplete.call(A)},show:function(n){w.verbose("Showing element",n),w.remove.hidden(),w.set.visible(),w.force.visible(),m.onShow.call(A),m.onComplete.call(A)},toggle:function(){w.is.visible()?w.hide():w.show()},stop:function(){w.debug("Stopping current animation"),C.triggerHandler(b)},stopAll:function(){w.debug("Stopping all animation"),w.remove.queueCallback(),C.triggerHandler(b)},clear:{queue:function(){w.debug("Clearing animation queue"),w.remove.queueCallback()}},enable:function(){w.verbose("Starting animation"),C.removeClass(g.disabled)},disable:function(){w.debug("Stopping animation"),C.addClass(g.disabled)},setting:function(i,e){if(w.debug("Changing setting",i,e),n.isPlainObject(i))n.extend(!0,m,i);else{if(void 0===e)return m[i];n.isPlainObject(m[i])?n.extend(!0,m[i],e):m[i]=e}},internal:function(i,e){if(n.isPlainObject(i))n.extend(!0,w,i);else{if(void 0===e)return w[i];w[i]=e}},debug:function(){!m.silent&&m.debug&&(m.performance?w.performance.log(arguments):(w.debug=Function.prototype.bind.call(console.info,console,m.name+":"),w.debug.apply(console,arguments)))},verbose:function(){!m.silent&&m.verbose&&m.debug&&(m.performance?w.performance.log(arguments):(w.verbose=Function.prototype.bind.call(console.info,console,m.name+":"),w.verbose.apply(console,arguments)))},error:function(){m.silent||(w.error=Function.prototype.bind.call(console.error,console,m.name+":"),w.error.apply(console,arguments))},performance:{log:function(n){var i,e,t;m.performance&&(i=(new Date).getTime(),t=r||i,e=i-t,r=i,s.push({Name:n[0],Arguments:[].slice.call(n,1)||"",Element:A,"Execution Time":e})),clearTimeout(w.performance.timer),w.performance.timer=setTimeout(w.performance.display,500)},display:function(){var i=m.name+":",e=0;r=!1,clearTimeout(w.performance.timer),n.each(s,function(n,i){e+=i["Execution Time"]}),i+=" "+e+"ms",o&&(i+=" '"+o+"'"),a.length>1&&(i+=" ("+a.length+")"),(void 0!==console.group||void 0!==console.table)&&s.length>0&&(console.groupCollapsed(i),console.table?console.table(s):n.each(s,function(n,i){console.log(i.Name+": "+i["Execution Time"]+"ms")}),console.groupEnd()),s=[]}},invoke:function(i,e,a){var o,r,s,l=f;return e=e||u,a=A||a,"string"==typeof i&&void 0!==l&&(i=i.split(/[\. ]/),o=i.length-1,n.each(i,function(e,t){var a=e!=o?t+i[e+1].charAt(0).toUpperCase()+i[e+1].slice(1):i;if(n.isPlainObject(l[a])&&e!=o)l=l[a];else{if(void 0!==l[a])return r=l[a],!1;if(!n.isPlainObject(l[t])||e==o)return void 0!==l[t]&&(r=l[t],!1);l=l[t]}})),n.isFunction(r)?s=r.apply(a,e):void 0!==r&&(s=r),n.isArray(t)?t.push(s):void 0!==t?t=[t,s]:void 0!==s&&(t=s),void 0!==r&&r}},w.initialize()}),void 0!==t?t:this},n.fn.transition.exists={},n.fn.transition.settings={name:"Transition",silent:!1,debug:!1,verbose:!1,performance:!0,namespace:"transition",interval:0,reverse:"auto",onStart:function(){},onComplete:function(){},onShow:function(){},onHide:function(){},useFailSafe:!0,failSafeDelay:100,allowRepeats:!1,displayType:!1,animation:"fade",duration:!1,queue:!0,metadata:{displayType:"display"},className:{animating:"animating",disabled:"disabled",hidden:"hidden",inward:"in",loading:"loading",looping:"looping",outward:"out",transition:"transition",visible:"visible"},error:{noAnimation:"Element is no longer attached to DOM. Unable to animate.  Use silent setting to surpress this warning in production.",repeated:"That animation is already occurring, cancelling repeated animation",method:"The method you called is not defined",support:"This browser does not support CSS animations"}}}(jQuery,window,document);
/*!
 * # Semantic UI 2.2.11 - Form Validation
 * http://github.com/semantic-org/semantic-ui/
 *
 *
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 *
 */
!function(e,t,n,i){"use strict";t=void 0!==t&&t.Math==Math?t:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),e.fn.form=function(t){var i,r=e(this),a=r.selector||"",o=(new Date).getTime(),s=[],l=arguments[0],u=arguments[1],c="string"==typeof l,d=[].slice.call(arguments,1);return r.each(function(){var f,p,m,g,h,v,b,y,x,k,E,w,C,V,R,S,F,A,T,D=e(this),O=this,j=[],$=!1;T={initialize:function(){T.get.settings(),c?(void 0===A&&T.instantiate(),T.invoke(l)):(void 0!==A&&A.invoke("destroy"),T.verbose("Initializing form validation",D,y),T.bindEvents(),T.set.defaults(),T.instantiate())},instantiate:function(){T.verbose("Storing instance of module",T),A=T,D.data(S,T)},destroy:function(){T.verbose("Destroying previous module",A),T.removeEvents(),D.removeData(S)},refresh:function(){T.verbose("Refreshing selector cache"),f=D.find(E.field),p=D.find(E.group),m=D.find(E.message),g=D.find(E.prompt),h=D.find(E.submit),v=D.find(E.clear),b=D.find(E.reset)},submit:function(){T.verbose("Submitting form",D),D.submit()},attachEvents:function(t,n){n=n||"submit",e(t).on("click"+F,function(e){T[n](),e.preventDefault()})},bindEvents:function(){T.verbose("Attaching form events"),D.on("submit"+F,T.validate.form).on("blur"+F,E.field,T.event.field.blur).on("click"+F,E.submit,T.submit).on("click"+F,E.reset,T.reset).on("click"+F,E.clear,T.clear),y.keyboardShortcuts&&D.on("keydown"+F,E.field,T.event.field.keydown),f.each(function(){var t=e(this),n=t.prop("type"),i=T.get.changeEvent(n,t);e(this).on(i+F,T.event.field.change)})},clear:function(){f.each(function(){var t=e(this),n=t.parent(),i=t.closest(p),r=i.find(E.prompt),a=t.data(k.defaultValue)||"",o=n.is(E.uiCheckbox),s=n.is(E.uiDropdown);i.hasClass(w.error)&&(T.verbose("Resetting error on field",i),i.removeClass(w.error),r.remove()),s?(T.verbose("Resetting dropdown value",n,a),n.dropdown("clear")):o?t.prop("checked",!1):(T.verbose("Resetting field value",t,a),t.val(""))})},reset:function(){f.each(function(){var t=e(this),n=t.parent(),i=t.closest(p),r=i.find(E.prompt),a=t.data(k.defaultValue),o=n.is(E.uiCheckbox),s=n.is(E.uiDropdown),l=i.hasClass(w.error);void 0!==a&&(l&&(T.verbose("Resetting error on field",i),i.removeClass(w.error),r.remove()),s?(T.verbose("Resetting dropdown value",n,a),n.dropdown("restore defaults")):o?(T.verbose("Resetting checkbox value",n,a),t.prop("checked",a)):(T.verbose("Resetting field value",t,a),t.val(a)))})},determine:{isValid:function(){var t=!0;return e.each(x,function(e,n){T.validate.field(n,e,!0)||(t=!1)}),t}},is:{bracketedRule:function(e){return e.type&&e.type.match(y.regExp.bracket)},shorthandFields:function(e){var t=Object.keys(e),n=e[t[0]];return T.is.shorthandRules(n)},shorthandRules:function(t){return"string"==typeof t||e.isArray(t)},empty:function(e){return!e||0===e.length||(e.is('input[type="checkbox"]')?!e.is(":checked"):T.is.blank(e))},blank:function(t){return""===e.trim(t.val())},valid:function(t){var n=!0;return t?(T.verbose("Checking if field is valid",t),T.validate.field(x[t],t,!1)):(T.verbose("Checking if form is valid"),e.each(x,function(e,t){T.is.valid(e)||(n=!1)}),n)}},removeEvents:function(){D.off(F),f.off(F),h.off(F),f.off(F)},event:{field:{keydown:function(t){var n=e(this),i=t.which,r=n.is(E.input),a=n.is(E.checkbox),o=n.closest(E.uiDropdown).length>0,s={enter:13,escape:27};i==s.escape&&(T.verbose("Escape key pressed blurring field"),n.blur()),t.ctrlKey||i!=s.enter||!r||o||a||($||(n.one("keyup"+F,T.event.field.keyup),T.submit(),T.debug("Enter pressed on input submitting form")),$=!0)},keyup:function(){$=!1},blur:function(t){var n=e(this),i=n.closest(p),r=T.get.validation(n);i.hasClass(w.error)?(T.debug("Revalidating field",n,r),r&&T.validate.field(r)):"blur"!=y.on&&"change"!=y.on||r&&T.validate.field(r)},change:function(t){var n=e(this),i=n.closest(p),r=T.get.validation(n);r&&("change"==y.on||i.hasClass(w.error)&&y.revalidate)&&(clearTimeout(T.timer),T.timer=setTimeout(function(){T.debug("Revalidating field",n,T.get.validation(n)),T.validate.field(r)},y.delay))}}},get:{ancillaryValue:function(e){return!(!e.type||!e.value&&!T.is.bracketedRule(e))&&(void 0!==e.value?e.value:e.type.match(y.regExp.bracket)[1]+"")},ruleName:function(e){return T.is.bracketedRule(e)?e.type.replace(e.type.match(y.regExp.bracket)[0],""):e.type},changeEvent:function(e,t){return"checkbox"==e||"radio"==e||"hidden"==e||t.is("select")?"change":T.get.inputEvent()},inputEvent:function(){return void 0!==n.createElement("input").oninput?"input":void 0!==n.createElement("input").onpropertychange?"propertychange":"keyup"},fieldsFromShorthand:function(t){var n={};return e.each(t,function(t,i){"string"==typeof i&&(i=[i]),n[t]={rules:[]},e.each(i,function(e,i){n[t].rules.push({type:i})})}),n},prompt:function(e,t){var n,i,r,a=T.get.ruleName(e),o=T.get.ancillaryValue(e),s=e.prompt||y.prompt[a]||y.text.unspecifiedRule,l=-1!==s.search("{value}"),u=-1!==s.search("{name}");return(u||l)&&(i=T.get.field(t.identifier)),l&&(s=s.replace("{value}",i.val())),u&&(n=i.closest(E.group).find("label").eq(0),r=1==n.length?n.text():i.prop("placeholder")||y.text.unspecifiedField,s=s.replace("{name}",r)),s=s.replace("{identifier}",t.identifier),s=s.replace("{ruleValue}",o),e.prompt||T.verbose("Using default validation prompt for type",s,a),s},settings:function(){if(e.isPlainObject(t)){var n=Object.keys(t),i=n.length>0&&(void 0!==t[n[0]].identifier&&void 0!==t[n[0]].rules);i?(y=e.extend(!0,{},e.fn.form.settings,u),x=e.extend({},e.fn.form.settings.defaults,t),T.error(y.error.oldSyntax,O),T.verbose("Extending settings from legacy parameters",x,y)):(t.fields&&T.is.shorthandFields(t.fields)&&(t.fields=T.get.fieldsFromShorthand(t.fields)),y=e.extend(!0,{},e.fn.form.settings,t),x=e.extend({},e.fn.form.settings.defaults,y.fields),T.verbose("Extending settings",x,y))}else y=e.fn.form.settings,x=e.fn.form.settings.defaults,T.verbose("Using default form validation",x,y);R=y.namespace,k=y.metadata,E=y.selector,w=y.className,C=y.regExp,V=y.error,S="module-"+R,F="."+R,A=D.data(S),T.refresh()},field:function(t){return T.verbose("Finding field with identifier",t),t=T.escape.string(t),f.filter("#"+t).length>0?f.filter("#"+t):f.filter('[name="'+t+'"]').length>0?f.filter('[name="'+t+'"]'):f.filter('[name="'+t+'[]"]').length>0?f.filter('[name="'+t+'[]"]'):f.filter("[data-"+k.validate+'="'+t+'"]').length>0?f.filter("[data-"+k.validate+'="'+t+'"]'):e("<input/>")},fields:function(t){var n=e();return e.each(t,function(e,t){n=n.add(T.get.field(t))}),n},validation:function(t){var n,i;return!!x&&(e.each(x,function(e,r){i=r.identifier||e,T.get.field(i)[0]==t[0]&&(r.identifier=i,n=r)}),n||!1)},value:function(e){var t,n=[];return n.push(e),t=T.get.values.call(O,n),t[e]},values:function(t){var n=e.isArray(t)?T.get.fields(t):f,i={};return n.each(function(t,n){var r=e(n),a=(r.prop("type"),r.prop("name")),o=r.val(),s=r.is(E.checkbox),l=r.is(E.radio),u=-1!==a.indexOf("[]"),c=!!s&&r.is(":checked");a&&(u?(a=a.replace("[]",""),i[a]||(i[a]=[]),s?c?i[a].push(o||!0):i[a].push(!1):i[a].push(o)):l?void 0===i[a]&&(i[a]=!!c):i[a]=s?!!c&&(o||!0):o)}),i}},has:{field:function(e){return T.verbose("Checking for existence of a field with identifier",e),e=T.escape.string(e),"string"!=typeof e&&T.error(V.identifier,e),f.filter("#"+e).length>0||(f.filter('[name="'+e+'"]').length>0||f.filter("[data-"+k.validate+'="'+e+'"]').length>0)}},escape:{string:function(e){return e=String(e),e.replace(C.escape,"\\$&")}},add:{rule:function(e,t){T.add.field(e,t)},field:function(t,n){var i={};T.is.shorthandRules(n)?(n=e.isArray(n)?n:[n],i[t]={rules:[]},e.each(n,function(e,n){i[t].rules.push({type:n})})):i[t]=n,x=e.extend({},x,i),T.debug("Adding rules",i,x)},fields:function(t){var n;n=t&&T.is.shorthandFields(t)?T.get.fieldsFromShorthand(t):t,x=e.extend({},x,n)},prompt:function(t,n){var i=T.get.field(t),r=i.closest(p),a=r.children(E.prompt),o=0!==a.length;n="string"==typeof n?[n]:n,T.verbose("Adding field error state",t),r.addClass(w.error),y.inline&&(o||(a=y.templates.prompt(n),a.appendTo(r)),a.html(n[0]),o?T.verbose("Inline errors are disabled, no inline error added",t):y.transition&&void 0!==e.fn.transition&&D.transition("is supported")?(T.verbose("Displaying error with css transition",y.transition),a.transition(y.transition+" in",y.duration)):(T.verbose("Displaying error with fallback javascript animation"),a.fadeIn(y.duration)))},errors:function(e){T.debug("Adding form error messages",e),T.set.error(),m.html(y.templates.error(e))}},remove:{rule:function(t,n){var i=e.isArray(n)?n:[n];if(void 0==n)return T.debug("Removed all rules"),void(x[t].rules=[]);void 0!=x[t]&&e.isArray(x[t].rules)&&e.each(x[t].rules,function(e,n){-1!==i.indexOf(n.type)&&(T.debug("Removed rule",n.type),x[t].rules.splice(e,1))})},field:function(t){var n=e.isArray(t)?t:[t];e.each(n,function(e,t){T.remove.rule(t)})},rules:function(t,n){e.isArray(t)?e.each(fields,function(e,t){T.remove.rule(t,n)}):T.remove.rule(t,n)},fields:function(e){T.remove.field(e)},prompt:function(t){var n=T.get.field(t),i=n.closest(p),r=i.children(E.prompt);i.removeClass(w.error),y.inline&&r.is(":visible")&&(T.verbose("Removing prompt for field",t),y.transition&&void 0!==e.fn.transition&&D.transition("is supported")?r.transition(y.transition+" out",y.duration,function(){r.remove()}):r.fadeOut(y.duration,function(){r.remove()}))}},set:{success:function(){D.removeClass(w.error).addClass(w.success)},defaults:function(){f.each(function(){var t=e(this),n=t.filter(E.checkbox).length>0,i=n?t.is(":checked"):t.val();t.data(k.defaultValue,i)})},error:function(){D.removeClass(w.success).addClass(w.error)},value:function(e,t){var n={};return n[e]=t,T.set.values.call(O,n)},values:function(t){e.isEmptyObject(t)||e.each(t,function(t,n){var i,r=T.get.field(t),a=r.parent(),o=e.isArray(n),s=a.is(E.uiCheckbox),l=a.is(E.uiDropdown),u=r.is(E.radio)&&s,c=r.length>0;c&&(o&&s?(T.verbose("Selecting multiple",n,r),a.checkbox("uncheck"),e.each(n,function(e,t){i=r.filter('[value="'+t+'"]'),a=i.parent(),i.length>0&&a.checkbox("check")})):u?(T.verbose("Selecting radio value",n,r),r.filter('[value="'+n+'"]').parent(E.uiCheckbox).checkbox("check")):s?(T.verbose("Setting checkbox value",n,a),!0===n?a.checkbox("check"):a.checkbox("uncheck")):l?(T.verbose("Setting dropdown value",n,a),a.dropdown("set selected",n)):(T.verbose("Setting field value",n,r),r.val(n)))})}},validate:{form:function(e,t){var n=T.get.values();if($)return!1;if(j=[],T.determine.isValid()){if(T.debug("Form has no validation errors, submitting"),T.set.success(),!0!==t)return y.onSuccess.call(O,e,n)}else if(T.debug("Form has errors"),T.set.error(),y.inline||T.add.errors(j),void 0!==D.data("moduleApi")&&e.stopImmediatePropagation(),!0!==t)return y.onFailure.call(O,j,n)},field:function(t,n,i){i=void 0===i||i,"string"==typeof t&&(T.verbose("Validating field",t),n=t,t=x[t]);var r=t.identifier||n,a=T.get.field(r),o=!!t.depends&&T.get.field(t.depends),s=!0,l=[];return t.identifier||(T.debug("Using field name as identifier",r),t.identifier=r),a.prop("disabled")?(T.debug("Field is disabled. Skipping",r),s=!0):t.optional&&T.is.blank(a)?(T.debug("Field is optional and blank. Skipping",r),s=!0):t.depends&&T.is.empty(o)?(T.debug("Field depends on another value that is not present or empty. Skipping",o),s=!0):void 0!==t.rules&&e.each(t.rules,function(e,n){T.has.field(r)&&!T.validate.rule(t,n)&&(T.debug("Field is invalid",r,n.type),l.push(T.get.prompt(n,t)),s=!1)}),s?(i&&(T.remove.prompt(r,l),y.onValid.call(a)),!0):(i&&(j=j.concat(l),T.add.prompt(r,l),y.onInvalid.call(a,l)),!1)},rule:function(t,n){var i=T.get.field(t.identifier),r=(n.type,i.val()),a=T.get.ancillaryValue(n),o=T.get.ruleName(n),s=y.rules[o];return e.isFunction(s)?(r=void 0===r||""===r||null===r?"":e.trim(r+""),s.call(i,r,a)):void T.error(V.noRule,o)}},setting:function(t,n){if(e.isPlainObject(t))e.extend(!0,y,t);else{if(void 0===n)return y[t];y[t]=n}},internal:function(t,n){if(e.isPlainObject(t))e.extend(!0,T,t);else{if(void 0===n)return T[t];T[t]=n}},debug:function(){!y.silent&&y.debug&&(y.performance?T.performance.log(arguments):(T.debug=Function.prototype.bind.call(console.info,console,y.name+":"),T.debug.apply(console,arguments)))},verbose:function(){!y.silent&&y.verbose&&y.debug&&(y.performance?T.performance.log(arguments):(T.verbose=Function.prototype.bind.call(console.info,console,y.name+":"),T.verbose.apply(console,arguments)))},error:function(){y.silent||(T.error=Function.prototype.bind.call(console.error,console,y.name+":"),T.error.apply(console,arguments))},performance:{log:function(e){var t,n,i;y.performance&&(t=(new Date).getTime(),i=o||t,n=t-i,o=t,s.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:O,"Execution Time":n})),clearTimeout(T.performance.timer),T.performance.timer=setTimeout(T.performance.display,500)},display:function(){var t=y.name+":",n=0;o=!1,clearTimeout(T.performance.timer),e.each(s,function(e,t){n+=t["Execution Time"]}),t+=" "+n+"ms",a&&(t+=" '"+a+"'"),r.length>1&&(t+=" ("+r.length+")"),(void 0!==console.group||void 0!==console.table)&&s.length>0&&(console.groupCollapsed(t),console.table?console.table(s):e.each(s,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms")}),console.groupEnd()),s=[]}},invoke:function(t,n,r){var a,o,s,l=A;return n=n||d,r=O||r,"string"==typeof t&&void 0!==l&&(t=t.split(/[\. ]/),a=t.length-1,e.each(t,function(n,i){var r=n!=a?i+t[n+1].charAt(0).toUpperCase()+t[n+1].slice(1):t;if(e.isPlainObject(l[r])&&n!=a)l=l[r];else{if(void 0!==l[r])return o=l[r],!1;if(!e.isPlainObject(l[i])||n==a)return void 0!==l[i]&&(o=l[i],!1);l=l[i]}})),e.isFunction(o)?s=o.apply(r,n):void 0!==o&&(s=o),e.isArray(i)?i.push(s):void 0!==i?i=[i,s]:void 0!==s&&(i=s),o}},T.initialize()}),void 0!==i?i:this},e.fn.form.settings={name:"Form",namespace:"form",debug:!1,verbose:!1,performance:!0,fields:!1,keyboardShortcuts:!0,on:"submit",inline:!1,delay:200,revalidate:!0,transition:"scale",duration:200,onValid:function(){},onInvalid:function(){},onSuccess:function(){return!0},onFailure:function(){return!1},metadata:{defaultValue:"default",validate:"validate"},regExp:{htmlID:/^[a-zA-Z][\w:.-]*$/g,bracket:/\[(.*)\]/i,decimal:/^\d+\.?\d*$/,email:/^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i,escape:/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,flags:/^\/(.*)\/(.*)?/,integer:/^\-?\d+$/,number:/^\-?\d*(\.\d+)?$/,url:/(https?:\/\/(?:www\.|(?!www))[^\s\.]+\.[^\s]{2,}|www\.[^\s]+\.[^\s]{2,})/i},text:{unspecifiedRule:"Please enter a valid value",unspecifiedField:"This field"},prompt:{empty:"{name} must have a value",checked:"{name} must be checked",email:"{name} must be a valid e-mail",url:"{name} must be a valid url",regExp:"{name} is not formatted correctly",integer:"{name} must be an integer",decimal:"{name} must be a decimal number",number:"{name} must be set to a number",is:'{name} must be "{ruleValue}"',isExactly:'{name} must be exactly "{ruleValue}"',not:'{name} cannot be set to "{ruleValue}"',notExactly:'{name} cannot be set to exactly "{ruleValue}"',contain:'{name} cannot contain "{ruleValue}"',containExactly:'{name} cannot contain exactly "{ruleValue}"',doesntContain:'{name} must contain  "{ruleValue}"',doesntContainExactly:'{name} must contain exactly "{ruleValue}"',minLength:"{name} must be at least {ruleValue} characters",length:"{name} must be at least {ruleValue} characters",exactLength:"{name} must be exactly {ruleValue} characters",maxLength:"{name} cannot be longer than {ruleValue} characters",match:"{name} must match {ruleValue} field",different:"{name} must have a different value than {ruleValue} field",creditCard:"{name} must be a valid credit card number",minCount:"{name} must have at least {ruleValue} choices",exactCount:"{name} must have exactly {ruleValue} choices",maxCount:"{name} must have {ruleValue} or less choices"},selector:{checkbox:'input[type="checkbox"], input[type="radio"]',clear:".clear",field:"input, textarea, select",group:".field",input:"input",message:".error.message",prompt:".prompt.label",radio:'input[type="radio"]',reset:'.reset:not([type="reset"])',submit:'.submit:not([type="submit"])',uiCheckbox:".ui.checkbox",uiDropdown:".ui.dropdown"},className:{error:"error",label:"ui prompt label",pressed:"down",success:"success"},error:{identifier:"You must specify a string identifier for each field",method:"The method you called is not defined.",noRule:"There is no rule matching the one you specified",oldSyntax:"Starting in 2.0 forms now only take a single settings object. Validation settings converted to new syntax automatically."},templates:{error:function(t){var n='<ul class="list">';return e.each(t,function(e,t){n+="<li>"+t+"</li>"}),n+="</ul>",e(n)},prompt:function(t){return e("<div/>").addClass("ui basic red pointing prompt label").html(t[0])}},rules:{empty:function(t){return!(void 0===t||""===t||e.isArray(t)&&0===t.length)},checked:function(){return e(this).filter(":checked").length>0},email:function(t){return e.fn.form.settings.regExp.email.test(t)},url:function(t){return e.fn.form.settings.regExp.url.test(t)},regExp:function(t,n){if(n instanceof RegExp)return t.match(n);var i,r=n.match(e.fn.form.settings.regExp.flags);return r&&(n=r.length>=2?r[1]:n,i=r.length>=3?r[2]:""),t.match(new RegExp(n,i))},integer:function(t,n){var i,r,a,o=e.fn.form.settings.regExp.integer;return n&&-1===["",".."].indexOf(n)&&(-1==n.indexOf("..")?o.test(n)&&(i=r=n-0):(a=n.split("..",2),o.test(a[0])&&(i=a[0]-0),o.test(a[1])&&(r=a[1]-0))),o.test(t)&&(void 0===i||t>=i)&&(void 0===r||t<=r)},decimal:function(t){return e.fn.form.settings.regExp.decimal.test(t)},number:function(t){return e.fn.form.settings.regExp.number.test(t)},is:function(e,t){return t="string"==typeof t?t.toLowerCase():t,(e="string"==typeof e?e.toLowerCase():e)==t},isExactly:function(e,t){return e==t},not:function(e,t){return e="string"==typeof e?e.toLowerCase():e,t="string"==typeof t?t.toLowerCase():t,e!=t},notExactly:function(e,t){return e!=t},contains:function(t,n){return n=n.replace(e.fn.form.settings.regExp.escape,"\\$&"),-1!==t.search(new RegExp(n,"i"))},containsExactly:function(t,n){return n=n.replace(e.fn.form.settings.regExp.escape,"\\$&"),-1!==t.search(new RegExp(n))},doesntContain:function(t,n){return n=n.replace(e.fn.form.settings.regExp.escape,"\\$&"),-1===t.search(new RegExp(n,"i"))},doesntContainExactly:function(t,n){return n=n.replace(e.fn.form.settings.regExp.escape,"\\$&"),-1===t.search(new RegExp(n))},minLength:function(e,t){return void 0!==e&&e.length>=t},length:function(e,t){return void 0!==e&&e.length>=t},exactLength:function(e,t){return void 0!==e&&e.length==t},maxLength:function(e,t){return void 0!==e&&e.length<=t},match:function(t,n){var i;e(this);return e('[data-validate="'+n+'"]').length>0?i=e('[data-validate="'+n+'"]').val():e("#"+n).length>0?i=e("#"+n).val():e('[name="'+n+'"]').length>0?i=e('[name="'+n+'"]').val():e('[name="'+n+'[]"]').length>0&&(i=e('[name="'+n+'[]"]')),void 0!==i&&t.toString()==i.toString()},different:function(t,n){var i;e(this);return e('[data-validate="'+n+'"]').length>0?i=e('[data-validate="'+n+'"]').val():e("#"+n).length>0?i=e("#"+n).val():e('[name="'+n+'"]').length>0?i=e('[name="'+n+'"]').val():e('[name="'+n+'[]"]').length>0&&(i=e('[name="'+n+'[]"]')),void 0!==i&&t.toString()!==i.toString()},creditCard:function(t,n){var i,r,a={visa:{pattern:/^4/,length:[16]},amex:{pattern:/^3[47]/,length:[15]},mastercard:{pattern:/^5[1-5]/,length:[16]},discover:{pattern:/^(6011|622(12[6-9]|1[3-9][0-9]|[2-8][0-9]{2}|9[0-1][0-9]|92[0-5]|64[4-9])|65)/,length:[16]},unionPay:{pattern:/^(62|88)/,length:[16,17,18,19]},jcb:{pattern:/^35(2[89]|[3-8][0-9])/,length:[16]},maestro:{pattern:/^(5018|5020|5038|6304|6759|676[1-3])/,length:[12,13,14,15,16,17,18,19]},dinersClub:{pattern:/^(30[0-5]|^36)/,length:[14]},laser:{pattern:/^(6304|670[69]|6771)/,length:[16,17,18,19]},visaElectron:{pattern:/^(4026|417500|4508|4844|491(3|7))/,length:[16]}},o={},s=!1,l="string"==typeof n&&n.split(",");if("string"==typeof t&&0!==t.length){if(t=t.replace(/[\-]/g,""),l&&(e.each(l,function(n,i){(r=a[i])&&(o={length:-1!==e.inArray(t.length,r.length),pattern:-1!==t.search(r.pattern)},o.length&&o.pattern&&(s=!0))}),!s))return!1;if(i={number:-1!==e.inArray(t.length,a.unionPay.length),pattern:-1!==t.search(a.unionPay.pattern)},i.number&&i.pattern)return!0;for(var u=t.length,c=0,d=[[0,1,2,3,4,5,6,7,8,9],[0,2,4,6,8,1,3,5,7,9]],f=0;u--;)f+=d[c][parseInt(t.charAt(u),10)],c^=1;return f%10==0&&f>0}},minCount:function(e,t){return 0==t||(1==t?""!==e:e.split(",").length>=t)},exactCount:function(e,t){return 0==t?""===e:1==t?""!==e&&-1===e.search(","):e.split(",").length==t},maxCount:function(e,t){return 0!=t&&(1==t?-1===e.search(","):e.split(",").length<=t)}}}}(jQuery,window,document);
/*!
 * # Semantic UI 2.2.11 - Dropdown
 * http://github.com/semantic-org/semantic-ui/
 *
 *
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 *
 */
!function(e,t,n,i){"use strict";t=void 0!==t&&t.Math==Math?t:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),e.fn.dropdown=function(i){var o,a=e(this),s=e(n),r=a.selector||"",l="ontouchstart"in n.documentElement,c=(new Date).getTime(),u=[],d=arguments[0],v="string"==typeof d,f=[].slice.call(arguments,1);return a.each(function(m){var h,g,p,b,w,x,C,S,y=e.isPlainObject(i)?e.extend(!0,{},e.fn.dropdown.settings,i):e.extend({},e.fn.dropdown.settings),A=y.className,T=y.message,k=y.fields,L=y.keys,I=y.metadata,D=y.namespace,q=y.regExp,R=y.selector,O=y.error,V=y.templates,E="."+D,F="module-"+D,M=e(this),z=e(y.context),P=M.find(R.text),H=M.find(R.search),j=M.find(R.sizer),N=M.find(R.input),U=M.find(R.icon),K=M.prev().find(R.text).length>0?M.prev().find(R.text):M.prev(),W=M.children(R.menu),B=W.find(R.item),$=!1,Q=!1,X=!1,Y=this,G=M.data(F);S={initialize:function(){S.debug("Initializing dropdown",y),S.is.alreadySetup()?S.setup.reference():(S.setup.layout(),S.refreshData(),S.save.defaults(),S.restore.selected(),S.create.id(),S.bind.events(),S.observeChanges(),S.instantiate())},instantiate:function(){S.verbose("Storing instance of dropdown",S),G=S,M.data(F,S)},destroy:function(){S.verbose("Destroying previous dropdown",M),S.remove.tabbable(),M.off(E).removeData(F),W.off(E),s.off(b),S.disconnect.menuObserver(),S.disconnect.selectObserver()},observeChanges:function(){"MutationObserver"in t&&(x=new MutationObserver(S.event.select.mutation),C=new MutationObserver(S.event.menu.mutation),S.debug("Setting up mutation observer",x,C),S.observe.select(),S.observe.menu())},disconnect:{menuObserver:function(){C&&C.disconnect()},selectObserver:function(){x&&x.disconnect()}},observe:{select:function(){S.has.input()&&x.observe(N[0],{childList:!0,subtree:!0})},menu:function(){S.has.menu()&&C.observe(W[0],{childList:!0,subtree:!0})}},create:{id:function(){w=(Math.random().toString(16)+"000000000").substr(2,8),b="."+w,S.verbose("Creating unique id for element",w)},userChoice:function(t){var n,i,o;return!!(t=t||S.get.userValues())&&(t=e.isArray(t)?t:[t],e.each(t,function(t,a){!1===S.get.item(a)&&(o=y.templates.addition(S.add.variables(T.addResult,a)),i=e("<div />").html(o).attr("data-"+I.value,a).attr("data-"+I.text,a).addClass(A.addition).addClass(A.item),y.hideAdditions&&i.addClass(A.hidden),n=void 0===n?i:n.add(i),S.verbose("Creating user choices for value",a,i))}),n)},userLabels:function(t){var n=S.get.userValues();n&&(S.debug("Adding user labels",n),e.each(n,function(e,t){S.verbose("Adding custom user value"),S.add.label(t,t)}))},menu:function(){W=e("<div />").addClass(A.menu).appendTo(M)},sizer:function(){j=e("<span />").addClass(A.sizer).insertAfter(H)}},search:function(e){e=void 0!==e?e:S.get.query(),S.verbose("Searching for query",e),S.has.minCharacters(e)?S.filter(e):S.hide()},select:{firstUnfiltered:function(){S.verbose("Selecting first non-filtered element"),S.remove.selectedItem(),B.not(R.unselectable).not(R.addition+R.hidden).eq(0).addClass(A.selected)},nextAvailable:function(e){e=e.eq(0);var t=e.nextAll(R.item).not(R.unselectable).eq(0),n=e.prevAll(R.item).not(R.unselectable).eq(0);t.length>0?(S.verbose("Moving selection to",t),t.addClass(A.selected)):(S.verbose("Moving selection to",n),n.addClass(A.selected))}},setup:{api:function(){var e={debug:y.debug,urlData:{value:S.get.value(),query:S.get.query()},on:!1};S.verbose("First request, initializing API"),M.api(e)},layout:function(){M.is("select")&&(S.setup.select(),S.setup.returnedObject()),S.has.menu()||S.create.menu(),S.is.search()&&!S.has.search()&&(S.verbose("Adding search input"),H=e("<input />").addClass(A.search).prop("autocomplete","off").insertBefore(P)),S.is.multiple()&&S.is.searchSelection()&&!S.has.sizer()&&S.create.sizer(),y.allowTab&&S.set.tabbable()},select:function(){var t=S.get.selectValues();S.debug("Dropdown initialized on a select",t),M.is("select")&&(N=M),N.parent(R.dropdown).length>0?(S.debug("UI dropdown already exists. Creating dropdown menu only"),M=N.closest(R.dropdown),S.has.menu()||S.create.menu(),W=M.children(R.menu),S.setup.menu(t)):(S.debug("Creating entire dropdown from select"),M=e("<div />").attr("class",N.attr("class")).addClass(A.selection).addClass(A.dropdown).html(V.dropdown(t)).insertBefore(N),N.hasClass(A.multiple)&&!1===N.prop("multiple")&&(S.error(O.missingMultiple),N.prop("multiple",!0)),N.is("[multiple]")&&S.set.multiple(),N.prop("disabled")&&(S.debug("Disabling dropdown"),M.addClass(A.disabled)),N.removeAttr("class").detach().prependTo(M)),S.refresh()},menu:function(e){W.html(V.menu(e,k)),B=W.find(R.item)},reference:function(){S.debug("Dropdown behavior was called on select, replacing with closest dropdown"),M=M.parent(R.dropdown),S.refresh(),S.setup.returnedObject(),v&&(G=S,S.invoke(d))},returnedObject:function(){var e=a.slice(0,m),t=a.slice(m+1);a=e.add(M).add(t)}},refresh:function(){S.refreshSelectors(),S.refreshData()},refreshItems:function(){B=W.find(R.item)},refreshSelectors:function(){S.verbose("Refreshing selector cache"),P=M.find(R.text),H=M.find(R.search),N=M.find(R.input),U=M.find(R.icon),K=M.prev().find(R.text).length>0?M.prev().find(R.text):M.prev(),W=M.children(R.menu),B=W.find(R.item)},refreshData:function(){S.verbose("Refreshing cached metadata"),B.removeData(I.text).removeData(I.value)},clearData:function(){S.verbose("Clearing metadata"),B.removeData(I.text).removeData(I.value),M.removeData(I.defaultText).removeData(I.defaultValue).removeData(I.placeholderText)},toggle:function(){S.verbose("Toggling menu visibility"),S.is.active()?S.hide():S.show()},show:function(t){if(t=e.isFunction(t)?t:function(){},!S.can.show()&&S.is.remote()&&(S.debug("No API results retrieved, searching before show"),S.queryRemote(S.get.query(),S.show)),S.can.show()&&!S.is.active()){if(S.debug("Showing dropdown"),!S.has.message()||S.has.maxSelections()||S.has.allResultsFiltered()||S.remove.message(),S.is.allFiltered())return!0;!1!==y.onShow.call(Y)&&S.animate.show(function(){S.can.click()&&S.bind.intent(),S.has.menuSearch()&&S.focusSearch(),S.set.visible(),t.call(Y)})}},hide:function(t){t=e.isFunction(t)?t:function(){},S.is.active()&&(S.debug("Hiding dropdown"),!1!==y.onHide.call(Y)&&S.animate.hide(function(){S.remove.visible(),t.call(Y)}))},hideOthers:function(){S.verbose("Finding other dropdowns to hide"),a.not(M).has(R.menu+"."+A.visible).dropdown("hide")},hideMenu:function(){S.verbose("Hiding menu  instantaneously"),S.remove.active(),S.remove.visible(),W.transition("hide")},hideSubMenus:function(){var e=W.children(R.item).find(R.menu);S.verbose("Hiding sub menus",e),e.transition("hide")},bind:{events:function(){l&&S.bind.touchEvents(),S.bind.keyboardEvents(),S.bind.inputEvents(),S.bind.mouseEvents()},touchEvents:function(){S.debug("Touch device detected binding additional touch events"),S.is.searchSelection()||S.is.single()&&M.on("touchstart"+E,S.event.test.toggle),W.on("touchstart"+E,R.item,S.event.item.mouseenter)},keyboardEvents:function(){S.verbose("Binding keyboard events"),M.on("keydown"+E,S.event.keydown),S.has.search()&&M.on(S.get.inputEvent()+E,R.search,S.event.input),S.is.multiple()&&s.on("keydown"+b,S.event.document.keydown)},inputEvents:function(){S.verbose("Binding input change events"),M.on("change"+E,R.input,S.event.change)},mouseEvents:function(){S.verbose("Binding mouse events"),S.is.multiple()&&M.on("click"+E,R.label,S.event.label.click).on("click"+E,R.remove,S.event.remove.click),S.is.searchSelection()?(M.on("mousedown"+E,S.event.mousedown).on("mouseup"+E,S.event.mouseup).on("mousedown"+E,R.menu,S.event.menu.mousedown).on("mouseup"+E,R.menu,S.event.menu.mouseup).on("click"+E,R.icon,S.event.icon.click).on("focus"+E,R.search,S.event.search.focus).on("click"+E,R.search,S.event.search.focus).on("blur"+E,R.search,S.event.search.blur).on("click"+E,R.text,S.event.text.focus),S.is.multiple()&&M.on("click"+E,S.event.click)):("click"==y.on?M.on("click"+E,R.icon,S.event.icon.click).on("click"+E,S.event.test.toggle):"hover"==y.on?M.on("mouseenter"+E,S.delay.show).on("mouseleave"+E,S.delay.hide):M.on(y.on+E,S.toggle),M.on("mousedown"+E,S.event.mousedown).on("mouseup"+E,S.event.mouseup).on("focus"+E,S.event.focus),S.has.menuSearch()?M.on("blur"+E,R.search,S.event.search.blur):M.on("blur"+E,S.event.blur)),W.on("mouseenter"+E,R.item,S.event.item.mouseenter).on("mouseleave"+E,R.item,S.event.item.mouseleave).on("click"+E,R.item,S.event.item.click)},intent:function(){S.verbose("Binding hide intent event to document"),l&&s.on("touchstart"+b,S.event.test.touch).on("touchmove"+b,S.event.test.touch),s.on("click"+b,S.event.test.hide)}},unbind:{intent:function(){S.verbose("Removing hide intent event from document"),l&&s.off("touchstart"+b).off("touchmove"+b),s.off("click"+b)}},filter:function(e){var t=void 0!==e?e:S.get.query(),n=function(){S.is.multiple()&&S.filterActive(),(e||!e&&0==S.get.activeItem().length)&&S.select.firstUnfiltered(),S.has.allResultsFiltered()?y.onNoResults.call(Y,t)?y.allowAdditions?y.hideAdditions&&(S.verbose("User addition with no menu, setting empty style"),S.set.empty(),S.hideMenu()):(S.verbose("All items filtered, showing message",t),S.add.message(T.noResults)):(S.verbose("All items filtered, hiding dropdown",t),S.hideMenu()):(S.remove.empty(),S.remove.message()),y.allowAdditions&&S.add.userSuggestion(e),S.is.searchSelection()&&S.can.show()&&S.is.focusedOnSearch()&&S.show()};y.useLabels&&S.has.maxSelections()||(y.apiSettings?S.can.useAPI()?S.queryRemote(t,function(){y.filterRemoteData&&S.filterItems(t),n()}):S.error(O.noAPI):(S.filterItems(t),n()))},queryRemote:function(t,n){var i={errorDuration:!1,cache:"local",throttle:y.throttle,urlData:{query:t},onError:function(){S.add.message(T.serverError),n()},onFailure:function(){S.add.message(T.serverError),n()},onSuccess:function(e){S.remove.message(),S.setup.menu({values:e[k.remoteValues]}),n()}};M.api("get request")||S.setup.api(),i=e.extend(!0,{},i,y.apiSettings),M.api("setting",i).api("query")},filterItems:function(t){var n=void 0!==t?t:S.get.query(),i=null,o=S.escape.string(n),a=new RegExp("^"+o,"igm");S.has.query()&&(i=[],S.verbose("Searching for matching values",n),B.each(function(){var t,o,s=e(this);if("both"==y.match||"text"==y.match){if(t=String(S.get.choiceText(s,!1)),-1!==t.search(a))return i.push(this),!0;if("exact"===y.fullTextSearch&&S.exactSearch(n,t))return i.push(this),!0;if(!0===y.fullTextSearch&&S.fuzzySearch(n,t))return i.push(this),!0}if("both"==y.match||"value"==y.match){if(o=String(S.get.choiceValue(s,t)),-1!==o.search(a))return i.push(this),!0;if("exact"===y.fullTextSearch&&S.exactSearch(n,o))return i.push(this),!0;if(!0===y.fullTextSearch&&S.fuzzySearch(n,o))return i.push(this),!0}})),S.debug("Showing only matched items",n),S.remove.filteredItem(),i&&B.not(i).addClass(A.filtered)},fuzzySearch:function(e,t){var n=t.length,i=e.length;if(e=e.toLowerCase(),t=t.toLowerCase(),i>n)return!1;if(i===n)return e===t;e:for(var o=0,a=0;o<i;o++){for(var s=e.charCodeAt(o);a<n;)if(t.charCodeAt(a++)===s)continue e;return!1}return!0},exactSearch:function(e,t){return e=e.toLowerCase(),t=t.toLowerCase(),t.indexOf(e)>-1},filterActive:function(){y.useLabels&&B.filter("."+A.active).addClass(A.filtered)},focusSearch:function(e){S.has.search()&&!S.is.focusedOnSearch()&&(e?(M.off("focus"+E,R.search),H.focus(),M.on("focus"+E,R.search,S.event.search.focus)):H.focus())},forceSelection:function(){var e=B.not(A.filtered).filter("."+A.selected).eq(0),t=B.not(A.filtered).filter("."+A.active).eq(0),n=e.length>0?e:t;if(n.length>0&&!S.is.multiple())return S.debug("Forcing partial selection to selected item",n),void S.event.item.click.call(n,{},!0);y.allowAdditions?(S.set.selected(S.get.query()),S.remove.searchTerm()):S.remove.searchTerm()},event:{change:function(){X||(S.debug("Input changed, updating selection"),S.set.selected())},focus:function(){y.showOnFocus&&!$&&S.is.hidden()&&!g&&S.show()},blur:function(e){g=n.activeElement===this,$||g||(S.remove.activeLabel(),S.hide())},mousedown:function(){S.is.searchSelection()?p=!0:$=!0},mouseup:function(){S.is.searchSelection()?p=!1:$=!1},click:function(t){e(t.target).is(M)&&(S.is.focusedOnSearch()?S.show():S.focusSearch())},search:{focus:function(){$=!0,S.is.multiple()&&S.remove.activeLabel(),y.showOnFocus&&S.search()},blur:function(e){g=n.activeElement===this,S.is.searchSelection()&&!p&&(Q||g||(y.forceSelection&&S.forceSelection(),S.hide())),p=!1}},icon:{click:function(e){S.toggle()}},text:{focus:function(e){$=!0,S.focusSearch()}},input:function(e){(S.is.multiple()||S.is.searchSelection())&&S.set.filtered(),clearTimeout(S.timer),S.timer=setTimeout(S.search,y.delay.search)},label:{click:function(t){var n=e(this),i=M.find(R.label),o=i.filter("."+A.active),a=n.nextAll("."+A.active),s=n.prevAll("."+A.active),r=a.length>0?n.nextUntil(a).add(o).add(n):n.prevUntil(s).add(o).add(n);t.shiftKey?(o.removeClass(A.active),r.addClass(A.active)):t.ctrlKey?n.toggleClass(A.active):(o.removeClass(A.active),n.addClass(A.active)),y.onLabelSelect.apply(this,i.filter("."+A.active))}},remove:{click:function(){var t=e(this).parent();t.hasClass(A.active)?S.remove.activeLabels():S.remove.activeLabels(t)}},test:{toggle:function(e){var t=S.is.multiple()?S.show:S.toggle;S.is.bubbledLabelClick(e)||S.is.bubbledIconClick(e)||S.determine.eventOnElement(e,t)&&e.preventDefault()},touch:function(e){S.determine.eventOnElement(e,function(){"touchstart"==e.type?S.timer=setTimeout(function(){S.hide()},y.delay.touch):"touchmove"==e.type&&clearTimeout(S.timer)}),e.stopPropagation()},hide:function(e){S.determine.eventInModule(e,S.hide)}},select:{mutation:function(e){S.debug("<select> modified, recreating menu"),S.setup.select()}},menu:{mutation:function(t){var n=t[0],i=e(n.addedNodes?n.addedNodes[0]:!1),o=e(n.removedNodes?n.removedNodes[0]:!1),a=i.add(o),s=a.is(R.addition)||a.closest(R.addition).length>0,r=a.is(R.message)||a.closest(R.message).length>0;s||r?(S.debug("Updating item selector cache"),S.refreshItems()):(S.debug("Menu modified, updating selector cache"),S.refresh())},mousedown:function(){Q=!0},mouseup:function(){Q=!1}},item:{mouseenter:function(t){var n=e(t.target),i=e(this),o=i.children(R.menu),a=i.siblings(R.item).children(R.menu),s=o.length>0;!(o.find(n).length>0)&&s&&(clearTimeout(S.itemTimer),S.itemTimer=setTimeout(function(){S.verbose("Showing sub-menu",o),e.each(a,function(){S.animate.hide(!1,e(this))}),S.animate.show(!1,o)},y.delay.show),t.preventDefault())},mouseleave:function(t){var n=e(this).children(R.menu);n.length>0&&(clearTimeout(S.itemTimer),S.itemTimer=setTimeout(function(){S.verbose("Hiding sub-menu",n),S.animate.hide(!1,n)},y.delay.hide))},click:function(t,i){var o=e(this),a=e(t?t.target:""),s=o.find(R.menu),r=S.get.choiceText(o),l=S.get.choiceValue(o,r),c=s.length>0,u=s.find(a).length>0;S.has.menuSearch()&&e(n.activeElement).blur(),u||c&&!y.allowCategorySelection||(S.is.searchSelection()&&(y.allowAdditions&&S.remove.userAddition(),S.remove.searchTerm(),S.is.focusedOnSearch()||1==i||S.focusSearch(!0)),y.useLabels||(S.remove.filteredItem(),S.set.scrollPosition(o)),S.determine.selectAction.call(this,r,l))}},document:{keydown:function(e){var t=e.which;if(S.is.inObject(t,L)){var n=M.find(R.label),i=n.filter("."+A.active),o=(i.data(I.value),n.index(i)),a=n.length,s=i.length>0,r=i.length>1,l=0===o,c=o+1==a,u=S.is.searchSelection(),d=S.is.focusedOnSearch(),v=S.is.focused(),f=d&&0===S.get.caretPosition();if(u&&!s&&!d)return;t==L.leftArrow?!v&&!f||s?s&&(e.shiftKey?S.verbose("Adding previous label to selection"):(S.verbose("Selecting previous label"),n.removeClass(A.active)),l&&!r?i.addClass(A.active):i.prev(R.siblingLabel).addClass(A.active).end(),e.preventDefault()):(S.verbose("Selecting previous label"),n.last().addClass(A.active)):t==L.rightArrow?(v&&!s&&n.first().addClass(A.active),s&&(e.shiftKey?S.verbose("Adding next label to selection"):(S.verbose("Selecting next label"),n.removeClass(A.active)),c?u?d?n.removeClass(A.active):S.focusSearch():r?i.next(R.siblingLabel).addClass(A.active):i.addClass(A.active):i.next(R.siblingLabel).addClass(A.active),e.preventDefault())):t==L.deleteKey||t==L.backspace?s?(S.verbose("Removing active labels"),c&&u&&!d&&S.focusSearch(),i.last().next(R.siblingLabel).addClass(A.active),S.remove.activeLabels(i),e.preventDefault()):f&&!s&&t==L.backspace&&(S.verbose("Removing last label on input backspace"),i=n.last().addClass(A.active),S.remove.activeLabels(i)):i.removeClass(A.active)}}},keydown:function(e){var t=e.which;if(S.is.inObject(t,L)){var n,i=B.not(R.unselectable).filter("."+A.selected).eq(0),o=W.children("."+A.active).eq(0),a=i.length>0?i:o,s=a.length>0?a.siblings(":not(."+A.filtered+")").addBack():W.children(":not(."+A.filtered+")"),r=a.children(R.menu),l=a.closest(R.menu),c=l.hasClass(A.visible)||l.hasClass(A.animating)||l.parent(R.menu).length>0,u=r.length>0,d=a.length>0,v=a.not(R.unselectable).length>0,f=t==L.delimiter&&y.allowAdditions&&S.is.multiple(),m=y.allowAdditions&&y.hideAdditions&&(t==L.enter||f)&&v;if(m&&(S.verbose("Selecting item from keyboard shortcut",a),S.event.item.click.call(a,e),S.is.searchSelection()&&S.remove.searchTerm()),S.is.visible()){if((t==L.enter||f)&&(t==L.enter&&d&&u&&!y.allowCategorySelection?(S.verbose("Pressed enter on unselectable category, opening sub menu"),t=L.rightArrow):v&&(S.verbose("Selecting item from keyboard shortcut",a),S.event.item.click.call(a,e),S.is.searchSelection()&&S.remove.searchTerm()),e.preventDefault()),d&&(t==L.leftArrow&&l[0]!==W[0]&&(S.verbose("Left key pressed, closing sub-menu"),S.animate.hide(!1,l),a.removeClass(A.selected),l.closest(R.item).addClass(A.selected),e.preventDefault()),t==L.rightArrow&&u&&(S.verbose("Right key pressed, opening sub-menu"),S.animate.show(!1,r),a.removeClass(A.selected),r.find(R.item).eq(0).addClass(A.selected),e.preventDefault())),t==L.upArrow){if(n=d&&c?a.prevAll(R.item+":not("+R.unselectable+")").eq(0):B.eq(0),s.index(n)<0)return S.verbose("Up key pressed but reached top of current menu"),void e.preventDefault();S.verbose("Up key pressed, changing active item"),a.removeClass(A.selected),n.addClass(A.selected),S.set.scrollPosition(n),y.selectOnKeydown&&S.is.single()&&S.set.selectedItem(n),e.preventDefault()}if(t==L.downArrow){if(n=d&&c?n=a.nextAll(R.item+":not("+R.unselectable+")").eq(0):B.eq(0),0===n.length)return S.verbose("Down key pressed but reached bottom of current menu"),void e.preventDefault();S.verbose("Down key pressed, changing active item"),B.removeClass(A.selected),n.addClass(A.selected),S.set.scrollPosition(n),y.selectOnKeydown&&S.is.single()&&S.set.selectedItem(n),e.preventDefault()}t==L.pageUp&&(S.scrollPage("up"),e.preventDefault()),t==L.pageDown&&(S.scrollPage("down"),e.preventDefault()),t==L.escape&&(S.verbose("Escape key pressed, closing dropdown"),S.hide())}else f&&e.preventDefault(),t!=L.downArrow||S.is.visible()||(S.verbose("Down key pressed, showing dropdown"),S.show(),e.preventDefault())}else S.has.search()||S.set.selectedLetter(String.fromCharCode(t))}},trigger:{change:function(){var e=n.createEvent("HTMLEvents"),t=N[0];t&&(S.verbose("Triggering native change event"),e.initEvent("change",!0,!1),t.dispatchEvent(e))}},determine:{selectAction:function(t,n){S.verbose("Determining action",y.action),e.isFunction(S.action[y.action])?(S.verbose("Triggering preset action",y.action,t,n),S.action[y.action].call(Y,t,n,this)):e.isFunction(y.action)?(S.verbose("Triggering user action",y.action,t,n),y.action.call(Y,t,n,this)):S.error(O.action,y.action)},eventInModule:function(t,i){var o=e(t.target),a=o.closest(n.documentElement).length>0,s=o.closest(M).length>0;return i=e.isFunction(i)?i:function(){},a&&!s?(S.verbose("Triggering event",i),i(),!0):(S.verbose("Event occurred in dropdown, canceling callback"),!1)},eventOnElement:function(t,i){var o=e(t.target),a=o.closest(R.siblingLabel),s=n.body.contains(t.target),r=0===M.find(a).length,l=0===o.closest(W).length;return i=e.isFunction(i)?i:function(){},s&&r&&l?(S.verbose("Triggering event",i),i(),!0):(S.verbose("Event occurred in dropdown menu, canceling callback"),!1)}},action:{nothing:function(){},activate:function(t,n,i){if(n=void 0!==n?n:t,S.can.activate(e(i))){if(S.set.selected(n,e(i)),S.is.multiple()&&!S.is.allFiltered())return;S.hideAndClear()}},select:function(t,n,i){if(n=void 0!==n?n:t,S.can.activate(e(i))){if(S.set.value(n,e(i)),S.is.multiple()&&!S.is.allFiltered())return;S.hideAndClear()}},combo:function(t,n,i){n=void 0!==n?n:t,S.set.selected(n,e(i)),S.hideAndClear()},hide:function(e,t,n){S.set.value(t,e),S.hideAndClear()}},get:{id:function(){return w},defaultText:function(){return M.data(I.defaultText)},defaultValue:function(){return M.data(I.defaultValue)},placeholderText:function(){return M.data(I.placeholderText)||""},text:function(){return P.text()},query:function(){return e.trim(H.val())},searchWidth:function(e){return e=void 0!==e?e:H.val(),j.text(e),Math.ceil(j.width()+1)},selectionCount:function(){var t=S.get.values();return S.is.multiple()?e.isArray(t)?t.length:0:""!==S.get.value()?1:0},transition:function(e){return"auto"==y.transition?S.is.upward(e)?"slide up":"slide down":y.transition},userValues:function(){var t=S.get.values();return!!t&&(t=e.isArray(t)?t:[t],e.grep(t,function(e){return!1===S.get.item(e)}))},uniqueArray:function(t){return e.grep(t,function(n,i){return e.inArray(n,t)===i})},caretPosition:function(){var e,t,i=H.get(0);return"selectionStart"in i?i.selectionStart:n.selection?(i.focus(),e=n.selection.createRange(),t=e.text.length,e.moveStart("character",-i.value.length),e.text.length-t):void 0},value:function(){var t=N.length>0?N.val():M.data(I.value),n=e.isArray(t)&&1===t.length&&""===t[0];return void 0===t||n?"":t},values:function(){var e=S.get.value();return""===e?"":!S.has.selectInput()&&S.is.multiple()?"string"==typeof e?e.split(y.delimiter):"":e},remoteValues:function(){var t=S.get.values(),n=!1;return t&&("string"==typeof t&&(t=[t]),e.each(t,function(e,t){var i=S.read.remoteData(t);S.verbose("Restoring value from session data",i,t),i&&(n||(n={}),n[t]=i)})),n},choiceText:function(t,n){if(n=void 0!==n?n:y.preserveHTML,t)return t.find(R.menu).length>0&&(S.verbose("Retrieving text of element with sub-menu"),t=t.clone(),t.find(R.menu).remove(),t.find(R.menuIcon).remove()),void 0!==t.data(I.text)?t.data(I.text):n?e.trim(t.html()):e.trim(t.text())},choiceValue:function(t,n){return n=n||S.get.choiceText(t),!!t&&(void 0!==t.data(I.value)?String(t.data(I.value)):"string"==typeof n?e.trim(n.toLowerCase()):String(n))},inputEvent:function(){var e=H[0];return!!e&&(void 0!==e.oninput?"input":void 0!==e.onpropertychange?"propertychange":"keyup")},selectValues:function(){var t={};return t.values=[],M.find("option").each(function(){var n=e(this),i=n.html(),o=n.attr("disabled"),a=void 0!==n.attr("value")?n.attr("value"):i;"auto"===y.placeholder&&""===a?t.placeholder=i:t.values.push({name:i,value:a,disabled:o})}),y.placeholder&&"auto"!==y.placeholder&&(S.debug("Setting placeholder value to",y.placeholder),t.placeholder=y.placeholder),y.sortSelect?(t.values.sort(function(e,t){return e.name>t.name?1:-1}),S.debug("Retrieved and sorted values from select",t)):S.debug("Retrieved values from select",t),t},activeItem:function(){return B.filter("."+A.active)},selectedItem:function(){var e=B.not(R.unselectable).filter("."+A.selected);return e.length>0?e:B.eq(0)},itemWithAdditions:function(e){var t=S.get.item(e),n=S.create.userChoice(e);return n&&n.length>0&&(t=t.length>0?t.add(n):n),t},item:function(t,n){var i,o,a=!1;return t=void 0!==t?t:void 0!==S.get.values()?S.get.values():S.get.text(),i=o?t.length>0:void 0!==t&&null!==t,o=S.is.multiple()&&e.isArray(t),n=""===t||0===t||(n||!1),i&&B.each(function(){var i=e(this),s=S.get.choiceText(i),r=S.get.choiceValue(i,s);if(null!==r&&void 0!==r)if(o)-1===e.inArray(String(r),t)&&-1===e.inArray(s,t)||(a=a?a.add(i):i);else if(n){if(S.verbose("Ambiguous dropdown value using strict type check",i,t),r===t||s===t)return a=i,!0}else if(String(r)==String(t)||s==t)return S.verbose("Found select item by value",r,t),a=i,!0}),a}},check:{maxSelections:function(e){return!y.maxSelections||(e=void 0!==e?e:S.get.selectionCount(),e>=y.maxSelections?(S.debug("Maximum selection count reached"),y.useLabels&&(B.addClass(A.filtered),S.add.message(T.maxSelections)),!0):(S.verbose("No longer at maximum selection count"),S.remove.message(),S.remove.filteredItem(),S.is.searchSelection()&&S.filterItems(),!1))}},restore:{defaults:function(){S.clear(),S.restore.defaultText(),S.restore.defaultValue()},defaultText:function(){var e=S.get.defaultText();e===S.get.placeholderText?(S.debug("Restoring default placeholder text",e),S.set.placeholderText(e)):(S.debug("Restoring default text",e),S.set.text(e))},placeholderText:function(){S.set.placeholderText()},defaultValue:function(){var e=S.get.defaultValue();void 0!==e&&(S.debug("Restoring default value",e),""!==e?(S.set.value(e),S.set.selected()):(S.remove.activeItem(),S.remove.selectedItem()))},labels:function(){y.allowAdditions&&(y.useLabels||(S.error(O.labels),y.useLabels=!0),S.debug("Restoring selected values"),S.create.userLabels()),S.check.maxSelections()},selected:function(){S.restore.values(),S.is.multiple()?(S.debug("Restoring previously selected values and labels"),S.restore.labels()):S.debug("Restoring previously selected values")},values:function(){S.set.initialLoad(),y.apiSettings&&y.saveRemoteData&&S.get.remoteValues()?S.restore.remoteValues():S.set.selected(),S.remove.initialLoad()},remoteValues:function(){var t=S.get.remoteValues();S.debug("Recreating selected from session data",t),t&&(S.is.single()?e.each(t,function(e,t){S.set.text(t)}):e.each(t,function(e,t){S.add.label(e,t)}))}},read:{remoteData:function(e){var n;return void 0===t.Storage?void S.error(O.noStorage):void 0!==(n=sessionStorage.getItem(e))&&n}},save:{defaults:function(){S.save.defaultText(),S.save.placeholderText(),S.save.defaultValue()},defaultValue:function(){var e=S.get.value();S.verbose("Saving default value as",e),M.data(I.defaultValue,e)},defaultText:function(){var e=S.get.text();S.verbose("Saving default text as",e),M.data(I.defaultText,e)},placeholderText:function(){var e;!1!==y.placeholder&&P.hasClass(A.placeholder)&&(e=S.get.text(),S.verbose("Saving placeholder text as",e),M.data(I.placeholderText,e))},remoteData:function(e,n){if(void 0===t.Storage)return void S.error(O.noStorage);S.verbose("Saving remote data to session storage",n,e),sessionStorage.setItem(n,e)}},clear:function(){S.is.multiple()&&y.useLabels?S.remove.labels():(S.remove.activeItem(),S.remove.selectedItem()),S.set.placeholderText(),S.clearValue()},clearValue:function(){S.set.value("")},scrollPage:function(e,t){var n,i,o,a=t||S.get.selectedItem(),s=a.closest(R.menu),r=s.outerHeight(),l=s.scrollTop(),c=B.eq(0).outerHeight(),u=Math.floor(r/c),d=(s.prop("scrollHeight"),"up"==e?l-c*u:l+c*u),v=B.not(R.unselectable);o="up"==e?v.index(a)-u:v.index(a)+u,n="up"==e?o>=0:o<v.length,i=n?v.eq(o):"up"==e?v.first():v.last(),i.length>0&&(S.debug("Scrolling page",e,i),a.removeClass(A.selected),i.addClass(A.selected),y.selectOnKeydown&&S.is.single()&&S.set.selectedItem(i),s.scrollTop(d))},set:{filtered:function(){var e=S.is.multiple(),t=S.is.searchSelection(),n=e&&t,i=t?S.get.query():"",o="string"==typeof i&&i.length>0,a=S.get.searchWidth(),s=""!==i;e&&o&&(S.verbose("Adjusting input width",a,y.glyphWidth),H.css("width",a)),o||n&&s?(S.verbose("Hiding placeholder text"),P.addClass(A.filtered)):(!e||n&&!s)&&(S.verbose("Showing placeholder text"),P.removeClass(A.filtered))},empty:function(){M.addClass(A.empty)},loading:function(){M.addClass(A.loading)},placeholderText:function(e){e=e||S.get.placeholderText(),S.debug("Setting placeholder text",e),S.set.text(e),P.addClass(A.placeholder)},tabbable:function(){S.is.searchSelection()?(S.debug("Added tabindex to searchable dropdown"),H.val("").attr("tabindex",0),W.attr("tabindex",-1)):(S.debug("Added tabindex to dropdown"),void 0===M.attr("tabindex")&&(M.attr("tabindex",0),W.attr("tabindex",-1)))},initialLoad:function(){S.verbose("Setting initial load"),h=!0},activeItem:function(e){y.allowAdditions&&e.filter(R.addition).length>0?e.addClass(A.filtered):e.addClass(A.active)},partialSearch:function(e){var t=S.get.query().length;H.val(e.substr(0,t))},scrollPosition:function(e,t){var n,i,o,a,s,r,l,c,u;e=e||S.get.selectedItem(),n=e.closest(R.menu),i=e&&e.length>0,t=void 0!==t&&t,e&&n.length>0&&i&&(a=e.position().top,n.addClass(A.loading),r=n.scrollTop(),s=n.offset().top,a=e.offset().top,o=r-s+a,t||(l=n.height(),u=r+l<o+5,c=o-5<r),S.debug("Scrolling to active item",o),(t||c||u)&&n.scrollTop(o),n.removeClass(A.loading))},text:function(e){"select"!==y.action&&("combo"==y.action?(S.debug("Changing combo button text",e,K),y.preserveHTML?K.html(e):K.text(e)):(e!==S.get.placeholderText()&&P.removeClass(A.placeholder),S.debug("Changing text",e,P),P.removeClass(A.filtered),y.preserveHTML?P.html(e):P.text(e)))},selectedItem:function(e){var t=S.get.choiceValue(e),n=S.get.choiceText(e,!1),i=S.get.choiceText(e,!0);S.debug("Setting user selection to item",e),S.remove.activeItem(),S.set.partialSearch(n),S.set.activeItem(e),S.set.selected(t,e),S.set.text(i)},selectedLetter:function(t){var n,i=B.filter("."+A.selected),o=i.length>0&&S.has.firstLetter(i,t),a=!1;o&&(n=i.nextAll(B).eq(0),S.has.firstLetter(n,t)&&(a=n)),a||B.each(function(){if(S.has.firstLetter(e(this),t))return a=e(this),!1}),a&&(S.verbose("Scrolling to next value with letter",t),S.set.scrollPosition(a),i.removeClass(A.selected),a.addClass(A.selected),y.selectOnKeydown&&S.is.single()&&S.set.selectedItem(a))},direction:function(e){"auto"==y.direction?(S.remove.upward(),S.can.openDownward(e)?S.remove.upward(e):S.set.upward(e),S.is.leftward(e)||S.can.openRightward(e)||S.set.leftward(e)):"upward"==y.direction&&S.set.upward(e)},upward:function(e){(e||M).addClass(A.upward)},leftward:function(e){(e||W).addClass(A.leftward)},value:function(e,t,n){var i=S.escape.value(e),o=N.length>0,a=(S.has.value(e),S.get.values()),s=void 0!==e?String(e):e;if(o){if(!y.allowReselection&&s==a&&(S.verbose("Skipping value update already same value",e,a),!S.is.initialLoad()))return;S.is.single()&&S.has.selectInput()&&S.can.extendSelect()&&(S.debug("Adding user option",e),S.add.optionValue(e)),S.debug("Updating input value",i,a),X=!0,N.val(i),!1===y.fireOnInit&&S.is.initialLoad()?S.debug("Input native change event ignored on initial load"):S.trigger.change(),X=!1}else S.verbose("Storing value in metadata",i,N),i!==a&&M.data(I.value,s);!1===y.fireOnInit&&S.is.initialLoad()?S.verbose("No callback on initial load",y.onChange):y.onChange.call(Y,e,t,n)},active:function(){M.addClass(A.active)},multiple:function(){M.addClass(A.multiple)},visible:function(){M.addClass(A.visible)},exactly:function(e,t){S.debug("Setting selected to exact values"),S.clear(),S.set.selected(e,t)},selected:function(t,n){var i=S.is.multiple();(n=y.allowAdditions?n||S.get.itemWithAdditions(t):n||S.get.item(t))&&(S.debug("Setting selected menu item to",n),S.is.multiple()&&S.remove.searchWidth(),S.is.single()?(S.remove.activeItem(),S.remove.selectedItem()):y.useLabels&&S.remove.selectedItem(),n.each(function(){var t=e(this),o=S.get.choiceText(t),a=S.get.choiceValue(t,o),s=t.hasClass(A.filtered),r=t.hasClass(A.active),l=t.hasClass(A.addition),c=i&&1==n.length;i?!r||l?(y.apiSettings&&y.saveRemoteData&&S.save.remoteData(o,a),y.useLabels?(S.add.value(a,o,t),S.add.label(a,o,c),S.set.activeItem(t),S.filterActive(),S.select.nextAvailable(n)):(S.add.value(a,o,t),S.set.text(S.add.variables(T.count)),S.set.activeItem(t))):s||(S.debug("Selected active value, removing label"),S.remove.selected(a)):(y.apiSettings&&y.saveRemoteData&&S.save.remoteData(o,a),S.set.text(o),S.set.value(a,o,t),t.addClass(A.active).addClass(A.selected))}))}},add:{label:function(t,n,i){var o,a=S.is.searchSelection()?H:P,s=S.escape.value(t);if(o=e("<a />").addClass(A.label).attr("data-"+I.value,s).html(V.label(s,n)),o=y.onLabelCreate.call(o,s,n),S.has.label(t))return void S.debug("Label already exists, skipping",s)
;y.label.variation&&o.addClass(y.label.variation),!0===i?(S.debug("Animating in label",o),o.addClass(A.hidden).insertBefore(a).transition(y.label.transition,y.label.duration)):(S.debug("Adding selection label",o),o.insertBefore(a))},message:function(t){var n=W.children(R.message),i=y.templates.message(S.add.variables(t));n.length>0?n.html(i):n=e("<div/>").html(i).addClass(A.message).appendTo(W)},optionValue:function(t){var n=S.escape.value(t);N.find('option[value="'+S.escape.string(n)+'"]').length>0||(S.disconnect.selectObserver(),S.is.single()&&(S.verbose("Removing previous user addition"),N.find("option."+A.addition).remove()),e("<option/>").prop("value",n).addClass(A.addition).html(t).appendTo(N),S.verbose("Adding user addition as an <option>",t),S.observe.select())},userSuggestion:function(e){var t,n=W.children(R.addition),i=S.get.item(e),o=i&&i.not(R.addition).length,a=n.length>0;if(!y.useLabels||!S.has.maxSelections()){if(""===e||o)return void n.remove();a?(n.data(I.value,e).data(I.text,e).attr("data-"+I.value,e).attr("data-"+I.text,e).removeClass(A.filtered),y.hideAdditions||(t=y.templates.addition(S.add.variables(T.addResult,e)),n.html(t)),S.verbose("Replacing user suggestion with new value",n)):(n=S.create.userChoice(e),n.prependTo(W),S.verbose("Adding item choice to menu corresponding with user choice addition",n)),y.hideAdditions&&!S.is.allFiltered()||n.addClass(A.selected).siblings().removeClass(A.selected),S.refreshItems()}},variables:function(e,t){var n,i,o=-1!==e.search("{count}"),a=-1!==e.search("{maxCount}"),s=-1!==e.search("{term}");return S.verbose("Adding templated variables to message",e),o&&(n=S.get.selectionCount(),e=e.replace("{count}",n)),a&&(n=S.get.selectionCount(),e=e.replace("{maxCount}",y.maxSelections)),s&&(i=t||S.get.query(),e=e.replace("{term}",i)),e},value:function(t,n,i){var o,a=S.get.values();if(""===t)return void S.debug("Cannot select blank values from multiselect");e.isArray(a)?(o=a.concat([t]),o=S.get.uniqueArray(o)):o=[t],S.has.selectInput()?S.can.extendSelect()&&(S.debug("Adding value to select",t,o,N),S.add.optionValue(t)):(o=o.join(y.delimiter),S.debug("Setting hidden input to delimited value",o,N)),!1===y.fireOnInit&&S.is.initialLoad()?S.verbose("Skipping onadd callback on initial load",y.onAdd):y.onAdd.call(Y,t,n,i),S.set.value(o,t,n,i),S.check.maxSelections()}},remove:{active:function(){M.removeClass(A.active)},activeLabel:function(){M.find(R.label).removeClass(A.active)},empty:function(){M.removeClass(A.empty)},loading:function(){M.removeClass(A.loading)},initialLoad:function(){h=!1},upward:function(e){(e||M).removeClass(A.upward)},leftward:function(e){(e||W).removeClass(A.leftward)},visible:function(){M.removeClass(A.visible)},activeItem:function(){B.removeClass(A.active)},filteredItem:function(){y.useLabels&&S.has.maxSelections()||(y.useLabels&&S.is.multiple()?B.not("."+A.active).removeClass(A.filtered):B.removeClass(A.filtered),S.remove.empty())},optionValue:function(e){var t=S.escape.value(e),n=N.find('option[value="'+S.escape.string(t)+'"]');n.length>0&&n.hasClass(A.addition)&&(x&&(x.disconnect(),S.verbose("Temporarily disconnecting mutation observer")),n.remove(),S.verbose("Removing user addition as an <option>",t),x&&x.observe(N[0],{childList:!0,subtree:!0}))},message:function(){W.children(R.message).remove()},searchWidth:function(){H.css("width","")},searchTerm:function(){S.verbose("Cleared search term"),H.val(""),S.set.filtered()},userAddition:function(){B.filter(R.addition).remove()},selected:function(t,n){if(!(n=y.allowAdditions?n||S.get.itemWithAdditions(t):n||S.get.item(t)))return!1;n.each(function(){var t=e(this),n=S.get.choiceText(t),i=S.get.choiceValue(t,n);S.is.multiple()?y.useLabels?(S.remove.value(i,n,t),S.remove.label(i)):(S.remove.value(i,n,t),0===S.get.selectionCount()?S.set.placeholderText():S.set.text(S.add.variables(T.count))):S.remove.value(i,n,t),t.removeClass(A.filtered).removeClass(A.active),y.useLabels&&t.removeClass(A.selected)})},selectedItem:function(){B.removeClass(A.selected)},value:function(e,t,n){var i,o=S.get.values();S.has.selectInput()?(S.verbose("Input is <select> removing selected option",e),i=S.remove.arrayValue(e,o),S.remove.optionValue(e)):(S.verbose("Removing from delimited values",e),i=S.remove.arrayValue(e,o),i=i.join(y.delimiter)),!1===y.fireOnInit&&S.is.initialLoad()?S.verbose("No callback on initial load",y.onRemove):y.onRemove.call(Y,e,t,n),S.set.value(i,t,n),S.check.maxSelections()},arrayValue:function(t,n){return e.isArray(n)||(n=[n]),n=e.grep(n,function(e){return t!=e}),S.verbose("Removed value from delimited string",t,n),n},label:function(e,t){var n=M.find(R.label),i=n.filter("[data-"+I.value+'="'+S.escape.string(e)+'"]');S.verbose("Removing label",i),i.remove()},activeLabels:function(e){e=e||M.find(R.label).filter("."+A.active),S.verbose("Removing active label selections",e),S.remove.labels(e)},labels:function(t){t=t||M.find(R.label),S.verbose("Removing labels",t),t.each(function(){var t=e(this),n=t.data(I.value),i=void 0!==n?String(n):n,o=S.is.userValue(i);if(!1===y.onLabelRemove.call(t,n))return void S.debug("Label remove callback cancelled removal");S.remove.message(),o?(S.remove.value(i),S.remove.label(i)):S.remove.selected(i)})},tabbable:function(){S.is.searchSelection()?(S.debug("Searchable dropdown initialized"),H.removeAttr("tabindex"),W.removeAttr("tabindex")):(S.debug("Simple selection dropdown initialized"),M.removeAttr("tabindex"),W.removeAttr("tabindex"))}},has:{menuSearch:function(){return S.has.search()&&H.closest(W).length>0},search:function(){return H.length>0},sizer:function(){return j.length>0},selectInput:function(){return N.is("select")},minCharacters:function(e){return!y.minCharacters||(e=void 0!==e?String(e):String(S.get.query()),e.length>=y.minCharacters)},firstLetter:function(e,t){var n,i;return!(!e||0===e.length||"string"!=typeof t)&&(n=S.get.choiceText(e,!1),t=t.toLowerCase(),i=String(n).charAt(0).toLowerCase(),t==i)},input:function(){return N.length>0},items:function(){return B.length>0},menu:function(){return W.length>0},message:function(){return 0!==W.children(R.message).length},label:function(e){var t=S.escape.value(e);return M.find(R.label).filter("[data-"+I.value+'="'+S.escape.string(t)+'"]').length>0},maxSelections:function(){return y.maxSelections&&S.get.selectionCount()>=y.maxSelections},allResultsFiltered:function(){var e=B.not(R.addition);return e.filter(R.unselectable).length===e.length},userSuggestion:function(){return W.children(R.addition).length>0},query:function(){return""!==S.get.query()},value:function(t){var n=S.get.values();return!!(e.isArray(n)?n&&-1!==e.inArray(t,n):n==t)}},is:{active:function(){return M.hasClass(A.active)},bubbledLabelClick:function(t){return e(t.target).is("select, input")&&M.closest("label").length>0},bubbledIconClick:function(t){return e(t.target).closest(U).length>0},alreadySetup:function(){return M.is("select")&&M.parent(R.dropdown).length>0&&0===M.prev().length},animating:function(e){return e?e.transition&&e.transition("is animating"):W.transition&&W.transition("is animating")},leftward:function(e){return(e||W).hasClass(A.leftward)},disabled:function(){return M.hasClass(A.disabled)},focused:function(){return n.activeElement===M[0]},focusedOnSearch:function(){return n.activeElement===H[0]},allFiltered:function(){return(S.is.multiple()||S.has.search())&&!(0==y.hideAdditions&&S.has.userSuggestion())&&!S.has.message()&&S.has.allResultsFiltered()},hidden:function(e){return!S.is.visible(e)},initialLoad:function(){return h},inObject:function(t,n){var i=!1;return e.each(n,function(e,n){if(n==t)return i=!0,!0}),i},multiple:function(){return M.hasClass(A.multiple)},remote:function(){return y.apiSettings&&S.can.useAPI()},single:function(){return!S.is.multiple()},selectMutation:function(t){var n=!1;return e.each(t,function(t,i){if(i.target&&e(i.target).is("select"))return n=!0,!0}),n},search:function(){return M.hasClass(A.search)},searchSelection:function(){return S.has.search()&&1===H.parent(R.dropdown).length},selection:function(){return M.hasClass(A.selection)},userValue:function(t){return-1!==e.inArray(t,S.get.userValues())},upward:function(e){return(e||M).hasClass(A.upward)},visible:function(e){return e?e.hasClass(A.visible):W.hasClass(A.visible)},verticallyScrollableContext:function(){var e=z.get(0)!==t&&z.css("overflow-y");return"auto"==e||"scroll"==e},horizontallyScrollableContext:function(){var e=z.get(0)!==t&&z.css("overflow-X");return"auto"==e||"scroll"==e}},can:{activate:function(e){return!!y.useLabels||(!S.has.maxSelections()||!(!S.has.maxSelections()||!e.hasClass(A.active)))},openDownward:function(e){var t,n=e||W,i=!0,o={};return n.addClass(A.loading),t={context:{scrollTop:z.scrollTop(),height:z.outerHeight()},menu:{offset:n.offset(),height:n.outerHeight()}},S.is.verticallyScrollableContext()&&(t.menu.offset.top+=t.context.scrollTop),o={above:t.context.scrollTop<=t.menu.offset.top-t.menu.height,below:t.context.scrollTop+t.context.height>=t.menu.offset.top+t.menu.height},o.below?(S.verbose("Dropdown can fit in context downward",o),i=!0):o.below||o.above?(S.verbose("Dropdown cannot fit below, opening upward",o),i=!1):(S.verbose("Dropdown cannot fit in either direction, favoring downward",o),i=!0),n.removeClass(A.loading),i},openRightward:function(e){var t,n=e||W,i=!0,o=!1;return n.addClass(A.loading),t={context:{scrollLeft:z.scrollLeft(),width:z.outerWidth()},menu:{offset:n.offset(),width:n.outerWidth()}},S.is.horizontallyScrollableContext()&&(t.menu.offset.left+=t.context.scrollLeft),o=t.menu.offset.left+t.menu.width>=t.context.scrollLeft+t.context.width,o&&(S.verbose("Dropdown cannot fit in context rightward",o),i=!1),n.removeClass(A.loading),i},click:function(){return l||"click"==y.on},extendSelect:function(){return y.allowAdditions||y.apiSettings},show:function(){return!S.is.disabled()&&(S.has.items()||S.has.message())},useAPI:function(){return void 0!==e.fn.api}},animate:{show:function(t,n){var i,o=n||W,a=n?function(){}:function(){S.hideSubMenus(),S.hideOthers(),S.set.active()};t=e.isFunction(t)?t:function(){},S.verbose("Doing menu show animation",o),S.set.direction(n),i=S.get.transition(n),S.is.selection()&&S.set.scrollPosition(S.get.selectedItem(),!0),(S.is.hidden(o)||S.is.animating(o))&&("none"==i?(a(),o.transition("show"),t.call(Y)):void 0!==e.fn.transition&&M.transition("is supported")?o.transition({animation:i+" in",debug:y.debug,verbose:y.verbose,duration:y.duration,queue:!0,onStart:a,onComplete:function(){t.call(Y)}}):S.error(O.noTransition,i))},hide:function(t,n){var i=n||W,o=(n?y.duration:y.duration,n?function(){}:function(){S.can.click()&&S.unbind.intent(),S.remove.active()}),a=S.get.transition(n);t=e.isFunction(t)?t:function(){},(S.is.visible(i)||S.is.animating(i))&&(S.verbose("Doing menu hide animation",i),"none"==a?(o(),i.transition("hide"),t.call(Y)):void 0!==e.fn.transition&&M.transition("is supported")?i.transition({animation:a+" out",duration:y.duration,debug:y.debug,verbose:y.verbose,queue:!0,onStart:o,onComplete:function(){t.call(Y)}}):S.error(O.transition))}},hideAndClear:function(){S.remove.searchTerm(),S.has.maxSelections()||(S.has.search()?S.hide(function(){S.remove.filteredItem()}):S.hide())},delay:{show:function(){S.verbose("Delaying show event to ensure user intent"),clearTimeout(S.timer),S.timer=setTimeout(S.show,y.delay.show)},hide:function(){S.verbose("Delaying hide event to ensure user intent"),clearTimeout(S.timer),S.timer=setTimeout(S.hide,y.delay.hide)}},escape:{value:function(t){var n=e.isArray(t),i="string"==typeof t,o=!i&&!n,a=i&&-1!==t.search(q.quote),s=[];return o||!a?t:(S.debug("Encoding quote values for use in select",t),n?(e.each(t,function(e,t){s.push(t.replace(q.quote,"&quot;"))}),s):t.replace(q.quote,"&quot;"))},string:function(e){return e=String(e),e.replace(q.escape,"\\$&")}},setting:function(t,n){if(S.debug("Changing setting",t,n),e.isPlainObject(t))e.extend(!0,y,t);else{if(void 0===n)return y[t];e.isPlainObject(y[t])?e.extend(!0,y[t],n):y[t]=n}},internal:function(t,n){if(e.isPlainObject(t))e.extend(!0,S,t);else{if(void 0===n)return S[t];S[t]=n}},debug:function(){!y.silent&&y.debug&&(y.performance?S.performance.log(arguments):(S.debug=Function.prototype.bind.call(console.info,console,y.name+":"),S.debug.apply(console,arguments)))},verbose:function(){!y.silent&&y.verbose&&y.debug&&(y.performance?S.performance.log(arguments):(S.verbose=Function.prototype.bind.call(console.info,console,y.name+":"),S.verbose.apply(console,arguments)))},error:function(){y.silent||(S.error=Function.prototype.bind.call(console.error,console,y.name+":"),S.error.apply(console,arguments))},performance:{log:function(e){var t,n,i;y.performance&&(t=(new Date).getTime(),i=c||t,n=t-i,c=t,u.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:Y,"Execution Time":n})),clearTimeout(S.performance.timer),S.performance.timer=setTimeout(S.performance.display,500)},display:function(){var t=y.name+":",n=0;c=!1,clearTimeout(S.performance.timer),e.each(u,function(e,t){n+=t["Execution Time"]}),t+=" "+n+"ms",r&&(t+=" '"+r+"'"),(void 0!==console.group||void 0!==console.table)&&u.length>0&&(console.groupCollapsed(t),console.table?console.table(u):e.each(u,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms")}),console.groupEnd()),u=[]}},invoke:function(t,n,i){var a,s,r,l=G;return n=n||f,i=Y||i,"string"==typeof t&&void 0!==l&&(t=t.split(/[\. ]/),a=t.length-1,e.each(t,function(n,i){var o=n!=a?i+t[n+1].charAt(0).toUpperCase()+t[n+1].slice(1):t;if(e.isPlainObject(l[o])&&n!=a)l=l[o];else{if(void 0!==l[o])return s=l[o],!1;if(!e.isPlainObject(l[i])||n==a)return void 0!==l[i]?(s=l[i],!1):(S.error(O.method,t),!1);l=l[i]}})),e.isFunction(s)?r=s.apply(i,n):void 0!==s&&(r=s),e.isArray(o)?o.push(r):void 0!==o?o=[o,r]:void 0!==r&&(o=r),s}},v?(void 0===G&&S.initialize(),S.invoke(d)):(void 0!==G&&G.invoke("destroy"),S.initialize())}),void 0!==o?o:a},e.fn.dropdown.settings={silent:!1,debug:!1,verbose:!1,performance:!0,on:"click",action:"activate",apiSettings:!1,selectOnKeydown:!0,minCharacters:0,filterRemoteData:!1,saveRemoteData:!0,throttle:200,context:t,direction:"auto",keepOnScreen:!0,match:"both",fullTextSearch:!1,placeholder:"auto",preserveHTML:!0,sortSelect:!1,forceSelection:!0,allowAdditions:!1,hideAdditions:!0,maxSelections:!1,useLabels:!0,delimiter:",",showOnFocus:!0,allowReselection:!1,allowTab:!0,allowCategorySelection:!1,fireOnInit:!1,transition:"auto",duration:200,glyphWidth:1.037,label:{transition:"scale",duration:200,variation:!1},delay:{hide:300,show:200,search:20,touch:50},onChange:function(e,t,n){},onAdd:function(e,t,n){},onRemove:function(e,t,n){},onLabelSelect:function(e){},onLabelCreate:function(t,n){return e(this)},onLabelRemove:function(e){return!0},onNoResults:function(e){return!0},onShow:function(){},onHide:function(){},name:"Dropdown",namespace:"dropdown",message:{addResult:"Add <b>{term}</b>",count:"{count} selected",maxSelections:"Max {maxCount} selections",noResults:"No results found.",serverError:"There was an error contacting the server"},error:{action:"You called a dropdown action that was not defined",alreadySetup:"Once a select has been initialized behaviors must be called on the created ui dropdown",labels:"Allowing user additions currently requires the use of labels.",missingMultiple:"<select> requires multiple property to be set to correctly preserve multiple values",method:"The method you called is not defined.",noAPI:"The API module is required to load resources remotely",noStorage:"Saving remote data requires session storage",noTransition:"This module requires ui transitions <https://github.com/Semantic-Org/UI-Transition>"},regExp:{escape:/[-[\]{}()*+?.,\\^$|#\s]/g,quote:/"/g},metadata:{defaultText:"defaultText",defaultValue:"defaultValue",placeholderText:"placeholder",text:"text",value:"value"},fields:{remoteValues:"results",values:"values",disabled:"disabled",name:"name",value:"value",text:"text"},keys:{backspace:8,delimiter:188,deleteKey:46,enter:13,escape:27,pageUp:33,pageDown:34,leftArrow:37,upArrow:38,rightArrow:39,downArrow:40},selector:{addition:".addition",dropdown:".ui.dropdown",hidden:".hidden",icon:"> .dropdown.icon",input:'> input[type="hidden"], > select',item:".item",label:"> .label",remove:"> .label > .delete.icon",siblingLabel:".label",menu:".menu",message:".message",menuIcon:".dropdown.icon",search:"input.search, .menu > .search > input, .menu input.search",sizer:"> input.sizer",text:"> .text:not(.icon)",unselectable:".disabled, .filtered"},className:{active:"active",addition:"addition",animating:"animating",disabled:"disabled",empty:"empty",dropdown:"ui dropdown",filtered:"filtered",hidden:"hidden transition",item:"item",label:"ui label",loading:"loading",menu:"menu",message:"message",multiple:"multiple",placeholder:"default",sizer:"sizer",search:"search",selected:"selected",selection:"selection",upward:"upward",leftward:"left",visible:"visible"}},e.fn.dropdown.settings.templates={dropdown:function(t){var n=t.placeholder||!1,i=(t.values,"");return i+='<i class="dropdown icon"></i>',t.placeholder?i+='<div class="default text">'+n+"</div>":i+='<div class="text"></div>',i+='<div class="menu">',e.each(t.values,function(e,t){i+=t.disabled?'<div class="disabled item" data-value="'+t.value+'">'+t.name+"</div>":'<div class="item" data-value="'+t.value+'">'+t.name+"</div>"}),i+="</div>"},menu:function(t,n){var i=t[n.values]||{},o="";return e.each(i,function(e,t){var i=t[n.text]?'data-text="'+t[n.text]+'"':"",a=t[n.disabled]?"disabled ":"";o+='<div class="'+a+'item" data-value="'+t[n.value]+'"'+i+">",o+=t[n.name],o+="</div>"}),o},label:function(e,t){return t+'<i class="delete icon"></i>'},message:function(e){return e},addition:function(e){return e}}}(jQuery,window,document);
(function($){
	if($.G2 == undefined){
		$.G2 = {};
	}
	$.G2.composer = {};
	
	$.G2.scrollTo = function(Elem){
		if(Elem.length > 0){
			$('html, body').animate({
				scrollTop: Elem.offset().top - 50
			}, 'slow');
		}
	};
	
	$.G2.centerOn = function(Elem){
		if(Elem.length > 0){
			$('html, body').animate({
				scrollTop: Elem.offset().top - $(window).height()/2
			}, 'slow');
		}
	};
	
	$.G2.split = function(inputs, maxcount){
		var data = {};
		if(inputs.length > maxcount){
			for(i = 0; i <= inputs.length; i = i + maxcount){
				data[i] = inputs.slice(i, i + maxcount).serialize();
			}
		}else{
			data[0] = inputs.serialize();
		}
		
		return data;
	};
	
	$.G2.composer.init = function(){
		var section = arguments[0];
		var args = arguments[1];
		
		$.G2.composer[section] = {};
		$.G2.composer[section].params = args;
	};
	
	$.G2.composer.ready = function(){
		var section = arguments[0];
		var args = arguments[1];
		
		$.extend($.G2.composer[section].params, args);
		
		$.each($.G2.composer[section].params, function(i, arr){
			$.G2[i]['ready'].apply($.G2[i], arr);
		});
	};
}(jQuery));
(function($){
	if($.G2 == undefined){
		$.G2 = {};
	}
	$.G2.boot = {};
	
	$.G2.boot.autocompleter = function(Container){
		Container.find('[data-autocomplete]').each(function(i, dropfield){
			$(dropfield).closest('.ui.search.dropdown').dropdown({
				apiSettings : {
					url: $(dropfield).data('url') + '&' + $(dropfield).attr('name') + '={query}',
					cache : false,
					onResponse : function(Response){
						if(!Response.hasOwnProperty('results')){
							var results = [];
							results['success'] = true;
							results['results'] = [];
							
							var count = 0;
							$.each(Response, function(key, obj){
								results['results'][count] = {};
								results['results'][count]['value'] = key;
								results['results'][count]['name'] = obj;
								count = count + 1;
							});
							
							return results;
						}
					}
				},
				minCharacters: $(dropfield).data('mincharacters') ? $(dropfield).data('mincharacters') : 0,
				message : {noResults : $(dropfield).data('noresults') ? $(dropfield).data('noresults') : 'No results found'},
				//saveRemoteData:false
			});
		});
	};
	
	$.G2.boot.calendar = function(Container){
		//calendar
		Container.find('[data-calendar]').each(function(i, calfield){
			if($(calfield).data('calendarready') === true){
				return true;
			}
			$(calfield).data('calendarready', true);
			
			var mindate = null;
			if($(calfield).data('mindate')){
				var parts = $(calfield).data('mindate').split('-');
				var mindate = new Date(parts[0], parts[1]-1, parts[2]); 
			}
			var maxdate = null;
			if($(calfield).data('maxdate')){
				var parts = $(calfield).data('maxdate').split('-');
				var maxdate = new Date(parts[0], parts[1]-1, parts[2]); 
			}
			if(jQuery.fn.calendar != undefined){
				
				var $realDate = $('<input type="hidden" name="'+$(calfield).attr('name')+'">');
				if($('[type="hidden"][name="'+$(calfield).attr('name')+'"]').length == 0){
					$(calfield).closest('.field').after($realDate);
				}else{
					$realDate = $('[type="hidden"][name="'+$(calfield).attr('name')+'"]').first();
				}
				
				var dformat = $(calfield).data('dformat') ? $(calfield).data('dformat') : 'YYYY-MM-DD';
				var sformat = $(calfield).data('sformat') ? $(calfield).data('sformat') : 'YYYY-MM-DD';
				
				if($(calfield).val().length > 0){
					var calval = $(calfield).val();
					$realDate.val(calval);
					$(calfield).val(moment(calval, sformat).format(dformat));
				}
				
				var opendays = [1,2,3,4,5,6,7];//1 for monday
				if($(calfield).data('opendays')){
					opendays = $(calfield).data('opendays').split(',').map(Number);
				}
				
				var openhours = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24];//1 for monday
				if($(calfield).data('openhours')){
					openhours = $(calfield).data('openhours').split(',').map(Number);
				}
				
				$(calfield).closest('.field').calendar({
					startMode : $(calfield).data('startmode'),
					type : $(calfield).data('type'),
					minDate : mindate,
					maxDate : maxdate,
					startCalendar: $(calfield).data('startcalendar') ? $($(calfield).data('startcalendar')).closest('.field') : null,
					endCalendar: $(calfield).data('endcalendar') ? $($(calfield).data('endcalendar')).closest('.field') : null,
					firstDayOfWeek: $(calfield).data('firstday') ? $(calfield).data('firstday') : 0,
					ampm: ($(calfield).data('ampm') != undefined) ? $(calfield).data('ampm') : true,
					monthFirst: $(calfield).data('monthfirst') ? $(calfield).data('monthfirst') : true,
					
					formatter:{
						datetime: function (date, settings) {
							if (!date) return '';
							return moment(date).format(dformat);
						},
						cell: function(cell, date, cellOptions){
							if(cellOptions.mode == 'day' && (opendays.indexOf(parseInt(moment(date).format('E'))) == -1)){
								$(cell).addClass('disabled');
							}
							
							if(cellOptions.mode == 'hour' && (openhours.indexOf(parseInt(moment(date).format('k'))) == -1)){
								$(cell).addClass('disabled');
							}
						}
					},
					parser:{
						date: function (text, settings) {
							if (!text) return '';
							return moment(text, dformat).toDate();
						}
					},
					onChange: function (date, text, mode){
						$realDate.val(moment(date).format(sformat));
					},
					popupOptions:{
						position: $(calfield).data('popuppos') ? $(calfield).data('popuppos') : 'top center'
					},

					text:{
						days: $(calfield).data('days') ? $(calfield).data('days').split(',') : ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
						months: $(calfield).data('months') ? $(calfield).data('months').split(',') : ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
						monthsShort: $(calfield).data('monthsshort') ? $(calfield).data('monthsshort').split(',') : ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
						today: $(calfield).data('today') ? $(calfield).data('today').split(',') : 'Today',
						now: $(calfield).data('now') ? $(calfield).data('now').split(',') : 'Now',
						am: $(calfield).data('am') ? $(calfield).data('am').split(',') : 'AM',
						pm: $(calfield).data('pm') ? $(calfield).data('pm').split(',') : 'PM'
					}
				});
				
			}
		});
	};
	
	$.G2.boot.ready = function(){
		$('body').on('contentChange.basics', '*', function(e){
			e.stopPropagation();
			
			if($(this).prop('tagName') != 'DIV' && $(this).prop('tagName') != 'FORM'){
				//return false;
			}
			
			if(jQuery.fn.tab != undefined){
				$(this).find('.ui.menu.G2-tabs .item, .ui.steps.G2-tabs .step').tab();
			}
			if(jQuery.fn.dropdown != undefined){
				$(this).find('.ui.dropdown').dropdown({'forceSelection' : false, 'placeholder' : ''});
				$.G2.boot.autocompleter($(this));
			}
			if(jQuery.fn.checkbox != undefined){
				$(this).find('.ui.checkbox').checkbox('refresh');
			}
			
			if(jQuery.fn.embed != undefined){
				$(this).find('.ui.embed').embed();
			}
			
			if(jQuery.fn.accordion != undefined){
				$(this).find('.ui.accordion').accordion();
				$(this).find('.ui.accordion').accordion('refresh');
			}
			
			if(jQuery.fn.tooltipster != undefined){
				$(this).find('[data-hint]').addBack().each(function(i, element){
					$(element).tooltipster({
						content: $(element).data('hint'),
						maxWidth: 300,
						delay: 50,
						debug: false,
						contentAsHTML: true
					});
				});
			}
			
			//G2 actions
			if($.G2.actions != undefined){
				$.G2.actions.ready();
			}
			
			if($.G2.actions2 != undefined){
				$.G2.actions2.ready($(this));
			}
			
			if($.G2.forms2 != undefined){
				$.G2.forms2.ready($(this));
			}
			
			$.G2.boot.calendar($(this));
			
			//wysiwyg editor
			if($.G2.tinymce != undefined){
				$.G2.tinymce.init();
			}
			//textareas expand
			$(this).on('keyup.resize', 'textarea[data-autoresize="1"]', function(e){
				$(this).css('overflow', 'hidden');
				if($(this).val().split("\n").length > $(this).attr('rows')){
					$(this).attr('rows', $(this).val().split("\n").length);
				}else{
					if($(this).data('rows') == undefined){
						$(this).data('rows', $(this).attr('rows'));
					}
					if($(this).data('rows') <= $(this).val().split("\n").length){
						$(this).attr('rows', $(this).val().split("\n").length);
					}
				}
			});
			$(this).find('textarea[data-autoresize="1"]').trigger('keyup.resize');
			
		});
		
		//new forms
		//if($('form.ui.form.ce_form').length > 0){
		if($.G2.validation != undefined){
			$('body').on('contentChange.form', 'form', function(e){
				e.stopPropagation();
				$.G2.validation.ready($(this));
			});
			
			$('form.ui.form.ce_form').trigger('contentChange');
		}
		
		//toolbar
		$('.ui.toolbar-button[data-url]').on('click', function(e){
			if($(this).attr('data-form')){
				var toolbar_form = $($(this).attr('data-form'));
			}else{
				var toolbar_form = $(this).closest('form');
			}
			
			toolbar_form.attr('action', $(this).data('url'));
			
			if($(this).attr('name')){
				toolbar_form.append($('<input />').attr('type', 'hidden').attr('name', $(this).attr('name')).val(1));
			}
			
			if($(this).data('selections') == '1' && toolbar_form.find('.ui.selector.checkbox.checked').length == 0){
				alert($(this).data('message'));
				return false;
			}
			
			if($(this).attr('data-fn')){
				var fn = $(this).attr('data-fn');
				window[$(this).attr('data-fn')]($(this));
			}else{
				toolbar_form.submit();
			}
		});
		
		//list selectors
		if(jQuery.fn.checkbox != undefined){
			$('.ui.selector.checkbox').checkbox({
				onChecked: function(){
					$(this).closest('tr').addClass('warning');
				},
				onUnchecked: function(){
					$(this).closest('tr').removeClass('warning');
				}
			});
			$('.ui.selector.checkbox').checkbox('attach events', '.ui.select_all.checkbox');
		}
		
		//errors
		$(':input[data-error]').closest('.field').addClass('error');
		
	};
	
}(jQuery));
(function($){
	if($.G2 == undefined){
		$.G2 = {};
	}
	$.G2.forms = {};
	
	$.G2.forms.initializeForm = function (Form){
		var validationRules = {};
		
		jQuery.fn.form.settings.rules.required = function(value){
			if(value){
				return true;
			}else{
				return false;
			}
		};
		
		jQuery.fn.form.settings.rules.email = function(value){
			if(value.match(/^([a-zA-Z0-9_\.\-\+%])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{1,11})+$/)){
				return true;
			}else{
				return false;
			}
		};
		
		jQuery.fn.form.settings.rules.minChecked = function(value, minChecked){
			jQuery(this).closest('.fields').off('change.validation').on('change.validation', ':input', function(){
				Form.form('validate form');
			});
			
			if(jQuery(this).closest('.fields').find(':input:checked').length >= minChecked){
				jQuery(this).closest('.fields').removeClass('error');
				return true;
			}else{
				jQuery(this).closest('.fields').addClass('error');
				return false;
			}
		};
		
		jQuery.fn.form.settings.rules.maxChecked = function(value, maxChecked){
			jQuery(this).closest('.fields').off('change.validation').on('change.validation', ':input', function(){
				Form.form('validate form');
			});
			
			if(jQuery(this).closest('.fields').find(':input:checked').length > maxChecked){
				jQuery(this).closest('.fields').addClass('error');
				return false;
			}else{
				jQuery(this).closest('.fields').removeClass('error');
				return true;
			}
		};
		
		jQuery.fn.form.settings.rules.exactChecked = function(value, exactChecked){
			jQuery(this).closest('.fields').off('change.validation').on('change.validation', ':input', function(){
				Form.form('validate form');
			});
			
			if(jQuery(this).closest('.fields').find(':input:checked').length != exactChecked){
				jQuery(this).closest('.fields').addClass('error');
				return false;
			}else{
				jQuery(this).closest('.fields').removeClass('error');
				return true;
			}
		};
		
		Form.find('[data-validationrules]').each(function(i, inp){
			if(jQuery(inp).data('validationrules').disabled == undefined || jQuery(inp).data('validationrules').disabled == 0){
				validationRules['field'+i] = jQuery(inp).data('validationrules');
				
				//jQuery.each(['empty', 'required', 'checked', 'minChecked', 'maxChecked', 'exactChecked'], function(i, r){
				jQuery.each(jQuery(inp).data('validationrules')['rules'], function(i, r){
					//if(jQuery(inp).data('validationrules')['rules'][0]['type'].indexOf(r) >= 0){
					jQuery.each(['empty', 'required', 'checked', 'minChecked', 'maxChecked', 'exactChecked'], function(ir, vr){
						if(r['type'].indexOf(vr) > -1){
							if(jQuery(inp).parent().hasClass('checkbox')){
								if(jQuery(inp).closest('.fields').length > 0){
									jQuery(inp).closest('.fields').addClass('required');
								}else{
									jQuery(inp).closest('.field').addClass('required');
								}
							}else{
								jQuery(inp).closest('.field').addClass('required');
							}
						}
					});
				});
			}
		});
		
		Form.form({
			//inline : true,
			inline : Form.data('valloc') ? ((Form.data('valloc') == 'inline' || Form.data('valloc') == 'inlinetext') ? true : false) : true,
			on : 'blur',
			fields: validationRules,
			onInvalid: function(){
				if(Form.data('valloc') == 'inlinetext'){
					var erlabel = $(this).closest('.field').find('.ui.label.prompt.pointing').first();
					erlabel.css('display', 'none !important');
					var field = $(this).closest('.multifield.fields.grouped, .multifield.fields.inline').length > 0 ? $(this).closest('.multifield.fields.grouped, .multifield.fields.inline') : $(this).closest('.field');
					if(field.find('small.custom-error').length > 0){
						field.find('small.custom-error').show();
					}else{
						field.append($('<small class="custom-error">').css('color', 'red').css('display', 'block').text(erlabel.text()));
					}
					erlabel.remove();
				}
			},
			onValid: function(){
				var field = $(this).closest('.multifield.fields.grouped, .multifield.fields.inline').length > 0 ? $(this).closest('.multifield.fields.grouped, .multifield.fields.inline') : $(this).closest('.field');
				field.find('small.custom-error').hide();
			}
		});
	}
	
	$.G2.forms.initializeEvents = function (Form){
		//Form.find('[data-events]').each(function(i, inp){
		Form.off('change.events click.events ready.events', '[data-events]');
		Form.on('change.events click.events ready.events', '[data-events]', function(e){
			e.stopPropagation();
			//var events = jQuery(inp).data('events');
			var inp = this;
			var events = JSON.parse(jQuery(inp).attr('data-events'));
			
			//jQuery(inp).off('change.events click.events ready.events');
			jQuery.each(events, function(ei, event){
				//jQuery(inp).off('change click ready');
				//jQuery(inp).on('change.events click.events ready.events', function(e){
					
					if(event.hasOwnProperty('identifier') != true || event['identifier'] == '' || event.hasOwnProperty('action') != true || event.action.length == 0){
						return;
					}
					
					//get current input value
					var inp_value = jQuery(inp).data('value') ? jQuery(inp).data('value') : jQuery(inp).val();
					
					if(jQuery(inp).attr('type') == 'checkbox'){
						inp_value = (jQuery(inp).is(':checked') ? inp_value : '');
					}
					if(jQuery(inp).prop('tagName') == 'SELECT'){
						inp_value = jQuery(inp).find(':selected').data('value') ? jQuery(inp).find(':selected').data('value') : jQuery(inp).val();
					}
					if(event.hasOwnProperty('value') != true){
						event['value'] = [jQuery(inp).val()];
					}
					if(event.hasOwnProperty('group') && event.group == 1){
						inp_value = [];
						jQuery.each(jQuery(inp).closest('.fields').find(':input:checked'), function(kk, checked){
							if(jQuery(checked).data('value')){
								inp_value.push(jQuery(checked).data('value'));
							}else{
								inp_value.push(jQuery(checked).val());
							}
						});
					}
					
					//evaluate condition
					var event_condition = false;
					if(jQuery.isArray(inp_value)){
						if(event.sign == '='){
							//event_condition = (jQuery.inArray(event['value'], inp_value) > -1);
							event_condition = (jQuery(inp_value).filter(event['value']).length > 0);
						}else if(event.sign == '!='){
							//event_condition = (jQuery.inArray(event['value'], inp_value) == -1);
							event_condition = (jQuery(inp_value).filter(event['value']).length == 0);
						}else if(event.sign == 'change'){
							if(e.type != 'ready'){
								event_condition = true;
							}
						}
					}else{
						if(event.sign == '='){
							//event_condition = (inp_value == event['value']);
							event_condition = (jQuery([inp_value]).filter(event['value']).length > 0);
						}else if(event.sign == '!='){
							//event_condition = (inp_value != event['value']);
							event_condition = (jQuery([inp_value]).filter(event['value']).length == 0);
						}else if(event.sign == 'change'){
							if(e.type != 'ready'){
								event_condition = true;
							}
						}else if(event.sign == 'click' && e.type == 'click'){
							event_condition = true;
						}
					}
					
					var event_targets = [];
					jQuery.each(event['identifier'], function(idi, ident){
						if(ident.substring(0, 1) == '#' || ident.substring(0, 1) == '.' || ident.substring(0, 1) == '['){
							event_targets = jQuery.merge(event_targets, jQuery(ident));
						}else{
							event_targets = jQuery.merge(event_targets, jQuery(':input[name="' + ident + '"]'));
							if(jQuery.inArray('function', event.action) > -1){
								event_targets = [ident];
							}
						}
					});
					
					jQuery.each(event_targets, function(ix, event_target){
						event_target = jQuery(event_target);
						var event_target_one = event_target;
						
						var target_element = event_target.closest('.field');
						if(jQuery.inArray(event_target.prop('tagName'), ['BUTTON', 'DIV']) > -1){
							target_element = event_target;
						}
						if(jQuery.inArray(event_target.prop('type'), ['checkbox', 'radio']) > -1){
							target_element = event_target.closest('.multifield.fields').length > 0 ? event_target.closest('.multifield.fields') : event_target.closest('.field');
						}
						
						if(event_target.data('ghost')){
							if(event_target.closest('.multifield.fields').length > 0){
								var real_event_target = event_target.closest('.multifield.fields').find(':checkbox, :radio');
								target_element = event_target.closest('.multifield.fields');
								if(real_event_target.length > 0){
									event_target = real_event_target;
									event_target_one = real_event_target.first();
								}
							}else{
								
							}
						}
						
						if(jQuery.isArray(event.action) == false){
							event.action = [event.action];
						}
						if(event_condition){
							if(jQuery.inArray('hide', event.action) > -1){
								target_element.hide();
							}
							if(jQuery.inArray('show', event.action) > -1){
								//target_element.show();
								target_element.css('display', '');
								target_element.removeClass('hidden');
							}
							if(jQuery.inArray('disable', event.action) > -1){
								target_element.addClass('disabled');
								event_target.prop('disabled', true);
							}
							if(jQuery.inArray('enable', event.action) > -1){
								target_element.removeClass('disabled');
								event_target.prop('disabled', false);
								if(event_target.prop('tagName') == 'SELECT'){
									event_target.parent('.ui.dropdown').removeClass('disabled');
								}
							}
							if(jQuery.inArray('disable_validation', event.action) > -1){
								if(event_target_one.data('validationrules')){
									var vrules = event_target_one.data('validationrules');
									vrules['disabled'] = 1;
									event_target_one.data('validationrules', vrules);
									
									$.G2.forms.initializeForm(Form);
									target_element.removeClass('required error');
									target_element.find('.ui.label.red.pointing.prompt').remove();
								}
							}
							if(jQuery.inArray('enable_validation', event.action) > -1){
								if(event_target_one.data('validationrules')){
									var vrules = event_target_one.data('validationrules');
									vrules['disabled'] = 0;
									event_target_one.data('validationrules', vrules);
									
									$.G2.forms.initializeForm(Form);
								}
							}
							if(jQuery.inArray('reload', event.action) > -1){
								if(e.type != 'ready' && event_target.length > 0){
									target_element.addClass('ui form loading');
									
									$.ajax({
										url: event_target.data('reloadurl'),
										data: jQuery(inp).closest('.form').serialize(),
										success: function(result){
											var newContent = $(result);
											
											target_element.replaceWith(newContent);
											
											newContent.trigger('contentChange');
											jQuery.G2.forms.initializeForm(Form);
											//Form.trigger('contentChange');
										}
									});
								}
							}
							if(jQuery.inArray('function', event.action) > -1){
								jQuery.each(event['identifier'], function(idi, ident){
									if(e.type != 'ready' && window[ident] != undefined){
										window[ident](jQuery(inp));
									}
								});
							}
							//if(jQuery.inArray(event.action, ['add', 'sub', 'multiply', 'set']) > -1){
							if(jQuery(event.action).filter(['add', 'sub', 'multiply', 'set']).length){
								target_element = event_target;
								
								var current_value = parseFloat(target_element.val());
								if(isNaN(current_value)){
									current_value = 0;
								}
								
								if(jQuery.isArray(inp_value)){
									var inp_value_float = 0;
									jQuery.each(inp_value, function(iv, inp_value_v){
										if(!isNaN(parseFloat(inp_value_v))){
											inp_value_float = inp_value_float + parseFloat(inp_value_v);
										}
									});
								}else{
									var inp_value_float = parseFloat(inp_value);
									if(isNaN(inp_value_float)){
										inp_value_float = 0;
										if(event.action == 'multiply'){
											inp_value_float = 1;
										}
									}
								}
								
								var calcList = {};
								var inp_name = jQuery(inp).attr('name');
								
								if(target_element.data('calclist')){
									calcList = target_element.data('calclist');
								}
								
								var prev_inp_value = 0;
								if(calcList.hasOwnProperty(inp_name)){
									prev_inp_value = calcList[inp_name];
								}
								
								calcList[inp_name] = inp_value_float;
								target_element.data('calclist', calcList);
								var change_value = 0;
								
								if(jQuery.inArray('add', event.action) > -1){
									var total = current_value + inp_value_float - prev_inp_value;
									change_value = inp_value_float;
								}else if(jQuery.inArray('sub', event.action) > -1){
									var total = current_value - inp_value_float - prev_inp_value;
									change_value = - inp_value_float;
								}else if(jQuery.inArray('multiply', event.action) > -1){
									if(prev_inp_value == 0){
										prev_inp_value = 1;
									}
									var total = (current_value/prev_inp_value) * inp_value_float;
								}else if(jQuery.inArray('set', event.action) > -1){
									var total = inp_value_float;
								}
								
								if(change_value != 0){
									calcList[inp_name] = change_value;
									target_element.data('calclist', calcList);
								}
								
								target_element.val(total);
								
								if(target_element.data('display')){
									jQuery('#'+target_element.data('display')).text(total);
								}
							}
						}
					});
				//});
				
				//jQuery(inp).trigger('ready.events');
			});
			
			//jQuery(inp).trigger('ready.events');
		});
		
		Form.find('[data-events]').trigger('ready.events');
	}
	
	$.G2.forms.initializeFeatures = function (Form){
		Form.on('click', '.partitioned .ui.button.next, .partitioned .ui.button.forward', function(e){
			e.preventDefault();
			var activeTab = jQuery(this).closest('.partitioned').find('.ui.segment.tab.active').first();
			activeTab.find(':input').trigger('blur');
			
			if(activeTab.next('.ui.segment.tab').length > 0 && activeTab.find('.field.error').length == 0){
				activeTab.removeClass('active');
				jQuery('[data-tab="'+activeTab.data('tab')+'"]').removeClass('active');
				activeTab.next('.ui.segment.tab').addClass('active');
				jQuery('[data-tab="'+activeTab.next('.ui.segment.tab').data('tab')+'"]').addClass('active').removeClass('disabled');
			}else{
				
			}
		});
		
		Form.on('click', '.partitioned .ui.button.prev, .partitioned .ui.button.backward', function(e){
			e.preventDefault();
			var activeTab = jQuery(this).closest('.partitioned').find('.ui.segment.tab.active').first();
			activeTab.find(':input').trigger('blur');
			
			if(activeTab.prev('.ui.segment.tab').length > 0 && activeTab.find('.field.error').length == 0){
				activeTab.removeClass('active');
				jQuery('[data-tab="'+activeTab.data('tab')+'"]').removeClass('active');
				activeTab.prev('.ui.segment.tab').addClass('active');
				jQuery('[data-tab="'+activeTab.prev('.ui.segment.tab').data('tab')+'"]').addClass('active').removeClass('disabled');
			}else{
				
			}
		});
		
		//Form.find('.repeater .ui.source-item').hide().find(':input').prop('disabled', true);
		Form.find('.repeater .ui.source-item').hide().find(':input').each(function(i, inp){
			$(inp).attr('ex-name', $(inp).attr('name'));
			$(inp).removeAttr('name');
			if(jQuery(inp).data('validationrules')){
				$(inp).attr('data-exvalidationrules', $(inp).attr('data-validationrules'));
				$(inp).removeAttr('data-validationrules');
			}
		});
		
		Form.on('click.repeater', '.repeater .ui.button.multiply', function(e){
			e.preventDefault();
			
			var cloned = jQuery(this).closest('.repeater').find('.ui.source-item').clone().show();
			cloned.find(':input').each(function(i, inp){
				$(inp).attr('name', $(inp).attr('ex-name'));
				$(inp).removeAttr('ex-name');
				if(jQuery(inp).attr('data-exvalidationrules')){
					$(inp).attr('data-validationrules', $(inp).attr('data-exvalidationrules'));
				}
			});
			
			var newHTML = cloned.html().replace(/-N-/g, jQuery(this).closest('.repeater').data('count'));
			if(cloned.data('name')){
				repeaterRegex = new RegExp('#'+cloned.data('name')+'.count', 'gi');
				newHTML = newHTML.replace(repeaterRegex, jQuery(this).closest('.repeater').data('count'));
			}
			
			cloned.html(newHTML);
			jQuery(this).closest('.repeater').data('count', parseInt(jQuery(this).closest('.repeater').data('count')) + 1);
			
			if(jQuery(this).closest('.repeater').data('limit')){
				if(jQuery(this).closest('.repeater').find('.clone-item').length >= parseInt(jQuery(this).closest('.repeater').data('limit'))){
					return;
				}
			}
			jQuery(this).before(cloned.removeClass('source-item').addClass('clone-item'));
			
			cloned.trigger('contentChange');
			jQuery.G2.forms.initializeForm(Form);
			
			jQuery(this).closest('.repeater').trigger('g2.forms.repeater.add');
		});
		
		Form.on('click.repeater', '.repeater .ui.button.remove', function(e){
			e.preventDefault();
			
			jQuery(this).closest('.ui.clone-item').remove();
			
			jQuery(this).closest('.repeater').trigger('g2.forms.repeater.remove');
			
			jQuery.G2.forms.initializeForm(Form);
		});
		
		Form.on('click', '.modaled > .ui.button.green, .modaled > .ui.button.launch', function(e){
			e.preventDefault();
			var theModal = jQuery(this).closest('.modaled').find('.ui.modal').first();
			theModal.modal({detachable : false, closable : (theModal.data('closable') ? true : false)}).modal('show');
		});
		
		Form.on('submit', function(e){
			if(Form.form('is valid') == false){
				if(Form.find('.field.error').first().is(':visible')){
					jQuery.G2.scrollTo(Form.find('.field.error').first());
				}else{
					if(Form.find('.field.error').first().closest('.partitioned').length > 0){
						var activeTab = Form.find('.field.error').first().closest('.partitioned').find('.ui.segment.tab.active').first();
			
						activeTab.removeClass('active');
						jQuery('[data-tab="'+activeTab.data('tab')+'"]').removeClass('active');
						Form.find('.field.error').first().closest('.ui.segment.tab').addClass('active');
						jQuery('[data-tab="'+Form.find('.field.error').first().closest('.ui.segment.tab').data('tab')+'"]').addClass('active');
						jQuery('[data-tab="'+Form.find('.field.error').first().closest('.ui.segment.tab').data('tab')+'"]').removeClass('disabled');
					}
				}
			}else{
				if(Form.data('subanimation')){
					Form.addClass('loading');
				}
				//Form.form('submit');
			}
		});
	}
	
	$.G2.forms.invisible = function(){
		jQuery('div[data-invisible="1"]').each(function(i, invForm){
			var content = jQuery(invForm).html();
			var newForm = jQuery('<form>').html(content);
			jQuery.each(jQuery(invForm).get(0).attributes, function(i, att){
				newForm.attr(att.name, att.value);
			});
			jQuery(invForm).replaceWith(newForm);
			//jQuery('body').trigger('contentChange');
		});
	}
	
	$.G2.forms.ready = function(Form){
		jQuery.G2.forms.initializeFeatures(Form);
		
		jQuery.G2.forms.initializeEvents(Form);
		
		jQuery.G2.forms.initializeForm(Form);
		
		if(jQuery.fn.inputmask != undefined){
			Form.find('[data-inputmask]').inputmask();
		}
		
		Form.on('g2.actions.dynamic.beforeStart', function(){
			Form.data('beforeStart', Form.form('is valid'));
		});
	}
	
}(jQuery));