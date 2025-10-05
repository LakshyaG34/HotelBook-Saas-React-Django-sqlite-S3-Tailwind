import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import HotelCard1 from "../cards/hotelCard1";

const Hotel1 = () => {
  const city = useSelector((state) => state.city);
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [imgURL, setImgURL] = useState("");
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
        setName(data[0].name);
        setLocation(data[0].location);
        setDescription(data[0].description);
        setImgURL(data[0].hotelImage);
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    };
    handleHotel()
  }, [city]);
  return (
    <div className="w-full max-w-lg mx-auto">
      <HotelCard1
        name={name}
        location={location}
        description={description}
        imgURL={imgURL}
      />
    </div>
  );
};
export default Hotel1;
