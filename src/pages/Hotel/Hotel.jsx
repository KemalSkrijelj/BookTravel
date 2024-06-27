import { useParams } from "react-router-dom";
import "./Hotel.css";
import hotels from "../../common/hotels.json";
// import { CiHeart,CiLock,CiParking1 } from "react-icons/ci";
import {  FaWifi, FaSwimmer,FaSpa, FaCity, FaStreetView, FaFlag, FaParking, FaPray, FaHeart, FaRegHeart } from "react-icons/fa";
import { useState } from "react";
import { useEffect } from "react";

function Hotel() {
  // const [isActive, setIsActive] = useState(false)
  const { id } = useParams();
  const hotel = hotels.find((hotel) => hotel.id === +id);

  const [input, setInput] = useState(1);
  const [updatedFavoriteHotels, setUpdatedFavoriteHotels] = useState(() => {
    const storedFavorites = localStorage.getItem("favoriteHotels");
    return storedFavorites ? JSON.parse(storedFavorites) : [];
  });

  const [isFavoriteState, setIsFavoriteState] = useState(() => {
    return updatedFavoriteHotels.includes(hotel.id);
  });

  // const colorHeart = () => {
  //  setIsActive(!isActive)
  // }
  const handleInputChanges = (e) => {
    setInput(e.target.value);
 };
 
 useEffect(() => {
  localStorage.setItem("favoriteHotels", JSON.stringify(updatedFavoriteHotels));
}, [updatedFavoriteHotels]);

const handleFavoriteToggle = () => {
  if (!hotel) return; // Ensure hotel is defined before proceeding
  if (!isFavoriteState) {
    const newFavoriteHotels = [...updatedFavoriteHotels, hotel.id];
    setUpdatedFavoriteHotels(newFavoriteHotels);
    setIsFavoriteState(true);
  } else {
    const newFavoriteHotels = updatedFavoriteHotels.filter((hotelId) => hotelId !== hotel.id);
    setUpdatedFavoriteHotels(newFavoriteHotels);
    setIsFavoriteState(false);
  }
};

  return(
  <div className="hotel">
    <div className="card-hotel">

      <img src={hotel.imageUrl} alt="" />
      <h1>{hotel.title}, {hotel.content}</h1>

      <div className="location-hotel">
        <p><FaCity /> {hotel.city}</p>
        <p><FaStreetView /> {hotel.state}</p>
        <p><FaFlag /> {hotel.country}</p>
      </div>

         <div className="icons-hotel">
            <button><FaWifi /></button>
            <button><FaSwimmer /></button>
            <button><FaSpa /></button>
            <button><FaParking /></button>
            <button><FaPray /></button>
            <button onClick={handleFavoriteToggle}>
               {isFavoriteState ? (
                  <FaHeart fill="red" className="heart"  style={{cursor:"pointer"}} />
                ) : (
                  <FaRegHeart fill="red" className="heartClick" style={{cursor:"pointer"}} />
                )}
            </button>
         </div>

         <div className="price-hotel">
            <h2>Price:{hotel.total * input}$    {input > 1  ? "Nights" : "Night"}</h2>
              <p style={{fontWeight:"bold"}}>Check nights: 
                <input type="number" value={input} onChange={handleInputChanges} min={1} max={30}/>
              </p>
         </div>

    </div>
 </div>
  );
}

export default Hotel;