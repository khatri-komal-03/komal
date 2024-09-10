import React,{useRef} from 'react'
// import logo from "./reactjs/komal/public/Assets/logo.png"


const Navbar = () => {
  const searchRef = useRef();
  const handleSearch = ()=>{
    searchRef.current.classlist.toggle("active");
  };

  const navbarHandler = ()=>{
    searchRef.current.classlist.toggle("active");
  };
  return (
    <>
    <header className='header'>
      <a href="#" className='logo'>
      <img src="https://t3.ftcdn.net/jpg/03/65/42/00/360_F_365420014_xjsSDkKzrhq4gr9GFzP6S97H7MJyNI5B.jpg" alt=""/>
      </a>

      <nav className='navbar'>
        <a href="Home">Home</a>
        <a href="About">About</a>
        <a href="Menu">Menu</a>
        <a href="Products">Products</a>
        <a href="Review">Review</a>
        <a href="Contact">Contact</a>
        <a href="Blogs">Blogs</a>
      </nav>

      <div className='icons'>
         <i class="fa-solid fa-magnifying-glass"></i> 
        <i class="fas fa-shopping-card"></i>
        <i class="fas fa-bars" id="menu-btn"></i>
      </div>

      <div className='search-form' ref={searchRef}>
        <input type="search" placeholder="Search here..." id="search-box"/>
        <label htmlFor="search-box" onClick={handleSearch} ><i className='fa-solid fa-search'></i></label>
      </div>
      
      <div className='cart-items-container'>
        
        {/* {
          cart.map(e => (
            <div className='cart-item'>
              <span className='fas fa-times'></span>
              </div>
          ))
        } */}

      </div>
      
    </header>

    </>
  )
}

export default Navbar