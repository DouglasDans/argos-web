import Link from "next/link";
import {ArrowBack} from "@mui/icons-material";
import {Typography} from "@mui/joy";
import {Fragment} from "react";
import FormEdtResponsavel from "@/ui/adm/responsaveis/FormEdtResponsavel";

export default function EditarResponsavel({params}){
   return(
      <Fragment>
         <div className='title flex flex-col'>
            <div className={'flex items-center gap-3'}>
               <Link aria-label='Link de retorno para a tela principal da dashboard'  Link href={'/adm/responsaveis'}>
                  <ArrowBack/>
               </Link>
               <Typography level={'h2'}>Dashboard</Typography>
            </div>
            <Typography level={'body-md'} className={'pl-9'}>Dashboard / Gerenciar Responsáveis / Editar Responsável</Typography>
         </div>

         <FormEdtResponsavel id={params.id}/>
      </Fragment>
   )
}