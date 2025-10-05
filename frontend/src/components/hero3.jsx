import Card1 from "./cards/card1";

const Hero3 = () =>{
    return(
        <div className="w-full max-w-4xl mx-auto mt-4">
            <div className="flex flex-col">
                <p>Why booking.com</p>
                <div className="grid sm:grid-cols-4 gap-4 grid-cols-1">
                    <Card1 text1 = "Book now, pay at the property" text2 = "FREE cancellation on most rooms"/>
                    <Card1 text1 = "300M+ reviews from fellow travelers" text2 = "Get trusted information from guests like you"/>
                    <Card1 text1 = "2+ million properties worldwide" text2 = "Hotels, guest houses, apartments, and more…"/>
                    <Card1 text1 = "Trusted 24/7 customer service you can rely on" text2 = "We're always here to help"/>
                </div>
            </div>
        </div>
    )
}

export default Hero3;