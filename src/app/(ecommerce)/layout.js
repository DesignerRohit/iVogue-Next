
import { ProductProvider } from "@/store/CartProvider/CartData"
import Announcementbar from "./layout/AnnouncementBar"
import Footer from "./layout/Footer"
import Header from "./layout/Header"

 const WebLayout = ({children}) => {
    return(
        <>
        <ProductProvider>
        <Announcementbar/>
        <Header/>
        {children}
        <Footer/>
        </ProductProvider>
        </>
    )
 }

 export default WebLayout