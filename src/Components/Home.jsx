import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Background from '../asset/back3.png';

const useStyles = makeStyles((theme)=> ({ 
    background: {
      // backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)`, 
      backgroundImage: `url(${Background})`,
      boxShadow: "15px 5px 25px 0px rgba(0,0,0,0.69)",
      borderRadius: "5px",
    //   height: "90%",
    //   width: "95%",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      margin: "0 auto",
      padding: 0,
      // position: "relative",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "#fff",
      fontSize: "4rem",
      [theme.breakpoints.down("xs")]: {
        height: "450px",
        width: "300px",
        fontSize: "2em",
      },
      [theme.breakpoints.down("sm")]: {
        height: "600px",
        width: "90%",
        fontSize: "2em",
      },
      [theme.breakpoints.up("md")]: {
        height: "650px",
        width: "90%",
        fontSize: "3em",
      }, 
      [theme.breakpoints.up("lg")]: {
        height: "800px",
        width: "90%",
        fontSize: "4em",
      }, 
      [theme.breakpoints.up("xl")]: {
        height: "860px",
        width: "68%",
        fontSize: "5em",
      }
    },
  }));

function Home(){
    const classes = useStyles();
    return(
        <div>
        <Box className={classes.background}>
           <section id="sakura">
              <div className="inner">
                <div className="flake1"></div>
                <div className="flake2"></div>
                <div className="flake3"></div>
              </div>
            </section>
          <Box>
            {/* <p className="title">MIZUE O'Bara</p> */}
            <p className="title"><span>M</span><span>I</span><span>Z</span><span>U</span><span>E</span><span></span> <span>O</span><span>'</span><span>B</span><span>a</span><span>r</span><span>a</span></p>
            {/* <h6><p className="title">Front End Developer</p></h6>  */}
            <h6><p className="title"><span>F</span><span>r</span><span>o</span><span>n</span><span>t</span><span></span> <span>E</span><span>n</span><span>d</span><span></span> <span>D</span><span>e</span><span>v</span><span>e</span><span>l</span><span>o</span><span>p</span><span>e</span><span>r</span></p></h6>
          </Box>
        </Box>
        </div>
    )
}

export default Home;