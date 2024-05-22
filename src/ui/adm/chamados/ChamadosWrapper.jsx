import { get } from "@/lib/api";
import ChamadoItem from "./ChamadoItem";
import styles from './chamadosWrapper.module.css'

export default async function ChamadosWrapper(){

    const chamados = await get('chamado').then(res => {
        console.log(res.data);
        return res.data
    })

    return (
        <div className={styles.container}>
            {await chamados.map((chamado, key) => {
                return(<ChamadoItem chamado={chamado} key={key}/>)
            })}
        </div>
    )
}