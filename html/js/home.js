function getData() {
  fetch("https://v1.hitokoto.cn/?c=i&encode=text")
    .then((response) => response.text())
    .then((data) => {
      const hitokoto = document.getElementById("cen");
      hitokoto.innerText = data;

      hitokoto.addEventListener("click", () => {
        window.open(
          "https://www.baidu.com/s?ie=UTF-8&wd=" + encodeURIComponent(data) + "&API=hitokoto.cn"
        );
      });
    });
}
getData();