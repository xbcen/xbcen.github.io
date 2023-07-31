var adjectives = [], verbs = [], nouns = [];

$.getJSON('https://xbcen.github.io/tools/other/words.json', function(data) {
  adjectives = data.adjectives;
  verbs = data.verbs;
  nouns = data.nouns;

  function getRandomItem(arr) {
    return arr[Math.floor(Math.random()*arr.length)];
  }

  function generatePhrase() {
    var adjective = getRandomItem(adjectives);
    var verb = getRandomItem(verbs);
    var noun = getRandomItem(nouns);
    return adjective + "的" + noun + "在" + verb;
  }

  $("#generateBtn").on("click", function() {
    var phrase = generatePhrase();
    $("#phrase").text(phrase);
  });
});