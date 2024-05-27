import React, {Fragment} from "react";
import LinkButton from "@/ui/LinkButton";

export default function LinksWrapper() {
   return (
      <Fragment>
         <LinkButton
            href="chamados"
            ariaLabel="Botão para gerenciar chamados pendentes"
            variant="solid"
         >
            Chamados Pendentes
         </LinkButton>

         <LinkButton
            href="responsaveis"
            ariaLabel="Botão para gerenciar Gerenciar Responsáveis"
            variant="solid"
         >
            Gerenciar Responsáveis
         </LinkButton>

         <LinkButton
            href="dependentes"
            ariaLabel="Botão para gerenciar dependentes"
            variant="solid"
         >
            Gerenciar Dependentes
         </LinkButton>

         <LinkButton
            href="trancas"
            ariaLabel="Botão para gerenciar trancas"
            variant="solid"
         >
            Gerenciar Trancas
         </LinkButton>

         <LinkButton
            href="historico"
            ariaLabel="Botão para acessar histórico"
            variant="solid"
         >
            Histórico Geral
         </LinkButton>
      </Fragment>
   )
}