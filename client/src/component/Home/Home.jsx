import React,{useState} from 'react';
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import Header from '../Header/Header.jsx';
import Divider from '@mui/material/Divider';
import {Link} from 'react-router-dom';
import useStyles from './styles.js';
import { createTheme,ThemeProvider } from '@mui/material';


const Home = () => {
  const theme = createTheme({
    typography:{
      allVariants:{
        color:'#9F8772',
      },
      fontFamily:'Alkalami, cursive',
    },
    components: {
      MuiButton: {
        variants: [
          {
            props: { variant: 'contained' },
            style: {
              backgroundColor:'#9F8772',
              color:'#EDE4E0',
              '&:hover':{
                backgroundColor:'#DFD3C3',
                  color:'#9F8772',
              }
            },
          },
        ],
      },
    },
  })
    const classes = useStyles();
    var updateTime = "";
    const date = new Date();
    const showTime = date.getHours();
    if (showTime<12){
        updateTime = "Good Morning";
    } else if (12<showTime<18){
        updateTime = "Good Afternoon";
    } else{
        updateTime="Good Evening";
    };
    


    return (
        <div className={classes.bodys}>
        <Header />
        <ThemeProvider theme={theme}>
        <Box  >
        
        <Container >
            <Grid className={classes.intros}>
            <Fade in timeout={4000} >
            <Typography variant='h6'>Hello My name is,</Typography>
            </Fade>
            <Fade in timeout={8000} >
            <Typography variant='h3'>Wenxi Ma,</Typography>
            </Fade>
            <Fade in timeout={10000}>
            <Typography variant='h6'>a passionate front-end developer.</Typography>
            </Fade>
            </Grid>
        </Container>
       
        </Box>
        
        <Divider />
        <Container>
        <Grid>
        <Typography className={classes.times} variant='h4' >{updateTime},Welcome to My online Portfolio</Typography>

            <img className={classes.image} src={require('../Image/IMG_3530.JPG')} alt='your broswer does not support this type file'></img><br></br>
            <Typography paragraph='true' gutterBottom='true' variant='h6'>Hello Everyone, Welcome to my online portflio! <br></br>
                      I graduated from University of Ottawa with Computer Science and Economics Program.<br></br>
                      I spent 4 wonderful years in campus to improve myself with professional knowledge and establish new contacts.<br></br>
                      I love to design and implemented software in my life since high school.<br></br>
                      This is the reason why I choose to be a front-end developer.<br></br>
                      Software development is a process to make creative productive with newest technology in this world.<br></br>
                      I would like to descirbe myself as a industrious, self-motivated person in work.<br></br>
                      Also, I have exemplified my keen abilit to collaborate on teams, troubleshoot with difficult problems.
            </Typography>
            <br></br>
            <Link className={classes.cardLink} to='/about'><Button variant='contained'>Learn More About Me</Button></Link>
        </Grid>
        </Container>
        <Divider />
        <Container>
        <Typography variant='h3'  className={classes.times}>Hobbies</Typography>
            <Grid rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={6}>
                
                <img className={classes.image} src={require('../Image/shoot.jpg')} alt='your broswer does not support this type file'></img><br></br>
                <Typography variant='h6'>In my personal life, I like to go travel to anywhere.
                I always curious to other country's culture and their history.
                Since I come to Canada from 2015, I spent 7 years to visit many cities in Canada.

                </Typography><br></br>
                </Grid>
                <Grid item xs={6}>
                <img className={classes.image} src={require('../Image/nyc.jpg')} alt='your broswer does not support this type file'></img><br></br>
                <Typography variant='h6'>Also, Shooting is my favorite sport in canada. 
                It let me feel more peace and slient in that moment. 
                The only thing I need to focus is my target.
                I dont need to worry about anything else.
                </Typography>
                </Grid>
            </Grid>
        </Container>

        <Divider />


        <Container>

        <Typography variant='h4'  className={classes.times}>Project Short Summary</Typography>

            <Grid container spacing={8}>
            <Grid item xs={4} md={4}>
            <Card sx={{ maxWidth: 315 } } className={classes.cardpoi}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={require('../Image/photogram.png')}
      />
      <CardContent className={classes.cards}>
        <Typography gutterBottom variant="h5" component="div">
          Photogram
        </Typography>
      <Typography variant="body2" >
          Photogram is an online photo sharing platform.
          Everyone can post their photos as gallery show in the website.
      </Typography>
      </CardContent>
      <CardActions className={classes.cards}>
      <Link to='/project' className={classes.cardLink} ><Button variant='contained' size="small">MORE DETAIL</Button></Link>
        <Link className={classes.cardLink}><Button  variant='contained' size="small">TO GITHUB</Button></Link>
      </CardActions>
      </Card>
      </Grid>
      <Grid item  xs={4} md={4}>
      <Card  sx={{ maxWidth: 315 }} className={classes.cardpoi}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={require('../Image/realTimeChat.png')}
      />
      <CardContent className={classes.cards}>
        <Typography gutterBottom variant="h5" component="div">
        Real Time Chat Application
        </Typography>
        <Typography variant="body2" >
          User are able to chat with people from world with same chat room to make more friends!.
        </Typography>
      </CardContent>
      <CardActions className={classes.cards}>
      <Link to='/project' className={classes.cardLink}><Button variant='contained' size="small">MORE DETAIL</Button></Link>
    <Link  to='/' className={classes.cardLink}><Button variant='contained' size="small">TO GITHUB</Button></Link>
      </CardActions>
    </Card>
            </Grid>
            <Grid item xs={4} md={4}>
            <Card sx={{ maxWidth: 315 }} className={classes.cardpoi}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={require('../Image/OrderSystem.png')}
      />
      <CardContent className={classes.cards}>
        <Typography gutterBottom variant="h5" component="div">
         Burger Store
        </Typography>
        <Typography variant="body2" >
         Customer does not have to come/call to order anymore. 
         Now, Our store have online order option.
         You can order your burger before you come!
        </Typography>
      </CardContent>
      <CardActions className={classes.cards}>
      <Link to='/project' className={classes.cardLink}><Button variant='contained' size="small">MORE DETAIL</Button></Link>
      <Link to='/github' className={classes.cardLink}><Button variant='contained' size="small">TO GITHUB</Button></Link>
      </CardActions>
    </Card>
            </Grid>
            </Grid>
        </Container>
        </ThemeProvider>
        <Divider />
        </div>
        


    )
};
export default Home;