var whereWasI = 1,
    divideMainStory = mainStory[whereWasI].split("|"),
    character = divideMainStory[1],
    text = divideMainStory[0],
    currentChar = character;
//$("#dlg-container").prepend("<div id='dlg-sect'><h2>" + character + "</h2><p>" + text + "</p></div>");

$("div#next-slide").click(nextSlide);
// old version
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
    if ($("#dlg-container").children().length >= 3) {
      //check if character is the same as the sentence before
      if (currentChar == character) {
        $("#dlg-container #dlg-sect:first-child p").text(text);
        console.log(currentChar);
      } else if (currentChar != character){
        $("#dlg-container #dlg-sect:nth-child(2)").addClass("slide");
        $("#dlg-container").prepend(dialogueBoxHTML);
        console.log(currentChar);
      };
      return currentChar = character;
    };
    console.log(text + " -" + character);
  };
};

// testing code
function nextSlide () {
  /*if (whereWasI == mainStory.length || mainStory[whereWasI] == undefined) {
    console.info("Cya later <3");
  } else */if (mainStory[whereWasI].substring(0, 5) == "quest") {
    var splitIt = mainStory[whereWasI].split("/"),
        q = splitIt[0],
        t = splitIt[1],
        tSplit = t.split("|"),
        tText = tSplit[0],
        tChar = tSplit[1];
    var questSelector = quests[whereWasI];
    var dialogueBoxHTML = "<div id='dlg-sect'><h2>" + tChar + "</h2><p>" + tText + "</p><ul id='dlg-quest' quest='6'><li id=" + questSelector.opOn.jumpTo + ">" + questSelector.opOn.text + "</li><li id=" + questSelector.opTw.jumpTo + ">" + questSelector.opTw.text + "</li><li id=" + questSelector.opTh.jumpTo + ">" + questSelector.opTh.text + "</li></ul></div>";
    $("#dlg-container #dlg-sect:nth-child(2)").addClass("slide");
    $("#dlg-container").prepend(dialogueBoxHTML);
    $("#next-slide").fadeOut(500).addClass("easily-hide");
  } else {
    var divideMainStory = mainStory[whereWasI].split("|"),
        char = divideMainStory[1],
        text = divideMainStory[0];
        oldTextfromChar = text,
        oldChar = char;
    var dialogueBoxHTML = "<div id='dlg-sect'><h2>" + char + "</h2><p>" + text + "</p></div>",
        dialogueSameChar = $("#dlg-container #dlg-sect p").text(text);
    if ($("#dlg-container").children().length >= 3) {
      if (currentChar == char) {
        $("#dlg-container #dlg-sect:first-child h2").text(char);
        $("#dlg-container #dlg-sect:first-child p").text(text);
        $("#dlg-container #dlg-sect:nth-child(2)").text("");
        $("#dlg-container #dlg-sect:first-child ul").remove();
        console.log(currentChar + " opt 1");
      } else if (currentChar != char){
        $("#dlg-container #dlg-sect:nth-child(2)").addClass("slide");
        $("#dlg-container").prepend(dialogueBoxHTML);
        console.log(currentChar + " opt 2");
      };
    };
    $("#next-slide").fadeIn(500).removeClass("easily-hide");
    console.log(text + " -" + char);
    console.log(whereWasI);
  };
  progress(whereWasI);
  whereWasI++;
  return currentChar = char;
};

$(document).on("click", "li", function () {
  var elId = $(this).attr("id");
  whereWasI = elId;
  nextSlide();
  console.log("did this." + elId);
});

$(document).keypress(function( event ) {
  if (event.which == 32) {
     if (!($("#next-slide").hasClass("easily-hide"))) {
       nextSlide();
     };
  };
});
// TODO: progress in story: divide 100 by the story length

function progress(prog) {
  var progressBar = $("span#progress"),
      storyLength = Object.keys(mainStory).length,
      progressCSS = progressBar.css("width"),
      progressCalculated = ((whereWasI - 1) * (100 / (storyLength - 1))) + "%";
      console.log(progressCalculated);
  progressBar.animate({"width" : progressCalculated});
};
