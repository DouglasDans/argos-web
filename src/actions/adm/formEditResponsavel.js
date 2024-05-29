import apiRequest, {patch, post} from "@/lib/api";

export default async function formEditResponsavel(formData) {
  'use server'

   const requestFormData = {
      id: formData.get('idResponsavel'),
      nome: formData.get('txtNomeResponsavel'),
      rg: formData.get('txtRgResponsavel'),
      apto: formData.get('txtAptoResponsavel')
   }

   const resposta = {
      success: true,
      res: await apiRequest.patch('responsavel', requestFormData)
   }

   if (resposta.res.error) {
      resposta.success = false
      console.error(resposta.error)
   } else {
      console.log(resposta.res.data)
   }

   return resposta
}