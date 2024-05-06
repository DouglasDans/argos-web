import ContainerLevel1 from '@/ui/containers/ContainerLevel1'
import { Typography } from '@mui/joy'
import TagItem from './TagItem'

import styles from './TagasCadastradas.module.css'

export default function TagsCadastradas() {
   return (
      <ContainerLevel1 className={styles.container + ' flex flex-col gap-2 h-full'}>
         <Typography level={'title-lg'}>Tags Cadastradas</Typography>
         <div>
            <TagItem/>
            <TagItem/>
            <TagItem/>
         </div>
      </ContainerLevel1>
   )
}
