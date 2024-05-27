import ChamadosWrapper from "@/ui/adm/chamados/ChamadosWrapper";
import ContainerLevel1 from "@/ui/containers/ContainerLevel1";
import { ArrowBack } from "@mui/icons-material";
import { Typography } from "@mui/joy";
import Link from "next/link";
import { Fragment } from "react";

export default function Chamado(){
   return (
      <Fragment>
         <div className='title flex flex-col'>
            <div className={'flex items-center gap-3'}>
               <Link aria-label='Link de retorno para a tela principal da dashboard'  Link href={'/adm/dashboard'}>
                  <ArrowBack/>
               </Link>
               <Typography level={'h2'}>Dashboard</Typography>
            </div>
            <Typography level={'body-md'} className={'pl-9'}>Dashboard/Chamados</Typography>
         </div>

         <ContainerLevel1 className="p-4 flex flex-col gap-4">
            <Typography level="h3">Gerenciamento de chamados</Typography>

            <ChamadosWrapper/>
         </ContainerLevel1>
         
      </Fragment>
   )
}