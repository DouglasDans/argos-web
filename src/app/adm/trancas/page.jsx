import Link from "next/link";
import {ArrowBack} from "@mui/icons-material";
import {Typography} from "@mui/joy";
import DependenteTable from "@/ui/adm/dependentes/DependenteTable";
import {Fragment} from "react";
import TrancaTable from "@/ui/adm/trancas/TrancaTable";

export default function Trancas(){
   return (
      <Fragment>
         <div className='title flex flex-col'>
            <div className={'flex items-center gap-3'}>
               <Link aria-label='Link de retorno para a tela principal da dashboard'  Link href={'/adm/dashboard'}>
                  <ArrowBack/>
               </Link>
               <Typography level={'h2'}>Dashboard</Typography>
            </div>
            <Typography level={'body-md'} className={'pl-9'}>Dashboard / Gerenciar Trancas</Typography>
         </div>
         <TrancaTable/>
      </Fragment>
   )
}