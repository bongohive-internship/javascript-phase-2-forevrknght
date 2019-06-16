// calcCircumfrence function should be here
function calcCircumfrence (radius){
  
  var c = 2 * Math.PI * radius;
  window.alert('The Circumfrence is '+ c );
}

var rad = window.prompt('Whats your radius?');

calcCircumfrence(rad);
