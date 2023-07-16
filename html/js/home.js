async function getData() {
    const response = await fetch("https://v1.hitokoto.cn/?c=i&encode=text");
    const data = await response.text();
    document.getElementById("cen").innerHTML = data;
}

getData();