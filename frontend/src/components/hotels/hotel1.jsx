import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import HotelCard1 from "../cards/hotelCard1";

const Hotel1 = () => {
  const city = useSelector((state) => state.city);
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    const handleHotel = async () => {
      try {
        const response = await fetch(
          `http://localhost:8000/hotels/getHotel/?location=${city}`
        );
        if (!response.ok) {
          throw new Error("Error in Fetching Hotel");
        }
        const data = await response.json();
        console.log(data);
        setHotels(data); // save data to state
      } catch (err) {
        console.log(err);
      }
    };
    if (city) handleHotel();
  }, [city]);

  return (
    <div className="w-full max-w-lg mx-auto">
      {hotels.length > 0 && (
        <HotelCard1
          name={hotels[0].name}
          location={hotels[0].location}
          description={hotels[0].description}
          rooms={hotels[0].rooms}
          imgURL={hotels[0].hotelImage}
          price={hotels[0].price}
          landmark={hotels[0].landmark}
          tags={hotels[0].tags}
          taxes={hotels[0].taxes}
          roomType={hotels[0].roomType}
        />
      )}
    </div>
  );
};

export default Hotel1;
