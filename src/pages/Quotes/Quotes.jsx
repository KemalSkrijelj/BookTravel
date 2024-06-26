import {  useState } from "react";
import QuotesCard from "../../components/Cards/QuotesCard/QuotesCard";
import './Quotes.css'
import { useEffect } from "react";
import { Box, CircularProgress, Pagination, Stack } from "@mui/material";
// import CircularProgress from '@mui/material/CircularProgress';
// import Box from '@mui/material/Box';

const Quotes = () => {
  const [quotes, setQuotes] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [page, setPage] = useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };
  const [totalPages, setTotalPages] = useState(0);

  async function getQuotes  ()  {
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://api.quotable.io/quotes?limit=16&page=${page}&sortBy=author&order=asc`
      );
      const result = await response.json();
      setQuotes(result.results);
      setTotalPages(result.totalPages);
    } catch(error){
      console.log(error)
    } finally{
      setIsLoading(false)
    }
  }

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    getQuotes();
  }, [page]);
  return(
    <>
    <div className="quotes">
      {isLoading ? (
        <Box sx={{ display: "flex", position: "absolute", top: 200 }}>
          <CircularProgress />
        </Box>
      ) : (
        quotes.map((quote) => (
          <QuotesCard
            key={quote._id}
            author={quote.author}
            quote={quote.content}
            tags={quote.tags}
          />
        ))
      )}
    </div>
    <div className="pagination-container">
    <Stack spacing={2}>
      <Pagination 
              count={totalPages}
              page={page}
              onChange={handleChange}
              color="primary" 
      />

    </Stack>
    </div>
    </>
  )
}

export default Quotes