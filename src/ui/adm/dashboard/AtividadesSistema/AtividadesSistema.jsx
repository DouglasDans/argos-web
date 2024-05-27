import {Typography} from "@mui/joy";
import ActivityItem from "@/ui/user/dashboard/AtividadesRegitradas/ActivityItem";
import ContainerLevel1 from "@/ui/containers/ContainerLevel1";
import React from "react";

import styles from './AtividadeSistema.module.css'

export default function AtividadesSistema() {
   return (
      <ContainerLevel1 className={'h-full w-full p-4 flex flex-col gap-3'}>
         <Typography level={'title-lg'}>Atividades do Sistema</Typography>
         <div className={styles.activityContainer}>
            <ActivityItem/>
            <ActivityItem/>
            <ActivityItem/>
            <ActivityItem/>
            <ActivityItem/>
         </div>
      </ContainerLevel1>
   )
}