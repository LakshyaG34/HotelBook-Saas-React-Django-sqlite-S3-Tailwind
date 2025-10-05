import Card2 from "./cards/card2"
import img1 from "../assets/1.jpeg"
import img2 from "../assets/2.jpeg"

const Hero4 = () =>{
    return(
        <div className="w-full max-w-4xl mx-auto mt-6">
            <div className="flex flex-col">
                <span className="font-bold text-xl">Offers</span>
                <span className="text-gray-400 mt-2">Promotions, deals, and special offers for you</span>
                <div className="grid sm:grid-cols-2 grid-cols-1 gap-2 mt-4 mb-4">
                    <Card2 text1 = "Late Escape Deals" text2 = "Go for a good time, not a long time" text3 = "Squeeze out the last bit of sun with at least 15% off" text4 ="Find Deals" bgImg= {img1}/>
                    <Card2 text1 = "Vacation rentals" text2="Live the dream in a vacation home" text3="Choose from houses, villas, cabins, and more" text4="Book Yours" bgImg={img2}/>
                </div>
            </div>
        </div>
    )
}

export default Hero4;