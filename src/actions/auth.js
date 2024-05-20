import {redirect} from "next/navigation";
import {createSession} from "@/lib/session";

export default async function authAction(formData){
   'use server'

   const requestFormData = {
      idAcesso: formData.get('txtIdAcesso'),
      senha: formData.get('txtSenha')
   }

   const response = await fetch('http://localhost:8080/api/v1/auth', {
      method: 'GET',
      headers: {
         'Content-Type': 'application/json',
         'acessoId': requestFormData.idAcesso,
         'senha': requestFormData.senha
      }
   })

   const responseAuth = await response.json()

   console.log(responseAuth)

   await createSession(responseAuth.userId, responseAuth.type)
   redirect(`/redirect`)

}