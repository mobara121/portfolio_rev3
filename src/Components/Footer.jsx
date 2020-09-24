import React from 'react';
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin , faGithub} from '@fortawesome/free-brands-svg-icons'

const StyledDiv = styled.div`
  display: flex;
  color: #fafafa;
  margin: 0 auto;
  text-align: center;
  margin: 0 auto;
  justify-Content: center;
  align-Items: center;
  height: 60px;
`;

const StyledSpan = styled.span`
  margin-left: 15px;
  background-color: transparent;
`;

function Footer(){

    return(
        <StyledDiv>
            <div id="footer">&copy; MIZUE O'BARA 2020
            <StyledSpan><a href="https://www.linkedin.com/in/mizueobara"><FontAwesomeIcon icon={faLinkedin} size='1x' color='#fafafa'/></a></StyledSpan>
            <StyledSpan><a href="https://github.com/mobara121?tab=repositories"><FontAwesomeIcon icon={faGithub} size='1x' color='#fafafa'/></a></StyledSpan>
            {/* <span><FontAwesomeIcon icon={faEnvelope} size='1x' color='#fafafa'/></span> */}
          </div> 
        </StyledDiv>

    );
}

export default Footer;