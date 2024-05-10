import ContainerLevel1 from "@/ui/containers/ContainerLevel1";
import LinkButton from "@/ui/LinkButton";
import {Button, Table} from "@mui/joy";
import {Delete, Edit} from "@mui/icons-material";
import React from "react";

export default function DependenteTable(){
   return (
      <ContainerLevel1 className="p-4 flex flex-col gap-4">
         <div className={'w-5'}>
            <LinkButton href={'/adm/dependentes/adicionar'}>Adicionar Dependentes</LinkButton>
         </div>

         <Table>
            <thead>
               <tr>
                  <th>ID</th>
                  <th>Nome</th>
                  <th>RG</th>
                  <th>Apto</th>
                  <th>Editar</th>
                  <th>Excluir</th>
               </tr>
            </thead>
            <tbody>
               <tr>
                  <td>2132</td>
                  <td>Fulano</td>
                  <td>243.234.23</td>
                  <td>1-A</td>
                  <td>
                     <LinkButton color='neutral' fullwidth variant='soft' href={'/adm/dependentes/2132/editar'}>
                        <Edit/>
                     </LinkButton>
                  </td>
                  <td>
                     <Button aria-label='Botão para acessar histórico da TAG' color='neutral' variant='soft'>
                        <Delete/>
                     </Button>
                  </td>
               </tr>
            </tbody>
         </Table>
      </ContainerLevel1>
   )
}