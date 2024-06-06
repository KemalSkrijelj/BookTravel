import { useParams } from "react-router-dom";
import "./Hotel.css";
import hotels from "../../common/hotels.json";
// import { CiHeart,CiLock,CiParking1 } from "react-icons/ci";
// import { FaMapMarkerAlt, FaWifi, FaSwimmer,FaSpa } from "react-icons/fa";

function Hotel() {
  const { id } = useParams();
  console.log(hotels);
  const hotel = hotels.find((hotel) => hotel.id === +id)
  
  return(
  <div className="hotel">
  <img src={hotel.imageUrl} className="slika" />
    <h1>{hotel?.title}</h1>
 </div>
  );
}

export default Hotel;