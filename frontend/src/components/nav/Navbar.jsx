import LogoName from "../../assets/images/BankBudLogo/LogoName.png"
import './nav.css'
import { useNavigate } from "react-router-dom"

const Navbar = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate("/login")
  }

  const goHome = () => {
    navigate("/")
  }
  return (
    <nav>
      <img src={LogoName} onClick={goHome}/>
      <button className="loginBtn" onClick={handleClick}>Login</button>
    </nav>
  )
}

export default Navbar