import { get } from "@/lib/api";
import ChamadoItem from "./ChamadoItem";
import styles from './chamadosWrapper.module.css'

export default async function ChamadosWrapper(){

    const chamados = await get('chamado').then(res => {
        return res.data
    })

    return (
        <div className={styles.container}>
            {chamados.map((chamado, key) => {
                return(<ChamadoItem key={key}/>)
            })}
        </div>
    )
}