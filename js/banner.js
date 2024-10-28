var banners = ["img\logo.webp", "img\banner.webp"];
var bannersAtual = 0;

function trocaBanner() {
    bannersAtual = (bannersAtual + 1) % 2;
    document.querySelector('.destaque img').src = banners[bannersAtual];
}

var timer = setInterval(trocaBanner, 400000);
var controle = document.qu {erySelector('.pause');

controle.onclick = function() {
    if (controle.className == 'pause')
        clearInterval(timer);
        controle.className = 'play';
    } else {
        timer = setInterval(trocaBanner, 400000);
        controle.className = 'pause';
    }

    return false;
};