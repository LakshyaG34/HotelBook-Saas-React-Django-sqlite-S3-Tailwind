const Card1 = ({text1, text2}) =>{
    return(
        <div className="bg-gray-400/20 px-2 py-8 border border-transparent rounded-lg">
            <div className="flex flex-col justify-center items-center">
                <span className="font-bold">{text1}</span>
                <span>{text2}</span>
            </div>
        </div>
    )
}

export default Card1;