<?php
/**
 * LigHTML Compressor
 * Include this file on top of your page
 */

// At the beginning: start the buffer
ob_start();

// At the end: call the converter
register_shutdown_function('lightml');

// LigHTML converter 
function lightml(){

  // Set list of HTML5 tags
  $html_tags_1 = array("a","abbr","address","area","article","aside","audio","b","base","bb","bdi","bdo","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","command","data","datagrid","datalist","dd","del","details","dfn","div","dl","dt","em","embed","eventsource","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","mark","map","menu","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","pre","progress","q","ruby","rp","rt","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup");
  $html_tags_2 = array("table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr");
  $html_global_attributes_and_events = array("accesskey","class","contenteditable","contextmenu","dir","draggable","dropzone","hidden","id","lang","spellcheck","style","tabindex","title","translate","wml:base","xml:lang","onabort","onafterprint","onbeforeprint","onbeforeunload","onblur","oncancel","oncanplay","oncanplaythrough","onchange","onclick","onclose","oncontextmenu","oncuechange","ondblclick","ondrag","ondragend","ondragenter","ondragleave","ondragover","ondragstart","ondrop","ondurationchange","onemptied","onended","onerror","onfocus","onhashchange","oninput","oninvalid","onkeydown","onkeypress","onkeyup","onload","onloadeddata","onloadedmetadata","onloadstart","onmessage","onmousedown","onmousemove","onmouseout","onmouseover","onmouseup","onmousewheel","onoffline","ononline","onpagehide","onpageshow","onpause","onplay","onplaying","onpopstate","onprogress","onratechange","onreset","onresize","onscroll","onseeked","onseeking","onselect","onshow","onstalled","onstorage","onsubmit","onsuspend","ontimeupdate","onunload","onvolumechange","onwaiting");
  $html_specific_attributes = array("abbr","accept","accept-charset","action","alt","async","autocomplete","autofocus","autoplay","challenge","charset","checked","cite","cols","colspan","command","content","controls","coords","crossorigin","data","datetime","default","defer","dirname","disabled","enctype","for","form","formaction","formenctype","formmethod","formnovalidate","formtarget","headers","height","high","href","hreflang","http-equiv","icon","ismap","keytype","kind","label","list","loop","low","manifest","max","maxlength","media","mediagroup","method","min","multiple","muted","name","novalidate","open","optimum","pattern","placeholder","poster","preload","radiogroup","readonly","rel","required","reversed","rows","rowspan","sandbox","scope","seamless","selected","shape","size","sizes","span","src","srcdoc","srclang","start","step","target","type","typemustmatch","usemap","value","width","wrap");
  $html_attributes_values = array("0","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","-1","-2","-3","-4","-5","#","alternate","application-name","author","auto","bookmark","button","checkbox","color","content-type","date","datetime","datetime-local","default-style","description","email","file","generator","handheld","help","hidden","icon","image","javascript:;","javascript:void(0);","keywords","licence","ltr","month","next","nofollow","noreferrer","number","passwoed","prefetch","prev","print","radio","range","refresh","reset","rtl","search","set-cookie","screen","search","stylesheet","submit","tag","tel","text","text/css","time","url","text/javascript","utf-8","week");
  
  // Read and clean the buffer
  $html = ob_get_contents();
  $lightml = $html;
  ob_end_clean();

  // Minify HTML
  $lightml = str_replace("<!doctype html>", "", $lightml);
  $lightml = str_replace("\n", "", $lightml);
  $lightml = str_replace("\r", "", $lightml);
  $lightml = str_replace("\t", "  ", $lightml);
  $lightml = str_replace(">        ", ">", $lightml);
  $lightml = str_replace(">    ", ">", $lightml);
  $lightml = str_replace(">  ", ">", $lightml);
  $lightml = str_replace("        <", "<", $lightml);
  $lightml = str_replace("    <", "<", $lightml);
  $lightml = str_replace("  <", "<", $lightml);
  $lightml = str_replace("/>", ">", $lightml);
  $lightml = str_replace("        ", " ", $lightml);
  $lightml = str_replace("    ", " ", $lightml);
  $lightml = str_replace("  ", " ", $lightml);
  $lightml = str_replace(" = ", "=", $lightml);
  $lightml = str_replace("= ", "=", $lightml);
  $lightml = str_replace(" =", "=", $lightml);
  $lightml = str_replace("</head>", "", $lightml);
  $lightml = str_replace("</li>", "", $lightml);
  $lightml = str_replace("</tr>", "", $lightml);
  $lightml = str_replace("</td>", "", $lightml);
  $lightml = str_replace("</th>", "", $lightml);
  $lightml = str_replace("</body>", "", $lightml);

  // Replace HTML tags (set 1)
  for($id = count($html_tags_1); $id > 0; $id--){
    
    // set the character code of the current HTML tag
    $chr = chr($id + 0x20 - 1);

    // opening/self-closing tags without attributes:  + character code
    $lightml = str_replace("<" . $html_tags_1[$id - 1] . ">", "$chr", $lightml);

    // opening tags with attributes:  + character code
    $lightml = str_replace("<" . $html_tags_1[$id - 1] . " ", "$chr", $lightml);

    // closing tags:  + character code
    $lightml = str_replace("</" . $html_tags_1[$id - 1] . ">", "$chr", $lightml);
  }
  
  // Replace HTML tags (set 2)
  for($id = count($html_tags_2); $id > 0; $id--){
    
    // set the character code of the current HTML tag
    $chr = chr($id + 0x20 - 1);

    // opening/self-closing tags without attributes:  + character code
    $lightml = str_replace("<" . $html_tags_2[$id - 1] . ">", "$chr", $lightml);

    // opening tags with attributes:  + character code
    $lightml = str_replace("<" . $html_tags_2[$id - 1] . " ", "$chr", $lightml);

    // closing tags:  + character code
    $lightml = str_replace("</" . $html_tags_2[$id - 1] . ">", "$chr", $lightml);
  }
  

  // Replace HTML global attributes and events
  for($id = count($html_global_attributes_and_events); $id > 0; $id--){
    
    // set the character code of the current HTML attribute/event
    $chr = chr($id + 0x20 - 1);

    // attribute with an equal sign:  + character code
    $lightml = str_replace($html_global_attributes_and_events[$id - 1] . "=", "$chr", $lightml);

    // attribute without equal sign:  + character code
    $lightml = str_replace($html_global_attributes_and_events[$id - 1] . ">", "$chr>", $lightml);
    $lightml = str_replace($html_global_attributes_and_events[$id - 1] . " ", "$chr ", $lightml);
  }

  echo "<!doctype html>\n<script src=lightml.js></script>\n$lightml"; //\n<!-- Compression: -" . round((1 - strlen($lightml)/strlen($html)) * 100) . "% (" . ((strlen($lightml) - strlen($html)) / 1000) . " kb) -->"; 
}