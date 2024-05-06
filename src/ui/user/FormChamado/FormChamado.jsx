'use client'

import ContainerLevel1 from "@/ui/containers/ContainerLevel1";
import {Box, Button, FormLabel, Input, Radio, RadioGroup, Sheet, Textarea, Typography} from "@mui/joy";
import style from './FormChamado.module.css';
import {Fragment, useState} from "react";

const formOptions = {
   tag : <Fragment>
      <form method={'GET'} className={'flex flex-col gap-5'}>
         <input type="hidden" name={'tipoChamado'} value={'tag'}/>

         <div className={'flex flex-col gap-2'}>
            <Typography level={'body-lg'}>Motivo do chamado</Typography>
            <Textarea name={'txtmotivoChamado'} placeholder={"Ex. Perdi minha TAG antiga"}></Textarea>
         </div>

         <Button type={'submit'}>Solicitar</Button>
      </form>
   </Fragment>,
   dependente : <Fragment>
      <form method={'GET'} className={'flex flex-col gap-5'}>
         <input type="hidden" name={'tipoChamado'} value={'dependente'}/>

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
   </Fragment>,
}


export default function FormChamado() {

   const [tipoChamado, setTipoChamado] = useState('');

   return (
      <ContainerLevel1 className={style.container + ' p-4 flex flex-col gap-5'}>
         <Typography level={'h4'}>
            Solicitar Chamado
         </Typography>

         <div className={'flex flex-col gap-2'}>
            <Typography level={'body-lg'}>Deseja Solicitar?</Typography>
               <RadioGroup
                  aria-labelledby="Tipo de Chamado"
                  defaultValue="tag"
                  size="md"
                  sx={{ gap: 1.5 }}
               >
                  {['tag', 'dependente'].map((value) => (
                     <Sheet
                        key={value}
                        sx={{
                           p: 2,
                           borderRadius: 'md',
                           boxShadow: 'sm',
                        }}
                     >
                        <Radio
                           label={`Cadastro de ${value}`}
                           overlay
                           disableIcon
                           value={value}
                           onClick={() => setTipoChamado(value)}
                           slotProps={{
                              label: ({ checked }) => ({
                                 sx: {
                                    fontWeight: 'lg',
                                    fontSize: 'md',
                                    color: checked ? 'text.primary' : 'text.secondary',
                                 },
                              }),
                              action: ({ checked }) => ({
                                 sx: (theme) => ({
                                    ...(checked && {
                                       '--variant-borderWidth': '2px',
                                       '&&': {
                                          // && to increase the specificity to win the base :hover styles
                                          borderColor: theme.vars.palette.primary[500],
                                       },
                                    }),
                                 }),
                              }),
                           }}
                        />
                     </Sheet>
                  ))}
               </RadioGroup>
         </div>

         {formOptions[tipoChamado]}


      </ContainerLevel1>
   )
}