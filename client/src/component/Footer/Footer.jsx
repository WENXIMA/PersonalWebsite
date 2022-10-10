import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import Typography from '@mui/material/Typography'
import {Link} from 'react-router-dom';
import useStyles from './styles';
import { createTheme,ThemeProvider } from '@mui/material';
import { ExternalLink } from 'react-external-link';
import Grid from '@mui/material/Grid'

const Footer = () => {
    const classes = useStyles();
    const theme = createTheme({
        typography:{
          allVariants:{
            color:'#DFD3C3',
          },
          fontFamily:'Alkalami, cursive',
        },
      })
    return (
        <div className={classes.bodys}>
        <ThemeProvider theme={theme}>
        <Typography variant='h6'>More About Myself</Typography>
        <Grid container spacing={8} className={classes.footericon}>
        
        <Grid item xs={6} md={4}>
        <ExternalLink href="https://www.google.com">
      <span><InstagramIcon fontSize='large' sx={{ color: '#DFD3C3' }}/></span>
      </ExternalLink>
      </Grid>
      <Grid item  xs={6} md={4}>
    <ExternalLink href="https://www.google.com">
      <span><LinkedInIcon fontSize='large'  sx={{ color: '#DFD3C3' }}/></span>
    </ExternalLink>
    </Grid>

    <Grid item  xs={6} md={4}>
    <ExternalLink href="https://www.google.com">
      <span><GitHubIcon fontSize='large'  sx={{ color: '#DFD3C3' }}/></span>
    </ExternalLink>
    </Grid>
    
        </Grid>
        <Typography variant='h6'>@2022 CopyRight: Wenxi Ma</Typography>
        </ThemeProvider>
        </div>
    )
}
    
export default Footer;