import {redirect} from "next/navigation";

export default async function authAction(formData){
   'use server'

   const responseFormData = {
      idAcesso: formData.get('txtIdAcesso'),
      senha: formData.get('txtSenha')
   }

   if (responseFormData.idAcesso === 'admin' && responseFormData.senha === 'admin') {
      redirect('/adm/dashboard')
   } else {
      redirect('user/dashboard')
   }
}