// Fig. 13.7: submitreset.js 
// Demonstrating the submit and reset events. 
var helpArray = [ "Enter your name in this input box.",
  "Enter your personal id in this input box.",
  "Enter your class in this input box.",
  "Enter your phone number in this input box.",
  "Enter your company in this input box.",
  "Enter your address in this input box.", "" ];
var helpTextDiv;

// initialize helpTextDiv and register event handlers

function submitPressed()
{
    confirm( "Are you sure you want to submit?" );
    var data = new Array(6);
    for(var dt in data){
        var index = dt.indexOf(data);
        switch(index){
        case 0:
            dt = document.getElementById("name");
            var dataregacy = document.getElementById("data_n")
            dataregacy = dt;
            break;
        case 1:
            dt = document.getElementById("personalID");
            var dataregacy = document.getElementById("data_p")
            dataregacy = dt;
            break;
        case 2:
            dt = doucment.getElementById("cs");
            var dataregacy = document.getElementById("data_cs")
            dataregacy = dt;
            break;
        case 3:
            dt = document.getElementById("ph");
            var dataregacy = document.getElementById("data_ph")
            dataregacy = dt;
            break;
        case 4:
            dt = document.getElementById("company");
            var dataregacy = document.getElementById("data_c")
            dataregacy = dt;
            break;
        defalut:
            dt = document.getElementById("address");
            var dataregacy = document.getElementById("data_a")
            dataregacy = dt;
            break;
        }
    }


}

function resetPressed()
{
    confirm( "Are you sure you want to reset?" );  
    var dt = "";
    for(var i=0; i< 6; i++){
        switch(i){
        case 0:
            document.getElementById("data_n") = dt;
            break;
        case 1:
            document.getElementById("data_p") = dt;
            break;
        case 2:
            document.getElementById("data_cs") = dt;
            break;
        case 3:
            document.getElementById("data_ph") = dt;
            break;
        case 4:
            document.getElementById("data_c") = dt;
            break;
        defalut:
            document.getElementById("data_a") = dt;
            break;
        }
    }


}


function init()
{
   helpTextDiv = document.getElementById( "helpText" );
   
   // register listeners
   registerListeners(document.getElementById( "name" ), 0 );
   registerListeners(document.getElementById( "personalID" ), 1 );
   registerListeners(document.getElementById( "cs" ), 2 );
   registerListeners(document.getElementById( "ph" ), 3 );
   registerListeners(document.getElementById( "company" ), 4 );
   registerListeners(document.getElementById( "address" ), 5 );

   var myForm = document.getElementById( "myForm" );
   var submitButton = document.getElementById("submit");
    submithButton.addEventListener("click", submitPressed, false);
    var resetButton = document.getElementById("reset");
    resetButton.addEventListener("click", resetPressed, false);
} // end function init

// utility function to help register events
function registerListeners( object, messageNumber )
{
   object.addEventListener( "focus", 
      function() { helpTextDiv.innerHTML = helpArray[ messageNumber ]; },
      false );
   object.addEventListener( "blur", 
      function() { helpTextDiv.innerHTML = helpArray[ 6 ]; }, false );
} // end function registerListener




window.addEventListener( "load", init, false );
