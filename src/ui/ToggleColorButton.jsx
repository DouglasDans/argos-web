'use client'

import { Contrast } from "@mui/icons-material";
import { Button, Typography, useColorScheme } from "@mui/joy";

export default function ToggleColorButton() {
   const { mode, setMode } = useColorScheme();
   return (
      <Button
         variant="solid"
         color="soft"
         onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
         startDecorator={<Contrast/>}
         aria-label="Botão de alto contraste das cores do sistema"
      >
         <Typography level="body-sm">Alto Contraste</Typography>
      </Button>
   )
}
