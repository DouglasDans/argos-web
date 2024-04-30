import { Button, Typography } from "@mui/joy";

import styles from './layout.module.css'
import Image from "next/image";
import { Logout } from "@mui/icons-material";
import Link from "next/link";
import ToggleColorButton from "@/ui/ToggleColorButton";

export const metadata = {
  title: "Dashboard - Argos Security",
  description: "Argos Security - Segurança para seu Apto",
};

export default function RootLayout({ modal, children }) {
  return (
    <div className={styles.layoutContainer}>
      <nav className="flex justify-between">
        <div className="flex items-center gap-5">
          <Image className={"rounded-full"} src="/profile.png" height={'70'} width={"70"} alt="Sua foto de perfil" />
          <div>
            <Typography level="title-md">Marcelo da Silva</Typography>
            <Typography level="body-md">Apartmento 01-B</Typography>
          </div>
        </div>
        <div className={"flex items-center"}>
            <ToggleColorButton/>
            <Link aria-label="Botão para sair da sua conta no sistema" href={'/'}>
              <Button variant="outlined" color="neutral" startDecorator={<Logout/>}>Sair</Button>
            </Link>
        </div>
      </nav>
      {modal}
      {children}
    </div>
  );
}
