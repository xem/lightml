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
  var html_global_attributes_and_events = ["accesskey","class","contenteditable","contextmenu","dir","draggable","dropzone","hidden","id","lang","spellcheck","style","tabindex","title","translate","wml:base","xml:lang","onabort","onafterprint","onbeforeprint","onbeforeunload","onblur","oncancel","oncanplay","oncanplaythrough","onchange","onclick","onclose","oncontextmenu","oncuechange","ondblclick","ondrag","ondragend","ondragenter","ondragleave","ondragover","ondragstart","ondrop","ondurationchange","onemptied","onended","onerror","onfocus","onhashchange","oninput","oninvalid","onkeydown","onkeypress","onkeyup","onload","onloadeddata","onloadedmetadata","onloadstart","onmessage","onmousedown","onmousemove","onmouseout","onmouseover","onmouseup","onmousewheel","onoffline","ononline","onpagehide","onpageshow","onpause","onplay","onplaying","onpopstate","onprogress","onratechange","onreset","onresize","onscroll","onseeked","onseeking","onselect","onshow","onstalled","onstorage","onsubmit","onsuspend","ontimeupdate","onunload","onvolumechange","onwaiting"];
  var html_specific_attributes = ["abbr","accept","accept-charset","action","alt","async","autocomplete","autofocus","autoplay","challenge","charset","checked","cite","cols","colspan","command","content","controls","coords","crossorigin","data","datetime","default","defer","dirname","disabled","enctype","for","form","formaction","formenctype","formmethod","formnovalidate","formtarget","headers","height","high","href","hreflang","http-equiv","icon","ismap","keytype","kind","label","list","loop","low","manifest","max","maxlength","media","mediagroup","method","min","multiple","muted","name","novalidate","open","optimum","pattern","placeholder","poster","preload","radiogroup","readonly","rel","required","reversed","rows","rowspan","sandbox","scope","seamless","selected","shape","size","sizes","span","src","srcdoc","srclang","start","step","target","type","typemustmatch","usemap","value","width","wrap"];
  var html_attributes_values = ["0","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","-1","-2","-3","-4","-5","#","alternate","application-name","author","auto","bookmark","button","checkbox","color","content-type","date","datetime","datetime-local","default-style","description","email","file","generator","handheld","help","hidden","icon","image","javascript:;","javascript:void(0);","keywords","licence","ltr","month","next","nofollow","noreferrer","number","passwoed","prefetch","prev","print","radio","range","refresh","reset","rtl","search","set-cookie","screen","search","stylesheet","submit","tag","tel","text","text/css","time","url","text/javascript","utf-8","week"];
  var english_words_1 = ["the","and","you","that","was","for","are","with","his","they","this","have","from","one","had","word","but","not","what","all","were","when","our","can","said","her","use","each","which","she","show","their","will","other","out","about","many","then","them","these","thing","here","would","make","like","him","into","time","has","look","two","more","write","seem","number","always","could","people","than","first","water","been","call","who","oil","its","now","find","along","own","day","did","together","come","made","may","part","over","new","sound","take","only","little","work","know","place","year","live","back","give","almost","very","after","something","your","just"];
  var english_words_2 = ["name","good","sentence","man","think","say","eat","where","help","through","much","before","line","right","too","mean","old","any","same","tell","boy","follow","came","want","how","also","around","form","three","small","set","put","end","does","another","well","large","must","big","even","such","because","turn","there","why","ask","went","men","read","need","land","different","home","move","try","kind","hand","picture","again","change","off","play","spell","air","away","animal","house","point","page","letter","mother","answer","found","study","still","learn","should","America","world","high","every","near","add","food","between","down","below","country","plant","last","school","father","keep","tree","never","start"];
  var english_words_3 = ["city","earth","eye","light","thought","head","under","story","saw","left","don't","few","while","long","might","close","some","see","next","hard","open","example","begin","life","way","those","both","paper","get","got","group","often","run","important","until","children","side","feet","car","mile","night","walk","white","sea","began","grow","took","river","four","carry","state","once","book","hear","stop","without","second","later","miss","idea","enough","great","face","watch","far","Indian","really","most","let","above","girl","sometimes","mountain","cut","young","talk","soon","list","song","being","leave","family","it's","body","music","color","stand","sun","questions","fish","area","mark","dog","horse","birds","problem"];

  
  // Get the LigHTML code (the body's content)
  var code_lightml = document.getElementsByTagName("body")[0].innerHTML;
  var code_html = 

    code_lightml
  
    // Fix HTML entities
    .replace(/&amp;/g, "&")
    .replace(/&gt;/g, ">")
    .replace(/&lt;/g, "<")


    // Convert HTML tags (set 1)
    
      // opening/self-closing tags without attributes:  + character code
      .replace(/(.)/g, function(match,p1){if(p1 == "<") console.log(p1.charCodeAt(0) - 0x20); return "<" + html_tags_1[p1.charCodeAt(0) - 0x20] + ">"})
      
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


    // Convert HTML global attributes and events

      // attribute with an equal sign:  + character code
      .replace(/(.)/g, function(match,p1){return html_global_attributes_and_events[p1.charCodeAt(0) - 0x20] + "="})

      // last attribute without equal sign:  + character code
      .replace(/(.)/g, function(match,p1){return html_global_attributes_and_events[p1.charCodeAt(0) - 0x20] + ">"})
      
      // attribute without equal sign:  + character code
      .replace(/(.)/g, function(match,p1){return html_global_attributes_and_events[p1.charCodeAt(0) - 0x20] + " "})

    // Convert HTML specific attributes

      // attribute with an equal sign:  + character code
      .replace(/(.)/g, function(match,p1){return html_specific_attributes[p1.charCodeAt(0) - 0x20] + "="})

      // last attribute without equal sign:  + character code
      .replace(/(.)/g, function(match,p1){return html_specific_attributes[p1.charCodeAt(0) - 0x20] + ">"})
      
      // attribute without equal sign:  + character code
      .replace(/(.)/g, function(match,p1){return html_specific_attributes[p1.charCodeAt(0) - 0x20] + " "})

    // Convert HTML attributes values
    
      // last value:  + character code
      .replace(/(.)/g, function(match,p1){return html_attributes_values[p1.charCodeAt(0) - 0x20] + ">"})

      // value:  + character code
      .replace(/(.)/g, function(match,p1){return "'" + html_attributes_values[p1.charCodeAt(0) - 0x20] + "' "})
      
    // Replace 3 x 96 english words
          
      // word (set 1) with a capital and followed by a space:  + character code
      .replace(/(.)/g, function(match,p1){var word = english_words_1[p1.charCodeAt(0) - 0x20]; return word.charAt(0).toUpperCase() + word.slice(1) + " "})

      // word (set 2) with a capital and followed by a space:  + character code
      .replace(/(.)/g, function(match,p1){var word = english_words_2[p1.charCodeAt(0) - 0x20]; return word.charAt(0).toUpperCase() + word.slice(1) + " "})
      
      // word (set 3) with a capital and followed by a space:  + character code
      .replace(/(.)/g, function(match,p1){var word = english_words_3[p1.charCodeAt(0) - 0x20]; return word.charAt(0).toUpperCase() + word.slice(1) + " "})
      

      // word (set 1) with a capital alone:  + character code
      .replace(/(.)/g, function(match,p1){var word = english_words_1[p1.charCodeAt(0) - 0x20]; return word.charAt(0).toUpperCase() + word.slice(1)})

      // word (set 2) with a capital alone:  + character code
      .replace(/(.)/g, function(match,p1){var word = english_words_2[p1.charCodeAt(0) - 0x20]; return word.charAt(0).toUpperCase() + word.slice(1)})
      
      // word (set 3) with a capital alone:  + character code
      .replace(/(.)/g, function(match,p1){var word = english_words_3[p1.charCodeAt(0) - 0x20]; return word.charAt(0).toUpperCase() + word.slice(1)})
      

      // word (set 1) followed by a space:  + character code
      .replace(/(.)/g, function(match,p1){return english_words_1[p1.charCodeAt(0) - 0x20] + " "})

      // word (set 2) followed by a space:  + character code
      .replace(/(.)/g, function(match,p1){return english_words_2[p1.charCodeAt(0) - 0x20] + " "})
      
      // word (set 3) followed by a space:  + character code
      .replace(/(.)/g, function(match,p1){return english_words_3[p1.charCodeAt(0) - 0x20] + " "})
      
          
      // word (set 1) alone:  + character code
      .replace(/(.)/g, function(match,p1){return english_words_1[p1.charCodeAt(0) - 0x20]})

      // word (set 2) alone:  + character code
      .replace(/(.)/g, function(match,p1){return english_words_2[p1.charCodeAt(0) - 0x20]})
      
      // word (set 3) alone:  + character code
      .replace(/(.)/g, function(match,p1){return english_words_3[p1.charCodeAt(0) - 0x20]})
  
  // Write HTML
  //console.log(code_lightml);
  //console.log(code_html);
  document.write(code_html);
}