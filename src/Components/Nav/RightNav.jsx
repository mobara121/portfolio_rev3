import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
// import {HashLink as Link} from 'react-router-hash-link';

const Ul = styled.ul`
    list-style: none;
    display: flex;
    flex-flow: row nowrap;
    padding-right: 20px;
    margin: 0;
    height: 100%;

    
    /* font-family: brandon-grotesque,HelveticaNeue-Light,"Helvetica Neue Light","Helvetica Neue",Helvetica,Arial,"Lucida Grande",sans-serif; */

    li{
        margin: 0;
        padding: 20px;
        color: #fafafa;
        font-size: 15px;
        background-color: transparent;
    }

    a{
        color: white;
        text-decoration: none;
    }
    li:hover{
        border-radius: 15px;
        margin: 10px;
        padding: 8px;
        color: #fafafa;
        background-color: #83c5be;
        cursor: pointer;
        /* list-style-position: center; */
        -webkit-transform: scale(1.025);
        transform: scale(1.025);
        transition: background-color 800ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 800ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border 800ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    }

    @media(max-width: 768px){
        flex-flow: column nowrap;
        background-color: #83c5be;
        position: fixed;
        transform: ${({open}) => open? 'translateX(0)' : 'translateX(100%)'};
        top: 0;
        right: 0;
        height: 100vh;
        width: 150px;
        margin-top: 0;
        padding-top: 50px;
        transition: transform 0.3s ease-in-out;
        z-index: 9999; /* important */
    }
`;

function RightNav({open}){

    
    return(
        <Ul open={open}>
            <Link smooth to="/">
                <li>Home</li>
            </Link>
            <Link smooth to="/about">
                <li>AboutMe</li>
            </Link>
            <Link smooth to="/education">
                <li>Education</li>
            </Link>
            <Link smooth to="/skill">
                <li>Skills</li>
            </Link>
            {/* <Link smooth to="/project">
                <li>Projects</li>
            </Link> */}
            <li><a href="https://www.linkedin.com/in/mizueobara">LinkedIn</a></li>
            <li><a href="https://github.com/mobara121?tab=repositories">Github</a></li>
        </Ul>
    );
}

export default RightNav;