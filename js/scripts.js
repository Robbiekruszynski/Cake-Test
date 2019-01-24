//buszzzz logic
var numRead = function(yourNum){
  var newLife = "";

  if(isNaN(yourNum)) {
    return "Not a number!!"
    }
  // for (var i = 0; i<numArray.length; i++){
    if(parseInt(yourNum)%7 === 0){
    return "life";
    }
  // return newLife;
  var numArray = [];
  var newArray = [];

  for (var j=0; j < yourNum; j++) {
    numArray.push(j + 1);
  }
    // if(numArray)

  for (var i=0; i < yourNum; i++){
    if(numArray[i] == 5){
      newArray[i] = "cake";

    } else if(numArray[i] ==3){
      newArray[i] = "sofa";

    } else {
      newArray[i] = numArray[i];
    }
    newLife = newArray;
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
