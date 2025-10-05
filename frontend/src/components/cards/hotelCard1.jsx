const HotelCard1 = ({name, location, description, imgURL}) =>{
    return(
        <div>
            <div className="flex flex-row border border-gray-400/60 rounded-lg items-center">
                <div>
                    <img src={imgURL} className="w-50 h-50 overflow-hidden"/>
                </div>
                <div className="flex flex-col">
                    <div>
                        {name}
                    </div>
                    <div>
                        {location}
                    </div>
                    <div>
                        {description}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HotelCard1;