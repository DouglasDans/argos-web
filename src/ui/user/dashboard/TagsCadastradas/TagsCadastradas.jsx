import ContainerLevel1 from '@/ui/containers/ContainerLevel1'
import { Typography } from '@mui/joy'
import TagItem from './TagItem'

import styles from './TagasCadastradas.module.css'
import axios from "axios";

export default async function TagsCadastradas() {

   const tags = await axios.get('http://localhost:8080/api/v1/tag').then(res =>{
      return res.data
   })

   return (
      <ContainerLevel1 className={styles.container + ' flex flex-col gap-2 h-full'}>
         <Typography level={'title-lg'}>Tags Cadastradas</Typography>
         <div>
            {tags.map(tag => {
               return (
                  <TagItem key={tag.id} tag={tag}/>
               )
            })}
         </div>
      </ContainerLevel1>
   )
}
