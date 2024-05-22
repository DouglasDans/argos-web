import ContainerLevel1 from '@/ui/containers/ContainerLevel1'
import { Button, Input, Typography } from '@mui/joy'
import {get} from "@/lib/api";
import formEditResponsavel from "@/actions/adm/formEditResponsavel";

export default async function FormEdtResponsavel({id}) {

   const responsavel = await get(`responsavel/${id}`).then(res => {
      return res.data
   })

   return (
      <ContainerLevel1 className={' p-4 flex flex-col gap-5'}>
         <Typography level={'h4'}>
            Editar Responsável
         </Typography>

         <div className={'flex flex-col gap-2'}>
            <form action={formEditResponsavel} className={'flex flex-col gap-5'}>
               <input type={"hidden"} name={"idResponsavel"} value={responsavel.id}/>

               <div className={'flex flex-col gap-2'}>
                  <Typography level={'body-lg'}>Nome do Responsável</Typography>
                  <Input defaultValue={responsavel.nome} placeholder={'Ex. Fulano de Tal'} name={'txtNomeResponsavel'} type={'text'}/>
               </div>

               <div className={'flex flex-col gap-2'}>
                  <Typography level={'body-lg'}>RG do Responsavel</Typography>
                  <Input defaultValue={responsavel.rg} placeholder={'XX.XXX.XX-X'} name={'txtRgResponsavel'} type={'text'}/>
               </div>

               <div className={'flex flex-col gap-2'}>
                  <Typography level={'body-lg'}>Apartamento</Typography>
                  <Input defaultValue={responsavel.apto} placeholder={'12-A'} name={'txtAptoResponsavel'} type={'text'}/>
               </div>

               <Button type={'submit'}>Confirmar Alteração</Button>
            </form>
         </div>
      </ContainerLevel1>
   )
}
