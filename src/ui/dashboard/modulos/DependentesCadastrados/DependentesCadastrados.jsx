import CardWrapper from '@/ui/containers/CardWrapper'
import { Delete, Edit } from '@mui/icons-material'
import { Button, Table, Typography } from '@mui/joy'
import Link from 'next/link'
import styles from './DependentesCadastrados.module.css'

export default function DependentesCadastrados() {
  return (
      <CardWrapper className={styles.container}>
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
                     <Button color='neutral' variant='soft'><Edit/></Button>
                  </td>
                  <td><Button color='neutral' variant='soft'><Delete/></Button></td>
               </tr>
            </tbody>
         </Table>
      </CardWrapper>
  )
}
