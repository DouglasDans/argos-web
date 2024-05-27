export const dynamic = 'force-dynamic' // defaults to auto

import {cookies} from "next/headers";
import {redirect} from "next/navigation";

export async function GET(){
      // const sessionCookie = await cookies().get('session');

   // Clear the session cookie by setting its value to an empty string
   // and setting its expiration time to a past date (e.g., 1 day ago).
   cookies().set('session', '', {
      expires: new Date(Date.now() - 86400000), // 1 day in milliseconds
   });

   redirect("/")
}