const btn = document.querySelector('#start');

let counter = 1;
let intervalo;  

function formataRelogio(numero) {
    return numero.toString().padStart(2, '0');
}
let cronometro = {
    seg: 30,
    min: 25
}

function tempo() {
    cronometro.seg -= counter;

    let porcentagem = (cronometro.min * 60 + cronometro.seg) / (25 * 60 + 30) * 100;

    let progresso = document.querySelector('#barraDeprogresso');
    progresso.style.setProperty('--v', porcentagem + '%');

    let hora = document.querySelector('#hora');
    hora.innerHTML = `${formataRelogio(cronometro.min)}:${formataRelogio(cronometro.seg)}`;

    if (cronometro.min === 0 && cronometro.seg === 0) {
        clearInterval(intervalo);
        alert('Acabou o tempo!');
        btn.removeAttribute('disabled',true);
    } else if (formataRelogio(cronometro.seg) >= 0) {
        btn.setAttribute('disabled',true)
        if (formataRelogio(cronometro.seg) === formataRelogio(0) && formataRelogio(cronometro.min) > 0) {
            cronometro.min -= counter;
            cronometro.seg = 59;
        }
    }
}

btn.addEventListener('click', () => {
    let progresso = document.querySelector('#barraDeprogresso');
    let hora = document.querySelector('#hora');
    hora.innerHTML = `${formataRelogio(cronometro.min)}:${formataRelogio(cronometro.seg)}`;
    intervalo = setInterval(tempo, 1000);
});
