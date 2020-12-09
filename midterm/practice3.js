function loadSearches() 
{
   var length = localStorage.length; // number of key-value pairs
   if(length>0){
        tags = []; // create empty array
   // load all keys
        for (var i = 0; i < length; ++i) 
        {
            tags[i] = localStorage.key(i);
        } // end for
        var markup = "" 
        markup += "<table border = \"1\"><thead></thead><tbody>"; // used to store search link markup
   // build list of links
        for (var tag in tags) 
        {
        if(tags[tag] != "undefined"){
            var query = localStorage.getItem(tags[tag]);
            markup += "<tr><th>" + tags[tag] + "</th><td class = "+tags[tag]+">" + query + 
            "</td></tr>";
        }
        } // end for
        markup += "</tbody></table>";
        document.getElementById("searches").innerHTML = markup;
    } // end function loadSearches
}
// saves a newly tagged search into localStorage
function saveSearch() 
{
    var obj = {
        "name": "",
        "email": "",
        "like": "",
        "comments": ""
    };

    for(var key in obj){
        obj[key] = document.getElementById(key).value;
        if(key == "like")
            if(!document.getElementById(key).checked)
                obj[key] = "off"
        localStorage.setItem(key, obj[key]);
        obj[key] = "";
    }
    obj = {};
    
} // end function saveSearch

function clearAllSearches() 
{
   localStorage.clear();
   document.getElementById("searches").innerHTML = "";
} // end function clearAllSearches


// register event handlers then load searches
function start()
{
    var myForm = document.getElementById( "myForm" );
    myForm.addEventListener( "submit", saveSearch, false );
    myForm.addEventListener( "reset", clearAllSearches, false );
} // end function start

window.addEventListener( "load", start, false );