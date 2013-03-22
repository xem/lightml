<?php
// Start buffer
ob_start();

// LigHTML converter 
function lightml(){

  // Set list of HTML5 tags
  $html_tags = array_reverse(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","blockquote",'',"body","br","button","canvas","caption","cite","code","col","colgroup","command","data","datagrid","datalist","dd","del","details","dfn","div","dl","dt","em","embed","eventsource","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","mark","map","menu","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","pre","progress","q","ruby","rp","rt","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr"]);

  // Read and clean the buffer
  $html = ob_get_contents();
  ob_end_clean();
  
  // Replace HTML tags with LigHTML keywords
  $html = str_replace("<!doctype html>", "", $html);
  $html = str_replace("\r", "", $html);
  $html = str_replace("\n", "", $html);
  $html = str_replace(">    ", ">", $html);
  $html = str_replace(">  ", ">", $html);
  $html = str_replace("> ", ">", $html);
  $html = str_replace("    <", "<", $html);
  $html = str_replace("  <", "<", $html);
  $html = str_replace(" <", "<", $html);
  foreach($html_tags as $id => $html_tag){
    $html = str_replace("<" . $html_tag, "" . chr(count($html_tags) - $id), $html);
    $html = str_replace("</" . $html_tag . ">", "" . chr(count($html_tags) - $id), $html); 
  }
  
  
  echo "<!doctype html><script src='lightml.js'></script>$html"; 
}