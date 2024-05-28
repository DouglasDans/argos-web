import axios from "axios"

export default async function formAddTranca(formData) {
  'use server'

   const requestFormData = {
      registro: formData.get('txtIdRegistro'),
      localidade: formData.get('txtLocalidade'),
   }
   
   const resposta = {
      success: true,
      res: await axios.post("http://localhost:8080/api/v1/tranca", requestFormData)
   }

   if (resposta.res.error) {
      resposta.success = false
      console.error(resposta.error)
   } else {
      console.log(resposta.res.data)
   }

   return resposta
}