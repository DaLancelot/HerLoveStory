var whereWasI = 1,
    divideMainStory = mainStory[whereWasI].split("|"),
    character = divideMainStory[1],
    text = divideMainStory[0],
    currentChar = character;
console.log(text + " -" + character);
$("#dlg-container").prepend("<div id='dlg-sect'><h2>" + character + "</h2><p>" + text + "</p></div>");

function next () {
  whereWasI++;
  if (whereWasI == mainStory.length || mainStory[whereWasI] == undefined) {
    console.info("Cya later <3");
  } else {
    var divideMainStory = mainStory[whereWasI].split("|"),
        character = divideMainStory[1],
        text = divideMainStory[0];
    var dialogueBoxHTML = "<div id='dlg-sect'><h2>" + character + "</h2><p>" + text + "</p></div>",
        dialogueSameChar = $("#dlg-container #dlg-sect p").text(text);
    if ($("#dlg-container").children().length == 3) {
      $("#dlg-container #dlg-sect:last-child").remove();
      //check if character is the same as the sentence before
      if (currentChar == character) {
        $("#dlg-container #dlg-sect:first-child p").text(text);
        console.log(currentChar);
      } else if (currentChar != character){
        $("#dlg-container").prepend(dialogueBoxHTML);
        console.log(currentChar);
      };
      return currentChar = character;
    } else {
      $("#dlg-container").prepend(dialogueBoxHTML);
    };
    console.log(text + " -" + character)
  };
};
