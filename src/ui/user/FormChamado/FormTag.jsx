import formChamado from "@/actions/user/formChamado";
import {Button, Textarea, Typography} from "@mui/joy";

export default function FormTag(){
   return (
      <form onSubmit={formChamado} className={'flex flex-col gap-5'}>
         <input type="hidden" name={'tipoChamado'} value={'tag'}/>

         <div className={'flex flex-col gap-2'}>
            <Typography level={'body-lg'}>Motivo do chamado</Typography>
            <Textarea name={'txtmotivoChamado'} placeholder={"Ex. Perdi minha TAG antiga"}></Textarea>
         </div>

         <Button type={'submit'}>Solicitar</Button>
      </form>
   )
}