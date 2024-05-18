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

   if (responseAuth.auth) {
      if (responseAuth.type === 'administrador') {
         await createSession(responseAuth.id, responseAuth.type)
         redirect('/adm/dashboard')
      }
      if (responseAuth.type === 'responsavel') {
         await createSession(responseAuth.id, responseAuth.type)
         redirect('/user/dashboard')
      }
   } else {
      redirect('/')
   }
}