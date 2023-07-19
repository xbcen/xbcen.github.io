let data;
async function getData() {
    const response = await fetch("https://v1.hitokoto.cn/?c=i&encode=text");
    data = await response.text();
    document.getElementById("cen").innerHTML = data;
}
document.getElementById("cen").addEventListener('click', function() {
    window.open('https://www.baidu.com/s?ie=UTF-8&wd=' + data);
});
getData();
