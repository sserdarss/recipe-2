import React, { useState } from "react";
import { Nav, Logo, Hamburger, MenuLink, Menu } from "./NavbarStyles";
//  import { ExternalLink } from "react-external-link";
// import { GiHamburgerMenu } from "react-icons/gi";
const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);
 
  return (
    <Nav>
      <Logo  to="/home">
        <i>{"SERDAR "}</i>
        <span>Recipe-app</span>
      </Logo>

      <Hamburger onClick={()=>{setIsOpen(!isOpen)}}>
        <span />
        <span />
        <span />
        {/* <GiHamburgerMenu/> */}

      </Hamburger>

      <Menu osman = {isOpen} >
        <MenuLink onClick={()=>{setIsOpen(!isOpen)}} to="/about" >About</MenuLink>
        <MenuLink to="/github" >Github</MenuLink>
        <MenuLink 
        onClick={()=>{setIsOpen(!isOpen)}}
        onMouseUp={()=>sessionStorage.clear()}
        
        to="/" 
        
        
        
        >Logout</MenuLink>

      </Menu>
     

      
    </Nav>
  );
};

export default Navbar;