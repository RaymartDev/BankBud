import Navbar from '../components/navbar/navbar'
import Footer from '../components/footer/footer'


const Register = () => {
    return (
        <div className="register">
            <Navbar />
            <div className="registerSection">
                <form className='registerForm'>
                    <div className='registerDetails'>
                        <p>Set up your Account</p>
                        
                        <hr />

                        <input 
                        type='string'
                        required='true'
                        placeholder='Enter your Full name'
                        />

                        <input 
                        type='string'
                        required='true'
                        placeholder='Enter your Email'
                        />

                        <input 
                        type='string'
                        required='true'
                        placeholder='Enter your Password'
                        />

                        <input 
                        type='string'
                        required='true'
                        placeholder='Confirm your Password'
                        />

                        <button className='registerBtn'>Create Account</button>
                    </div>

                </form>
            </div>
            <Footer />
        </div>
    )
}

export default Register