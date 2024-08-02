var cursorPosition = 0;

document
  .getElementById("userUrls")
  .addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      if (event.shiftKey) {
        event.preventDefault();
        cursorPosition = event.target.selectionStart;
        this.value =
          this.value.substring(0, cursorPosition) +
          "\n" +
          this.value.substring(event.target.selectionEnd);
        event.target.setSelectionRange(cursorPosition + 1, cursorPosition + 1); // 设置光标位置
      } else {
        event.preventDefault();
        generateNewUrls();
      }
    }
  });

document.getElementById("userUrls").addEventListener("input", function (event) {
  // 保存光标位置
  cursorPosition = event.target.selectionStart;
});

function generateNewUrls() {
  var userUrls = document.getElementById("userUrls").value.split("\n");
  var newUrlsList = document.getElementById("newUrlsList");
  newUrlsList.innerHTML = ""; // 清除之前的结果

  userUrls.forEach(function (userUrl) {
    var parsed_url = new URL(userUrl);
    var content_id = parsed_url.searchParams.get("contentId") || "abc";

    var old_url =
      "https://r2-ndr.ykt.cbern.com.cn/edu_product/esp/assets/abc.pkg/pdf.pdf";
    var new_url = old_url.replace("abc", content_id);

    var listItem = document.createElement("li");
    var linkElement = document.createElement("a");
    linkElement.href = new_url;
    linkElement.textContent = "点击下载";
    listItem.appendChild(linkElement);
    newUrlsList.appendChild(listItem);
    linkElement.target = "_blank";
  });
}
