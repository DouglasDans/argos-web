import {Typography} from "@mui/joy";
import React, {Fragment} from "react";

import styles from './page.module.css';
import ContainerLevel1 from "@/ui/containers/ContainerLevel1";
import LinkButton from "@/ui/LinkButton";

export default function Dashboard(){
   return (
      <Fragment>
         <div className='title'>
            <Typography level={'h2'}>Dashboard</Typography>
            <Typography level={'body-sm'}></Typography>
         </div>

         <div className='flex flex-col gap-2'>
            <div className={styles.dashContainer}>
               <div className={styles.buttonsContainer + ' flex flex-col gap-2'}>
                  <LinkButton
                     href="chamados"
                     ariaLabel="Botão para gerenciar chamados pendentes"
                     variant="solid"
                  >
                     Chamados Pendentes
                  </LinkButton>

                  <LinkButton
                     href="responsaveis"
                     ariaLabel="Botão para gerenciar Gerenciar Responsáveis"
                     variant="solid"
                  >
                     Gerenciar Responsáveis
                  </LinkButton>

                  <LinkButton
                     href="dependentes"
                     ariaLabel="Botão para gerenciar dependentes"
                     variant="solid"
                  >
                     Gerenciar Dependentes
                  </LinkButton>

                  <LinkButton
                     href="trancas"
                     ariaLabel="Botão para gerenciar trancas"
                     variant="solid"
                  >
                     Gerenciar Trancas
                  </LinkButton>

                  <LinkButton
                     href="historico"
                     ariaLabel="Botão para acessar histórico"
                     variant="solid"
                  >
                     Histórico Geral
                  </LinkButton>

               </div>
               <div className={styles.activityContainer}>
                  <ContainerLevel1>
                     aa
                  </ContainerLevel1>
               </div>
               <div className={styles.chamadosContainer}>
                  cc
               </div>
            </div>

            <div>
               dd
            </div>

         </div>
      </Fragment>
   )
}