import Navbar from "./Navbar.js"
const Layout = ({children}) => {
    return (
        <>
            <Navbar /> <div> {children} </div> 
        </>
    );
};

export default Layout;