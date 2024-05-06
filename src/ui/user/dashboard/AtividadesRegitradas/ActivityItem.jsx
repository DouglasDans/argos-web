import React from 'react'
import {ContainerLevel2} from "@/ui/containers/ContainerLevel2";
import {Typography} from "@mui/joy";

import styles from './ActivityItem.module.css';

export default function ActivityItem() {
   return (
      <ContainerLevel2 className={styles.container}>
         <Typography level={'body-sm'}>Atividade diária média</Typography>
         <Typography level={'h3'}>12</Typography>
      </ContainerLevel2>
   )
}