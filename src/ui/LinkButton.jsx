import Link from "next/link";
import {Button} from "@mui/joy";
import React from "react";

export default function LinkButton(
   {
      children,
      href,
      ariaLabel = "Botão com um link",
      variant = "solid",
      color = "primary"
   }) {
   return (
      <Link href={href}>
         <Button
            aria-label={ariaLabel}
            variant={variant}
            color={color}
            fullwidth
         >
            {children}
         </Button>
      </Link>
   )
}