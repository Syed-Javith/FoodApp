import { PropsWithChildren, createContext, useEffect, useState } from "react";

import { Session } from "@supabase/supabase-js"
import { supabase } from "../lib/supabase";

interface AuthProps {
   session: Session | undefined,
   loading: boolean
}

export const authContext = createContext<AuthProps>({
   session: undefined,
   loading: true
});


export const AuthProvider = ({ children }: PropsWithChildren) => {

   const [session, setSession] = useState<Session>();
   const [loading, setLoading] = useState<boolean>(true);

   useEffect(() => {
      setLoading(true)
      const getUserSession = async () => {
         const { data } = await supabase.auth.getSession();
         if (data) setSession(data.session || undefined)
         setLoading(false)
      }
      getUserSession();
      supabase.auth.onAuthStateChange(getUserSession)
   }, [])

   return <authContext.Provider value={{ session, loading }}>
      {children}
   </authContext.Provider>
}
