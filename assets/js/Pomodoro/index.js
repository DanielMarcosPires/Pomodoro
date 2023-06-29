export class Pomodoro {
  display = document.querySelector(".pomodoroVisor");
  btnAtivo = document.querySelector(".btnAtivo")
  barPogress = document.querySelector(".progressBar")
  tempoID = null
  constructor(min, sec) {
    this.min = min;
    this.sec = sec;
    this.timer(this.min, this.sec,this.minmax,this.secmax);
  }
  timer(min, sec) {
    this.tempoID = setInterval(()=>{
      if(sec === 0){
        min--
        sec = 59
      }else{
        sec--
      }
      if(sec ===0 && min ===0){
        clearInterval(this.tempoID);
        document.querySelector(".btnAtivo").classList.add("pomodoroButton")
        document.querySelector(".btnAtivo").classList.remove("btnAtivo")
      }
      this.progressBar(min,sec)
      this.display.innerHTML = `${min<10? `0${min}`:min}:${sec<10? `0${sec}`:sec}`
    }, 1000);
  }
  progressBar(min) {
    console.log(min);
    this.barPogress.style.strokeDashoffset = min;
  }
}
