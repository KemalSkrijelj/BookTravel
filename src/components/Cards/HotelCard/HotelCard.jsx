/* eslint-disable react/prop-types */
import "../../../common/hotels.json";
import "./HotelCard.css";
import { LiaHotelSolid } from "react-icons/lia";
import { FaLocationDot } from "react-icons/fa6";
import { useState } from "react";

function HotelCard(props) {
  const [input, setInput] = useState(1);

  const handleInputChanges = (e) => {
    return setInput(e.target.value);
  };
  const setNight = (e) => {
    console.log(e.target.value);
  };

  return (
    <div className="card">
      <img src={props?.imageUrl} width={"100%"} height={170} />
      <h1 className="card-title">
        {props?.title}, {props?.content}{" "}
      </h1>
      <p className="card-location">
        <FaLocationDot />
        {props?.city}
      </p>
      <p className="card-text">{props.total / 5}$/Night</p>

      <input
        type="number"
        value={input}
        min={0}
        max={30}
        onChange={() => handleInputChanges}
      />
      <button type="submit" className="saveNights-btn" onClick={setNight}>
        Save nights
      </button>
      <p className="card-total">Total </p>
      <button className="card-price" onClick={props.onClick}>
        <LiaHotelSolid className="icon" />
        <p className="button-text">Show Hotel</p>
      </button>
    </div>
  );
}
export default HotelCard;
