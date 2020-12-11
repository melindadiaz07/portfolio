
import React, { Fragment } from "react";
import { Menu } from "semantic-ui-react";
import { NavLink, withRouter, Redirect, Switch, useHistory } from "react-router-dom";



const NavBar = ({location: { pathname }}) => {


  return (
    <div >
      
    <Menu pointing secondary >
   
      <Fragment>
        
        {/* <Menu.Item
            as={NavLink}
            to="/home"
            name="Home"
            active={pathname === "/home"}
          /> */}
        <Menu.Item
          as={NavLink}
          to="/about"
          name="About"
          active={pathname === "/about"}
        />
        <Menu.Item
          as={NavLink}
          to="/projects"
          name="Projects"
          active={pathname === "/projects"}
        />
         <Menu.Item
          as={NavLink}
          to="/skills"
          name="Skills"
          active={pathname === "/skills"}
        />
       
         <Menu.Item
          as={NavLink}
          to="/blog"
          name="Blog"
          active={pathname === "/blog"}
        />
        
        <Menu.Menu position="right"> 
          <Menu.Item
          as={NavLink}
          to="/contact"
          name="Contact"
          active={pathname === "/contact"}
        />
      </Menu.Menu>
        
      </Fragment>
  
  </Menu>
  </div>
  )
}

export default withRouter(NavBar)
