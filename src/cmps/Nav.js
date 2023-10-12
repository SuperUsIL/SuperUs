import React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav, NavItem } from 'reactstrap';

const Navigation = () => {
    return (
        <Nav vertical className="navigation">
            <NavItem>
                <NavLink to="/" activeClassName="active">Home</NavLink>
            </NavItem>
            <NavItem>
                <NavLink to="/signin" activeClassName="active">Sign In</NavLink>
            </NavItem>
            <NavItem>
                <NavLink to="/signup" activeClassName="active">Sign Up</NavLink>
            </NavItem>
            <NavItem>
                <NavLink to="/profile" activeClassName="active">Profile</NavLink>
            </NavItem>
            <NavItem>
                <NavLink to="/offers" activeClassName="active">Offers</NavLink>
            </NavItem>
            {/* More links go here */}
        </Nav>
    );
};

export default Navigation;
