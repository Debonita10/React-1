// import React, { useState } from 'react';

// import { NavLink } from 'react-router-dom';
// import { CgMenu,CgClose } from "react-icons/cg";
// import styled from "styled-components";


// const Nav = () => {
//     const [menuIcon, setMenuIcon] = useState();

//     const Nav = styled.nav`
//      .navbar-lists {
//       display: flex;
//       gap: 3.5rem;
//       align-items: center;

//       .navbar-link {
//         &:link,
//         &:visited {
//           display: inline-block;
//           text-decoration: none;
//           font-size: 1.0rem;
//           font-weight: 500;
//           text-transform: uppercase;
//           color: ${({ theme }) => theme.colors.black};
//           transition: color 0.3s linear;
//         }

//         &:hover,
//         &:active {
//           color: ${({ theme }) => theme.colors.helper};
//         }
//       }
//     }

//     .mobile-navbar-btn {
//       display: none;
//       background-color: transparent;
//       cursor: pointer;
//       border: none;
//     }

//     .mobile-nav-icon[name="close-outline"] {
//        font-size: 3rem;
//       color: ${({ theme }) => theme.colors.black};

//     }
//        .navbar-lists li {
//       list-style: none;
//     }

//     .close-outline {
//       display: none;
//     }
//  .navbar {
//       display: flex;
//       justify-content: space-between;
//       align-items: center;
//     }
    
      

//       .cart-total--item {
//         width: 2.4rem;
//         height: 2.4rem;
//         position: absolute;
//         background-color: #000;
//         color: #000;
//         border-radius: 50%;
//         display: grid;
//         place-items: center;
//         top: -20%;
//         left: 70%;
//         background-color: ${({ theme }) => theme.colors.helper};
//       }
//     }

//     .user-login--name {
//       text-transform: capitalize;
//     }

//     .user-logout,
//     .user-login {
//       font-size: 1.4rem;
//       padding: 0.8rem 1.4rem;
//     }

//     @media (max-width: ${({ theme }) => theme.media.mobile}) {
//       .mobile-navbar-btn {
//         display: inline-block;
//         z-index: 9999;
//         border: ${({ theme }) => theme.colors.black};

//         .mobile-nav-icon {
//           font-size: 4.2rem;
//           color: ${({ theme }) => theme.colors.black};
//         }
//       }
   

//       .active .mobile-nav-icon {
//         display: none;
//         font-size: 4.2rem;
//         position: absolute;
//         top: 30%;
//         right: 10%;
//         color: ${({ theme }) => theme.colors.black};
//         z-index: 9999;
//       }

//       .active .close-outline {
//         display: inline-block;
//       }

//       .navbar-lists {
//         width: 100vw;
//         height: 100vh;
//         position: fixed;
//         top: 0;
//         left: 0;
//         background-color: #fff;

//         display: flex;
//         justify-content: center;
//         align-items: center;
//         flex-direction: column;

//         visibility: hidden;
//         opacity: 0;
//         transform: translateX(100%);
//         /* transform-origin: top; */
//         transition: all 3s linear;
//       }

//       .active .navbar-lists {
//         visibility: visible;
//         opacity: 1;
//         transform: translateX(0);
//         z-index: 999;
//         transform-origin: right;
//         transition: all 3s linear;

//         .navbar-link {
//           font-size: 4.2rem;
//         }
//       }

// @media (max-width: ${({ theme }) => theme.media.tab}) {
//     .navbar-lists {
//       gap: 1.5rem;

//       .navbar-link {
//         font-size: 1.8rem;
//       }
//     }
//   }

//       .user-logout,
//       .user-login {
//         font-size: 2.2rem;
//         padding: 0.8rem 1.4rem;
//       }
// }
//  `;
//   return (
//     <>
    
//     <Nav>
//          <div className={menuIcon ? "navbar active" : "navbar"}>
//             <ul className='navbar-lists'>
           
//               <li>
//                 <NavLink to="/category"
              
//                className='navbar-link' onClick={()=>setMenuIcon(false)}>See All
//               </NavLink>
//               </li>
    
//             <li>
//               <NavLink to="/Clothing"
//            className='navbar-link' onClick={()=>setMenuIcon(false)}>Clothing
//             </NavLink>
//             </li>
//             <li>
//                 <NavLink to="/electronics"
//            className='navbar-link' onClick={()=>setMenuIcon(false)}>Electronics
//             </NavLink>
//             </li>
//             <li>
//             <NavLink to="/homekit"
//             className='navbar-link' onClick={()=>setMenuIcon(false)}>Home & Kitchen
//             </NavLink>
//             </li>
//             <li>
//             <NavLink to="/beauty"
//           className='navbar-link' onClick={()=>setMenuIcon(false)}>Beauty & Personal Care
//             </NavLink>
//             </li>
//             <li>
//             <NavLink  to="/games"
//             className='navbar-link' onClick={()=>setMenuIcon(false)}>Toys & Games
//             </NavLink>
//             </li>
//             <li>
//             <NavLink  to="/grocery"
//             className='navbar-link' onClick={()=>setMenuIcon(false)}>Grocery & Gourmet Food
//             </NavLink>
//             </li>
//             <li>
//             <NavLink to="/books"
//             className='navbar-link' onClick={()=>setMenuIcon(false)}>Books
//             </NavLink>
//             </li>
//             </ul>
//           </div>
//           </Nav>
     
