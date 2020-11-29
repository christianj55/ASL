//LETTER GENERATOR
function stringGen(len) {
    var text = " ";
    var charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    for( var i=0; i < len; i++ )
        text += charset.charAt(Math.floor(Math.random() * charset.length));

    return text;
}

function randLetter() {
  for( var i=0; i < 5; i++ ) {
    setTimeout(function () {
      $('.random-letter').text(stringGen(1));
    }, 1000);
  }
}

//COUNTDOWN
var CCOUNT = 5;
    
    var t, count;
    
    function cddisplay() {
        // displays time in span
        document.getElementById('timespan').innerHTML = count;
    };
    
    function countdown() {
        // starts countdown
        cddisplay();
        if (count == 0) {
            // time is up
        } else {
            count--;
            t = setTimeout("countdown()", 1000);
            document.getElementById("Start").disabled = true;
        }
    };
    
    function cdnext() {
        // resets countdown
        count = CCOUNT;
        cddisplay();
        countdown();
    };
    
    function cdreset() {
        // resets countdown
        count = CCOUNT;
        cddisplay();
        clearTimeout(t);
        document.getElementById("Start").disabled = false;
    };

    function startAndGen(){
      randLetter();
      countdown();
    };

    function nextAndGen(){
      randLetter();
      cdnext();
    };