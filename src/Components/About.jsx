import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography  from '@material-ui/core/Typography';
import Face from '../asset/face.png';
import HoverIcon from '../asset/hoverIcon.png';

const useStyles = makeStyles((theme)=> ({
    card: {
        maxwidth: "95%",
        height: "680px",
        backgroundColor: " #edf6f9",
        boxShadow: "15px 5px 25px 0px rgba(0,0,0,0.69)",
        // position: "relative",
        margin: "20px",
        padding: "50px 30px 0 30px",
        [theme.breakpoints.down("sm")]: {
          height: "70%",
        },
        [theme.breakpoints.down("md")]: {
          height: "70%",
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
          display: "flex",
        }, 
      },
      media: {
        // height: "300px",
        width: "100%",        
        justifyContent: "center",
        position: "center",
        [theme.breakpoints.down("sm")]: {
          margin: "30px auto",
          padding: "0px auto",
          height: "100px",
        },
        [theme.breakpoints.up("sm")]: {
          margin: "20px auto",
          padding: "20px auto",
          height: "300px",
        },  
      },
      hover:{
        height: "5%",
        width: "5%",
        margin: "25px 0px 25px 330px",
        [theme.breakpoints.down("sm")]: {
          height: "10%",
          width: "10%",
          margin: "15px 0px 25px 160px",
        },
      },    
      
}));

function About(){
    const classes = useStyles();
    return(
        <div className="about">
            <Card  className={classes.card}>
              <CardActionArea id="aboutme">
                <Typography className={classes.title} gutterBottom variant="h5" component="p">
                    About Me
                </Typography>
                <CardActions>
                  
                 <CardContent className={classes.cardContent}>
                  
                  <CardMedia
                  className={classes.media}
                  image={Face}
                  title="Contemplative Reptile"
                  />
                  <div className="cardText">
                    Bilingual professional with a newfound passion for web development. In my past life, I've worked in laboratories discovering new flavors for ice cream, managed inventories for multi-national companies, even acted as a cultural liaison for Japanese citizens living in America. I'm currently on my new journey to become a full-stack developer by studying HTML5, CSS, and Javascript at Eleven Fifty Academy.
                    <div className="mask">
                      <div className="cardTextJp">日本語と英語両方のスキルを活用してこれまで日本とアメリカで会社員として働いてきました。フロントエンドデベロッパーとして今後は活動すべく、日英バイリンガルに加えてHTML5、CSS、JavascriptをEleven Fifty Academyで勉強中です。LinkedinやGithubも是非ご覧ください。</div>
                    </div>
                    <p><img src={HoverIcon} className={classes.hover} alt="#"/></p>
                  </div>
                </CardContent>
              </CardActions>  
              </CardActionArea>

            </Card>
        </div>
    )
}

export default About;