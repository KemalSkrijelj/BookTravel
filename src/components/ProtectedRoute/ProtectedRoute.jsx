/* eslint-disable react/prop-types */
import Auth from "../../pages/Auth/Auth";

const ProtectedRoute = ({children}) => {
  const localLoggedInUser = localStorage.getItem("loggedInUser");
  
    if (localLoggedInUser) {
      return children
    } else {
      return <Auth />
    }

}

export default ProtectedRoute