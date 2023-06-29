import { Pomodoro } from "./Pomodoro/index.js";
import {Config} from "./Config/index.js"
const btn = document.querySelector(".pomodoroButton");
const btnConfig = document.querySelector("#btnConfig");
btn.addEventListener("click",(e)=>{
    btn.classList.remove("pomodoroButton")
    btn.classList.add("btnAtivo")
    let pomodoro = new Pomodoro(25,15)
})

btnConfig.addEventListener("click",()=>{
    const config = new Config()
})
