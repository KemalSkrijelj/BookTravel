import {  useState } from "react";
import PaginationQuotes from '../../components/PaginationQuotes/PaginationQuotes'
import quotes from "../../common/quotes.json";
import QuotesCard from "../../components/Cards/QuotesCard/QuotesCard";
import './Quotes.css'
import { useEffect } from "react";
// import CircularProgress from '@mui/material/CircularProgress';
// import Box from '@mui/material/Box';

const Quotes = () => {
  const [page, setPage] = useState(1)

  const numOfQuotesPerPage = 4
  const numOfQuotes = quotes.length
  const numOfPages = Math.ceil(numOfQuotes / numOfQuotesPerPage)

  useEffect(() => {
    window.scrollTo({
      top: 40,
      behavior:"smooth"
    })
  }, [page])
  
  // const [quotes, setQuotes] = useState([])
  // const [isLoading, setIsLoading] = useState(true)

  // async function getQuotes  ()  {
  //    setIsLoading(true)
  //
  //   try{
  //     const response = await fetch('https://api.quotable.io');
  //     const result = await response.json()
  //     setQuotes(result);
  //     console.log(result)
  //   } catch(error){
  //     console.log(error)
  //   } finally{
  //     setIsLoading(false)
  //   }
  // }

  // useEffect( () => {
  //   getQuotes();
  // }, [])

  return(
    <>
    <div className="Quotes">
       {/* {isLoading ?  <Box  sx={{ display: 'flex' }}>
          <CircularProgress  />
       </Box>  : } */}

      {quotes.map((quote) => ( 
       <QuotesCard 
       key={quote.id}
       author={quote.author}
       text={quote.text}
       date={quote.date}
       image={quote.image}
       description={quote.description}
       author_image={quote.author_image}
       />
      ))
      
      .slice(numOfQuotesPerPage * (page - 1), numOfQuotesPerPage * page)}
    </div>
    <PaginationQuotes page={page} numOfPages={numOfPages} setPage={setPage}/>
    </>
  )
}

export default Quotes