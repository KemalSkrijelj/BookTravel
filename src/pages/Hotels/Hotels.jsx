import HotelCard from "../../components/Cards/HotelCard/HotelCard";
import hotels from "../../common/hotels.json";
import "./Hotels.css";
import Pagination from "../../components/Paginations/Pagination";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function HotelsList() {
  const navigate = useNavigate();
  const [page, setPage] = useState(1)
  const numOfHotelPerPage = 8
  //Nums of hotels
  const numOfHotels = hotels.length
  //Num of Pages
  const numOfPages = Math.ceil(numOfHotels / numOfHotelPerPage)
  const [favoriteHotels, setFavoriteHotels] = useState([]);

  useEffect(() => {
   window.scrollTo({
    top: 0,
    behavior:"smooth"
  })
  }, [page])

  useEffect(() => {
    try {
      const storedHotels = localStorage.getItem('favoriteHotels');
      if (storedHotels) {
        setFavoriteHotels(JSON.parse(storedHotels));
      }
    } catch (error) {
      console.error('Failed to parse favoriteHotels from localStorage:', error);
    }
  }, []);
  return (
    <>
    <div className="hotels">
      {hotels.map((hotel) => {
            const isFavorite = favoriteHotels.includes(hotel.id);
            return (
              <HotelCard
                key={hotel.id}
                imageUrl={hotel.imageUrl}
                title={hotel.title}
                content={hotel.content}
                total={hotel.total}
                stars={hotel.stars}
                city={hotel.city}
                state={hotel.state}
                country={hotel.country}
                rates_from={hotel.rates_from}
                onClick={() =>
                  navigate(`/hotels/${hotel.id}`, {
                    state: {
                      isFavorite: isFavorite,
                      favoriteHotels: favoriteHotels,
                    },
                  })
                }
              />
            );
          })
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
