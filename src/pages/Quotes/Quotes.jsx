import quotes from "../../common/quotes.json";
import QuotesCard from "../../components/Cards/QuotesCard/QuotesCard";
import './Quotes.css'

const Quotes = () => {
  return(
    <div className="Quotes">
      {quotes.map((quote) =>( 
       <QuotesCard 
       key={quote.id}
       author={quote.author}
       text={quote.text}
       date={quote.date}
       image={quote.image}
       description={quote.description}
       author_image={quote.author_image}
       />
      ))}
    </div>
  )
}

export default Quotes