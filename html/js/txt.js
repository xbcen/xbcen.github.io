function getData() {
  fetch("https://v1.hitokoto.cn/?c=i&encode=text")
    .then((response) => response.text())
    .then((data) => {
      const hitokotoElement = document.querySelector("#cen");
      hitokotoElement.innerText = data;
      startTextAnimation(data);
    })
    .catch(console.error);
}

function startTextAnimation(text) {
  let index = 0;
  let expanding = true;
  const hitokotoElement = document.querySelector("#cen");

  setInterval(() => {
    if (expanding) {
      hitokotoElement.innerHTML = text.slice(0, ++index);
    } else {
      hitokotoElement.innerHTML = text.slice(0, --index);
    }

    if (index === text.length) {
      expanding = false;
    } else if (index === 0) {
      expanding = true;
    }
  }, 200);
}

getData();