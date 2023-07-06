import Phone from "../assets/images/BankBudLogo/phone.png"
import World from "../assets/images/SVG/travel.svg"
import Payment from "../assets/images/SVG/payment.svg"
import House from "../assets/images/SVG/house.svg"
import Car from "../assets/images/SVG/car.svg"
import Future from "../assets/images/SVG/future.svg"
import '../assets/css/landing.css'
import Navbar from '../components/nav/Navbar'
import Footer from '../components/footer/Footer'
import { useNavigate } from "react-router-dom"
import Icon from '../assets/images/SVG/car.svg'

const Landing = () => {
    const navigate = useNavigate()
    const goReg = () => {
        navigate("/register")
    }
    return (
        <>
            <Navbar />

            <main>
                <section className="wall">
                <div className="tagline">
                    <h2>Trust a bank like your buddy!</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu vulputate elit.</p>
                    <button className="learnbtn">Learn More</button>
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
                    <button onClick={goReg}>Sign up for free today!</button>
                </section>
            </main>

            <Footer/>
        </>
    )
}

export default Landing