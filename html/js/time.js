let clock = document.querySelector('#clock');
let two = (num) => {
    if (num >= 10) {
        return num.toString();
    } else {
        return `0${num}`;
    }
}
let udtime = () => {
    let now = new Date();
    let time = two(now.getHours()) + ":" + two(now.getMinutes()) + ":" + two(now.getSeconds());
    clock.innerText = time;
}
udtime()
setInterval(udtime, 500);