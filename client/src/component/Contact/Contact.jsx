import React,{useState} from 'react';
import Header from '../Header/Header.jsx';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import HouseIcon from '@mui/icons-material/House';
import EmailIcon from '@mui/icons-material/Email';
import {useSelector} from 'react-redux';
import { useDispatch } from 'react-redux';
import {createPost} from '../../actions/posts';
import { Grid, Paper, Typography } from '@mui/material';
import { createTheme,ThemeProvider } from '@mui/material';
import useStyles from './styles';

const Contact = () => {
    const classes = useStyles();
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
    const posts = useSelector((state) => state.posts);
    const dispatch = useDispatch();
    const [postData,setPostData] = useState({
        FirstName:'',LastName:'',PhoneNumber:'',Email:'',Message:'',
    });
    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(createPost(postData));
    };
    return (
        <div className={classes.bodys}><Header />
        <ThemeProvider theme={theme}>
        <Paper className={classes.paperbody} sx={{backgroundColor:'#EDE4E0'}}>
        <Typography variant='h3' className={classes.titleform}>Contact Form</Typography>
        <Typography variant='h6' >If you are interested in my career skill, please do not hesiate to contact with me</Typography>
        <Typography variant='h5' className={classes.contactText}><LocalPhoneIcon /><br></br>+1 873-288-8108</Typography> 
        <Typography variant='h5' className={classes.contactText}><HouseIcon /><br></br>Toronto/Ottawa Ontario</Typography>
        <Typography variant='h5' className={classes.contactText}><EmailIcon /><br></br>jasonma608@gmail.com</Typography>
        <form  autoComplete='off' noValidate onSubmit={handleSubmit}>
        <Grid container spacing={4}>
          <Grid item xs={6}>
          <Typography variant='h6'>First Name:</Typography>
          <TextField name="FirstName" variant="outlined" label="FirstName" value={postData.FirstName} onChange={(e) => setPostData({ ...postData, FirstName:e.target.value })} />
          </Grid>
          <Grid item xs={6}>
          <Typography variant='h6'>Last Name:</Typography>
          <TextField  name="LastName" variant="outlined" label="LastName" value={postData.LastName} onChange={(e) => setPostData({ ...postData, LastName:e.target.value })}/>
          </Grid>
          <Grid item xs={6}>
          <Typography variant='h6'>Phone Number:</Typography>

          <TextField name="PhoneNumber" variant="outlined" label="PhoneNumber" value={postData.PhoneNumber}onChange={(e) => setPostData({ ...postData, PhoneNumber:e.target.value })}/>
          </Grid>
          <Grid item xs={6}>
          <Typography variant='h6'>Email Address:</Typography>
           <TextField name="Email" variant="outlined" label="Email" value={postData.Email} onChange={(e) => setPostData({ ...postData, Email:e.target.value })}/>
          </Grid>
          <Grid item xs={12}>
          <Typography variant='h6'>Your Message:</Typography>
          <TextField multiline='true' name="Message" variant="outlined" label="Message" value={postData.Message} onChange={(e) => setPostData({ ...postData, Message:e.target.value })}/>
          </Grid>
        </Grid>

        <br></br><Button variant="contained" color="primary" size="large"  type="submit" >Button</Button> 

        </form>
        </Paper>
        </ThemeProvider>
        </div>
    )
};

export default Contact;