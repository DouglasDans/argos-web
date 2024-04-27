import CardWrapper from '@/ui/containers/CardWrapper'
import { Delete, Edit } from '@mui/icons-material'
import { Table, Typography } from '@mui/joy'
import Link from 'next/link'
import React from 'react'

export default function DependentesCadastrados() {
  return (
      <CardWrapper className='p-4'>
         <Typography level={'title-lg'}>Dependentes Cadastrados</Typography>

         <Table>
            <thead>
               <tr>
                  <th>Nome do Dependente</th>
                  <th>RG do Dependente</th>
                  <th>Edtar</th>
                  <th>Excluir</th>
               </tr>
            </thead>
            <tbody>
               <tr>
                  <td>João da Silva</td>
                  <td>123456789</td>
                  <td>
                     <Link href={"#"}><Edit/></Link>
                  </td>
                  <td><Delete/></td>
               </tr>
            </tbody>
         </Table>
      </CardWrapper>
  )
}
