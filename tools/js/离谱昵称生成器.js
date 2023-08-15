var adjectives = [], verbs = [], nouns = [];

$.getJSON('other/words.json', function(data) {
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
  document.getElementById("copyBtn").addEventListener("click", function() {
    var phraseText = document.getElementById("phrase").textContent;
    copyToClipboard(phraseText);
  });

  // 复制文本到剪贴板
    function copyToClipboard(text) {
    var dummy = document.createElement("textarea");
    document.body.appendChild(dummy);
    dummy.value = text;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
  }
