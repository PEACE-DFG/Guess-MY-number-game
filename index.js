function output(num){
   // var num;
    var number= Math.floor(Math.random()*10);
        document.getElementById('display').innerHTML=number
if (num == number){
    document.getElementById('word').innerHTML='Congratulations Your Number Matches Mine' ;
}
else {
    //console.log('failed')
   document.getElementById('word').innerHTML='Failed , Your Number Does Not Match Mine..Try Again!!!'  ;

}
}
 
function message(){
    window.alert("Welcome to Guess My Number Game ")
}