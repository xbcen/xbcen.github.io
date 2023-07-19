        // 获取屏幕宽度
        const screenWidth = window.innerWidth;

        if (screenWidth < 600) {
            document.getElementById("mySearch").placeholder = "搜索字体..."; // 小于600px的显示
        } else {
            document.getElementById("mySearch").placeholder = "搜索字体... (尽量不要加“体”)"; // 大于600px的显示
        }