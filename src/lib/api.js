const hostPath = "http://localhost:8080/"
const apiPath = "api/v1/"

const BASE_URL = hostPath + apiPath

export async function get(endpoint) {
   try {
      const resposta = await fetch(BASE_URL + endpoint);
      const data = await resposta.json();

      return {
         data: data
      }
      
   } catch (error) {
      return{
         error: error.message
      }
   }
}

export async function post(endpoint, body) {

   try {
      let inserir = await fetch(BASE_URL + endpoint, {
         method: "POST",
         headers: {
            "Content-Type": "application/json"
         },
         body: JSON.stringify(body)
      })

      const dados = await inserir.json();

      return  {
         dados: dados
      }
   } catch (error) {
      console.log();
      return {
         error: error.message
      }
   }
}

