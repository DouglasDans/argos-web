import ContainerLevel1 from "@/ui/containers/ContainerLevel1";
import React from "react";
import {Typography} from "@mui/joy";

export default function ChamadosPendentes() {
   return (
      <ContainerLevel1 className={'h-full w-full p-4'}>
         <Typography level={'title-lg'}>Chamados Pendentes</Typography>
      </ContainerLevel1>
   )
}