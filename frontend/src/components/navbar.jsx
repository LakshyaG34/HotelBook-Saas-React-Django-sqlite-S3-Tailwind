import React from "react"
import { useNavigate } from "react-router-dom"

const Navbar = () =>{
    const navigate = useNavigate();

    return(
        <div className="w-full max-w-4xl mx-auto">
            <div className="flex flex-row justify-between">
                <div>
                    <button onClick = {()=>navigate("#")} className="text-white text-xl font-bold">Lakshya.Booking</button>
                    </div>
                    <div className="flex gap-4">
                        <button className="text-white">List Your Property</button>
                        <div className="flex gap-1">
                            <button className="border border-transparent rounded-md bg-white px-2 py-1">Login</button>
                            <button className="border border-transparent rounded-md bg-white px-2 py-1">Signup</button>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default Navbar;