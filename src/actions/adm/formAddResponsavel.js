import apiRequest from "@/lib/api";

export default async function formAddResponsavel(formData) {
  'use server'

   const requestFormData = {
      nome: formData.get('txtNomeResponsavel'),
      rg: formData.get('txtRgResponsavel'),
      apto: formData.get('txtAptoResponsavel')
   }
   
   const resposta = {
      success: true,
      res: await apiRequest.post('responsavel', requestFormData)
   }

   if (resposta.res.error) {
      resposta.success = false
      console.error(resposta.error)
   } else {
      console.log(resposta.res.data)
   }

   return resposta
}