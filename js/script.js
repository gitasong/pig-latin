//business logic goes here //
function pigLatin(english) {
  return english;
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
