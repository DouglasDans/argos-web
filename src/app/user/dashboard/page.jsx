import React, { Fragment } from 'react'
import {Button, Table, Typography } from "@mui/joy";

import CardWrapper from "@/ui/containers/CardWrapper";

import styles from './page.module.css';
import TagItem from "@/ui/dashboard/TagItem";
import ActivityCalendar from "react-activity-calendar";
import ActivityItem from "@/ui/dashboard/ActivityItem";
import { Delete, Edit } from '@mui/icons-material';
import Link from 'next/link';

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
               <CardWrapper className={'p-4 flex flex-col gap-2 h-full'}>
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
                        {/* <ActivityCalendar 
                           blockSize={8} 
                           blockMargin={2} 
                           theme={{
                              light: ['hsl(0, 0%, 92%)', 'firebrick'],
                              dark: ['#333', 'rgb(214, 16, 174)'],
                            }}
                           data={arr}/> */}
                     </div>
                     <div className={'flex flex-wrap gap-3'}>
                        <ActivityItem />
                        <ActivityItem />
                        <ActivityItem />
                        <ActivityItem />
                     </div>
                  </div>
               </CardWrapper>
            </div>
         </div>

         <CardWrapper className='p-4'>
            <Typography level={'title-lg'}>Dependentes Cadastrados</Typography>

            <Table>
               <thead>
                  <tr>
                     <th>Nome do Dependente</th>
                     <th>RG do Dependente</th>
                     <th>Edtar</th>
                     <th>Excluir</th>
                  </tr>
               </thead>
               <tbody>
                  <tr>
                     <td>João da Silva</td>
                     <td>123456789</td>
                     <td>
                        <Link href={"#"}><Edit/></Link>
                     </td>
                     <td><Delete/></td>
                  </tr>
               </tbody>
            </Table>
         </CardWrapper>
      </div>


    </Fragment>
  )
}
