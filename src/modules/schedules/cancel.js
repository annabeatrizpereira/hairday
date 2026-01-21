import { scheduleCancel } from "../../services/schedule-cancel.js"
import { schedulesDay } from "./load.js"

const periods = document.querySelectorAll(".period")

// gera evento de click para cada periodo
periods.forEach((periods) => {
    // captura o evento de clique na lista
    periods.addEventListener("click", async (event) => {
        if(event.target.classList.contains("cancel-icon")){
            // obtém a li pai do elemento clicado
            const item = event.target.closest("li")

            // obtém o id do agendamento para remover
            const { id } = item.dataset

            // confirma que o id foi selecionado
            if(id){

                // confirma se o usuário quer remover
                const isConfirm = confirm("Tem certeza que deseja cancelar esse agendamento?")


                // se confirmado, pede para a api deletar e atualiza a pagina
                if(isConfirm){
                    await scheduleCancel({id})
                    schedulesDay();
                }
            }
        }
    })
})