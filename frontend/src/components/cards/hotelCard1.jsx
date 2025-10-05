const HotelCard1 = ({
  name,
  location,
  rooms,
  description,
  imgURL,
  price,
  landmark,
  taxes,
  tags,
  roomType
}) => {
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-200">
      <div className="flex flex-col md:flex-row">
        {/* Image */}
        <div className="md:w-1/3">
          <img
            src={imgURL}
            alt={name}
            className="w-full h-48 md:h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="md:w-2/3 flex flex-col justify-between p-4 gap-2">
          <div>
            <h2 className="text-xl font-bold text-blue-700">{name}</h2>
            <p className="text-sm text-blue-600 underline">{location}</p>
            <p className="text-xs text-gray-500">{landmark}</p>

            <p className="text-sm text-gray-700 mt-2">{description}</p>

            <div className="flex flex-wrap gap-2 mt-2 text-xs text-gray-600">
              <span className="px-2 py-1 bg-gray-100 rounded-md">{roomType}</span>
              <span className="px-2 py-1 bg-gray-100 rounded-md">{tags}</span>
            </div>

            <p className="text-xs text-gray-600 mt-1">
              Only <span className="font-semibold">{rooms}</span> left at this
              price on our site!
            </p>
          </div>

          {/* Price + CTA */}
          <div className="flex justify-between items-center mt-4">
            <div className="flex flex-col">
              <span className="text-lg font-bold text-gray-800">₹{price}</span>
              <span className="text-xs text-gray-500">
                + ₹{taxes} taxes & fees
              </span>
            </div>
            <button className="bg-blue-700 hover:bg-blue-800 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors duration-150">
              See Availability
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelCard1;
