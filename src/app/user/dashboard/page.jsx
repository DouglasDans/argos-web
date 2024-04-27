import React, { Fragment } from 'react'
import {Button, Typography } from "@mui/joy";

import DependentesCadastrados from '@/ui/dashboard/modulos/DependentesCadastrados/DependentesCadastrados';
import AtividadesRegistradas from '@/ui/dashboard/modulos/AtividadesRegitradas/AtividadesRegistradas';
import TagsCadastradas from '@/ui/dashboard/modulos/TagsCadastradas/TagsCadastradas';
import styles from './page.module.css';

const arr = () => {
   return [{
      date: "2021-02-20",
      count: 16,
      level: 3
   },
   {
      "date": "2023-06-22",
      "count": '1',
      "level": '3'
   }
]
}

export default function Dashboard() {
  return (
    <Fragment>
      <div className='title'>
        <Typography level={'h2'}>Dashboard</Typography>
        <Typography level={'body-sm'}></Typography>
      </div>

      <div className='flex flex-col gap-2'>
         <div className={styles.dashContainer}>
            <div className={styles.buttonsContainer}>
               <Button fullWidth variant={'solid'}>Solicitar Chamado</Button>
            </div>

            <div className={styles.tagsContainer}>
               <TagsCadastradas/>
            </div>

            <div className={styles.activityContainer}>
               <AtividadesRegistradas/>
            </div>
         </div>

         <DependentesCadastrados/>
      </div>

    </Fragment>
  )
}
