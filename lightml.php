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
  $html_global_attributes = array("accesskey","class","contenteditable","contextmenu","dir","draggable","dropzone","hidden","id","lang","spellcheck","style","tabindex","title","translate","onabort","onblur","oncancel","oncanplay","oncanplaythrough","onchange","onclick","onclose","oncontextmenu","oncuechange","ondblclick","ondrag","ondragend","ondragenter","ondragleave","ondragover","ondragstart","ondrop","ondurationchange","onemptied","onended","onerror","onfocus","oninput","oninvalid","onkeydown","onkeypress","onkeyup","onload","onloadeddata","onloadedmetadata","onloadstart","onmousedown","onmousemove","onmouseout","onmouseover","onmouseup","onmousewheel","onpause","onplay","onplaying","onprogress","onratechange","onreset","onscroll","onseeked","onseeking","onselect","onshow","onstalled","onsubmit","onsuspend","ontimeupdate","onvolumechange","onwaiting");
  
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
  $lightml = str_replace("  ", " ", $lightml);
  $lightml = str_replace("</head>", "", $lightml);
  $lightml = str_replace("</li>", "", $lightml);
  $lightml = str_replace("</tr>", "", $lightml);
  $lightml = str_replace("</td>", "", $lightml);
  $lightml = str_replace("</th>", "", $lightml);
  $lightml = str_replace("</body>", "", $lightml);

  // Replace HTML tags with LigHTML keywords (set 1)
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
  
  // Replace HTML tags with LigHTML keywords (set 2)
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
  
  /*
  // Replace HTML global attributes (set 2)
  for($id = count($html_global_attributes); $id > 0; $id--){
    
    // set the character code of the current HTML tag
    $chr = chr($id + 0x20 - 1);

    // attribute with an equal sign:  + character code
    $lightml = str_replace($html_global_attributes[$id - 1] . " = ", "$chr", $lightml);
    $lightml = str_replace($html_global_attributes[$id - 1] . " =", "$chr", $lightml);
    $lightml = str_replace($html_global_attributes[$id - 1] . "= ", "$chr", $lightml);
    $lightml = str_replace($html_global_attributes[$id - 1] . "=", "$chr", $lightml);

    // attribute without equal sign:  + character code
    $lightml = str_replace($html_global_attributes[$id - 1] . ">", "$chr", $lightml);
    $lightml = str_replace($html_global_attributes[$id - 1] . " ", "$chr", $lightml);
  }
  */

  echo "<!doctype html>\n<script src=lightml.min.js></script>\n$lightml"; //\n<!-- Compression: -" . round((1 - strlen($lightml)/strlen($html)) * 100) . "% (" . ((strlen($lightml) - strlen($html)) / 1000) . " kb) -->"; 
}