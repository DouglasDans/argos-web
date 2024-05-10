import FormAddResponsavel from "@/ui/adm/responsaveis/FormAddResponsavel";
import { ArrowBack } from "@mui/icons-material";
import { Typography } from "@mui/joy";
import Link from "next/link";
import { Fragment } from "react";


export default function AdicionarResponsavel(){
   return(
      <Fragment>
         <div className='title flex flex-col'>
            <div className={'flex items-center gap-3'}>
               <Link aria-label='Link de retorno para a tela principal da dashboard'  Link href={'/adm/responsaveis'}>
                  <ArrowBack/>
               </Link>
               <Typography level={'h2'}>Dashboard</Typography>
            </div>
            <Typography level={'body-md'} className={'pl-9'}>Dashboard / Gerenciar Responsáveis/ Adicionar Responsável</Typography>
         </div>

         <FormAddResponsavel/>
      </Fragment>
   )
}