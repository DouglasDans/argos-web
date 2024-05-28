import axios from "axios"

export default async function formAddTranca(e){
    e.preventDefault()

    const formData = e.target

    const body = {
        idRegistroTranca: formData.txtIdRegistro.value,
        localidade: formData.txtLocalidade.value
    }

   const resposta = {
      success: true,
      res: await axios.post(`http://localhost:8080/api/v1/tranca`, body)
   }

   if (resposta.res.error) {
      resposta.success = false
      console.error(resposta.error)
   } else {
      console.log(resposta.res.data)
   }

   return resposta
}
