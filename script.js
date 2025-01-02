function scrollToBottom() {
    var box = document.getElementsByClassName("Shop_section1");
    box.scrollTop = box.scrollHeight;
  }
  
  // Call scrollToBottom function whenever the content of the box changes
  document.getElementsByClassName("Shop_section1").addEventListener("DOMSubtreeModified", scrollToBottom);
  