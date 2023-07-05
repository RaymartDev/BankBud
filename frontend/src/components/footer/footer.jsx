import React from 'react'
import LogoWhite from '../../assets/images/BankBudLogo/LogoNameWhite.png'
import Flag from '../../assets/images/SVG/PhilFlag.svg'
import '../footer/footer.css'

const footer = () => {
  return (
    <footer className='login-footer'>
        <img src={LogoWhite} className='logoname'/>

        <div className='credit'>
            <p>© 1999 - 2023</p>
            <img src={Flag} className='flag'/>
        </div>
        
    </footer>
  )
}

export default footer