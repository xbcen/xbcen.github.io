// hsv转rgb
const hsvtorgb = (h1, s, v) => {
    const h = h1 / 360;
    let r, g, b;
    const i = Math.floor(h * 6);
    const f = h * 6 - i;
    const p = v * (1 - s);
    const q = v * (1 - f * s);
    const t = v * (1 - (1 - f) * s);

    switch (i % 6) {
        case 0: r = v; g = t; b = p; break;
        case 1: r = q; g = v; b = p; break;
        case 2: r = p; g = v; b = t; break;
        case 3: r = p; g = q; b = v; break;
        case 4: r = t; g = p; b = v; break;
        case 5: r = v; g = p; b = q; break;
    }

    return `rgb(${Math.round(r * 255)}, ${Math.round(g * 255)}, ${Math.round(b * 255)})`;
}


let startTime = Date.now();

//闪的代码
const monos = (from, to, id, time) => {
    const mono = document.getElementById(id);
    mono.style.color = hsvtorgb(0, 0, Math.sin(time * 6) * Math.abs(to - from) / 2 + from + (to - from) / 2);
}
const rainbows = (from, to, s, v, id, time) => {
    const rainbow = document.getElementById(id);
    rainbow.style.color = hsvtorgb(270 * time % (to - from) + from, s, v);
}
const black_color = (h, id, time) => {
    const black = document.getElementById(id);
    black.style.color = hsvtorgb(h, 1, Math.sin(time * 6) * 0.5 + 0.5);
}
const white_color = (h, id, time) => {
    const white = document.getElementById(id);
    white.style.color = hsvtorgb(h, Math.sin(time * 6) * 0.5 + 0.5, 1);
}

// 动画
function animate() {
    const time = (Date.now() - startTime) / 1000;
    monos(0, 1, 'mono', time);
    monos(0.25, 0.5, 'g&d', time);
    rainbows(0, 360, 1, 1, 'rainbow', time);
    rainbows(0, 360, 0.5, 1, 'lrainbow', time);
    rainbows(0, 360, 1, 0.5, 'drainbow', time);
    rainbows(0, 360, Math.sin(time * 6) * 0.5 + 0.5, Math.cos(time * 6) * 0.5 + 0.5, 'mrainbow', time);
    black_color(0, 'r&b', time);
    white_color(180, 'q&w', time);
    requestAnimationFrame(animate);
}
animate();