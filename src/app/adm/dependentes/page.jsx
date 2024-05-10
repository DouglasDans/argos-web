import Link from "next/link";
import {ArrowBack} from "@mui/icons-material";
import {Typography} from "@mui/joy";
import ResponsavelTable from "@/ui/adm/responsaveis/ResponsavelTable";
import {Fragment} from "react";
import DependenteTable from "@/ui/adm/dependentes/DependenteTable";

export default function Dependentes(){
   return (
      <Fragment>
         <div className='title flex flex-col'>
            <div className={'flex items-center gap-3'}>
               <Link aria-label='Link de retorno para a tela principal da dashboard'  Link href={'/adm/dashboard'}>
                  <ArrowBack/>
               </Link>
               <Typography level={'h2'}>Dashboard</Typography>
            </div>
            <Typography level={'body-md'} className={'pl-9'}>Dashboard / Gerenciar Dependentes</Typography>
         </div>
         <DependenteTable/>
      </Fragment>
   )
}