import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCodepen , faHtml5, faCss3Alt, faJs, faReact, faGit, faGithub, faNode} from '@fortawesome/free-brands-svg-icons';
import VisualStudio from '../../asset/visual_studio.png';
import VisualCode from '../../asset/visual_code.png';
import Csharp from '../../asset/Csharp.png';
import PostgreSql from '../../asset/PostgreSql.png';
import Api from '../../asset/Api.png';
import Heroku from '../../asset/heroku.png';

const useStyles = makeStyles((theme)=> ({
    container: {
        position:"relative",
        display: "inline-block",
        height: "60px",
        width: "60px",
        float: "left",
        // margin: "0 70px 20px 0px",
        overflow: "hidden",
        background: "#fff",
        borderRadius: "50px",
        cursor: "pointer",
        boxShadow: "0px 10px 10px rgba(0,0,0,0.1)",
        transition: "all 0.3s ease-out",
        "&:hover": {
          width: "165px",
        },
          [theme.breakpoints.down("md")]: {
            width: "40px",
            height: "40px",
            margin: "0 15px 10px 18px",
            padding: 0,
          },
        [theme.breakpoints.up("md")]: {
            margin: "0 50px 15px 55px",
          },
        [theme.breakpoints.up("lg")]: {
            margin: "0 60px 20px 60px",
          },
      },
      icon:{
        display: "inline-block",
        height: "60px",
        width: "60px",
        fontSize: "20px",
        textAlign: "center",
        borderRadius: "50px",
        boxSizing: "border-box",
        lineHeight: "80px",
        transition: "all 0.3s ease-out",
        [theme.breakpoints.down("sm")]: {
            width: "10px",
            height: "10px",
            lineHeight: "60px",
            padding: "0 8px",
          },
        [theme.breakpoints.down("md")]: {
            fontSize: "13px",
            lineHeight: "55px",
            paddingRight: "20px",
          },
      },
      icon2:{
          
        display: "inline-block",
        height: "60px",
        width: "60px",
        padding: "10px",
        // fontSize: "10px",
        textAlign: "center",
        borderRadius: "50px",
        boxSizing: "border-box",
        lineHeight: "80px",
        transition: "all 0.3s ease-out",
        [theme.breakpoints.down("sm")]: {
            width: "40px",
            height: "40px",
            lineHeight: "60px",
            padding: "8px 15px 8px 0",
          },
        [theme.breakpoints.up("md")]: {
            width: "30px",
            height: "30px",
            lineHeight: "40px",
            padding: "5px 2px 0 2px",
          },
          [theme.breakpoints.up("lg")]: {
            width: "50px",
            height: "50px",
            lineHeight: "70px",
            padding: "10px 5px 0 5px",
          },
      },
      span:{
        position: "absolute",
        fontSize: "15px",
        fontWeight: "700",
        fontFamily: "'Poppins', sans-serif",
        lineHeight: "60px",
        // padding: "0 0 100px 20px",
        transition: "all 0.3s ease-out",
        // backgroundColor: "#4267B2",
        // [theme.breakpoints.up("lg")]: {
        //     width: "40px",
        //   },
        [theme.breakpoints.down("sm")]:{
            lineHeight: "40px",
            paddingLeft: "20px",
        },
        [theme.breakpoints.up("md")]: {
            lineHeight: "40px",
          },
        [theme.breakpoints.up("lg")]: {
            lineHeight: "60px",
          },
      },      
  }));

function Icons(){
    const classes = useStyles();
    return(
        <div>
            <div className={classes.container}>
                <div className={classes.icon}><FontAwesomeIcon icon={faCodepen}  size='2x' color='#006d77'/></div>
                <span className={classes.span}>Codepen</span>
            </div>
            <div className={classes.container}>
                <div className={classes.icon}><img  className={classes.icon2}src={VisualStudio} alt="#"/></div>
                <span className={classes.span}>Visual Studio</span>
            </div>
            <div className={classes.container}>
                <div className={classes.icon}><img  className={classes.icon2} src={VisualCode} alt="#"/></div>
                <span className={classes.span}>Visual Code</span>
            </div>
            <div className={classes.container}>
                <div className={classes.icon}><FontAwesomeIcon icon={faHtml5} size='2x' color='#006d77'/></div>
                <span className={classes.span}>Html:5</span>
            </div>
            <div className={classes.container}>
                <div className={classes.icon}><FontAwesomeIcon icon={faCss3Alt} size='2x' color='#006d77'/></div>
                <span className={classes.span}>CSS:3</span>
            </div>
            <div className={classes.container}>
                <div className={classes.icon}><FontAwesomeIcon icon={faJs} size='2x' color='#006d77'/></div>
                <span className={classes.span}>JavaScript</span>
            </div>
            <div className={classes.container}>
                <div className={classes.icon}><img  className={classes.icon2}src={Csharp} alt="#"/></div>
                <span className={classes.span}>C#</span>
            </div>
            <div className={classes.container}>
                <div className={classes.icon}><FontAwesomeIcon icon={faReact} size='2x' color='#006d77'/></div>
                <span className={classes.span}>React.js</span>
            </div>
            <div className={classes.container}>
                <div className={classes.icon}><FontAwesomeIcon icon={faGit} size='2x' color='#006d77'/></div>
                <span className={classes.span}>Git</span>
            </div>
            <div className={classes.container}>
                <div className={classes.icon}><FontAwesomeIcon icon={faGithub} size='2x' color='#006d77'/></div>
                <span className={classes.span}>Github</span>
            </div>
            <div className={classes.container}>
                <div className={classes.icon}><FontAwesomeIcon icon={faNode} size='2x' color='#006d77'/></div>
                <span className={classes.span}>Node.js</span>
            </div>
            <div className={classes.container}>
                <div className={classes.icon}><img  className={classes.icon2}src={Api} alt="#"/></div>
                <span className={classes.span}>REST Api</span>
            </div>
            <div className={classes.container}>
                <div className={classes.icon}><img  className={classes.icon2}src={PostgreSql} alt="#"/></div>
                <span className={classes.span}>PostgreSql</span>
            </div>
            <div className={classes.container}>
                <div className={classes.icon}><img  className={classes.icon2}src={Heroku} alt="#"/></div>
                <span className={classes.span}>Heroku</span>
            </div>
        </div>
    )
  }

  export default Icons;