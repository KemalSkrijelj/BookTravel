import './YourList.css'

const FavList = () => {

 const useData  = () => {
  const data = localStorage.getItem(`hotel sa id:`, )
  console.log(data)
 } 
  return (
    <div>
      <h1>Your List</h1>
      <h2>{useData}</h2>
    </div>
  )
}

export default FavList