import {redirect} from "next/navigation";
import {createSession} from "@/lib/session";
import apiRequest from "@/lib/api";

export default async function authAction(formData){
   'use server'

   const requestFormData = {
      idAcesso: formData.get('txtIdAcesso'),
      senha: formData.get('txtSenha')
   }

   const responseAuth = await apiRequest.get('auth', {
      headers: {
         'Content-Type': 'application/json',
         'acessoId': requestFormData.idAcesso,
         'senha': requestFormData.senha
      }
   }).then(res => {
      return res.data
   })

   console.log(responseAuth)

   await createSession(responseAuth.userId, responseAuth.type)
   redirect(`/redirect`)

}