import React from 'react';
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Header from '../Header/Header.jsx'
import Divider from '@mui/material/Divider';
import useStyles from './styles.js';
import { createTheme,ThemeProvider } from '@mui/material';
const Project = () => {
    const classes = useStyles();
    const theme = createTheme({
        typography:{
          allVariants:{
            color:'#9F8772',
          },
          
          fontFamily:'Alkalami, cursive',
        },
        listitem:{
            color:'#EDE4E0'
        }
      })
    return(
        <div className={classes.bodys}>
        <ThemeProvider theme={theme}>
        <Header />
        <Container className={classes.photopoi}>
            <Grid>
            <Typography variant='h3' className={classes.projectTopic}>Photograms</Typography>
            <img className={classes.image} src={require('../Image/photogram.png')} alt='photogram'></img>
                <List >
                    <ListItem alignItems='center'>
                    <Typography variant='h6' align='center'>
                    Coded using <span className={classes.mern}>MongoDB, ExpressJS, ReactJS and NodeJS</span> to develop features for both mobile and desktop platforms.
                    </Typography>
                    </ListItem>
                    <ListItem>
                    <Typography variant='h6'>
                    Designed and updated layouts, intuitive graphical user interfaces to meet usability and performance requirements by materialUI and CSS3.
                    </Typography>
                    </ListItem>
                    <ListItem>
                    <Typography variant='h6'>
                    Developed and updated database to handle customer data by use mongoDB.
                    </Typography>
                    </ListItem>
                    <ListItem>
                    <Typography variant='h6'>
                    Using REST API to implement CREATE, UPDATE, REMOVE, DELETE functionality from database.
                    </Typography>
                    </ListItem>
                    <ListItem>
                    <Typography variant='h6'>
                    Developed web platform back ends(server side) using NodeJS and ExpressJS frameworks to connect with front end and database.
                    </Typography>
                    </ListItem>
                    <ListItem>
                    <Typography variant='h6'>
                    Tested web-based product functionality.
                    </Typography>
                    </ListItem>
                </List>

            </Grid>
        </Container>
        <Divider />
        <Container>
            <Grid>
            
                <Typography variant="h3" className={classes.projectTopic}>Real Time Chat Application</Typography>
                <img className={classes.image} src={require('../Image/realTimeChat.png')} alt='photogram'></img>

                <List className={classes.lists}>
                <ListItem>
                    <Typography variant='h6'>
                    Coded using MongoDB, ExpressJS, ReactJS and NodeJS to develop features for both mobile and desktop platforms.
                    </Typography>
                    </ListItem>
                    
                    <ListItem>
                    <Typography variant='h6'>
                    Designed and updated layouts, intuitive graphical user interfaces to meet usability and performance requirements by materialUI and CSS3.
                    </Typography>
                    </ListItem>
                    <ListItem>
                    <Typography variant='h6'>
                    Developed and updated database to handle customer data by use mongoDB.
                    </Typography>
                    </ListItem>
                    <ListItem>
                    <Typography variant='h6'>
                    Using REST API to implement CREATE, UPDATE, REMOVE, DELETE functionality from database.
                    </Typography>
                    </ListItem>
                    <ListItem>
                    <Typography variant='h6'>
                    Developed web platform back ends(server side) using NodeJS and ExpressJS frameworks to connect with front end and database.
                    </Typography>
                    </ListItem>
                    <ListItem>
                    <Typography variant='h6'>
                    Tested web-based product functionality.
                    </Typography>
                    </ListItem>
                </List>


            </Grid>
        </Container>
        <Divider />

        <Container>
            <Grid>
                <Typography variant="h1" className={classes.projectTopic}>Burger Store</Typography>
                
                <img className={classes.image} src={require('../Image/OrderSystem.png')} alt='photogram'></img>

                <List className={classes.lists}>
                <ListItem>
                    <Typography variant='h6'>
                    Coded using ReactJS, ExpressJS, NodeJS and MongoDB to develop features for both mobile and desktop platforms.
                    </Typography>
                    </ListItem>
                    
                    <ListItem>
                    <Typography variant='h6'>
                    Designed and updated layouts, intuitive graphical user interfaces to meet usability and performance requirements by materialUI and CSS3.
                    </Typography>
                    </ListItem>
                    <ListItem>
                    <Typography variant='h6'>
                    Developed and updated database to handle customer data by use mongoDB.
                    </Typography>
                    </ListItem>
                    <ListItem>
                    <Typography variant='h6'>
                    Using REST API to implement CREATE, UPDATE, REMOVE, DELETE functionality from database.
                    </Typography>
                    </ListItem>
                    <ListItem>
                    <Typography variant='h6'>
                    Developed web platform back ends(server side) using NodeJS and ExpressJS frameworks to connect with front end and database.
                    </Typography>
                    </ListItem>
                    <ListItem>
                    <Typography variant='h6'>
                    Tested web-based product functionality.
                    </Typography>
                    </ListItem>
                </List>
            </Grid>
        </Container>
        </ThemeProvider>
        <Divider />
        </div>
        
    )
};

export default Project;