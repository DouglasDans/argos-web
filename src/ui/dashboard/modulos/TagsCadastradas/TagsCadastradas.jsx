import CardWrapper from '@/ui/containers/CardWrapper'
import { Typography } from '@mui/joy'
import TagItem from './TagItem'

import styles from './TagasCadastradas.module.css'

export default function TagsCadastradas() {
   return (
      <CardWrapper className={styles.container + ' flex flex-col gap-2 h-full'}>
         <Typography level={'title-lg'}>Tags Cadastradas</Typography>
         <div>
            <TagItem/>
            <TagItem/>
            <TagItem/>
         </div>
      </CardWrapper>
   )
}
