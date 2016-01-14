
var p = document.getElementsByClassName("uiTextareaAutogrow _552m");
var o = document.getElementsByClassName("\_5wd9");
var e = new Event("keydown");
e.keyCode=13;
//alert("ASD");
var chatBox=p[p.length-1];
if (chatBox.value!="")
  chatBox.dispatchEvent(e);
