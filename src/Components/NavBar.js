
import React, { Fragment } from "react";
import { Menu } from "semantic-ui-react";
import { NavLink, withRouter, Redirect, Switch, useHistory } from "react-router-dom";



const NavBar = () => {



  return (
    <div>
      
    <Menu pointing secondary>
   
    
      <Fragment>
        
        <Menu.Item
            as={NavLink}
            to="/home"
            name="Home"
            active={pathname === "/home"}
          />
        <Menu.Item
          as={NavLink}
          to="/about"
          name="About"
          active={pathname === "/about"}
        />
        <Menu.Item
          as={NavLink}
          to="/admissions"
          name="Admissions"
          active={pathname === "/admissions"}
        />
         <Menu.Item
          as={NavLink}
          to="/academics"
          name="Academics"
          active={pathname === "/academics"}
        />
         <Menu.Item
          as={NavLink}
          to="/faculty"
          name="Faculty"
          active={pathname === "/faculty"}
        />
        
        </Menu.Menu>
        
      </Fragment>
  
  </Menu></div>
  )
}

export default withRouter(NavBar)
