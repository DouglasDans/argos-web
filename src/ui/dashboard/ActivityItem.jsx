import React from 'react'
import {ContainerLevel2} from "@/ui/containers/ContainerLevel2";
import {Typography} from "@mui/joy";

export default function ActivityItem() {
   return (
      <ContainerLevel2 className={'p-5'}>
         <Typography level={'body-sm'}>Atividade dária média</Typography>
         <Typography level={'h3'}>12</Typography>
      </ContainerLevel2>
   )
}