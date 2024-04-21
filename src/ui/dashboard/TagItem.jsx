import React, { Fragment } from 'react'
import styles from './TagItem.module.css'
import {Typography} from "@mui/joy";
import Link from "next/link";
import {History} from "@mui/icons-material";

export default function TagItem() {
   return (
      <div className={'flex justify-between items-center p-3'}>
         <div className={'flex gap-3 items-center'}>
            <span className={styles.tagItemCard}></span>

            <div className={''}>
               <Typography level={'title-md'}>Tag ID 1234</Typography>
               <Typography level={'body-md'}>Tipo: Permanente</Typography>
            </div>
         </div>
         <div>
            <Link href={'/'}><History/></Link>
         </div>
      </div>
   )
}