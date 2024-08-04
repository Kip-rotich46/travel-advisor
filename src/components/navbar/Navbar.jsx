import './navbar.css';

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='navContainer'>
            <span className='logo'>protioBooking</span>
            <div className='navItems'>
              <button className='navButton'>KES</button>
              <button className='navButton'>USD</button>
              <button className='navButton'>?</button>
              <button className='navButton'>List your property</button>
                <button className='navButton'>Register</button>
                <button className='navButton'>Login</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar