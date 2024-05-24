import { get } from "@/lib/api";
import ChamadoItem from "./ChamadoItem";
import styles from './chamadosWrapper.module.css'
import axios from "axios";


export default async function ChamadosWrapper(){

    const chamados = await axios.get('http://localhost:8080/api/v1/chamado').then(res =>{
       return res.data
    })

    if (chamados.length){
        return (
           <div className={styles.container}>
               {await chamados.map((chamado, key) => {
                   return(<ChamadoItem chamado={chamado} key={key}/>)
               })}
           </div>
        )
    } else {
         return(
               <div className={styles.container}>
                  <h4>Não há chamados</h4>
               </div>
         )
    }
}