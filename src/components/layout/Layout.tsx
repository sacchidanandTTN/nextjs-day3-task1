import { ReactNode } from "react";

import Header from "./Header";

interface LayoutProps{
    children:ReactNode
}


const Layout = ({children} : LayoutProps)=>{
    return(
<>
    <Header/>
    <main style={{padding: ' 2rem 0'}}>{children}</main>

    </>
    )
    
}


export default Layout;