let text = document.getElementById('text');
let towerLeft = document.getElementById('tower-left');
let towerRight = document.getElementById('tower-right');
let torchLeft = document.getElementById('torch-left');
let torchRight = document.getElementById('torch-right');

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    text.style.marginTop = value * 2.5 + 'px';
    towerLeft.style.left = value * -1.5 + 'px';
    towerRight.style.left = value * 1.5 + 'px';
    torchLeft.style.left = value * 0.5 + 'px';
    torchRight.style.left = value * -0.5 + 'px';
});

