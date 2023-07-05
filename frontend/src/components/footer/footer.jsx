import PhilFlag from "../../assets/images/SVG/PhilFlag.svg"
import LogoNameWhite from "../../assets/images/BankBudLogo/LogoNameWhite.png"
import './footer.css'

const Footer = () => {
    return (
      <footer>
      <div className="footer-containter">
        <div className="credit">
          <div>
            <img src={LogoNameWhite} className="logoname" />
          </div>
          <div>
            <p>© 1999 - 2023</p>
            <img src={PhilFlag} className="flag"/>
          </div>
        </div>
        <hr />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sagittis metus non velit hendrerit ultrices. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 

        Nunc pulvinar enim et nisi consectetur pretium. Morbi sed diam et dui posuere sagittis. Quisque et dui enim.</p>
      </div>
      </footer>
    )
}

export default Footer