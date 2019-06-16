// tellFortune function should be here
function tellFortune(nc, pn, l, jt){
  
  var name = "me";
  window.alert('You will be a ' + jt + ' in ' + l + ', and married to ' + pn + ' with '+ nc +' kids.');
}
                 
  var nc = [ 2, 4, 6];
  var pn = ["Julie", "Catherine", "Hannah"];
  var jt = ["Lion Tamer", "Superhero", "Tap Dancer"];
  var l = ["Zambia", "Congo", "Havana"];
               
 tellFortune(nc[Math.floor(Math.random() * 3)],pn[Math.floor(Math.random() * 3)], l[Math.floor(Math.random() * 3)], jt[Math.floor(Math.random() * 3)]);
 tellFortune(nc[Math.floor(Math.random() * 3)],pn[Math.floor(Math.random() * 3)], l[Math.floor(Math.random() * 3)], jt[Math.floor(Math.random() * 3)]);
  tellFortune(nc[Math.floor(Math.random() * 3)],pn[Math.floor(Math.random() * 3)], l[Math.floor(Math.random() * 3)], jt[Math.floor(Math.random() * 3)]);
  
