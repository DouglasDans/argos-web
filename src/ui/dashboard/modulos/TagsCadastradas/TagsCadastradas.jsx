import CardWrapper from '@/ui/containers/CardWrapper'
import { Typography } from '@mui/joy'
import React from 'react'
import TagItem from './TagItem'

export default function TagsCadastradas() {
   return (
      <CardWrapper className={'p-4 flex flex-col gap-2 h-full'}>
         <Typography level={'title-lg'}>Tags Cadastradas</Typography>
         <div>
            <TagItem/>
            <TagItem/>
            <TagItem/>
         </div>
      </CardWrapper>
   )
}
