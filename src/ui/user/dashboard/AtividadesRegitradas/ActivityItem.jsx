import React from 'react'
import {Typography} from "@mui/joy";

import styles from './ActivityItem.module.css';
import { ContainerLevel3 } from '@/ui/containers/ContainerLevel3';

export default function ActivityItem() {
   return (
      <ContainerLevel3 className={styles.container}>
         <Typography level={'body-sm'}>Atividade diária média</Typography>
         <Typography level={'h3'}>12</Typography>
      </ContainerLevel3>
   )
}