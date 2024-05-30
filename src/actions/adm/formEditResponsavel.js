import apiRequest from "@/lib/api";

export default async function formEditResponsavel(e) {
   const formData = e.target

   const requestFormData = {
      id: formData.idResponsavel.value,
      nome: formData.txtNomeResponsavel.value,
      rg: formData.txtRgResponsavel.value,
      apto: formData.txtAptoResponsavel.value
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