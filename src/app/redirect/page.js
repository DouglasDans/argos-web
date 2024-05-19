import {verifySession} from "@/lib/dal";
import {redirect} from "next/navigation";

export default async function Redirect(){
   const session = await verifySession()
   console.log(session)
   const typeUser = session.typeUser

   if (typeUser === 'administrador') {
      redirect("/adm/dashboard")
   } else if (typeUser === 'responsavel') {
      redirect("/user/dashboard")
   } else {
      redirect('/')
   }
}