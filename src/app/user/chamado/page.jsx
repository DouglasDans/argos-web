import React, {Fragment} from "react";
import {Typography} from "@mui/joy";
import FormChamado from "@/ui/dashboard/FormChamado/FormChamado";

export default function ChamadoPage() {
   return (
      <Fragment>
         <div className='title'>
            <Typography level={'h2'}>Dashboard</Typography>
            <Typography level={'body-md'}>Dashboard/Solicitar Chamado</Typography>
         </div>

         <div className={'flex justify-center items-center'}>
            <FormChamado/>
         </div>
      </Fragment>
   )
}