const Card2 = ({text1, text2, text3, text4, bgImg}) =>{
    return(
        <div className="relative overflow-hidden border border-transparent rounded-md text-white w-full p-4">
            <img src = {bgImg} className="absolute inset-0 w-full h-full object-cover"/>
            <div className="absolute inset-0 bg-black/40"/>
            <div className="relative flex flex-col items-start gap-1">
                <span className="text-sm">{text1}</span>
                <span className="font-bold">{text2}</span>
                <span className="text-sm">{text3}</span>
                <button className="border border-transparent rounded-lg bg-blue-500/60 p-1 mt-1">{text4}</button>
            </div>
        </div>
    )
}
export default Card2;