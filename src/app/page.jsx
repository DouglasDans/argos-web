import ContainerLevel1 from '@/ui/containers/ContainerLevel1';
import styles from './page.module.css'
import { Button, FormControl, FormHelperText, FormLabel, Input, Typography } from '@mui/joy';
import Logo from "@/ui/Logo";
import authAction from '@/actions/auth';

export default function Home() {

  return (
    <div className={styles.bodyContainer}>
      <ContainerLevel1 className={"flex flex-col justify-between items-center h-auto w-2/5 p-10 gap-5 " + styles.loginContainer}>

        <Logo/>
        
        <Typography level='h1'>Login</Typography>

        <div className='flex flex-col justify-between items-center w-full'>

          <form action={authAction} className={'flex flex-col w-full gap-3'}>
            <FormControl >
              <FormLabel>ID de Acesso</FormLabel>
              <Input name={'txtIdAcesso'} fullWidth placeholder="085-4349-2" />
            </FormControl>

            <FormControl>
              <FormLabel>Senha</FormLabel>
              <Input name={'txtSenha'} type='password' placeholder="*****" />
            </FormControl>

            <Button type='submit'>Acessar</Button>
          </form>

        </div>
      </ContainerLevel1>
    </div>
  );
}
