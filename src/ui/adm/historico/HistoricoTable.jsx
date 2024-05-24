import {Table, Typography} from "@mui/joy";
import ContainerLevel1 from "@/ui/containers/ContainerLevel1";
import React from "react";
import {get} from "@/lib/api";
import axios from "axios";

export default async function HistoricoTable(){

   const historico = await axios.get('http://localhost:8080/api/v1/historico').then(res =>{
      return res.data
   })

   return (
      <ContainerLevel1 className={'h-full w-full p-4 flex flex-col gap-3'}>
         <Typography level={'title-lg'}>Histórico</Typography>

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
                  // return (
                  //    <tr key={historicoIte}>
                  //       <td>2132</td>
                  //       <td>Fulano</td>
                  //       <td>243.234.23</td>
                  //       <td>Marcel da Silva</td>
                  //       <td>233.321.12</td>
                  //       <td>10/03/2024 14h13m45s</td>
                  //    </tr>
                  // )
               })}
            </tbody>
         </Table>
      </ContainerLevel1>
   )
}