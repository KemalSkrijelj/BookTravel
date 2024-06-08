/* eslint-disable react/prop-types */
import "../../../common/hotels.json";
import "./HotelCard.css";
import { LiaHotelSolid } from "react-icons/lia";
import { FaLocationDot, FaPeopleGroup, FaStar } from "react-icons/fa6";
import { useState } from "react";

function HotelCard(props) {
  const [input, setInput] = useState(1);

  const handleInputChanges = (e) => {
     setInput(e.target.value);
  };

  return (
    <div className="card">
      <img src={props?.imageUrl} width={"100%"} height={170} />
      <h1 className="card-title">
        {props?.title}, {props?.content}{" "}
      </h1>
      <div className="card-location">
      <p>
        <FaLocationDot className="location-icon" />
        {props?.city}, {props?.state}, {props?.country}
      </p></div>
      
      <div className="card-price">
      <input
        type="number"
        value={input}
        min={0}
        max={30}
        onChange={handleInputChanges}
        placeholder="Unesi br"/>
        <p className="card-text">{props.total * input}$ {input > 1  ? "Nights" : "Night"}</p>
      </div>
      <div className="card-rating">
       <p>{props?.stars } <FaStar /></p> <p>{props?.rates_from} <FaPeopleGroup /> rated it</p>  
      </div>

      <button className="show-more" onClick={props.onClick}>
        <LiaHotelSolid className="icon" />
        <p className="button-text">Show Hotel</p>
      </button>
    </div>
  );
}
export default HotelCard;
