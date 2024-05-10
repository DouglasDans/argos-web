import ContainerLevel1 from "@/ui/containers/ContainerLevel1";
import {Button, Input, Typography} from "@mui/joy";

export default function FormAddTranca(){
   return (
      <ContainerLevel1 className={' p-4 flex flex-col gap-5'}>
         <Typography level={'h4'}>
            Adicionar Tranca
         </Typography>

         <div className={'flex flex-col gap-2'}>
            <form  className={'flex flex-col gap-5'}>

               <div className={'flex flex-col gap-2'}>
                  <Typography level={'body-lg'}>ID de registro físico</Typography>
                  <Input placeholder={'000000'} name={'txtIdRegistro'} type={'number'}/>
               </div>

               <div className={'flex flex-col gap-2'}>
                  <Typography level={'body-lg'}>Localidade</Typography>
                  <Input placeholder={'Ex: Portão Principal'} name={'txtLocalidade'} type={'text'}/>
               </div>

               <Button type={'submit'}>Solicitar</Button>
            </form>
         </div>
      </ContainerLevel1>
   )
}