import ContainerLevel1 from '@/ui/containers/ContainerLevel1'
import { ContainerLevel3 } from '@/ui/containers/ContainerLevel3'
import AtividadesRegistradas from '@/ui/user/dashboard/AtividadesRegitradas/AtividadesRegistradas'
import { ArrowBack, Delete, History } from '@mui/icons-material'
import {Button, Input, Table, Typography} from '@mui/joy'
import Link from 'next/link'
import React, { Fragment } from 'react'
import apiRequest from "@/lib/api";
import ModalDeleteDependente from "@/ui/adm/dependentes/ModalDeleteDependente";

export default async function GerenciamentoDependente({params}) {

   const dependente = await apiRequest.get(`dependente/${params.id}`).then(res => {
      return res.data
   })

   return (

      <Fragment>
         <div className='title flex items-center gap-3'>
            <Link aria-label='Link de retorno para a tela principal da dashboard'  Link href={'/user/dashboard'}>
               <ArrowBack/>
            </Link>
            <Typography level={'h2'}>
               Dashboard
            </Typography>
            <Typography level={'body-sm'}></Typography>
         </div>
         <ContainerLevel1 className="p-4 flex flex-col gap-4">

            <div className="flex gap-2">
               <History/>
               <div>
                  <Typography level={'h3'}>Gerenciamento de dependente</Typography>
                  <Typography level="body-md">Dependente {dependente.id}: {dependente.nome}</Typography>
               </div>
            </div>


            <div className='pr-8 pl-8 flex flex-col gap-3'>

               <Typography level={'h4'}>Tag Cadastrada</Typography>

               <form>
                  <Typography level={'body-md'}>Cadastrar nova tag</Typography>
                  <div style={{display: "flex", gap: '1rem'}}>
                     <Input name={'tag'} label={'Tag'} type={'text'} placeholder={'TagID'} required={true}/>
                     <Button type={'submit'}>Cadastrar</Button>
                  </div>
               </form>

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
                     <Link href={`../historico/${1}`}>
                        <Button aria-label='Botão para acessar histórico da TAG' color='neutral' variant='soft'>
                           <History/>
                        </Button>
                     </Link>
                     <Button aria-label='Botão para deletar TAG do dependente' color='neutral' variant='soft'>
                        <Delete/>
                     </Button>
                  </div>
               </div>
            <div>
               
            </div>
               </ContainerLevel3>

               <AtividadesRegistradas/>

               <ModalDeleteDependente id={dependente.id}/>
            </div>

         </ContainerLevel1>
      </Fragment>

   )
}
