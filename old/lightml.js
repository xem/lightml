/** 
* LigHTML
* =======
*
* HTML is heavy. Send LigHTML instead!
*
* LigHTML can be generated with PHP or an online static converter.
*
* LigHTML files are regular HTML files containing "<!doctype html><script src="lightml.js"></script> followed by LigHTML code.
* lightml.js converts the LigHTML code in HTML.
*
* LigHTML uses UTF-8 control characters (0x01 - 0x1F, except 0x9 0xA and 0xC) to recognize keywords to replace with real browser things.
*
* Conversion works like this:
* - keywords starting with 0x01 represent HTML5 tags
* - keywords starting with 0x02 represent closing HTML5 tags
*/

// Hide everything
document.write("<style>*{display:none}</style>");

// When the page is loaded
window.onload = function(){

  // Set list of HTML5 tags
  var html_tags = ["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","blockquote",'',"body","br","button","canvas","caption","cite","code","col","colgroup","command","data","datagrid","datalist","dd","del","details","dfn","div","dl","dt","em","embed","eventsource","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","mark","map","menu","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","pre","progress","q","ruby","rp","rt","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr"];

  // Get the LigHTML code (the body's content)
  var code_lightml = document.getElementsByTagName("body")[0].innerHTML;

  // Replace keywords starting with 0x01 with corresponding HTML5 tag
  var code_html = code_lightml
                  .replace(/(.)/g, function(match,p1){return "<" + html_tags[p1.charCodeAt(0) - 1]})
                  .replace(/(.)/g, function(match,p1){return "</" + html_tags[p1.charCodeAt(0) - 1] + ">"})
                  .replace(/&gt;/g, ">");

  console.log(code_html);
  
  // Write HTML
  document.write(code_html);
}

 
