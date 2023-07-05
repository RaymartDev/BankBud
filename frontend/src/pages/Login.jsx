import Navbar from '../components/nav/Navbar'
import Footer from '../components/footer/Footer'
import {Link} from 'react-router-dom'

const Login = () => {
    return (
        <div className='login'>
        <Navbar />
            <div className="loginSection">
                <form className='loginForm'>
                    <div className='loginDetails'>
                        <p>Login your account</p>
                        <hr />
                        <input 
                        type='string'
                        required={true}
                        placeholder='Enter your Email'
                        />

                        <input 
                        type='string'
                        required={true}
                        placeholder='Enter your Password'
                        />

                        <button className='loginBtn'>Log in</button>
                    </div>

                    <div className='forgot-create'>
                        <p className='clickable-text'>Forgot your Password?</p>
                        <hr className='bottom-line'/>
                        <p>Create New Account? <Link to ='/register' className='clickable-text'>Click Here.</Link></p>
                    </div>
                </form>
            </div>
        <Footer />
        </div>
    )
}

export default Login