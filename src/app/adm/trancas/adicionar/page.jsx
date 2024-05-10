import Link from "next/link";
import {ArrowBack} from "@mui/icons-material";
import {Typography} from "@mui/joy";
import FormAddResponsavel from "@/ui/adm/responsaveis/FormAddResponsavel";
import {Fragment} from "react";
import FormAddTranca from "@/ui/adm/trancas/FormAddTranca";

export default function AdicionarTrancas(){
   return (
      <Fragment>
         <div className='title flex flex-col'>
            <div className={'flex items-center gap-3'}>
               <Link aria-label='Link de retorno para a tela principal da dashboard'  Link href={'/adm/trancas'}>
                  <ArrowBack/>
               </Link>
               <Typography level={'h2'}>Dashboard</Typography>
            </div>
            <Typography level={'body-md'} className={'pl-9'}>Dashboard/Gerenciar Trancas/ Adicionar Tranca</Typography>
         </div>

         <FormAddTranca/>
      </Fragment>
   )
}