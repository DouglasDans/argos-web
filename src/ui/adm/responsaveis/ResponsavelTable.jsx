import ContainerLevel1 from "@/ui/containers/ContainerLevel1";
import LinkButton from "@/ui/LinkButton";
import { Button, Table } from "@mui/joy";
import {Delete, Edit, History} from "@mui/icons-material";
import React from "react";
import { get } from "@/lib/api";
import axios from "axios";

export default async function ResponsavelTable() {

   const responsaveis = await axios.get('http://localhost:8080/api/v1/responsavel').then(res =>{
      return res.data
   })

   return (
      <ContainerLevel1 className="p-4 flex flex-col gap-4">
         <div>
            <LinkButton href={'/adm/responsaveis/adicionar'}>Adicionar Responsaveis</LinkButton>
         </div>

         <Table>
            <thead>
               <tr>
                  <th>ID</th>
                  <th>Nome</th>
                  <th>Rg do Responsável</th>
                  <th>Apto</th>
                  <th>Qntd de TAGs</th>
                  <th>Editar</th>
                  <th>Excluir</th>
               </tr>
            </thead>
            <tbody>
               {responsaveis.map((responsavel) => {
                  return(
                     <tr key={responsavel.id}>
                        <td>{responsavel.id}</td>
                        <td>{responsavel.nome}</td>
                        <td>{responsavel.rg}</td>
                        <td>{responsavel.apto}</td>
                        <td>5</td>
                     <td>
                        <LinkButton color='neutral' fullwidth variant='soft' href={`/adm/responsaveis/${responsavel.id}/editar`}>
                           <Edit/>
                        </LinkButton>
                     </td>
                     <td>
                        <Button aria-label='Botão para acessar histórico da TAG' color='neutral' variant='soft'>
                           <Delete/>
                        </Button>
                     </td>
                  </tr>
                  )
               })}
            </tbody>
         </Table>
      </ContainerLevel1>
   )
}