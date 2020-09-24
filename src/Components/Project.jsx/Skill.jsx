import React from 'react';
import Icons from './Icons';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography  from '@material-ui/core/Typography';
import ProgramIcon from '../../asset/プログラムアイコン.png';


const useStyles = makeStyles((theme)=> ({
  card: {
    maxwidth: "95%",
    height: "680px",
    backgroundColor: " #edf6f9",
    boxShadow: "15px 5px 25px 0px rgba(0,0,0,0.69)",
    // position: "relative",
    margin: "20px",
    padding: "50px 30px 0 30px",
    [theme.breakpoints.down("xs")]: {
      height: "100%",
    },
    [theme.breakpoints.up("sm")]: {
      height: "90%",
    },
    [theme.breakpoints.up("md")]: {
      height: "550px",
    },
    [theme.breakpoints.up("lg")]: {
      height: "680px",
    },
  },
  title: {
    marginTop: "10px",    
    paddingTop: "10px",
    [theme.breakpoints.up("md")]: {
      padding: "20px",
    }, 
  },

    cardContent:{
      width: "100%",
        height: "100%",
        padding: "10px 0",
        // justifyContent: "center",
        // position: "center",
        lineHeight: "1.3rem",
        [theme.breakpoints.up("sm")]: {
          // display: "flex",
        }, 
      },
      media: {
        maxHeight: "350px",
        maxWidth: "100%",        
        justifyContent: "center",
        margin: "10px auto",
        padding: "20px auto",
        position: "center",
        [theme.breakpoints.down("md")]: {
          height: "150px",
          width: "80%",
        }, 
        [theme.breakpoints.up("md")]: {
          marginTop: 0,
          height: "160px",
          width: "40%",
        }, 
        [theme.breakpoints.up("lg")]: {
          height: "250px",
          width: "50%",
        },
      },
    icons: {
      marginLeft: "50px",
      marginRight: "20px",
      padding: "20px auto",
      // [theme.breakpoints.up("sm")]: {
      //   width: "100%",
      //   marginLeft: "20px",
      //   padding: 0,
      // },
      [theme.breakpoints.down("xs")]: {
        width: "100%",
        marginLeft: "10px",
        padding: 0,
      },
    },
    
    button: {      
      borderRadius:  "5px",
      borderColor: "#31afa7",
      backgroundColor:"#31afa7",
      margin: "30px 0 40px 30px",
      padding: "2px 30px",      
      fontFamily: "Gloria Hallelujah, cursive",      
      fontSize: "15px",
      letterSpacing: "0.1em",
      [theme.breakpoints.down("sm")]:{
        margin: "30px auto",
        padding: "3px 10px",
        fontSize: "10px",
      }, 
      [theme.breakpoints.up("lg")]:{
        margin: "0 0 40px 50px",
      }, 
      "&:hover":{
        backgroundColor: "#83c5be",
        borderColor: "#83c5be",
        color: "#000000",
        cursor: "pointer",
        transform: "scale(1.025)",
        transition: "background-color 800ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 800ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border 800ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
      }  
    },

    link: {
      textDecoration: "none",
      color: "#fafafa",
      fontWeight: 500,
    }
    
}));

function Skill(){
    const classes = useStyles();
    return(
        <div  className="skills">
            <Card className={classes.card}>
              <CardActionArea className={classes.wrapper}>
                <Typography className={classes.title} gutterBottom variant="h5" component="p">
                  Skills
                </Typography>    
                <CardActions>                 
                 <CardContent className={classes.cardContent}>  
                  <CardMedia
                    className={classes.media}
                    image={ProgramIcon}
                    />
                    <div className={classes.icons}>
                      <Icons/>
                    </div>
                </CardContent>                  
              </CardActions>  
            </CardActionArea>
            <button className={classes.button} size="small">
              <Link className={classes.link} to="/project">
                See Projects
              </Link>
            </button>
          </Card>  

        </div>
    )
}

export default Skill;