const btn = document.querySelector('#start');
const ticksound = document.querySelector('#tik')

const valor = document.querySelector('input[type="time"]').value
const [min = 25, sec = 30] = valor.split(':');



function sound(){
  
  tickSound.currentTime = 0; // Volta para o início do áudio
  tickSound.play(); // Reproduz o áudio
}

let counter = 1;
let intervalo;  

function formataRelogio(numero) {
    return numero.toString().padStart(2, '0');
}
let cronometro = {
    seg: sec,
    min: min
}

function tempo() {
    cronometro.seg -= counter;

    let porcentagem = (cronometro.min * 60 + cronometro.seg) / (23 * 60 + 30) * 100;

    let progresso = document.querySelector('#barraDeprogresso');
    progresso.style.setProperty('--v', porcentagem + '%');

    let hora = document.querySelector('#hora');
    hora.innerHTML = `${formataRelogio(cronometro.min)}:${formataRelogio(cronometro.seg)}`;

    ticksound.currentTime = 0; // Volta para o início do áudio
    ticksound.play(); 
    ticksound.volume = 0.2;

    if (cronometro.min === 0 && cronometro.seg === 0) {
        clearInterval(intervalo);
        alert('Acabou o tempo!');
        btn.removeAttribute('disabled',true);

    } else if (formataRelogio(cronometro.seg) >= 0) {
        
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
    btn.setAttribute('disabled',true)
});
