import {Table, Typography} from "@mui/joy";
import ContainerLevel1 from "@/ui/containers/ContainerLevel1";
import React from "react";
import axios from "axios";

export default async function UltimasAtividades() {

   const historico = await axios.get('http://localhost:8080/api/v1/historico').then(res =>{
      return res.data
   })

   return (
      <ContainerLevel1 className={'h-full w-full p-4 flex flex-col gap-3'}>
         <Typography level={'title-lg'}>Últimas Atividades</Typography>

         <Table>
            <thead>
               <tr>
                  <th>TagID</th>
                  <th>Dependente</th>
                  <th>RG do Dependente</th>
                  <th>Responsável</th>
                  <th>Rg do Responsável</th>
                  <th>Registro</th>
               </tr>
            </thead>
            <tbody>
               {historico.map(historicoItem => {
                     return (
                        <tr key={historicoItem.id}>
                           <td>{historicoItem.tag.id}</td>
                           <td>{historicoItem.tag.dependente?.nome ? historicoItem.tag.dependente.nome : "Indefinido"}</td>
                           <td>{historicoItem.tag.dependente?.rg ? historicoItem.tag.dependente.rg : "Indefinido"}</td>
                           <td>{historicoItem.tag.responsavel?.nome ? historicoItem.tag.responsavel.nome : "Indefinido"}</td>
                           <td>{historicoItem.tag.responsavel?.rg ? historicoItem.tag.responsavel.rg : "Indefinido"}</td>
                           <td>{historicoItem.timestamp}</td>
                        </tr>
                     )
                  })}
            </tbody>
         </Table>
      </ContainerLevel1>
   )
}