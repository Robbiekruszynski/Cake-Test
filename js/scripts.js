//buszzzz logic
var numRead = function(yourNum){

  // var newLife = "";
  var numArray = [];
  var newArray = [];

  if(isNaN(yourNum)) {
    return "Not a number!!"
    }

  for (var j=0; j < yourNum; j++) {
    numArray.push(j + 1);
  }

  for (var i=0; i < yourNum; i++){
    if(numArray[i] == 5){
      newArray[i] = "cake";

    } else if(numArray[i] == 3){
      newArray[i] = "sofa";

    } else if(numArray[i] % 7 == 0){
      newArray[i] = "life";

    } else {
      newArray[i] = numArray[i];
    }
    // newLife = newArray;
  }
  return newArray;

};


//ui logic
  $(document).ready(function(){
  $('form#counter').submit(function(event){
  event.preventDefault();
  var userInput = $("input#userInput").val();

    $("#output").text(numRead(userInput));
  });
});
