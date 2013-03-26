/** 
* LigHTML decompressor
* This file is included automatically at the beginning of lightml files
*/

// Hide everything
document.write("<style>*{display:none}</style>");

// When the page is loaded
window.onload = function(){

  // Set list of HTML5 tags
  var html_tags_1 = ["a","abbr","address","area","article","aside","audio","b","base","bb","bdi","bdo","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","command","data","datagrid","datalist","dd","del","details","dfn","div","dl","dt","em","embed","eventsource","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","mark","map","menu","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","pre","progress","q","ruby","rp","rt","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup"];
  var html_tags_2 = ["table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr"];
  var html_global_attributes = ["accesskey","class","contenteditable","contextmenu","dir","draggable","dropzone","hidden","id","lang","spellcheck","style","tabindex","title","translate","onabort","onblur","oncancel","oncanplay","oncanplaythrough","onchange","onclick","onclose","oncontextmenu","oncuechange","ondblclick","ondrag","ondragend","ondragenter","ondragleave","ondragover","ondragstart","ondrop","ondurationchange","onemptied","onended","onerror","onfocus","oninput","oninvalid","onkeydown","onkeypress","onkeyup","onload","onloadeddata","onloadedmetadata","onloadstart","onmousedown","onmousemove","onmouseout","onmouseover","onmouseup","onmousewheel","onpause","onplay","onplaying","onprogress","onratechange","onreset","onscroll","onseeked","onseeking","onselect","onshow","onstalled","onsubmit","onsuspend","ontimeupdate","onvolumechange","onwaiting"];
 
  // Get the LigHTML code (the body's content)
  var code_lightml = document.getElementsByTagName("body")[0].innerHTML;
  
  // Replace keywords starting with 0x01-0x03 with corresponding HTML5 tag
  var code_html = 

    code_lightml
  
    // Fix HTML entities
    .replace(/&amp;/g, "&")
    .replace(/&gt;/g, ">")


    // Convert HTML tags (set 1)
    
      // opening/self-closing tags without attributes:  + character code
      .replace(/(.)/g, function(match,p1){return "<" + html_tags_1[p1.charCodeAt(0) - 0x20] + ">"})
      
      // opening tags with attributes:  + character code
      .replace(/(.)/g, function(match,p1){return "<" + html_tags_1[p1.charCodeAt(0) - 0x20] + " "})
      
      // closing tags:  + character code
      .replace(/(.)/g, function(match,p1){return "</" + html_tags_1[p1.charCodeAt(0) - 0x20] + ">"})


    // Convert HTML tags (set 2)
    
      // opening/self-closing tags without attributes:  + character code
      .replace(/(.)/g, function(match,p1){return "<" + html_tags_2[p1.charCodeAt(0) - 0x20] + ">"})
      
      // opening tags with attributes:  + character code
      .replace(/(.)/g, function(match,p1){return "<" + html_tags_2[p1.charCodeAt(0) - 0x20] + " "})
      
      // closing tags:  + character code
      .replace(/(.)/g, function(match,p1){return "</" + html_tags_2[p1.charCodeAt(0) - 0x20] + ">"})


    // Convert HTML global attributes

      // attribute with an equal sign:  + character code
      .replace(/(.)/g, function(match,p1){console.log("BEL", p1, p1.charCodeAt(0), p1.charCodeAt(0) - 0x20);return html_global_attributes[p1.charCodeAt(0) - 0x20] + "="})

      // attribute without equal sign:  + character code
      .replace(/(.)/g, function(match,p1){console.log("BS", p1, p1.charCodeAt(0), p1.charCodeAt(0) - 0x20);return html_global_attributes[p1.charCodeAt(0) - 0x20] + " "})


    // Reset style (optional)
    // .replace("<head>", "<head><style>*{margin:0;padding:0}</style>");
  
  // Write HTML
  //console.log(code_lightml);
  //console.log(code_html);
  document.write(code_html);
}