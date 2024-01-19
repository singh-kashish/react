import { Outlet } from "react-router-dom";

const Contact = () =>{
    return (
        <div style={{display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center"}}>
            <h3>Contact me on LinkedIn @kashish-singh111</h3>
            <a href="/contact/profile">Click here to go to Profile route</a>
            <Outlet/>
        </div>
        )
}
export default Contact;