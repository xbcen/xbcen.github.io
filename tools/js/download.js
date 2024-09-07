document.getElementById("userUrls").addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    if (event.shiftKey) {
      insertNewlineAtCursor(this);
    } else {
      generateNewUrls();
    }
  }
});

function insertNewlineAtCursor(textarea) {
  let cursorPosition = textarea.selectionStart;
  textarea.value =
    textarea.value.substring(0, cursorPosition) + "\n" + textarea.value.substring(textarea.selectionEnd);
  textarea.setSelectionRange(cursorPosition + 1, cursorPosition + 1);
}

function generateNewUrls() {
  let userUrls = document.getElementById("userUrls").value.split("\n");
  let newUrlsList = document.getElementById("newUrlsList");
  newUrlsList.innerHTML = "";

  const baseUrls = [
    "http://r1-ndr.ykt.cbern.com.cn/edu_product/esp/assets/",
    "http://r2-ndr.ykt.cbern.com.cn/edu_product/esp/assets/",
    "http://r3-ndr.ykt.cbern.com.cn/edu_product/esp/assets/"
  ];

  userUrls.forEach(userUrl => {
    let content_id = new URL(userUrl).searchParams.get("contentId") || "abc";

    baseUrls.forEach((baseUrl, index) => {
      let new_url = `${baseUrl}${content_id}.pkg/pdf.pdf`;
      let listItem = document.createElement("li");
      listItem.innerHTML = `<a href="${new_url}" target="_blank">链接${index + 1}</a>`;
      newUrlsList.appendChild(listItem);
    });
  });
}