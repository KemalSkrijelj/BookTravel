import HotelCard from "../../components/Cards/HotelCard/HotelCard";
import hotels from "../../common/hotels.json";
import "./Hotels.css";

function HotelsList() {
  return (
    <div className="hotels">
      {hotels.map((hotel) => (
        <HotelCard
          key={hotel.id}
          imageUrl={hotel.imageUrl}
          title={hotel.title}
          content={hotel.content}
          total={hotel.total}
          city={hotel.city}
          onClick={() => (window.location.href = `/hotels/${hotel.id}`)}
        />
      ))}
    </div>
  );
}

export default HotelsList;
