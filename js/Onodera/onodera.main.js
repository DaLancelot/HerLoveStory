var mainStory = {
  "1": "Hey Yuuta, would you like to go to the mall today?|Onodera",
  "2": "Sure why not? it will be fun|Yuuta",
  "3": "Where would you like to go?|Yuuta",
  "4": "I want to visit some shops where a friend told me they had cute teddies|Onodera",
  "5": "We will have  alot of fun for sure|Yuuta",
  "6": "quest/What time do you want to go?|Onodera",
  "7": "Cool!",
};

var quests = {
  "6": {
    "opOn" : {
      "text": "What about 1PM?",
      "jumpTo": "1",
    },
    "opTw" : {
      "text": "What about 4PM?",
      "jumpTo": "2",
    },
    "opTh" : {
      "text": "What about 11AM?",
      "jumpTo": "7",
    },
  },
};
