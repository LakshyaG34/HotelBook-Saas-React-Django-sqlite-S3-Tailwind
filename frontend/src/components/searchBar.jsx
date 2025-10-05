import { CgHomeAlt } from "react-icons/cg";
import { CgCalendarDates } from "react-icons/cg";
import { CgBoy } from "react-icons/cg";

const SearchBar = () =>{
    return(
        <div className="w-full max-w-4xl mx-auto">
            <div className="flex flex-row justify-between bg-amber-300 py-1 border rounded-lg border-transparent px-1 gap-1">
                <div className="flex items-center gap-2 bg-white rounded-lg w-full py-2 pl-1">
                    <CgHomeAlt className="w-5 h-5"/>
                    <span className="text-sm">Where are you going?</span>
                </div>
                <div className="flex items-center gap-2 bg-white rounded-lg w-full py-2 pl-1">
                    <CgCalendarDates className="w-5 h-5"/>
                    <span className="text-sm">Check-in-date && Check-out-date</span>
                </div>
                <div className="flex items-center gap-2 bg-white rounded-lg w-full py-2 pl-1">
                    <CgBoy/>
                    <span className="text-sm">In-progress</span>
                </div>
                <button className="bg-blue-800 text-white border border-transparent rounded-md p-2">
                    Search
                </button>
            </div>
        </div>
    )
}

export default SearchBar;