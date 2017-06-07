//business logic goes here //
function pigLatin(english) {

  // var vowels = ["a", "e", "i", "o", "u"]
  // get char[0] of string
  // iterate through vowels
    // if char[0] === vowel
    // newString = string + "way"

  var vowels = ["a", "e", "i", "o", "u"];

  // for words beginning with vowels:
  for (index = 0; index <= vowels.length; index += 1){
    if (english[0] === vowels[index]) {
      var vowelWord = english + "way";
      return vowelWord;

    // for words beginning with a single consonant:
    } else if (english[0] !== vowels[index]) {
      var consonantWord = english.slice(1) + english[0] + "ay";
      return consonantWord;
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
