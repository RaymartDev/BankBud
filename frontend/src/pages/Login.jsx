import Navbar from '../components/navbar/navbar'
import Footer from '../components/footer/footer'

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
                        required='true'
                        placeholder='Enter your Email'
                        />

                        <input 
                        type='string'
                        required='true'
                        placeholder='Enter your Password'
                        />

                        <button className='loginBtn'>Log in</button>
                    </div>

                    <div className='forgot-create'>
                        <p>Forgot your Password?</p>
                        <hr className='bottom-line'/>
                        <p>Create New Account? <a href="http://" target="_blank">Click Here.</a></p>
                    </div>
                </form>
            </div>
        <Footer />
        </div>
    )
}

export default Login