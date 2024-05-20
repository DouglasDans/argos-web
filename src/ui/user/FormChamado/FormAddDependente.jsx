import formChamado from "@/actions/user/formChamado";
import {Button, Input, Typography} from "@mui/joy";

export default function FormAddDependente(){

   return (
      <form onSubmit={formChamado} className={'flex flex-col gap-5'}>
         <input type="hidden" name={'tipoChamado'} value={'dependente'}/>
         <input type="hidden" name={'responsavel'} value={'1'}/>

         <div className={'flex flex-col gap-2'}>
            <Typography level={'body-lg'}>Nome do Dependente</Typography>
            <Input placeholder={'Ex. Fulano de Tal'} name={'txtNomeDependente'} type={'text'}/>
         </div>

         <div className={'flex flex-col gap-2'}>
            <Typography level={'body-lg'}>RG do Dependente</Typography>
            <Input placeholder={'XX.XXX.XX-X'} name={'txtRgDependente'} type={'text'}/>
         </div>

         <Button type={'submit'}>Solicitar</Button>
      </form>
   )
}