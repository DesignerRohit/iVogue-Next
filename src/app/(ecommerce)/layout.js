import Announcementbar from "./layout/AnnouncementBar"
import Footer from "./layout/Footer"
import Header from "./layout/Header"

 const WebLayout = ({children}) => {
    return(
        <>
        <Announcementbar/>
        <Header/>
        {children}
        <Footer/>
        </>
    )
 }

 export default WebLayout