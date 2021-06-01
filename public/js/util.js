!function(o){o.fn.navList=function(){var t=o(this);return $a=t.find("a"),b=[],$a.each(function(){var t=o(this),e=Math.max(0,t.parents("li").length-1),a=t.attr("href"),l=t.attr("target");b.push('<a class="link depth-'+e+'"'+(void 0!==l&&""!=l?' target="'+l+'"':"")+(void 0!==a&&""!=a?' href="'+a+'"':"")+'><span class="indent-'+e+'"></span>'+t.text()+"</a>")}),b.join("")},o.fn.panel=function(t){if(0==this.length)return r;if(1<this.length){for(var e=0;e<this.length;e++)o(this[e]).panel(t);return r}var r=o(this),a=o("body"),l=o(window),i=r.attr("id"),s=o.extend({delay:0,hideOnClick:!1,hideOnEscape:!1,hideOnSwipe:!1,resetScroll:!1,resetForms:!1,side:null,target:r,visibleClass:"visible"},t);return"jQuery"!=typeof s.target&&(s.target=o(s.target)),r._hide=function(t){s.target.hasClass(s.visibleClass)&&(t&&(t.preventDefault(),t.stopPropagation()),s.target.removeClass(s.visibleClass),window.setTimeout(function(){s.resetScroll&&r.scrollTop(0),s.resetForms&&r.find("form").each(function(){this.reset()})},s.delay))},r.css("-ms-overflow-style","-ms-autohiding-scrollbar").css("-webkit-overflow-scrolling","touch"),s.hideOnClick&&(r.find("a").css("-webkit-tap-highlight-color","rgba(0,0,0,0)"),r.on("click","a",function(t){var e=o(this),a=e.attr("href"),l=e.attr("target");a&&"#"!=a&&""!=a&&a!="#"+i&&(t.preventDefault(),t.stopPropagation(),r._hide(),window.setTimeout(function(){"_blank"==l?window.open(a):window.location.href=a},s.delay+10))})),r.on("touchstart",function(t){r.touchPosX=t.originalEvent.touches[0].pageX,r.touchPosY=t.originalEvent.touches[0].pageY}),r.on("touchmove",function(t){if(null!==r.touchPosX&&null!==r.touchPosY){var e=r.touchPosX-t.originalEvent.touches[0].pageX,a=r.touchPosY-t.originalEvent.touches[0].pageY,l=r.outerHeight(),i=r.get(0).scrollHeight-r.scrollTop();if(s.hideOnSwipe){var o=!1,n=20;switch(s.side){case"left":o=a<n&&-20<a&&50<e;break;case"right":o=a<n&&-20<a&&e<-50;break;case"top":o=e<n&&-20<e&&50<a;break;case"bottom":o=e<n&&-20<e&&a<-50}if(o)return r.touchPosX=null,r.touchPosY=null,r._hide(),!1}(r.scrollTop()<0&&a<0||l-2<i&&i<l+2&&0<a)&&(t.preventDefault(),t.stopPropagation())}}),r.on("click touchend touchstart touchmove",function(t){t.stopPropagation()}),r.on("click",'a[href="#'+i+'"]',function(t){t.preventDefault(),t.stopPropagation(),s.target.removeClass(s.visibleClass)}),a.on("click touchend",function(t){r._hide(t)}),a.on("click",'a[href="#'+i+'"]',function(t){t.preventDefault(),t.stopPropagation(),s.target.toggleClass(s.visibleClass)}),s.hideOnEscape&&l.on("keydown",function(t){27==t.keyCode&&r._hide(t)}),r},o.fn.placeholder=function(){if(void 0!==document.createElement("input").placeholder)return o(this);if(0==this.length)return e;if(1<this.length){for(var t=0;t<this.length;t++)o(this[t]).placeholder();return e}var e=o(this);return e.find("input[type=text],textarea").each(function(){var t=o(this);""!=t.val()&&t.val()!=t.attr("placeholder")||t.addClass("polyfill-placeholder").val(t.attr("placeholder"))}).on("blur",function(){var t=o(this);t.attr("name").match(/-polyfill-field$/)||""==t.val()&&t.addClass("polyfill-placeholder").val(t.attr("placeholder"))}).on("focus",function(){var t=o(this);t.attr("name").match(/-polyfill-field$/)||t.val()==t.attr("placeholder")&&t.removeClass("polyfill-placeholder").val("")}),e.find("input[type=password]").each(function(){var e=o(this),a=o(o("<div>").append(e.clone()).remove().html().replace(/type="password"/i,'type="text"').replace(/type=password/i,"type=text"));""!=e.attr("id")&&a.attr("id",e.attr("id")+"-polyfill-field"),""!=e.attr("name")&&a.attr("name",e.attr("name")+"-polyfill-field"),a.addClass("polyfill-placeholder").val(a.attr("placeholder")).insertAfter(e),(""==e.val()?e:a).hide(),e.on("blur",function(t){t.preventDefault();t=e.parent().find("input[name="+e.attr("name")+"-polyfill-field]");""==e.val()&&(e.hide(),t.show())}),a.on("focus",function(t){t.preventDefault();t=a.parent().find("input[name="+a.attr("name").replace("-polyfill-field","")+"]");a.hide(),t.show().focus()}).on("keypress",function(t){t.preventDefault(),a.val("")})}),e.on("submit",function(){e.find("input[type=text],input[type=password],textarea").each(function(t){var e=o(this);e.attr("name").match(/-polyfill-field$/)&&e.attr("name",""),e.val()==e.attr("placeholder")&&(e.removeClass("polyfill-placeholder"),e.val(""))})}).on("reset",function(t){t.preventDefault(),e.find("select").val(o("option:first").val()),e.find("input,textarea").each(function(){var t,e=o(this);switch(e.removeClass("polyfill-placeholder"),this.type){case"submit":case"reset":break;case"password":e.val(e.attr("defaultValue")),t=e.parent().find("input[name="+e.attr("name")+"-polyfill-field]"),""==e.val()?(e.hide(),t.show()):(e.show(),t.hide());break;case"checkbox":case"radio":e.attr("checked",e.attr("defaultValue"));break;case"text":case"textarea":e.val(e.attr("defaultValue")),""==e.val()&&(e.addClass("polyfill-placeholder"),e.val(e.attr("placeholder")));break;default:e.val(e.attr("defaultValue"))}})}),e},o.prioritize=function(t,l){var i="__prioritize";(t="jQuery"!=typeof t?o(t):t).each(function(){var t,e=o(this),a=e.parent();0!=a.length&&(e.data(i)?l||(t=e.data(i),e.insertAfter(t),e.removeData(i)):l&&0!=(t=e.prev()).length&&(e.prependTo(a),e.data(i,t)))})}}(jQuery);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbC5qcyIsInNvdXJjZXMiOlsidXRpbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gKCQpIHtcclxuXHJcblx0LyoqXHJcblx0ICogR2VuZXJhdGUgYW4gaW5kZW50ZWQgbGlzdCBvZiBsaW5rcyBmcm9tIGEgbmF2LiBNZWFudCBmb3IgdXNlIHdpdGggcGFuZWwoKS5cclxuXHQgKiBAcmV0dXJuIHtqUXVlcnl9IGpRdWVyeSBvYmplY3QuXHJcblx0ICovXHJcblx0JC5mbi5uYXZMaXN0ID0gZnVuY3Rpb24gKCkge1xyXG5cclxuXHRcdHZhciAkdGhpcyA9ICQodGhpcyk7XHJcblx0XHQkYSA9ICR0aGlzLmZpbmQoJ2EnKSxcclxuXHRcdFx0YiA9IFtdO1xyXG5cclxuXHRcdCRhLmVhY2goZnVuY3Rpb24gKCkge1xyXG5cclxuXHRcdFx0dmFyICR0aGlzID0gJCh0aGlzKSxcclxuXHRcdFx0XHRpbmRlbnQgPSBNYXRoLm1heCgwLCAkdGhpcy5wYXJlbnRzKCdsaScpLmxlbmd0aCAtIDEpLFxyXG5cdFx0XHRcdGhyZWYgPSAkdGhpcy5hdHRyKCdocmVmJyksXHJcblx0XHRcdFx0dGFyZ2V0ID0gJHRoaXMuYXR0cigndGFyZ2V0Jyk7XHJcblxyXG5cdFx0XHRiLnB1c2goXHJcblx0XHRcdFx0JzxhICcgK1xyXG5cdFx0XHRcdCdjbGFzcz1cImxpbmsgZGVwdGgtJyArIGluZGVudCArICdcIicgK1xyXG5cdFx0XHRcdCgodHlwZW9mIHRhcmdldCAhPT0gJ3VuZGVmaW5lZCcgJiYgdGFyZ2V0ICE9ICcnKSA/ICcgdGFyZ2V0PVwiJyArIHRhcmdldCArICdcIicgOiAnJykgK1xyXG5cdFx0XHRcdCgodHlwZW9mIGhyZWYgIT09ICd1bmRlZmluZWQnICYmIGhyZWYgIT0gJycpID8gJyBocmVmPVwiJyArIGhyZWYgKyAnXCInIDogJycpICtcclxuXHRcdFx0XHQnPicgK1xyXG5cdFx0XHRcdCc8c3BhbiBjbGFzcz1cImluZGVudC0nICsgaW5kZW50ICsgJ1wiPjwvc3Bhbj4nICtcclxuXHRcdFx0XHQkdGhpcy50ZXh0KCkgK1xyXG5cdFx0XHRcdCc8L2E+J1xyXG5cdFx0XHQpO1xyXG5cclxuXHRcdH0pO1xyXG5cclxuXHRcdHJldHVybiBiLmpvaW4oJycpO1xyXG5cclxuXHR9O1xyXG5cclxuXHQvKipcclxuXHQgKiBQYW5lbC1pZnkgYW4gZWxlbWVudC5cclxuXHQgKiBAcGFyYW0ge29iamVjdH0gdXNlckNvbmZpZyBVc2VyIGNvbmZpZy5cclxuXHQgKiBAcmV0dXJuIHtqUXVlcnl9IGpRdWVyeSBvYmplY3QuXHJcblx0ICovXHJcblx0JC5mbi5wYW5lbCA9IGZ1bmN0aW9uICh1c2VyQ29uZmlnKSB7XHJcblxyXG5cdFx0Ly8gTm8gZWxlbWVudHM/XHJcblx0XHRpZiAodGhpcy5sZW5ndGggPT0gMClcclxuXHRcdFx0cmV0dXJuICR0aGlzO1xyXG5cclxuXHRcdC8vIE11bHRpcGxlIGVsZW1lbnRzP1xyXG5cdFx0aWYgKHRoaXMubGVuZ3RoID4gMSkge1xyXG5cclxuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKVxyXG5cdFx0XHRcdCQodGhpc1tpXSkucGFuZWwodXNlckNvbmZpZyk7XHJcblxyXG5cdFx0XHRyZXR1cm4gJHRoaXM7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdC8vIFZhcnMuXHJcblx0XHR2YXIgJHRoaXMgPSAkKHRoaXMpLFxyXG5cdFx0XHQkYm9keSA9ICQoJ2JvZHknKSxcclxuXHRcdFx0JHdpbmRvdyA9ICQod2luZG93KSxcclxuXHRcdFx0aWQgPSAkdGhpcy5hdHRyKCdpZCcpLFxyXG5cdFx0XHRjb25maWc7XHJcblxyXG5cdFx0Ly8gQ29uZmlnLlxyXG5cdFx0Y29uZmlnID0gJC5leHRlbmQoe1xyXG5cclxuXHRcdFx0Ly8gRGVsYXkuXHJcblx0XHRcdGRlbGF5OiAwLFxyXG5cclxuXHRcdFx0Ly8gSGlkZSBwYW5lbCBvbiBsaW5rIGNsaWNrLlxyXG5cdFx0XHRoaWRlT25DbGljazogZmFsc2UsXHJcblxyXG5cdFx0XHQvLyBIaWRlIHBhbmVsIG9uIGVzY2FwZSBrZXlwcmVzcy5cclxuXHRcdFx0aGlkZU9uRXNjYXBlOiBmYWxzZSxcclxuXHJcblx0XHRcdC8vIEhpZGUgcGFuZWwgb24gc3dpcGUuXHJcblx0XHRcdGhpZGVPblN3aXBlOiBmYWxzZSxcclxuXHJcblx0XHRcdC8vIFJlc2V0IHNjcm9sbCBwb3NpdGlvbiBvbiBoaWRlLlxyXG5cdFx0XHRyZXNldFNjcm9sbDogZmFsc2UsXHJcblxyXG5cdFx0XHQvLyBSZXNldCBmb3JtcyBvbiBoaWRlLlxyXG5cdFx0XHRyZXNldEZvcm1zOiBmYWxzZSxcclxuXHJcblx0XHRcdC8vIFNpZGUgb2Ygdmlld3BvcnQgdGhlIHBhbmVsIHdpbGwgYXBwZWFyLlxyXG5cdFx0XHRzaWRlOiBudWxsLFxyXG5cclxuXHRcdFx0Ly8gVGFyZ2V0IGVsZW1lbnQgZm9yIFwiY2xhc3NcIi5cclxuXHRcdFx0dGFyZ2V0OiAkdGhpcyxcclxuXHJcblx0XHRcdC8vIENsYXNzIHRvIHRvZ2dsZS5cclxuXHRcdFx0dmlzaWJsZUNsYXNzOiAndmlzaWJsZSdcclxuXHJcblx0XHR9LCB1c2VyQ29uZmlnKTtcclxuXHJcblx0XHQvLyBFeHBhbmQgXCJ0YXJnZXRcIiBpZiBpdCdzIG5vdCBhIGpRdWVyeSBvYmplY3QgYWxyZWFkeS5cclxuXHRcdGlmICh0eXBlb2YgY29uZmlnLnRhcmdldCAhPSAnalF1ZXJ5JylcclxuXHRcdFx0Y29uZmlnLnRhcmdldCA9ICQoY29uZmlnLnRhcmdldCk7XHJcblxyXG5cdFx0Ly8gUGFuZWwuXHJcblxyXG5cdFx0Ly8gTWV0aG9kcy5cclxuXHRcdCR0aGlzLl9oaWRlID0gZnVuY3Rpb24gKGV2ZW50KSB7XHJcblxyXG5cdFx0XHQvLyBBbHJlYWR5IGhpZGRlbj8gQmFpbC5cclxuXHRcdFx0aWYgKCFjb25maWcudGFyZ2V0Lmhhc0NsYXNzKGNvbmZpZy52aXNpYmxlQ2xhc3MpKVxyXG5cdFx0XHRcdHJldHVybjtcclxuXHJcblx0XHRcdC8vIElmIGFuIGV2ZW50IHdhcyBwcm92aWRlZCwgY2FuY2VsIGl0LlxyXG5cdFx0XHRpZiAoZXZlbnQpIHtcclxuXHJcblx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC8vIEhpZGUuXHJcblx0XHRcdGNvbmZpZy50YXJnZXQucmVtb3ZlQ2xhc3MoY29uZmlnLnZpc2libGVDbGFzcyk7XHJcblxyXG5cdFx0XHQvLyBQb3N0LWhpZGUgc3R1ZmYuXHJcblx0XHRcdHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuXHJcblx0XHRcdFx0Ly8gUmVzZXQgc2Nyb2xsIHBvc2l0aW9uLlxyXG5cdFx0XHRcdGlmIChjb25maWcucmVzZXRTY3JvbGwpXHJcblx0XHRcdFx0XHQkdGhpcy5zY3JvbGxUb3AoMCk7XHJcblxyXG5cdFx0XHRcdC8vIFJlc2V0IGZvcm1zLlxyXG5cdFx0XHRcdGlmIChjb25maWcucmVzZXRGb3JtcylcclxuXHRcdFx0XHRcdCR0aGlzLmZpbmQoJ2Zvcm0nKS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHRcdFx0dGhpcy5yZXNldCgpO1xyXG5cdFx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHR9LCBjb25maWcuZGVsYXkpO1xyXG5cclxuXHRcdH07XHJcblxyXG5cdFx0Ly8gVmVuZG9yIGZpeGVzLlxyXG5cdFx0JHRoaXNcclxuXHRcdFx0LmNzcygnLW1zLW92ZXJmbG93LXN0eWxlJywgJy1tcy1hdXRvaGlkaW5nLXNjcm9sbGJhcicpXHJcblx0XHRcdC5jc3MoJy13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nJywgJ3RvdWNoJyk7XHJcblxyXG5cdFx0Ly8gSGlkZSBvbiBjbGljay5cclxuXHRcdGlmIChjb25maWcuaGlkZU9uQ2xpY2spIHtcclxuXHJcblx0XHRcdCR0aGlzLmZpbmQoJ2EnKVxyXG5cdFx0XHRcdC5jc3MoJy13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcicsICdyZ2JhKDAsMCwwLDApJyk7XHJcblxyXG5cdFx0XHQkdGhpc1xyXG5cdFx0XHRcdC5vbignY2xpY2snLCAnYScsIGZ1bmN0aW9uIChldmVudCkge1xyXG5cclxuXHRcdFx0XHRcdHZhciAkYSA9ICQodGhpcyksXHJcblx0XHRcdFx0XHRcdGhyZWYgPSAkYS5hdHRyKCdocmVmJyksXHJcblx0XHRcdFx0XHRcdHRhcmdldCA9ICRhLmF0dHIoJ3RhcmdldCcpO1xyXG5cclxuXHRcdFx0XHRcdGlmICghaHJlZiB8fCBocmVmID09ICcjJyB8fCBocmVmID09ICcnIHx8IGhyZWYgPT0gJyMnICsgaWQpXHJcblx0XHRcdFx0XHRcdHJldHVybjtcclxuXHJcblx0XHRcdFx0XHQvLyBDYW5jZWwgb3JpZ2luYWwgZXZlbnQuXHJcblx0XHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHRcdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblxyXG5cdFx0XHRcdFx0Ly8gSGlkZSBwYW5lbC5cclxuXHRcdFx0XHRcdCR0aGlzLl9oaWRlKCk7XHJcblxyXG5cdFx0XHRcdFx0Ly8gUmVkaXJlY3QgdG8gaHJlZi5cclxuXHRcdFx0XHRcdHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuXHJcblx0XHRcdFx0XHRcdGlmICh0YXJnZXQgPT0gJ19ibGFuaycpXHJcblx0XHRcdFx0XHRcdFx0d2luZG93Lm9wZW4oaHJlZik7XHJcblx0XHRcdFx0XHRcdGVsc2VcclxuXHRcdFx0XHRcdFx0XHR3aW5kb3cubG9jYXRpb24uaHJlZiA9IGhyZWY7XHJcblxyXG5cdFx0XHRcdFx0fSwgY29uZmlnLmRlbGF5ICsgMTApO1xyXG5cclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gRXZlbnQ6IFRvdWNoIHN0dWZmLlxyXG5cdFx0JHRoaXMub24oJ3RvdWNoc3RhcnQnLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuXHJcblx0XHRcdCR0aGlzLnRvdWNoUG9zWCA9IGV2ZW50Lm9yaWdpbmFsRXZlbnQudG91Y2hlc1swXS5wYWdlWDtcclxuXHRcdFx0JHRoaXMudG91Y2hQb3NZID0gZXZlbnQub3JpZ2luYWxFdmVudC50b3VjaGVzWzBdLnBhZ2VZO1xyXG5cclxuXHRcdH0pXHJcblxyXG5cdFx0JHRoaXMub24oJ3RvdWNobW92ZScsIGZ1bmN0aW9uIChldmVudCkge1xyXG5cclxuXHRcdFx0aWYgKCR0aGlzLnRvdWNoUG9zWCA9PT0gbnVsbFxyXG5cdFx0XHRcdHx8ICR0aGlzLnRvdWNoUG9zWSA9PT0gbnVsbClcclxuXHRcdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0XHR2YXIgZGlmZlggPSAkdGhpcy50b3VjaFBvc1ggLSBldmVudC5vcmlnaW5hbEV2ZW50LnRvdWNoZXNbMF0ucGFnZVgsXHJcblx0XHRcdFx0ZGlmZlkgPSAkdGhpcy50b3VjaFBvc1kgLSBldmVudC5vcmlnaW5hbEV2ZW50LnRvdWNoZXNbMF0ucGFnZVksXHJcblx0XHRcdFx0dGggPSAkdGhpcy5vdXRlckhlaWdodCgpLFxyXG5cdFx0XHRcdHRzID0gKCR0aGlzLmdldCgwKS5zY3JvbGxIZWlnaHQgLSAkdGhpcy5zY3JvbGxUb3AoKSk7XHJcblxyXG5cdFx0XHQvLyBIaWRlIG9uIHN3aXBlP1xyXG5cdFx0XHRpZiAoY29uZmlnLmhpZGVPblN3aXBlKSB7XHJcblxyXG5cdFx0XHRcdHZhciByZXN1bHQgPSBmYWxzZSxcclxuXHRcdFx0XHRcdGJvdW5kYXJ5ID0gMjAsXHJcblx0XHRcdFx0XHRkZWx0YSA9IDUwO1xyXG5cclxuXHRcdFx0XHRzd2l0Y2ggKGNvbmZpZy5zaWRlKSB7XHJcblxyXG5cdFx0XHRcdFx0Y2FzZSAnbGVmdCc6XHJcblx0XHRcdFx0XHRcdHJlc3VsdCA9IChkaWZmWSA8IGJvdW5kYXJ5ICYmIGRpZmZZID4gKC0xICogYm91bmRhcnkpKSAmJiAoZGlmZlggPiBkZWx0YSk7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0XHRcdGNhc2UgJ3JpZ2h0JzpcclxuXHRcdFx0XHRcdFx0cmVzdWx0ID0gKGRpZmZZIDwgYm91bmRhcnkgJiYgZGlmZlkgPiAoLTEgKiBib3VuZGFyeSkpICYmIChkaWZmWCA8ICgtMSAqIGRlbHRhKSk7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0XHRcdGNhc2UgJ3RvcCc6XHJcblx0XHRcdFx0XHRcdHJlc3VsdCA9IChkaWZmWCA8IGJvdW5kYXJ5ICYmIGRpZmZYID4gKC0xICogYm91bmRhcnkpKSAmJiAoZGlmZlkgPiBkZWx0YSk7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0XHRcdGNhc2UgJ2JvdHRvbSc6XHJcblx0XHRcdFx0XHRcdHJlc3VsdCA9IChkaWZmWCA8IGJvdW5kYXJ5ICYmIGRpZmZYID4gKC0xICogYm91bmRhcnkpKSAmJiAoZGlmZlkgPCAoLTEgKiBkZWx0YSkpO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdFx0XHRkZWZhdWx0OlxyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRpZiAocmVzdWx0KSB7XHJcblxyXG5cdFx0XHRcdFx0JHRoaXMudG91Y2hQb3NYID0gbnVsbDtcclxuXHRcdFx0XHRcdCR0aGlzLnRvdWNoUG9zWSA9IG51bGw7XHJcblx0XHRcdFx0XHQkdGhpcy5faGlkZSgpO1xyXG5cclxuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ly8gUHJldmVudCB2ZXJ0aWNhbCBzY3JvbGxpbmcgcGFzdCB0aGUgdG9wIG9yIGJvdHRvbS5cclxuXHRcdFx0aWYgKCgkdGhpcy5zY3JvbGxUb3AoKSA8IDAgJiYgZGlmZlkgPCAwKVxyXG5cdFx0XHRcdHx8ICh0cyA+ICh0aCAtIDIpICYmIHRzIDwgKHRoICsgMikgJiYgZGlmZlkgPiAwKSkge1xyXG5cclxuXHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdH0pO1xyXG5cclxuXHRcdC8vIEV2ZW50OiBQcmV2ZW50IGNlcnRhaW4gZXZlbnRzIGluc2lkZSB0aGUgcGFuZWwgZnJvbSBidWJibGluZy5cclxuXHRcdCR0aGlzLm9uKCdjbGljayB0b3VjaGVuZCB0b3VjaHN0YXJ0IHRvdWNobW92ZScsIGZ1bmN0aW9uIChldmVudCkge1xyXG5cdFx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdC8vIEV2ZW50OiBIaWRlIHBhbmVsIGlmIGEgY2hpbGQgYW5jaG9yIHRhZyBwb2ludGluZyB0byBpdHMgSUQgaXMgY2xpY2tlZC5cclxuXHRcdCR0aGlzLm9uKCdjbGljaycsICdhW2hyZWY9XCIjJyArIGlkICsgJ1wiXScsIGZ1bmN0aW9uIChldmVudCkge1xyXG5cclxuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblxyXG5cdFx0XHRjb25maWcudGFyZ2V0LnJlbW92ZUNsYXNzKGNvbmZpZy52aXNpYmxlQ2xhc3MpO1xyXG5cclxuXHRcdH0pO1xyXG5cclxuXHRcdC8vIEJvZHkuXHJcblxyXG5cdFx0Ly8gRXZlbnQ6IEhpZGUgcGFuZWwgb24gYm9keSBjbGljay90YXAuXHJcblx0XHQkYm9keS5vbignY2xpY2sgdG91Y2hlbmQnLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuXHRcdFx0JHRoaXMuX2hpZGUoZXZlbnQpO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0Ly8gRXZlbnQ6IFRvZ2dsZS5cclxuXHRcdCRib2R5Lm9uKCdjbGljaycsICdhW2hyZWY9XCIjJyArIGlkICsgJ1wiXScsIGZ1bmN0aW9uIChldmVudCkge1xyXG5cclxuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblxyXG5cdFx0XHRjb25maWcudGFyZ2V0LnRvZ2dsZUNsYXNzKGNvbmZpZy52aXNpYmxlQ2xhc3MpO1xyXG5cclxuXHRcdH0pO1xyXG5cclxuXHRcdC8vIFdpbmRvdy5cclxuXHJcblx0XHQvLyBFdmVudDogSGlkZSBvbiBFU0MuXHJcblx0XHRpZiAoY29uZmlnLmhpZGVPbkVzY2FwZSlcclxuXHRcdFx0JHdpbmRvdy5vbigna2V5ZG93bicsIGZ1bmN0aW9uIChldmVudCkge1xyXG5cclxuXHRcdFx0XHRpZiAoZXZlbnQua2V5Q29kZSA9PSAyNylcclxuXHRcdFx0XHRcdCR0aGlzLl9oaWRlKGV2ZW50KTtcclxuXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdHJldHVybiAkdGhpcztcclxuXHJcblx0fTtcclxuXHJcblx0LyoqXHJcblx0ICogQXBwbHkgXCJwbGFjZWhvbGRlclwiIGF0dHJpYnV0ZSBwb2x5ZmlsbCB0byBvbmUgb3IgbW9yZSBmb3Jtcy5cclxuXHQgKiBAcmV0dXJuIHtqUXVlcnl9IGpRdWVyeSBvYmplY3QuXHJcblx0ICovXHJcblx0JC5mbi5wbGFjZWhvbGRlciA9IGZ1bmN0aW9uICgpIHtcclxuXHJcblx0XHQvLyBCcm93c2VyIG5hdGl2ZWx5IHN1cHBvcnRzIHBsYWNlaG9sZGVycz8gQmFpbC5cclxuXHRcdGlmICh0eXBlb2YgKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JykpLnBsYWNlaG9sZGVyICE9ICd1bmRlZmluZWQnKVxyXG5cdFx0XHRyZXR1cm4gJCh0aGlzKTtcclxuXHJcblx0XHQvLyBObyBlbGVtZW50cz9cclxuXHRcdGlmICh0aGlzLmxlbmd0aCA9PSAwKVxyXG5cdFx0XHRyZXR1cm4gJHRoaXM7XHJcblxyXG5cdFx0Ly8gTXVsdGlwbGUgZWxlbWVudHM/XHJcblx0XHRpZiAodGhpcy5sZW5ndGggPiAxKSB7XHJcblxyXG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspXHJcblx0XHRcdFx0JCh0aGlzW2ldKS5wbGFjZWhvbGRlcigpO1xyXG5cclxuXHRcdFx0cmV0dXJuICR0aGlzO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHQvLyBWYXJzLlxyXG5cdFx0dmFyICR0aGlzID0gJCh0aGlzKTtcclxuXHJcblx0XHQvLyBUZXh0LCBUZXh0QXJlYS5cclxuXHRcdCR0aGlzLmZpbmQoJ2lucHV0W3R5cGU9dGV4dF0sdGV4dGFyZWEnKVxyXG5cdFx0XHQuZWFjaChmdW5jdGlvbiAoKSB7XHJcblxyXG5cdFx0XHRcdHZhciBpID0gJCh0aGlzKTtcclxuXHJcblx0XHRcdFx0aWYgKGkudmFsKCkgPT0gJydcclxuXHRcdFx0XHRcdHx8IGkudmFsKCkgPT0gaS5hdHRyKCdwbGFjZWhvbGRlcicpKVxyXG5cdFx0XHRcdFx0aVxyXG5cdFx0XHRcdFx0XHQuYWRkQ2xhc3MoJ3BvbHlmaWxsLXBsYWNlaG9sZGVyJylcclxuXHRcdFx0XHRcdFx0LnZhbChpLmF0dHIoJ3BsYWNlaG9sZGVyJykpO1xyXG5cclxuXHRcdFx0fSlcclxuXHRcdFx0Lm9uKCdibHVyJywgZnVuY3Rpb24gKCkge1xyXG5cclxuXHRcdFx0XHR2YXIgaSA9ICQodGhpcyk7XHJcblxyXG5cdFx0XHRcdGlmIChpLmF0dHIoJ25hbWUnKS5tYXRjaCgvLXBvbHlmaWxsLWZpZWxkJC8pKVxyXG5cdFx0XHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdFx0XHRpZiAoaS52YWwoKSA9PSAnJylcclxuXHRcdFx0XHRcdGlcclxuXHRcdFx0XHRcdFx0LmFkZENsYXNzKCdwb2x5ZmlsbC1wbGFjZWhvbGRlcicpXHJcblx0XHRcdFx0XHRcdC52YWwoaS5hdHRyKCdwbGFjZWhvbGRlcicpKTtcclxuXHJcblx0XHRcdH0pXHJcblx0XHRcdC5vbignZm9jdXMnLCBmdW5jdGlvbiAoKSB7XHJcblxyXG5cdFx0XHRcdHZhciBpID0gJCh0aGlzKTtcclxuXHJcblx0XHRcdFx0aWYgKGkuYXR0cignbmFtZScpLm1hdGNoKC8tcG9seWZpbGwtZmllbGQkLykpXHJcblx0XHRcdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0XHRcdGlmIChpLnZhbCgpID09IGkuYXR0cigncGxhY2Vob2xkZXInKSlcclxuXHRcdFx0XHRcdGlcclxuXHRcdFx0XHRcdFx0LnJlbW92ZUNsYXNzKCdwb2x5ZmlsbC1wbGFjZWhvbGRlcicpXHJcblx0XHRcdFx0XHRcdC52YWwoJycpO1xyXG5cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0Ly8gUGFzc3dvcmQuXHJcblx0XHQkdGhpcy5maW5kKCdpbnB1dFt0eXBlPXBhc3N3b3JkXScpXHJcblx0XHRcdC5lYWNoKGZ1bmN0aW9uICgpIHtcclxuXHJcblx0XHRcdFx0dmFyIGkgPSAkKHRoaXMpO1xyXG5cdFx0XHRcdHZhciB4ID0gJChcclxuXHRcdFx0XHRcdCQoJzxkaXY+JylcclxuXHRcdFx0XHRcdFx0LmFwcGVuZChpLmNsb25lKCkpXHJcblx0XHRcdFx0XHRcdC5yZW1vdmUoKVxyXG5cdFx0XHRcdFx0XHQuaHRtbCgpXHJcblx0XHRcdFx0XHRcdC5yZXBsYWNlKC90eXBlPVwicGFzc3dvcmRcIi9pLCAndHlwZT1cInRleHRcIicpXHJcblx0XHRcdFx0XHRcdC5yZXBsYWNlKC90eXBlPXBhc3N3b3JkL2ksICd0eXBlPXRleHQnKVxyXG5cdFx0XHRcdCk7XHJcblxyXG5cdFx0XHRcdGlmIChpLmF0dHIoJ2lkJykgIT0gJycpXHJcblx0XHRcdFx0XHR4LmF0dHIoJ2lkJywgaS5hdHRyKCdpZCcpICsgJy1wb2x5ZmlsbC1maWVsZCcpO1xyXG5cclxuXHRcdFx0XHRpZiAoaS5hdHRyKCduYW1lJykgIT0gJycpXHJcblx0XHRcdFx0XHR4LmF0dHIoJ25hbWUnLCBpLmF0dHIoJ25hbWUnKSArICctcG9seWZpbGwtZmllbGQnKTtcclxuXHJcblx0XHRcdFx0eC5hZGRDbGFzcygncG9seWZpbGwtcGxhY2Vob2xkZXInKVxyXG5cdFx0XHRcdFx0LnZhbCh4LmF0dHIoJ3BsYWNlaG9sZGVyJykpLmluc2VydEFmdGVyKGkpO1xyXG5cclxuXHRcdFx0XHRpZiAoaS52YWwoKSA9PSAnJylcclxuXHRcdFx0XHRcdGkuaGlkZSgpO1xyXG5cdFx0XHRcdGVsc2VcclxuXHRcdFx0XHRcdHguaGlkZSgpO1xyXG5cclxuXHRcdFx0XHRpXHJcblx0XHRcdFx0XHQub24oJ2JsdXInLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuXHJcblx0XHRcdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG5cdFx0XHRcdFx0XHR2YXIgeCA9IGkucGFyZW50KCkuZmluZCgnaW5wdXRbbmFtZT0nICsgaS5hdHRyKCduYW1lJykgKyAnLXBvbHlmaWxsLWZpZWxkXScpO1xyXG5cclxuXHRcdFx0XHRcdFx0aWYgKGkudmFsKCkgPT0gJycpIHtcclxuXHJcblx0XHRcdFx0XHRcdFx0aS5oaWRlKCk7XHJcblx0XHRcdFx0XHRcdFx0eC5zaG93KCk7XHJcblxyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdHhcclxuXHRcdFx0XHRcdC5vbignZm9jdXMnLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuXHJcblx0XHRcdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG5cdFx0XHRcdFx0XHR2YXIgaSA9IHgucGFyZW50KCkuZmluZCgnaW5wdXRbbmFtZT0nICsgeC5hdHRyKCduYW1lJykucmVwbGFjZSgnLXBvbHlmaWxsLWZpZWxkJywgJycpICsgJ10nKTtcclxuXHJcblx0XHRcdFx0XHRcdHguaGlkZSgpO1xyXG5cclxuXHRcdFx0XHRcdFx0aVxyXG5cdFx0XHRcdFx0XHRcdC5zaG93KClcclxuXHRcdFx0XHRcdFx0XHQuZm9jdXMoKTtcclxuXHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0Lm9uKCdrZXlwcmVzcycsIGZ1bmN0aW9uIChldmVudCkge1xyXG5cclxuXHRcdFx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFx0XHRcdFx0eC52YWwoJycpO1xyXG5cclxuXHRcdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0Ly8gRXZlbnRzLlxyXG5cdFx0JHRoaXNcclxuXHRcdFx0Lm9uKCdzdWJtaXQnLCBmdW5jdGlvbiAoKSB7XHJcblxyXG5cdFx0XHRcdCR0aGlzLmZpbmQoJ2lucHV0W3R5cGU9dGV4dF0saW5wdXRbdHlwZT1wYXNzd29yZF0sdGV4dGFyZWEnKVxyXG5cdFx0XHRcdFx0LmVhY2goZnVuY3Rpb24gKGV2ZW50KSB7XHJcblxyXG5cdFx0XHRcdFx0XHR2YXIgaSA9ICQodGhpcyk7XHJcblxyXG5cdFx0XHRcdFx0XHRpZiAoaS5hdHRyKCduYW1lJykubWF0Y2goLy1wb2x5ZmlsbC1maWVsZCQvKSlcclxuXHRcdFx0XHRcdFx0XHRpLmF0dHIoJ25hbWUnLCAnJyk7XHJcblxyXG5cdFx0XHRcdFx0XHRpZiAoaS52YWwoKSA9PSBpLmF0dHIoJ3BsYWNlaG9sZGVyJykpIHtcclxuXHJcblx0XHRcdFx0XHRcdFx0aS5yZW1vdmVDbGFzcygncG9seWZpbGwtcGxhY2Vob2xkZXInKTtcclxuXHRcdFx0XHRcdFx0XHRpLnZhbCgnJyk7XHJcblxyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHR9KVxyXG5cdFx0XHQub24oJ3Jlc2V0JywgZnVuY3Rpb24gKGV2ZW50KSB7XHJcblxyXG5cdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG5cdFx0XHRcdCR0aGlzLmZpbmQoJ3NlbGVjdCcpXHJcblx0XHRcdFx0XHQudmFsKCQoJ29wdGlvbjpmaXJzdCcpLnZhbCgpKTtcclxuXHJcblx0XHRcdFx0JHRoaXMuZmluZCgnaW5wdXQsdGV4dGFyZWEnKVxyXG5cdFx0XHRcdFx0LmVhY2goZnVuY3Rpb24gKCkge1xyXG5cclxuXHRcdFx0XHRcdFx0dmFyIGkgPSAkKHRoaXMpLFxyXG5cdFx0XHRcdFx0XHRcdHg7XHJcblxyXG5cdFx0XHRcdFx0XHRpLnJlbW92ZUNsYXNzKCdwb2x5ZmlsbC1wbGFjZWhvbGRlcicpO1xyXG5cclxuXHRcdFx0XHRcdFx0c3dpdGNoICh0aGlzLnR5cGUpIHtcclxuXHJcblx0XHRcdFx0XHRcdFx0Y2FzZSAnc3VibWl0JzpcclxuXHRcdFx0XHRcdFx0XHRjYXNlICdyZXNldCc6XHJcblx0XHRcdFx0XHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdFx0XHRcdFx0Y2FzZSAncGFzc3dvcmQnOlxyXG5cdFx0XHRcdFx0XHRcdFx0aS52YWwoaS5hdHRyKCdkZWZhdWx0VmFsdWUnKSk7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0eCA9IGkucGFyZW50KCkuZmluZCgnaW5wdXRbbmFtZT0nICsgaS5hdHRyKCduYW1lJykgKyAnLXBvbHlmaWxsLWZpZWxkXScpO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdGlmIChpLnZhbCgpID09ICcnKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGkuaGlkZSgpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR4LnNob3coKTtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRpLnNob3coKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0eC5oaWRlKCk7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRcdFx0XHRcdGNhc2UgJ2NoZWNrYm94JzpcclxuXHRcdFx0XHRcdFx0XHRjYXNlICdyYWRpbyc6XHJcblx0XHRcdFx0XHRcdFx0XHRpLmF0dHIoJ2NoZWNrZWQnLCBpLmF0dHIoJ2RlZmF1bHRWYWx1ZScpKTtcclxuXHRcdFx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRjYXNlICd0ZXh0JzpcclxuXHRcdFx0XHRcdFx0XHRjYXNlICd0ZXh0YXJlYSc6XHJcblx0XHRcdFx0XHRcdFx0XHRpLnZhbChpLmF0dHIoJ2RlZmF1bHRWYWx1ZScpKTtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRpZiAoaS52YWwoKSA9PSAnJykge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRpLmFkZENsYXNzKCdwb2x5ZmlsbC1wbGFjZWhvbGRlcicpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRpLnZhbChpLmF0dHIoJ3BsYWNlaG9sZGVyJykpO1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRkZWZhdWx0OlxyXG5cdFx0XHRcdFx0XHRcdFx0aS52YWwoaS5hdHRyKCdkZWZhdWx0VmFsdWUnKSk7XHJcblx0XHRcdFx0XHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0cmV0dXJuICR0aGlzO1xyXG5cclxuXHR9O1xyXG5cclxuXHQvKipcclxuXHQgKiBNb3ZlcyBlbGVtZW50cyB0by9mcm9tIHRoZSBmaXJzdCBwb3NpdGlvbnMgb2YgdGhlaXIgcmVzcGVjdGl2ZSBwYXJlbnRzLlxyXG5cdCAqIEBwYXJhbSB7alF1ZXJ5fSAkZWxlbWVudHMgRWxlbWVudHMgKG9yIHNlbGVjdG9yKSB0byBtb3ZlLlxyXG5cdCAqIEBwYXJhbSB7Ym9vbH0gY29uZGl0aW9uIElmIHRydWUsIG1vdmVzIGVsZW1lbnRzIHRvIHRoZSB0b3AuIE90aGVyd2lzZSwgbW92ZXMgZWxlbWVudHMgYmFjayB0byB0aGVpciBvcmlnaW5hbCBsb2NhdGlvbnMuXHJcblx0ICovXHJcblx0JC5wcmlvcml0aXplID0gZnVuY3Rpb24gKCRlbGVtZW50cywgY29uZGl0aW9uKSB7XHJcblxyXG5cdFx0dmFyIGtleSA9ICdfX3ByaW9yaXRpemUnO1xyXG5cclxuXHRcdC8vIEV4cGFuZCAkZWxlbWVudHMgaWYgaXQncyBub3QgYWxyZWFkeSBhIGpRdWVyeSBvYmplY3QuXHJcblx0XHRpZiAodHlwZW9mICRlbGVtZW50cyAhPSAnalF1ZXJ5JylcclxuXHRcdFx0JGVsZW1lbnRzID0gJCgkZWxlbWVudHMpO1xyXG5cclxuXHRcdC8vIFN0ZXAgdGhyb3VnaCBlbGVtZW50cy5cclxuXHRcdCRlbGVtZW50cy5lYWNoKGZ1bmN0aW9uICgpIHtcclxuXHJcblx0XHRcdHZhciAkZSA9ICQodGhpcyksICRwLFxyXG5cdFx0XHRcdCRwYXJlbnQgPSAkZS5wYXJlbnQoKTtcclxuXHJcblx0XHRcdC8vIE5vIHBhcmVudD8gQmFpbC5cclxuXHRcdFx0aWYgKCRwYXJlbnQubGVuZ3RoID09IDApXHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdFx0Ly8gTm90IG1vdmVkPyBNb3ZlIGl0LlxyXG5cdFx0XHRpZiAoISRlLmRhdGEoa2V5KSkge1xyXG5cclxuXHRcdFx0XHQvLyBDb25kaXRpb24gaXMgZmFsc2U/IEJhaWwuXHJcblx0XHRcdFx0aWYgKCFjb25kaXRpb24pXHJcblx0XHRcdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0XHRcdC8vIEdldCBwbGFjZWhvbGRlciAod2hpY2ggd2lsbCBzZXJ2ZSBhcyBvdXIgcG9pbnQgb2YgcmVmZXJlbmNlIGZvciB3aGVuIHRoaXMgZWxlbWVudCBuZWVkcyB0byBtb3ZlIGJhY2spLlxyXG5cdFx0XHRcdCRwID0gJGUucHJldigpO1xyXG5cclxuXHRcdFx0XHQvLyBDb3VsZG4ndCBmaW5kIGFueXRoaW5nPyBNZWFucyB0aGlzIGVsZW1lbnQncyBhbHJlYWR5IGF0IHRoZSB0b3AsIHNvIGJhaWwuXHJcblx0XHRcdFx0aWYgKCRwLmxlbmd0aCA9PSAwKVxyXG5cdFx0XHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdFx0XHQvLyBNb3ZlIGVsZW1lbnQgdG8gdG9wIG9mIHBhcmVudC5cclxuXHRcdFx0XHQkZS5wcmVwZW5kVG8oJHBhcmVudCk7XHJcblxyXG5cdFx0XHRcdC8vIE1hcmsgZWxlbWVudCBhcyBtb3ZlZC5cclxuXHRcdFx0XHQkZS5kYXRhKGtleSwgJHApO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ly8gTW92ZWQgYWxyZWFkeT9cclxuXHRcdFx0ZWxzZSB7XHJcblxyXG5cdFx0XHRcdC8vIENvbmRpdGlvbiBpcyB0cnVlPyBCYWlsLlxyXG5cdFx0XHRcdGlmIChjb25kaXRpb24pXHJcblx0XHRcdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0XHRcdCRwID0gJGUuZGF0YShrZXkpO1xyXG5cclxuXHRcdFx0XHQvLyBNb3ZlIGVsZW1lbnQgYmFjayB0byBpdHMgb3JpZ2luYWwgbG9jYXRpb24gKHVzaW5nIG91ciBwbGFjZWhvbGRlcikuXHJcblx0XHRcdFx0JGUuaW5zZXJ0QWZ0ZXIoJHApO1xyXG5cclxuXHRcdFx0XHQvLyBVbm1hcmsgZWxlbWVudCBhcyBtb3ZlZC5cclxuXHRcdFx0XHQkZS5yZW1vdmVEYXRhKGtleSk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdH07XHJcblxyXG59KShqUXVlcnkpO1xyXG4iXSwibmFtZXMiOlsiJCIsImZuIiwibmF2TGlzdCIsIiR0aGlzIiwidGhpcyIsIiRhIiwiZmluZCIsImIiLCJlYWNoIiwiaW5kZW50IiwiTWF0aCIsIm1heCIsInBhcmVudHMiLCJsZW5ndGgiLCJocmVmIiwiYXR0ciIsInRhcmdldCIsInB1c2giLCJ0ZXh0Iiwiam9pbiIsInBhbmVsIiwidXNlckNvbmZpZyIsImkiLCIkYm9keSIsIiR3aW5kb3ciLCJ3aW5kb3ciLCJpZCIsImNvbmZpZyIsImV4dGVuZCIsImRlbGF5IiwiaGlkZU9uQ2xpY2siLCJoaWRlT25Fc2NhcGUiLCJoaWRlT25Td2lwZSIsInJlc2V0U2Nyb2xsIiwicmVzZXRGb3JtcyIsInNpZGUiLCJ2aXNpYmxlQ2xhc3MiLCJfaGlkZSIsImV2ZW50IiwiaGFzQ2xhc3MiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsInJlbW92ZUNsYXNzIiwic2V0VGltZW91dCIsInNjcm9sbFRvcCIsInJlc2V0IiwiY3NzIiwib24iLCJvcGVuIiwibG9jYXRpb24iLCJ0b3VjaFBvc1giLCJvcmlnaW5hbEV2ZW50IiwidG91Y2hlcyIsInBhZ2VYIiwidG91Y2hQb3NZIiwicGFnZVkiLCJkaWZmWCIsImRpZmZZIiwidGgiLCJvdXRlckhlaWdodCIsInRzIiwiZ2V0Iiwic2Nyb2xsSGVpZ2h0IiwicmVzdWx0IiwiYm91bmRhcnkiLCJ0b2dnbGVDbGFzcyIsImtleUNvZGUiLCJwbGFjZWhvbGRlciIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInZhbCIsImFkZENsYXNzIiwibWF0Y2giLCJ4IiwiYXBwZW5kIiwiY2xvbmUiLCJyZW1vdmUiLCJodG1sIiwicmVwbGFjZSIsImluc2VydEFmdGVyIiwiaGlkZSIsInBhcmVudCIsInNob3ciLCJmb2N1cyIsInR5cGUiLCJwcmlvcml0aXplIiwiJGVsZW1lbnRzIiwiY29uZGl0aW9uIiwia2V5IiwiJHAiLCIkZSIsIiRwYXJlbnQiLCJkYXRhIiwicmVtb3ZlRGF0YSIsInByZXYiLCJwcmVwZW5kVG8iLCJqUXVlcnkiXSwibWFwcGluZ3MiOiJDQUFBLFNBQVdBLEdBTVZBLEVBQUVDLEdBQUdDLFFBQVUsV0FFZCxJQUFJQyxFQUFRSCxFQUFFSSxNQXdCZCxPQXZCQUMsR0FBS0YsRUFBTUcsS0FBSyxLQUNmQyxFQUFJLEdBRUxGLEdBQUdHLEtBQUssV0FFUCxJQUFJTCxFQUFRSCxFQUFFSSxNQUNiSyxFQUFTQyxLQUFLQyxJQUFJLEVBQUdSLEVBQU1TLFFBQVEsTUFBTUMsT0FBUyxHQUNsREMsRUFBT1gsRUFBTVksS0FBSyxRQUNsQkMsRUFBU2IsRUFBTVksS0FBSyxVQUVyQlIsRUFBRVUsS0FDRCx3QkFDdUJSLEVBQVMsVUFDWixJQUFYTyxHQUFvQyxJQUFWQSxFQUFnQixZQUFjQSxFQUFTLElBQU0sVUFDOUQsSUFBVEYsR0FBZ0MsSUFBUkEsRUFBYyxVQUFZQSxFQUFPLElBQU0sSUFDeEUsd0JBQ3lCTCxFQUFTLFlBQ2xDTixFQUFNZSxPQUNOLFVBS0tYLEVBQUVZLEtBQUssS0FTZm5CLEVBQUVDLEdBQUdtQixNQUFRLFNBQVVDLEdBR3RCLEdBQW1CLEdBQWZqQixLQUFLUyxPQUNSLE9BQU9WLEVBR1IsR0FBa0IsRUFBZEMsS0FBS1MsT0FBWSxDQUVwQixJQUFLLElBQUlTLEVBQUksRUFBR0EsRUFBSWxCLEtBQUtT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
