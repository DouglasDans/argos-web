import React, { Fragment } from 'react'
import {Button, Typography } from "@mui/joy";

import CardWrapper from "@/ui/containers/CardWrapper";

import styles from './page.module.css';
import TagItem from "@/ui/dashboard/TagItem";
import ActivityCalendar from "react-activity-calendar";
import ActivityItem from "@/ui/dashboard/ActivityItem";

const arr = [
   {
      "date": "2022-06-14",
      "count": 2,
      "level": 1
   },
   {
      "date": "2023-06-22",
      "count": 1,
      "level": 3
   }
]

export default function Dashboard() {
  return (
    <Fragment>
      <div className='title'>
        <Typography level={'h2'}>Dashboard</Typography>
        <Typography level={'body-sm'}></Typography>
      </div>

      <div>
         <div className={styles.dashContainer}>
            <div className={styles.buttonsContainer}>
               <Button fullWidth variant={'solid'}>Solicitar Chamado</Button>
            </div>

            <div className={styles.tagsContainer}>
               <CardWrapper className={'p-4 flex flex-col gap-2'}>
                  <Typography level={'title-lg'}>Tags Cadastradas</Typography>
                  <div>
                     <TagItem/>
                     <TagItem/>
                     <TagItem/>
                  </div>

               </CardWrapper>
            </div>

            <div className={styles.activityContainer}>
               <CardWrapper className={'p-4 flex flex-col gap-2'}>
                  <Typography level={'title-lg'}>Atividades do Usuario</Typography>

                  <div className={'user-activity flex flex-col gap-5'}>
                     <div className={"flex justify-center"}>
                        <ActivityCalendar blockSize={8} blockMargin={2} data={arr}/>
                     </div>
                     <div className={'flex'}>
                        <ActivityItem />
                     </div>
                  </div>
               </CardWrapper>
            </div>
         </div>

      </div>

       <CardWrapper>
          aaaa
       </CardWrapper>

    </Fragment>
  )
}
