import ContainerLevel1 from "@/ui/containers/ContainerLevel1";
import React from "react";
import {Button, Typography} from "@mui/joy";
import { ContainerLevel3 } from "@/ui/containers/ContainerLevel3";

export default function ChamadosPendentes() {
   return (
      <ContainerLevel1 className={'h-full w-full p-4 flex flex-col gap-3'}>
         <div className="flex justify-between items-center">
            <Typography level={'title-lg'}>Chamados Pendentes</Typography>
            <Button color="neutral">Ver Mais</Button>
         </div>

         <div className={'flex felx-col'}>
            <ContainerLevel3 className="flex justify-between w-full">
               <div className="flex flex-col">
                  <Typography level="title-md">Cadastro de Tag</Typography>
                  <small>Tipo: Permanente</small>
                  <small>Responsável: Fulado</small>
               </div>

               <div className="flex flex-col justify-center">
                  <Button color="neutral">Mais Info.</Button>
               </div>
            </ContainerLevel3>
         </div>
         
         <div className={'flex felx-col'}>
            <ContainerLevel3 className="flex justify-between w-full">
               <div className="flex flex-col">
                  <Typography level="title-md">Cadastro de Tag</Typography>
                  <small>Tipo: Permanente</small>
                  <small>Responsável: Fulado</small>
               </div>

               <div className="flex flex-col justify-center">
                  <Button color="neutral">Mais Info.</Button>
               </div>
            </ContainerLevel3>
         </div>
      </ContainerLevel1>
   )
}