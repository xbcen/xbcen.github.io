// JavaScript部分
var cursorPosition = 0;

document.getElementById('userUrls').addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        if (event.shiftKey) {
            event.preventDefault();
            cursorPosition = event.target.selectionStart;
            this.value = this.value.substring(0, cursorPosition) + '\n' + this.value.substring(event.target.selectionEnd);
            event.target.setSelectionRange(cursorPosition + 1, cursorPosition + 1); // 设置光标位置
        } else {
            event.preventDefault();
            generateNewUrls();
        }
    }
});

function generateNewUrls() {
    var userUrls = document.getElementById('userUrls').value.split('\n');
    var newUrlsList = document.getElementById('newUrlsList');
    newUrlsList.innerHTML = ""; // 清除之前的结果

    userUrls.forEach(function (userUrl) {
        var parsed_url = new URL(userUrl);
        var hash = parsed_url.hash;
        var id = hash.substring(hash.indexOf('=') + 1) || 'abc';

        var old_url = "https://music.163.com/song/media/outer/url?id=abc";
        var new_url = old_url.replace('abc', id) + ".mp3"; 

        var listItem1 = document.createElement("li");
        var linkElement1 = document.createElement("a");
        linkElement1.href = new_url;
        linkElement1.textContent = "音乐链接";
        listItem1.appendChild(linkElement1);
        newUrlsList.appendChild(listItem1);
        linkElement1.target = "_blank";
    });
}
