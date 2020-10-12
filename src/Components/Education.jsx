import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography  from '@material-ui/core/Typography';
import Diploma from '../asset/diploma.png';
import HoverIcon from '../asset/hoverIcon.png';

const useStyles = makeStyles((theme)=> ({
  card: {
    maxwidth: "95%",
    backgroundColor: " #edf6f9",
    boxShadow: "15px 5px 25px 0px rgba(0,0,0,0.69)",
    // position: "relative",
    margin: "20px",
    padding: "50px 30px 0 30px",
    [theme.breakpoints.down("sm")]: {
      height: "600px",
    },
    [theme.breakpoints.up("md")]: {
      height: "550px",
    },
    [theme.breakpoints.up("lg")]: {
      height: "680px",
    }, 
  },
    title: {
      marginTop: "30px",
      paddingTop: "10px",
      [theme.breakpoints.up("md")]: {
        padding: "20px",
      }, 
    },
    cardContent:{
      width: "100%",
      height: "100%",
      margin: "40px auto",
      padding: "10px 0",
      // justifyContent: "center",
      // position: "center",
      lineHeight: "1.1rem",
      [theme.breakpoints.up("sm")]: {
        display: "flex",
      }, 
    },
    media: {
      // height: "300px",
      width: "100%",        
      justifyContent: "center",
      position: "center",
      [theme.breakpoints.down("sm")]: {
        margin: "0 auto",
        marginBottom: "30px",
        padding: "0 auto",
        height: "100px",
      },
      [theme.breakpoints.up("sm")]: {
        margin: "20px auto",
        padding: "20px auto",
        height: "300px",
      },  
    },
    schools:{
      margin: "5px auto",
    },
    hover1:{     
      height: "5%",
      width: "5%",
      margin: "25px 0px 25px 330px",
      [theme.breakpoints.down("sm")]: {
        height: "8%",
        width: "8%",
        lineHeight: "2.0",
        margin: "18px 0px 0px 160px",
      },
    },
    hover2:{     
      height: "5%",
      width: "5%",
      margin: "25px 0px 25px 330px",
      [theme.breakpoints.down("sm")]: {
        height: "10%",
        width: "10%",
        margin: "0px 0px 0px 160px",
      },
    },    
}));

function Education(){
    const classes = useStyles();
    return(
        <div>
            <Card className={classes.card}>
              <CardActionArea>
                <Typography gutterBottom variant="h5" component="p">
                    Education
                </Typography>
                <CardActions>
                 <CardContent className={classes.cardContent}>
                  
                  <CardMedia
                  className={classes.media}
                  image={Diploma}
                  title="Contemplative Reptile"
                  />
                  <div className="cardText">
                    <div>
                    <h3 className={classes.schools}>Eleven Fifty Academy / 2020</h3>
                    <h4 className={classes.schools}>・Web Development Course, Front end engineer</h4>

                    <h3 className={classes.schools}>Shinshu University / 1998</h3>
                    <h4 className={classes.schools}>・Bachelor's degree, Agriculture</h4>
                    <h4 className={classes.schools}>・Agriculture Operations and Related Sciences</h4>
                    
                    </div>
                    <div className="mask">
                      <div className="cardTextJp">
                      <h3 className={classes.schools}>Eleven Fifty Academy / 2020</h3>
                      <h4 className={classes.schools}>・ウェブ デベロップメント コース</h4>
                      <h4 className={classes.schools}>・フロントエンジニア</h4>
                      <h3 className={classes.schools}>信州大学 / 1998</h3>
                      <h4 className={classes.schools}>・農学部</h4>
                      <h4 className={classes.schools}>・生物生産科学科</h4><p><img src={HoverIcon} className={classes.hover1} alt="#"/></p>
                      </div>
                      
                    </div>
                    <p><img src={HoverIcon} className={classes.hover2} alt="#"/></p>
                  </div>
                  
                </CardContent>
              </CardActions>  
              </CardActionArea>
            </Card>
        </div>
    )
}

export default Education;