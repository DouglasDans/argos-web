import ContainerLevel1 from "@/ui/containers/ContainerLevel1";
import LinkButton from "@/ui/LinkButton";
import { Button, Table } from "@mui/joy";
import {Delete, Edit, History} from "@mui/icons-material";
import React from "react";

export default function ResponsavelTable() {
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
               <tr>
                  <td>2132</td>
                  <td>Fulano</td>
                  <td>243.234.23</td>
                  <td>1-A</td>
                  <td>5</td>
                  <td>
                     <Button aria-label='Botão para acessar histórico da TAG' color='neutral' variant='soft'>
                        <Edit/>
                     </Button>
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