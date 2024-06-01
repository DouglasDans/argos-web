import React, { Fragment } from 'react'
import {Button, Typography } from "@mui/joy";

import DependentesCadastrados from '@/ui/user/dashboard/DependentesCadastrados/DependentesCadastrados';
import AtividadesRegistradas from '@/ui/user/dashboard/AtividadesRegitradas/AtividadesRegistradas';
import TagsCadastradas from '@/ui/user/dashboard/TagsCadastradas/TagsCadastradas';
import styles from './page.module.css';
import LinkButton from "@/ui/LinkButton";

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
               <LinkButton
                  href="chamado"
                  ariaLabel="Botão para solicitar chamado"
                  variant="solid"
               >
                  Solicitar Chamado
               </LinkButton>
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
