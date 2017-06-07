//business logic goes here //
function pigLatin(english) {

  // var vowels = ["a", "e", "i", "o", "u"]
  // get char[0] of string
  // iterate through vowels
    // if char[0] === vowel
    // newString = string + "way"

  var vowels = ["a", "e", "i", "o", "u"];

  for (index = 0; index <= vowels.length; index += 1){
    if (english[0] === vowels[index]){
      var newWord = english + "way";
      return newWord;
    };
  };
};

// user interface logic goes here //
$(function(){
  $("#leap-year").submit(function(event){
    var english = $("input#english").val();
    var piggy = pigLatin(english);
    $("#result").text(piggy);
    event.preventDefault();
  });
});
