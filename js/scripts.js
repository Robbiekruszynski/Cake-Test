//buszzzz logic
var numRead = function(yourNum){
  var newLife = "";

  // for (var i = 0; i<numArray.length; i++){
    if(parseInt(yourNum)%7 === 0){
    return "life";
    }
  // return newLife;
  var numArray = yourNum.split("");

  for (var i=0; i <numArray.length; i++){
    if(numArray[i] == 5){
    numArray[i] = "cake";

    } else if(numArray[i] ==3){
      numArray[i] = "sofa";
    }
      newLife+=numArray[i];
    }
    return newLife;

};


//ui logic
  $(document).ready(function(){
  $('form#counter').submit(function(event){
  event.preventDefault();
  var userInput = $("input#userInput").val();

    $("#output").text(numRead(userInput));
  });
});
