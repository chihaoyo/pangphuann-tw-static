(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{472:function(e,t,n){"use strict";n.r(t);var c=n(348),o=n(12),r=(n(67),n(139),n(78),n(40),n(311)),l={asyncData:function(e){return Object(o.a)(regeneratorRuntime.mark((function t(){var n,o,l,i,section;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.app,e.query,"https://docs.google.com/document/d/e/2PACX-1vTDqM9y8HpAPL9J7RaYfcXF9eBJoVngDK5FGhP0GnkKCygEd63QHsNpslp1pA9ucon4xnaxwwIynQ95/pub",t.next=4,Object(r.getDoc)("https://docs.google.com/document/d/e/2PACX-1vTDqM9y8HpAPL9J7RaYfcXF9eBJoVngDK5FGhP0GnkKCygEd63QHsNpslp1pA9ucon4xnaxwwIynQ95/pub");case 4:for(n=t.sent,o=Object(r.structureDoc)(n.html,["h2"]),l=[],i=0;i<n.sections.length;i++)(section=Object.assign({},n.sections[i],o[i])).classes=[section.name].concat(Object(c.a)(section.classes?[section.classes]:[]),Object(c.a)(section.image?["has-image"]:[])).join(" "),section.backgroundImageStyles=Object.assign({},section.image?{backgroundImage:'url("'.concat(section.image,'")')}:{}),l.push(section);return t.abrupt("return",{sections:l});case 9:case"end":return t.stop()}}),t)})))()}},d=n(25),component=Object(d.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"page index"},e._l(e.sections,(function(section){return n("div",{key:section.title,staticClass:"section",class:section.classes},[section.image?n("div",{staticClass:"image",style:section.backgroundImageStyles}):e._e(),e._v(" "),n("h2",[n("span",[e._v(e._s(section.title))])]),e._v(" "),n("div",{staticClass:"content",domProps:{innerHTML:e._s(section.html)}})])})),0)}),[],!1,null,null,null);t.default=component.exports}}]);