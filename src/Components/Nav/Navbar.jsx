import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';
// import { Link } from 'react-router-dom';

const Nav = styled.nav`
    width: 100%;
    height: 65px;
    padding: 0;
    display: flex;
    justify-content: space-between;

    .logo{
        padding: 20px 25px;
        color: whitesmoke;
        line-height: 1.2em;
    }
    .burger{
        right: 10px;
    }

`

function Navbar(){
    return(
        <Nav>
            <div className="logo">
                <span>MIZUE O'Bara</span>
                
            </div>
            <div>
                <Burger className="burger"/>
            </div>            
        </Nav>
    );
}

export default Navbar;