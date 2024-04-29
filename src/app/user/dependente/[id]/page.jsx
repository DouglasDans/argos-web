import CardWrapper from '@/ui/containers/CardWrapper'
import { ContainerLevel3 } from '@/ui/containers/ContainerLevel3'
import AtividadesRegistradas from '@/ui/dashboard/modulos/AtividadesRegitradas/AtividadesRegistradas'
import { Delete, History } from '@mui/icons-material'
import { Button, Table, Typography } from '@mui/joy'
import React, { Fragment } from 'react'

export default function GerenciamentoDependente({params}) {
   return (

      <Fragment>
         <div className='title'>
            <Typography level={'h2'}>Dashboard</Typography>
            <Typography level={'body-sm'}></Typography>
         </div>
         <CardWrapper className="p-4 flex flex-col gap-4">

            <div className="flex gap-2">
               <History/>
               <div>
                  <Typography level={'h3'}>Gerenciamento de dependente</Typography>
                  <Typography level="body-md">Dependente 2</Typography>
               </div>
            </div>


            <div className='pr-8 pl-8 flex flex-col gap-3'>
               <Typography level={'h4'}>Tag Cadastrada</Typography>

               <ContainerLevel3>
               <div className={'flex gap-3 justify-between'}>
                  <div>
                     <span className={''}></span>

                     <div className={''}>
                        <Typography level={'title-md'}>Tag ID 1234</Typography>
                        <Typography level={'body-md'}>Tipo: Permanente</Typography>
                     </div>
                  </div>

                  <div className={'flex gap-2 items-center'}>
                     <Button color='neutral' variant='soft'>
                        <History/>
                     </Button>
                     <Button color='neutral' variant='soft'>
                        <Delete/>
                     </Button>
                  </div>
               </div>
            <div>
               
            </div>
               </ContainerLevel3>

               <AtividadesRegistradas/>

               <Button color='primary' variant='solid'>Remover Dependente</Button>
            </div>

         </CardWrapper>
      </Fragment>

   )
}
