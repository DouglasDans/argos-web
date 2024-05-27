import ContainerLevel1 from "@/ui/containers/ContainerLevel1";
import {Button, Input, Typography} from "@mui/joy";

export default function FormAddDependente(){
   return (
      <ContainerLevel1 className={' p-4 flex flex-col gap-5'}>
         <Typography level={'h4'}>
            Adicionar Dependente
         </Typography>

         <div className={'flex flex-col gap-2'}>

            <form className={'flex flex-col gap-5'}>

               <div className={'flex flex-col gap-2'}>
                  <Typography level={'body-lg'}>Nome do Dependente</Typography>
                  <Input placeholder={'Ex. Fulano de Tal'} name={'txtNomeDependente'} type={'text'}/>
               </div>

               <div className={'flex flex-col gap-2'}>
                  <Typography level={'body-lg'}>RG do Dependente</Typography>
                  <Input placeholder={'XX.XXX.XX-X'} name={'txtRgDependente'} type={'text'}/>
               </div>

               <div className={'flex flex-col gap-2'}>
                  <Typography level={'body-lg'}>Apartamento</Typography>
                  <Input placeholder={'12-A'} name={'txtAptoDependente'} type={'text'}/>
               </div>

               <Button type={'submit'}>Solicitar</Button>
            </form>
         </div>
      </ContainerLevel1>
   )
}