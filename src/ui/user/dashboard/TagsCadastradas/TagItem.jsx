import React, { Fragment } from 'react'
import styles from './TagItem.module.css'
import {Button, Modal, ModalClose, ModalDialog, Typography} from "@mui/joy";
import {History} from "@mui/icons-material";
import Link from "next/link";

export default function TagItem({tag}) {



   return (
      <div className={'flex justify-between items-center'}>
         <div className={'flex gap-3 items-center'}>
            <span className={styles.tagItemCard}></span>

            <div className={''}>
               <Typography level={'title-md'}>Tag {tag.id}</Typography>
               <Typography level={'body-md'}>Tipo: {tag.isTemporario ? "Temporária" : "Permanente"}</Typography>
            </div>
         </div>
         <div>
            <Link href={`historico/${tag.id}`}>
               <Button aria-label='Botão para acessar histórico da TAG' color='neutral' variant='soft'>
                  <History/>
               </Button>
            </Link>
         </div>
      </div>
   )
}