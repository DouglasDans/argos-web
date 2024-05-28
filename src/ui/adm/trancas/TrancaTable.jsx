import ContainerLevel1 from "@/ui/containers/ContainerLevel1";
import LinkButton from "@/ui/LinkButton";
import {Button, Table} from "@mui/joy";
import {Delete, Edit} from "@mui/icons-material";
import apiRequest from "@/lib/api";
import ModalDeleteConfirm from "./ModalDeleteConfirm";


export default async function TrancaTable() {

   const trancas = await apiRequest.get('tranca').then(res =>{
      return res.data
   })

   return (
      <ContainerLevel1 className="p-4 flex flex-col gap-4">
         <div>
            <LinkButton href={'/adm/trancas/adicionar'}>Adicionar Trancas</LinkButton>
         </div>

         <Table>
            <thead>
               <tr>
                  <th>ID</th>
                  <th>Id de Registro Físico</th>
                  <th>Localidade</th>
                  <th>Editar</th>
                  <th>Excluir</th>
               </tr>
            </thead>
            <tbody>
               {trancas.map(tranca => {
                  return(
                     <tr key={tranca.id}>
                        <td>{tranca.id}</td>
                        <td>{tranca.idRegistroTranca}</td>
                        <td>{tranca.localidade}</td>
                        <td>
                           <LinkButton color='neutral' fullwidth variant='soft' href={`/adm/trancas/${tranca.id}/editar`}>
                              <Edit/>
                           </LinkButton>
                        </td>
                        <td>
                           <ModalDeleteConfirm id={tranca.id}/>
                        </td>
                     </tr>
                  )
               })}
            </tbody>
         </Table>
      </ContainerLevel1>
   )
}