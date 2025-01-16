let adjectives = [];
let verbs = [];
let nouns = [];

$.getJSON("other/words-agd.json", function (data) {
  adjectives = data.adjectives;
  verbs = data.verbs;
  nouns = data.nouns;

  // 从数组中随机获取一个元素
  function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  // 生成随机短语
  function generateRandomPhrase() {
   //const adjective = getRandomElement(adjectives);
    const verb = getRandomElement(verbs);
    const noun = getRandomElement(nouns);
    return `${noun}在${verb}`;
  }

  // 点击生成按钮事件处理
  $("#generateBtn").on("click", function () {
    const phrase = generateRandomPhrase();
    $("#phrase").text(phrase);
  });
});

// 点击复制按钮事件处理
document.getElementById("copyBtn").addEventListener("click", function () {
  const phraseText = document.getElementById("phrase").textContent;
  copyTextToClipboard(phraseText);
});

// 将文本复制到剪贴板
function copyTextToClipboard(text) {
  const tempTextArea = document.createElement("textarea");
  document.body.appendChild(tempTextArea);
  tempTextArea.value = text;
  tempTextArea.select();
  document.execCommand("copy");
  document.body.removeChild(tempTextArea);
  displayCopiedMessage();
}

// 显示复制成功的消息
function displayCopiedMessage() {
  const messageElement = document.getElementById("copied");
  messageElement.style.opacity = 1;
  setTimeout(function () {
    messageElement.style.opacity = 0;
  }, 2500);
}