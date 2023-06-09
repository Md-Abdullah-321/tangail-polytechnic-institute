import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { userContext } from '../../app';
import '../../index.css';

const Navbar = () => {
    const {state, dispatch} = useContext(userContext);
    // console.log(state);

    //Check if user logged in or not:
    const RenderButton = () => {
      if(state){
        return(
          <NavLink
          className="hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 bg-blue-500 hover:bg-blue-600  text-sm text-white font-bold rounded-xl transition duration-200"
          to='/logout'>Logout</NavLink>
        )
      }else{
        return(
          <>
            <NavLink
            className="hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 bg-gray-50 hover:bg-gray-100 text-sm text-gray-900 font-bold rounded-xl transition duration-200"
            to='/signin'>Sign In</NavLink>
            
            <NavLink
            className="hidden lg:inline-block py-2 px-6 bg-blue-500 hover:bg-blue-600 text-sm text-white font-bold rounded-xl transition duration-200"
           to='/signup'>Sign up</NavLink>
          </>
        )
      }
    }

    const RenderMobileButton =() =>{
      if(state){
          return(
            <NavLink
            className="block px-4 py-3 mb-2 leading-loose text-xs text-center text-white font-semibold bg-blue-600 hover:bg-blue-700 rounded-xl"
            to='/logout'
            onClick={showAndCloseHamburger}
            >Logout</NavLink>
          )
      }else{
          return(
            <>
              <NavLink
                className="block px-4 py-3 mb-3 text-xs text-center font-semibold leading-none bg-gray-50 hover:bg-gray-100 rounded-xl"
                to='/signin'
                onClick={showAndCloseHamburger}
                >Sign in</NavLink>
              <NavLink
                className="block px-4 py-3 mb-2 leading-loose text-xs text-center text-white font-semibold bg-blue-600 hover:bg-blue-700 rounded-xl"
                to='/signup'
                onClick={showAndCloseHamburger}
                >Sign Up</NavLink>
            </>
          )
      }
    }
    //if logged in show profile;
    const RenderProfile = () =>{
      console.log(state);
      if(state){
        return (
          <>
            <div className="md:ml-14 w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 border cursor-pointer"
            onClick={routeChange}>
            <i class="fa-regular fa-user"></i>    
            </div>
          </>
        )
      }
    }
    let navigate = useNavigate(); 
    const routeChange = () =>{ 
      navigate('../userProfile');
    }

    // Showing Hamburger 
    const showAndCloseHamburger = () =>{
        const Hamburger = document.querySelector('.navbar-menu');
        Hamburger.classList.toggle('hidden');
    }
    

    
    return (
        <>
      <nav data-aos="fade-up"
        className="relative px-4 py-4 flex justify-between items-center bg-white ">
        <div className="lg:hidden">
          <button className="navbar-burger flex items-center text-blue-600 p-3" onClick={showAndCloseHamburger}>
            <svg
              className="block h-4 w-4 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <title>Mobile menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>
        </div>

        {/* Profile Section  */}
        <RenderProfile/>

        <ul
          className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto  lg:items-center lg:w-auto lg:space-x-6 bg-slate-50 px-10 py-2 rounded-md">
          <li>
            <NavLink className="navbar_link_component" to='/'
              >Home</NavLink>
          </li>

          <li>
            <NavLink className="navbar_link_component" to='/about'>About Us</NavLink>
          </li>

          <li>
            <NavLink className="navbar_link_component" to='/department'
              >Department </NavLink>
          </li>
         
          <li>
            <NavLink className="navbar_link_component" to='/gallery'
              >Gallery</NavLink>
          </li>
       
          <li>
            <NavLink className="navbar_link_component" to='/contact'
              >Contact Us</NavLink>
          </li>
        </ul>
        {/* RenderButton  */}
        <RenderButton/>
      </nav>
      <div className="navbar-menu relative z-50 hidden" >
        <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
        <nav
          className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto"
          >
          <div className="flex items-center mb-8">
             {/* Logo for Hamburger Menu: mr-auto text-3xl font-bold leading-none  */}
            <button className="navbar-close" onClick={showAndCloseHamburger}>
              <svg
                className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
          <div>
            <ul>
              <li className="mb-1">
                <NavLink
                  className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                  onClick={showAndCloseHamburger}
                  to='/'
                  >Home</NavLink>
              </li>
              <li className="mb-1">
                <NavLink
                  className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                  onClick={showAndCloseHamburger}
                  to='/about'
                  >About Us</NavLink>
              </li>
              <li className="mb-1">
                <NavLink
                  className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                  onClick={showAndCloseHamburger}
                  to='/department'
                  >Department</NavLink>
              </li>
              <li className="mb-1">
                <NavLink
                  className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                  onClick={showAndCloseHamburger}
                  to='/gallery'
                  >Gallery</NavLink>
              </li>
              <li className="mb-1">
                <NavLink
                  className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                  onClick={showAndCloseHamburger}
                  to='/contact'
                  >Contact Us</NavLink>
              </li>
            </ul>
          </div>
          <div className="mt-auto">
            <div className="pt-6">
              {/* RenderButton for sideMenu  */}

            <RenderMobileButton/>

            </div>
            <p className="my-4 text-xs text-center text-gray-400">
              <span>Copyright © Md Abdullah</span>
            </p>
          </div>
        </nav>
      </div>
        </>
    )
}

export default Navbar;