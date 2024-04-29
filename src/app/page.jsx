import CardWrapper from '@/ui/containers/CardWrapper';
import styles from './page.module.css'
import { Button, FormControl, FormHelperText, FormLabel, Input, Typography } from '@mui/joy';
import Link from 'next/link';
import Image from "next/image";

export default function Home() {
  return (
    <div className={styles.bodyContainer}>
      <CardWrapper className={"flex flex-col justify-between items-center h-auto w-2/5 p-10 gap-5"}>

        <div className={'flex justify-center items-center'}>
          <Image src='/logo.svg' height={'150'} width={'150'}/>
        </div>
        
        <Typography level='h1'>Login</Typography>

        <div className='flex flex-col justify-between items-center w-full'>

          <form className={'flex flex-col w-full gap-3'}>
            <FormControl >
              <FormLabel>ID de Acesso</FormLabel>
              <Input fullWidth placeholder="085-4349-2" />
            </FormControl>

            <FormControl>
              <FormLabel>Senha</FormLabel>
              <Input type='password' placeholder="*****" />
            </FormControl>

            <Link aria-label='Botão para logar no sistema' href={"/user/dashboard"}><Button type='submit'>Acessar</Button></Link>
            <Link aria-label='Botão para logar no sistema' href={"/adm/dashboard"}>Logar como ADM</Link>
          </form>

        </div>
      </CardWrapper>
    </div>
  );
}
