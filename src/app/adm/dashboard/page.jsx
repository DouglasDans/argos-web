import {Typography} from "@mui/joy";
import React, {Fragment} from "react";

import styles from './page.module.css';

export default function Dashboard(){
   return (
      <Fragment>
         <div className='title'>
            <Typography level={'h2'}>Dashboard</Typography>
            <Typography level={'body-sm'}></Typography>
         </div>

         <div className='flex flex-col gap-2'>
            <div className={styles.dashContainer}>
               <div className={styles.buttonsContainer}>
                  aa
               </div>
               <div className={styles.activityContainer}>
                  bb
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