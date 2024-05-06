import ContainerLevel1 from '@/ui/containers/ContainerLevel1'
import { Typography } from '@mui/joy'
import ActivityItem from './ActivityItem'

import styles from './AtividadesRegistradas.module.css'

export default function AtividadesRegistradas() {
   return (
      <ContainerLevel1 className={styles.container + ' flex flex-col gap-2'}>
         <Typography level={'title-lg'}>Atividades Registradas</Typography>

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
      </ContainerLevel1>
   )
}
