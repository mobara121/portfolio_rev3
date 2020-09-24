import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import Portfolio from '../../asset/portfolio.png';
import Ramen from '../../asset/ramenApp.png';
import Lotto from '../../asset/Daily_Lotto.PNG';
import Bakerly from '../../asset/StaticLayout.PNG';
import Cocktail from '../../asset/Cocktail.PNG';
import Code from '../../asset/Game.PNG';
// import { text } from '@fortawesome/fontawesome-svg-core';

const useStyles = makeStyles((theme)=> ({
    card: {
        maxwidth: "95%",
        height: "100%",
        backgroundColor: " #edf6f9",
        boxShadow: "15px 5px 25px 0px rgba(0,0,0,0.69)",
        // position: "relative",
        margin: "20px",
        padding: "80px 30px 0 30px",
        [theme.breakpoints.down("sm")]: {
        //   height: "100%",
          padding: "20px",
        },
        [theme.breakpoints.up("md")]: {
          height: "520px",
          padding: "80px 30px 0 30px",
        },
        [theme.breakpoints.up("lg")]: {
            height: "620px",
            padding: "110px 30px 0 30px",
          },
      },
    root: {
        // maxWidth: 300,
        height: "185px",
        flexGrow: 1,
        backgroundColor: "#000",
        boxShadow: "15px 5px 25px 0px rgba(0,0,0,0.69)",
        // padding: theme.spacing(2),
        [theme.breakpoints.down("xs")]: {
              height: "100%",
            //   padding: "20px",
            },
        [theme.breakpoints.up("lg")]: {
            height: "230px",
          },
      },
    conteiner: {
        width:	"100%",
        height:	"100%",
        backgroundColor: "#000",
    },
    image:{
        width:	"100%",
        height:	"100%",
    },
      mask:{
        width:	"100%",
        height:	"100%",
        position:	"absolute",
        top: 0,
        left: 0,
        opacity:0,	/* 表示させない */
        transform:	"rotate(-180deg)",
        transition:	"all 1.0s ease",
        overflow: "hidden",
        justifyContent: "center",
        margin: "0 auto",
        padding: "40px auto",
        "&:hover":{
        // backgroundColor: "#83c5be",
        backgroundColor: "#000",
        transform:	"rotateY(0deg)",
        opacity: "0.8",	/* ホバーで表示する */
        }
      },
    //   @media screen and (max-width: 600px){
    //     .cardText .mask{
    //       margin: 0 auto;
    //       padding: 20px auto;
    //     }
    //   }
    title:{
        margin: "20px auto",
        textAlign: "center",
        color: "#fafafa",
        fontFamily:"'Poppins', sans-serif",
        fontSize: "20px",
        fontWeight: "700",
    },
      content:{
        lineHeight: "1.0em",
        margin: "20px 30px 0 30px",
        textAlign: "left",
        color: "#fafafa",
        fontFamily:"'Poppins', sans-serif",
        fontWeight: "600",
      }
}))

function Projects(){
    const classes = useStyles();
    return(
        <Card className={classes.card}>
        <Grid container spacing={5} direction="row" justify="space-between" alignItems="center">
            <Grid item xs={12} sm={6} md={4} lg={4}>
                <Card className={classes.root}>
                    <CardActionArea>
                        <div>
                            <img  className={classes.image} src={Portfolio} alt="#"/>
                        </div>
                        <div className={classes.mask}>
                            <div gutterBottom variant="h5" className={classes.title}>
                                Portfolio
                            </div>
                            <div className={classes.content}>
                                https://github.com/mobara121/</div>
                            <div className={classes.content}>
                               portfolio_walkthrough
                            </div>                                
                        </div>                        
                    </CardActionArea>
                </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={4}>
                <Card className={classes.root}>
                    <CardActionArea>
                    <div>
                            <img  className={classes.image} src={Ramen} alt="#"/>
                        </div>
                        <div className={classes.mask}>
                            <div gutterBottom variant="h5" className={classes.title}>
                                Ramen Restaurant Api
                            </div>
                            <div className={classes.content}>
                                https://github.com/mobara121/</div>
                            <div className={classes.content}>
                               portfolio_walkthrough
                            </div>                                
                        </div>                        
                    </CardActionArea>
                </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={4}>
                <Card className={classes.root}>
                    <CardActionArea className={classes.conteiner}>
                        <div>
                            <img  className={classes.image} src={Lotto} alt="#"/>
                        </div>
                        <div className={classes.mask}>
                            <div gutterBottom variant="h5" className={classes.title}>
                                The Daily Lotto
                            </div>
                            <div className={classes.content}>
                                https://github.com/mobara121/</div>
                            <div className={classes.content}>
                            Red-Badge-Project-Client-1
                            </div>                                
                        </div>                        
                    </CardActionArea>
                </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={4}>
                <Card className={classes.root}>
                    <CardActionArea>
                    <div>
                            <img  className={classes.image} src={Bakerly} alt="#"/>
                        </div>
                        <div className={classes.mask}>
                            <div gutterBottom variant="h5" className={classes.title}>
                                General Store
                            </div>
                            <div className={classes.content}>
                                https://github.com/mobara121/</div>
                            <div className={classes.content}>
                            Static-Store-Front-Planning
                            </div>                                
                        </div>                        
                    </CardActionArea>
                </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={4}>
                <Card className={classes.root}>
                    <CardActionArea>
                    <div>
                            <img  className={classes.image} src={Cocktail} alt="#"/>
                        </div>
                        <div className={classes.mask}>
                            <div gutterBottom variant="h5" className={classes.title}>
                                Liquor Barn
                            </div>
                            <div className={classes.content}>
                                https://github.com/mobara121/</div>
                            <div className={classes.content}>
                            Group_API_Project
                            </div>                                
                        </div>                        
                    </CardActionArea>
                </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={4}>
                <Card className={classes.root}>
                    <CardActionArea>
                    <div>
                            <img  className={classes.image} src={Code} alt="#"/>
                        </div>
                        <div className={classes.mask}>
                            <div gutterBottom variant="h5" className={classes.title}>
                                Programming-Console-Game
                            </div>
                            <div className={classes.content}>
                                https://github.com/mobara121/</div>
                            <div className={classes.content}>
                                Pair-Programming-Console-Game
                            </div>                                
                        </div>                        
                    </CardActionArea>
                </Card>
            </Grid>
        </Grid>
        </Card>
    )
}

export default Projects;