//          {/* mobile navbar */}
//          <div className="mobile-navbar-btn">
//           <CgMenu  name="menu-outline" className='mobile-nav-icon' onClick={()=>setMenuIcon(true)} />
// <CgClose name="close-outline" className='mobile-nav-icon-close-outline'onClick={()=>setMenuIcon(true)}/>
//         </div>
    
    
//     </>
//   )
// }

// export default Nav;







import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { CgMenu, CgClose } from "react-icons/cg";
import styled from "styled-components";

const Nav = () => {
  const [menuIcon, setMenuIcon] = useState(false); // Fixed initialization to false

  const Navbar = styled.nav`
    .navbar-lists {
      display: flex;
      gap: 3.5rem;
      align-items: center;

      .navbar-link {
        &:link,
        &:visited {
          display: inline-block;
          text-decoration: none;
          font-size: 1rem;
          font-weight: 500;
          text-transform: uppercase;
          color: ${({ theme }) => theme.colors.black};
          transition: color 0.3s linear;
        }

        &:hover,
        &:active {
          color: ${({ theme }) => theme.colors.helper};
        }
      }
    }

    .mobile-navbar-btn {
      display: none;
      background-color: transparent;
      cursor: pointer;
      border: none;
    }

    .mobile-nav-icon {
      font-size: 3rem;
      color: ${({ theme }) => theme.colors.black};
    }

    .close-outline {
      display: none;
    }

    .navbar-lists li {
      list-style: none;
    }

    .navbar {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    @media (max-width: ${({ theme }) => theme.media.mobile}) {
      .mobile-navbar-btn {
        display: inline-block;
        z-index: 9999;
         background-color: #fff; 

        .mobile-nav-icon {
          font-size: 4rem;
        }
      }

      .navbar-lists {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-color: ${({ theme }) => theme.colors.white};
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 2rem;
        transform: translateX(100%);
        transition: transform 0.3s ease-in-out;
        visibility: hidden;
        opacity: 0;
      }

      .active .navbar-lists {
        transform: translateX(0);
        visibility: visible;
        opacity: 1;
      }

      .navbar-link {
        font-size: 2rem;
      }

      .mobile-nav-icon-close-outline {
        display: inline-block;
      }

      .mobile-navbar-btn .mobile-nav-icon-close-outline {
        display: none;
      }

      .active .mobile-nav-icon {
        display: none;
      }

      .active .mobile-nav-icon-close-outline {
        display: inline-block;
         font-size: 4rem;
        color: ${({ theme }) => theme.colors.black}; 
      }
    }

    @media (max-width: ${({ theme }) => theme.media.tab}) {
      .navbar-lists {
        gap: 1.5rem;
         background-color: #fff; 
 width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
        .navbar-link {
          font-size: 1.8rem;
        }
      }
    }
  `;

  return (
    <>
      <Navbar>
        <div className={menuIcon ? "navbar active" : "navbar"}>
          <ul className="navbar-lists">
            <li>
              <NavLink to="/category" className="navbar-link" onClick={() => setMenuIcon(false)}>
                See All
              </NavLink>
            </li>
            <li>
              <NavLink to="/clothing" className="navbar-link" onClick={() => setMenuIcon(false)}>
                Clothing
              </NavLink>
            </li>
            <li>
              <NavLink to="/electronics" className="navbar-link" onClick={() => setMenuIcon(false)}>
                Electronics
              </NavLink>
            </li>
            <li>
              <NavLink to="/homekit" className="navbar-link" onClick={() => setMenuIcon(false)}>
                Home & Kitchen
              </NavLink>
            </li>
            <li>
              <NavLink to="/beauty" className="navbar-link" onClick={() => setMenuIcon(false)}>
                Beauty & Personal Care
              </NavLink>
            </li>
            <li>
              <NavLink to="/games" className="navbar-link" onClick={() => setMenuIcon(false)}>
                Toys & Games
              </NavLink>
            </li>
            <li>
              <NavLink to="/grocery" className="navbar-link" onClick={() => setMenuIcon(false)}>
                Grocery & Gourmet Food
              </NavLink>
            </li>
            <li>
              <NavLink to="/books" className="navbar-link" onClick={() => setMenuIcon(false)}>
                Books
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Mobile navbar button */}
        <div className="mobile-navbar-btn">
          <CgMenu name="menu-outline" className="mobile-nav-icon" onClick={() => setMenuIcon(true)} />
          <CgClose name="close-outline" className="mobile-nav-icon-close-outline" onClick={() => setMenuIcon(false)} />
        </div>
      </Navbar>
    </>
  );
};

export default Nav;
