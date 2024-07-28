function setFullHeight() {
    document.body.style.height = String(window.innerHeight) + 'px';
}

window.addEventListener('resize', setFullHeight);
setFullHeight(); // برای اولین بار هم فراخوانی شود