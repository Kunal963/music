function p() {
  var audio = document.getElementById('s');
  audio.play();
}

function pa() {
  var audio = document.getElementById('s');
  audio.pause();
}


function a(){
  document.getElementById('a').style.visibility="visible";
}
setTimeout("a()", 3000);

function b(){
  document.getElementById('music').style.visibility="hidden";
}
setTimeout("b()", 2990);