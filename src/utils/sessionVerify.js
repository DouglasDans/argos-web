import {redirect} from "next/navigation";
import {cookies} from "next/headers";

export default function sessionVerify() {
   const session = cookies().get('session')

   console.log(session)
}