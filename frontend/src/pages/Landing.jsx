import BankBudLogo from "../assets/images/BankBudLogo/BankBudLogo.png"
import LogoName from "../assets/images/BankBudLogo/LogoName.png"
import LogoNameWhite from "../assets/images/BankBudLogo/LogoNameWhite.png"
import Phone from "../assets/images/BankBudLogo/phone.png"
import World from "../assets/images/SVG/travel.svg"
import Payment from "../assets/images/SVG/payment.svg"
import House from "../assets/images/SVG/house.svg"
import Car from "../assets/images/SVG/car.svg"
import Future from "../assets/images/SVG/future.svg"
import PhilFlag from "../assets/images/SVG/PhilFlag.svg"
import '../assets/css/landing.css'


const Landing = () => {
    return (
        <>
            <nav>
                <img src={LogoName}/>
                <button className="loginBtn">Login</button>
            </nav>

            <main>
                <section className="wall">
                <div className="tagline">
                    <h2>Trust a bank like your buddy!</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu vulputate elit.</p>
                    <button className="learnbtn">Learn More</button>
                </div>
                <div className='message'>
                    <input
                    type='String'
                    />
                    <button className='send'>Send</button>
                </div>
                </section>
                    
                <section className="goals">

                    <hr/>
                    <h2>Set your goals</h2>
                    <div className="goal-icons">
                    <div>
                        <img src={World} />
                        <p>Travel around the world</p>
                    </div>
                    <div>
                        <img src={Payment} />
                        <p>Pay your bills online</p>
                    </div>
                    <div>
                        <img src={House} />
                        <p>Get your dream house</p>
                    </div>
                    <div>
                        <img src={Car} />
                        <p>Buy your want car</p>
                    </div>
                    <div>
                        <img src={Future} />
                        <p>Build your desired future</p>
                    </div>
                    </div>
                </section>

                <section className="download">
                    <img src={Phone} />
                    <div className="statements">
                        <p>Download the <span className="bank">Bank</span><span className="bud">Bud</span></p>
                        <p className="second-line">mobile application on</p> 
                        <p className="text">your device now!</p>
                        <div className="download-button">
                            <div className="apple">
                                <button>Download on App Store</button>
                            </div>
                            <div className="android">
                                <button>Download on Play Store</button>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="start">
                    <p>Get Started with</p>
                    <p><span className="bank">Bank</span><span className="bud">Bud</span></p>
                    <button>Sign up for free today!</button>
                </section>
            </main>

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
        </>
    )
}

export default Landing