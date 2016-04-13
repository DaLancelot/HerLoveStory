var cardEl = $("span.card > a > img"),
    card_info = $("div#card_info");

cardEl.on("mouseover", function() {
  cardInfo("show", $(this).parent().parent().attr("id"));
  //cardInfoPositioner($(this));
  var x = $(this).position().left,
      y = $(this).position().top;
  if ($(this).parent().parent().hasClass("small")) {
    card_info.css({"left" : ((x + 74) + "px")});
    card_info.css({"top" : ((y + 0) + "px")});
  } else if ($(this).parent().parent().hasClass("big")) {
    card_info.css({"left" : ((x + 138) + "px")});
    card_info.css({"top" : ((y + 0) + "px")});
  } else if ($(this).parent().parent().hasClass("portrait")) {
    card_info.css({"left" : ((x + 74) + "px")});
    card_info.css({"top" : ((y + 0) + "px")});
  };
  $(this).on("mouseout", function () {
    cardInfo("hide");
  });
});

function cardInfo (display, cardID) {
  var cardName = $("li#card_name"),
      cardAge = $("li#card_age"),
      cardGender = $("li#card_gender"),
      cardRewards = $("li#card_rewards"),
      cCoins = cardRewards.find("#Coins"),
      cExp = cardRewards.find("#Exp"),
      cMemories = cardRewards.find("#Memories"),
      cardPresents = $("li#card_presents"),
      cardDescription = $("li#card_description"),
      cardRarity = (cardID === undefined) ? false: cardDB[cardID].rarity,
      rarityCSSColor;
  switch (cardRarity) {
    case "rare":
      rarityCSSColor = "rgba(121, 121, 212, 1)";
      break;
    case "epic":
      rarityCSSColor = "rgba(191, 92, 191, 1)";
      break;
    case "legend":
      rarityCSSColor = "rgba(251, 164, 18, 1) ";
      break;
  };
  if (display === "hide" && cardID === undefined) {
    card_info.fadeOut(200);
  } else if (display === "show") {
    var separateRewards = cardDB[cardID].rewards.split(", "),
        getTheCoins = separateRewards[0],
        getTheExp = separateRewards[1],
        getTheMemories = separateRewards[2],
        textToPutOnElement = getTheCoins + ", " + getTheExp + ", " + "<i>" + getTheMemories + "</i>";
    cCoins.text(getTheCoins);
    cExp.text(getTheExp);
    cMemories.text(getTheMemories);
    cardName.text(cardDB[cardID].name).css({"color": rarityCSSColor});
    cardAge.text(cardDB[cardID].age);
    cardGender.text(cardDB[cardID].gender);
    cardPresents.text(cardDB[cardID].presents);
    cardDescription.text(cardDB[cardID].likes + ".").css({"color": rarityCSSColor});
    card_info.fadeIn(200).css({"border-bottom" : ("1px solid " + rarityCSSColor)});
  };
};

$(document).ready(function () {
  $("span.card").each(function () {
    $(this).addClass(cardDB[$(this).attr("id")].rarity);
    if ($(this).hasClass("small")) {
      $(this).children().children().attr("src", cardDB[$(this).attr("id")].cover.small);
    } else if ($(this).hasClass("big")) {
      $(this).children().children().attr("src", cardDB[$(this).attr("id")].cover.big);
    } else if ($(this).hasClass("portrait")) {
      $(this).children().children().attr("src", cardDB[$(this).attr("id")].cover.portrait);
    };
  });
});
