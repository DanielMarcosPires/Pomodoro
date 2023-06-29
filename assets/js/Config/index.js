export class Config{
    modal = document.querySelector(".configModal");
    fecharModal = document.querySelector(".btnModal")
    constructor(){
        if(this.modal.classList.contains("disabled")){
            this.modal.classList.remove("disabled")
        }
        this.fecharModal.addEventListener("click",()=>{
            this.modal.classList.add("disabled")
        })
    }
}