import Link from "next/link";
import {Button} from "@mui/joy";
import React from "react";

export default function LinkButton(
   {
      children,
      href,
      ariaLabel = "Botão com um link",
      variant = "solid"
   }) {
   return (
      <Link href={href}>
         <Button
            aria-label={ariaLabel}
            fullWidth variant={variant}
         >
            {children}
         </Button>
      </Link>
   )
}