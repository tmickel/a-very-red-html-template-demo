const canvas = document.getElementById("square");
const ctx = canvas.getContext('2d');

let s = 0;
const degToRad = (deg) => deg * Math.PI / 180;

const draw = () => {
    ctx.clearRect(0, 0, 300, 300);

    ctx.translate(75, 75);
    ctx.rotate(degToRad(2));
    ctx.translate(-75, -75);

    ctx.fillStyle = `hsl(0, ${s}%, 50%)`;
    s = (s + 1) % 100;

    ctx.fillRect(50, 50, 50, 50);

    window.requestAnimationFrame(draw);
}
window.requestAnimationFrame(draw);
