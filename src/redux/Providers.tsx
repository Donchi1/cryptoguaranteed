"use client";

import Protected from "@/components/Protected";
import { store } from "./store";
import { Provider } from "react-redux";
import { usePathname } from "next/navigation";
import ProtectedAdmin from "@/components/ProtectedAdmin";

export function Providers({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
 

  if(pathname.split("/")[1] === "admin") return <Provider store={store}><ProtectedAdmin>{children}</ProtectedAdmin></Provider>

  if(pathname.split("/")[1] === "user") return <Provider store={store}><Protected>{children}</Protected></Provider>
  
  if(pathname.split("/")[2] === "verify") return <Provider store={store}><Protected>{children}</Protected></Provider>
  return (
    <Provider store={store}>
     {children}
    </Provider>
  );
}
