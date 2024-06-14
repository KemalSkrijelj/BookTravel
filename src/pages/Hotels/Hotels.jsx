import HotelCard from "../../components/Cards/HotelCard/HotelCard";
import hotels from "../../common/hotels.json";
import "./Hotels.css";
import Pagination from "../../components/Paginations/Pagination";
import { useState } from "react";

function HotelsList() {

  const [page, setPage] = useState(1)
  const numOfHotelPerPage = 8
  //Nums of hotels
  const numOfHotels = hotels.length
  //Num of Pages
  const numOfPages = Math.ceil(numOfHotels / numOfHotelPerPage)
  return (
    <>
    <div className="hotels">
      {hotels.map((hotel) => (
        <HotelCard
          key={hotel.id}
          imageUrl={hotel.imageUrl}
          title={hotel.title}
          content={hotel.content}
          stars={hotel.stars}
          total={hotel.total}
          city={hotel.city}
          state={hotel.state}
          country={hotel.country}
          rates_from={hotel.rates_from}
          onClick={() => (window.location.href = `/hotels/${hotel.id}`)}
        />
      ))
      // .slice(0, numOfHotelPerPage) //Prikaz prvih 8 hotela
      // .slice(numOfHotelPerPage, numOfHotels ) //Prikaz drugih 8
      // .slice(16, 24)
      .slice(numOfHotelPerPage * (page - 1), numOfHotelPerPage * page)
      }
    </div>
    <Pagination page={page} numOfPages={numOfPages} setPage={setPage}/>
    </>
  );
}

export default HotelsList;
