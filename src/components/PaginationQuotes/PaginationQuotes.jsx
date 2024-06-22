/* eslint-disable react/prop-types */

import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import './PaginationQuotes.css'
import quotes from '../../common/quotes.json'

export default function BasicPagination(   
  { numOfPages,
  setPage,
  page }) {

  const arr = [];

  for (let i = 1; i <= numOfPages; i++) {
    arr.push(i);
  }
  return (
    <div className='pagination-quotes'>
    <Stack spacing={2}>
      <Pagination count={5} color={'warning'} onClick={() => {setPage(page - 1) } }/>

    </Stack>
    </div>
  );
}