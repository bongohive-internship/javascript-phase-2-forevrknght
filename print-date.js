// add a printDate function in here
// eg: console.log("Hello World")
function printDate(){
 
  var today = new Date();
  var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
  var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  var dateTime = date+' '+time;
  alert(dateTime)
  
}

printdate();
