import ContainerLevel1 from "@/ui/containers/ContainerLevel1";
import LinkButton from "@/ui/LinkButton";
import {Button, Table} from "@mui/joy";
import {Delete, Edit} from "@mui/icons-material";
import React from "react";
import axios from "axios";

export default async function TrancaTable() {

   const trancas = await axios.get('http://localhost:8080/api/v1/tranca').then(res =>{
      console.log(res.data);
      return res.data
   })

   console.log(trancas);


   return (
      <ContainerLevel1 className="p-4 flex flex-col gap-4">
         <div>
            <LinkButton href={'/adm/trancas/adicionar'}>Adicionar Trancas</LinkButton>
         </div>

         <Table>
            <thead>
               <tr>
                  <th>ID</th>
                  <th>Localidade</th>
                  <th>Editar</th>
                  <th>Excluir</th>
               </tr>
            </thead>
            <tbody>
               {trancas.map(tranca => {
                  <tr>
                     <td>{tranca.id}</td>
                     <td>Portão Principal</td>
                     <td>
                        <LinkButton color='neutral' fullwidth variant='soft' href={'/adm/trancas/2132/editar'}>
                           <Edit/>
                        </LinkButton>
                     </td>
                     <td>
                        <Button aria-label='Botão para acessar histórico da TAG' color='neutral' variant='soft'>
                           <Delete/>
                        </Button>
                     </td>
                  </tr>
               })}
            </tbody>
         </Table>
      </ContainerLevel1>
   )
}