'use client'

import Image from "next/image";
import {useColorScheme} from "@mui/joy";

export default function Logo() {
   const {mode} = useColorScheme()
   return (
      <div className={'flex justify-center items-center'}>
         <Image
            src={mode === "dark" ? "/argos-white-logo.svg" : "/argos-black-logo.svg"}
            alt={'Logo do sistema Argos'}
            height={'180'} width={'180'}/>
      </div>
   );
}