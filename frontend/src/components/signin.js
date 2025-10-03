import React, {useState} from "react"
import { useAuthContext } from "../context/authContext";

const Signin = () =>{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {setUser} = useAuthContext();
    const handleFetch = async(e) =>{
        e.preventDefault();
        try{
            const response = await fetch("http://localhost:8000/users/login/",{
            method : "POST",
            headers : {
                "Content-type" : "application/json"
            },
            credentials : "include",
            body : JSON.stringify({email, password})
            })
            if(!response.ok)
            {
                throw new Error("reponse is not ok in signin handler")
            }
            const data = await response.json();
            setUser(data);
            setEmail("");
            setPassword("");
            console.log(data);
        }
        catch(err)
        {
            console.log(err);
        }
    }
    const handleLogout = async() =>{
        
    }
    return(
        <form onSubmit={handleFetch}>
            <input placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <input placeholder="Enter PW" value={password} onChange={(e) => setPassword(e.target.value)}/>
            <button type = "submit">Submit</button>
        </form>
    )
}

export default Signin;