import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import {Link} from 'react-router-dom';
import Button from '@mui/material/Button';
import useStyles from './styles';
import { Box } from '@mui/system';
import { createTheme,ThemeProvider } from '@mui/material';
import Typography from '@mui/material/Typography';
const Header = () => {
    const classes = useStyles();
    const theme = createTheme({
        typography:{
          allVariants:{
            color:'#EDE4E0',
          },
          fontFamily:'Alkalami, cursive',
        },
        components: {
          MuiButton: {
            variants: [
              {
                props: { variant: 'contained' },
                style: {
                  backgroundColor:'#DFD3C3',
                  color:'#9F8772',
                  marginRight:'20px',
                  marginTop:'20px',
                  marginBottom:'15px',
                  '&:hover':{
                    backgroundColor:'#9F8772',
                    color:'#EDE4E0'
                  }
                  },
              },
            ],
          },
        },
      })
    var updateTime = "";
    const date = new Date();
    const showTime = date.getHours();
    const showYear = date.getFullYear();
    const month = date.toLocaleString('en-US', { month: 'long' });
    const showDate = date.getDate();
    var format = "th";

    if (showTime<12){
        updateTime = "Good Morning";
    } else if (12<showTime<18){
        updateTime = "Good Afternoon";
    } else{
        updateTime="Good Evening";
    };
    if(showDate === 1 ){
      format = "st";
    } if(showDate === 2){
      format ="nd";
    }
    return(
        <div>
        <ThemeProvider theme={theme}>
         <AppBar>
            <Toolbar  className={classes.appbar} disableGutters>
            <Grid container spacing={10}>
            <Grid item xs={6}>            
            <Typography variant='h4' className={classes.times}>{month}-{showDate}{format}-{showYear}</Typography>
            </Grid>
            <Grid item xs={6} className={classes.navpoi}>
            <Link to='/'  className={classes.btns} ><Button className={classes.btnhover} variant='contained' >Home</Button></Link>
            <Link to='/about'  className={classes.btns} ><Button className={classes.btnhover} variant='contained'  >About</Button></Link>
            <Link to='/project'  className={classes.btns} ><Button className={classes.btnhover} variant='contained'  >Project</Button></Link>
            <Link to='/contact' className={classes.btns}><Button className={classes.btnhover} variant='contained'  >Contact</Button></Link>
            </Grid>
            </Grid>
            
           
            </Toolbar>
            
        </AppBar>
        </ThemeProvider>
        </div>
        
       
    )
};
export default Header;