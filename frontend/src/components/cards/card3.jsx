import { CgSlack } from "react-icons/cg";

const Card3 = () =>{
    return(
        // <div className="w-full max-w-4xl mx-auto">
            <div className="flex justify-between items-center border border-gray-400/40 rounded-lg px-3 py-5">
                <div className="flex flex-col gap-2">
                    <span className="font-bold">SignIn, Save Money</span>
                    <span className="text-sm text-gray-400">Save 10% or more at participating properties – just look for the blue Genius label</span>
                    <div className="flex flex-row gap-2">
                        <button className="border rounded-lg p-2 bg-blue-600 text-white">SignIn</button>
                        <button className="border rounded-lg p-2 border-transparent text-blue-600">Register</button>
                    </div>
                </div>
                <CgSlack className="w-20 h-20"/>
            </div>
        // </div>
    )
}

export default Card3;