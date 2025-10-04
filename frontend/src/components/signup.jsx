import React, {useState} from "react"

const Signup = () =>{
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState("");
    const handleFetch = async(e) =>{
        e.preventDefault();
        try{
            const response = await fetch("http://127.0.0.1:8000/users/create/",{
                method : "POST",
                headers : {
                    "Content-type" : "application/json"
                },
                credentials : "include",
                body : JSON.stringify({name, email, age: Number(age)})
            })
            if(!response.ok)
            {
                throw new Error("Error in Signup");
            }
            const data = await response.json();
            console.log(data);
            setName("");
            setAge("");
            setEmail("");
        }catch(err)
        {
            console.log(err);
        }
    }
    return(
        <form onSubmit = {handleFetch}>
            <input placeholder="Enter name" value = {name} onChange = {(e) => setName(e.target.value)} className="border border-red-500 rounded-full px-1 py-1"/>
            <input placeholder="Enter Email" value = {email} onChange = {(e) => setEmail(e.target.value)}/>
            <input placeholder="Enter Age" value = {age} onChange = {(e) => setAge(e.target.value)}/>
            <button type ="submit">Submit</button>
        </form>
    )
}

export default Signup;