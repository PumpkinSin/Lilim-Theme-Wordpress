jQuery(document).ready(function(e){var t=(e("#commentform"),e("#comments-title"),e("#cancel-comment-reply-link")),r=t.text();e(document).on("submit","#commentform",function(){return e.ajax({url:ajaxcomment.ajax_url,data:e(this).serialize()+"&action=ajax_comment",type:e(this).attr("method"),beforeSend:addComment.createButterbar("提交中...."),error:function(e){var t=addComment;t.createButterbar(e.responseText)},success:function(t){e("textarea").each(function(){this.value=""});var r=addComment,n=r.I("cancel-comment-reply-link"),o=r.I("wp-temp-form-div"),a=r.I(r.respondId),m=(r.I("comment_post_ID").value,r.I("comment_parent").value);"0"!=m?e("#respond").before('<ul class="children">'+t+"</ul>"):e(".commentlist").append(t),r.createButterbar("提交成功"),n.style.display="none",n.onclick=null,r.I("comment_parent").value="0",o&&a&&(o.parentNode.insertBefore(a,o),o.parentNode.removeChild(o))}}),!1}),addComment={moveForm:function(n,o,a){{var m,c=this,d=c.I(n),i=c.I(a),l=c.I("cancel-comment-reply-link"),p=c.I("comment_parent");c.I("comment_post_ID")}t.text(r),c.respondId=a,c.I("wp-temp-form-div")||(m=document.createElement("div"),m.id="wp-temp-form-div",m.style.display="none",i.parentNode.insertBefore(m,i)),d?d.parentNode.insertBefore(i,d.nextSibling):(temp=c.I("wp-temp-form-div"),c.I("comment_parent").value="0",temp.parentNode.insertBefore(i,temp),temp.parentNode.removeChild(temp)),e("body").animate({scrollTop:e("#respond").offset().top-180},400),p.value=o,l.style.display="",l.onclick=function(){var e=addComment,t=e.I("wp-temp-form-div"),r=e.I(e.respondId);return e.I("comment_parent").value="0",t&&r&&(t.parentNode.insertBefore(r,t),t.parentNode.removeChild(t)),this.style.display="none",this.onclick=null,!1};try{c.I("comment").focus()}catch(u){}return!1},I:function(e){return document.getElementById(e)},clearButterbar:function(){e(".butterBar").length>0&&e(".butterBar").remove()},createButterbar:function(t){var r=this;r.clearButterbar(),e("body").append('<div class="butterBar butterBar--center"><p class="butterBar-message">'+t+"</p></div>"),setTimeout("jQuery('.butterBar').remove()",3e3)}}});
//# sourceMappingURL=comment.js.map