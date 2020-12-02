//LOAD FUNCTION
function loadFunction() {
  cdreset();
  document.getElementById("Next").disabled = true;
  document.getElementById("Reset").disabled = true;
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//CAMERA FEATURES

// Set constraints for the video stream
var constraints = { video: { facingMode: "user" }, audio: false };
var track = null;

// Define constants
const cameraView = document.querySelector("#camera--view"),
    cameraOutput = document.querySelector("#camera--output"),
    cameraSensor = document.querySelector("#camera--sensor"),
    cameraTrigger = document.querySelector("#Next");

// Access the device camera and stream to cameraView
function cameraStart() {
    navigator.mediaDevices
        .getUserMedia(constraints)
        .then(function(stream) {
            track = stream.getTracks()[0];
            cameraView.srcObject = stream;
        })
        .catch(function(error) {
            console.error("Oops. Something is broken.", error);
        });
}

// Take a picture when cameraTrigger is tapped
function cameraSnap() {
    cameraSensor.width = cameraView.videoWidth;
    cameraSensor.height = cameraView.videoHeight;
    cameraSensor.getContext("2d").drawImage(cameraView, 0, 0);
    cameraOutput.src = cameraSensor.toDataURL("image/webp");
    cameraOutput.classList.add("taken");
    // track.stop();
};

// Start the video stream when the window loads
window.addEventListener("load", cameraStart, false);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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
  });
}
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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
          cameraSnap();
          document.getElementById("Next").disabled = false;
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

      $('.random-letter').text("");

  };

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//START & NEXT BUTTONS 
  function startAndGen(){
    randLetter();
    countdown();
    document.getElementById("Reset").disabled = false;
  };

  function nextAndGen(){
    randLetter();
    cdnext();
    document.getElementById("Next").disabled = true;
  };

