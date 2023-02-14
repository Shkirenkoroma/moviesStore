import "./style.css"
import { NavLink } from "react-router-dom";
const ErrorLogin = ():JSX.Element => {

return (
   <div className="error__page">
      Вы ввели не верный логин или пароль, повторите попытку
     <NavLink to="/">   <button></button></NavLink> 
   </div>
)
}


export default ErrorLogin;

