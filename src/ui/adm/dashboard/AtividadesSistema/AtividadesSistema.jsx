import {Typography} from "@mui/joy";
import ActivityItem from "@/ui/user/dashboard/AtividadesRegitradas/ActivityItem";
import ContainerLevel1 from "@/ui/containers/ContainerLevel1";
import React from "react";

export default function AtividadesSistema() {
   return (
      <ContainerLevel1 className={'h-full w-full p-4'}>
         <Typography level={'title-lg'}>Atividades do Sistema</Typography>
         <div>
            <ActivityItem/>
         </div>
      </ContainerLevel1>
   )
}