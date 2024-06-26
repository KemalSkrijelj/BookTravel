import { useParams } from "react-router-dom";
import "./Hotel.css";
import hotels from "../../common/hotels.json";
// import { CiHeart,CiLock,CiParking1 } from "react-icons/ci";
import {  FaWifi, FaSwimmer,FaSpa, FaCity, FaStreetView, FaFlag, FaParking, FaPray, FaHeart } from "react-icons/fa";
import { useState } from "react";
import { useEffect } from "react";

function Hotel() {
  const [isActive, setIsActive] = useState(false)
  const [input, setInput] = useState(1)
  const { id } = useParams();
  const hotel = hotels.find((hotel) => hotel.id === +id)
   
  const colorHeart = () => {
   setIsActive(!isActive)
  }
  const handleInputChanges = (e) => {
    setInput(e.target.value);
 };

 useEffect(() => {
   localStorage.setItem (`Hotel sa id:${id}`, JSON.stringify({HotelName: hotel?.title}))
 }, [isActive] )
 
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
            <button onClick={colorHeart} className={isActive ? "heartClick" : "heart"}><FaHeart /></button>
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