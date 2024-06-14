/* eslint-disable react/prop-types */
import "./Pagination.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const Pagination = (
  { numOfPages,
    setPage,
    page }) => {

  const arr = [];

  for (let i = 1; i <= numOfPages; i++) {
    arr.push(i);
  }

  return (
    <div className="pagination">
      <button className="pagination-btn" disabled={page === 1} onClick={() => {setPage(page - 1);  window.scrollTo(0,0) } }>
        {" "}
        <FaArrowLeft />
      </button>
      {arr.map((num) => (
        <button className="pagination-btn" key={num} onClick={() => {setPage(num); window.scrollTo(0,0)}}>
          {num}
        </button>
      ))}
      <button className="pagination-btn" disabled={page === 3} onClick={() => {setPage(page + 1);  window.scrollTo(0,0) } }>
        {" "}
        <FaArrowRight />{" "}
      </button>
    </div>
  );
  
};

export default Pagination;
