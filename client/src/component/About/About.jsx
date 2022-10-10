import React from 'react';
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Header from '../Header/Header.jsx'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import useStyles from './styles.js';
import { createTheme,ThemeProvider } from '@mui/material';


const About = () => {
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
        <Header />
        <ThemeProvider theme={theme}>
        <Container className={classes.cards}>
            
                <Typography variant="h2"  className={classes.projectTopic}>Skill Pool:</Typography>
                <Grid container spacing={8}>
            <Grid item xs={4} md={4}>
                <Card sx={{ maxWidth: 315 }}>
                    <CardContent>
                    <Typography variant='h5'>Front End</Typography>
                    <List>
                        <ListItem>
                        <Typography variant='h6'>HTML5,CSS3,JavaScript
                        </Typography>
                        </ListItem>
                        <Divider />
                        <ListItem>
                        <Typography variant='h6'> 
                        Library: jQuery, Bootstrap5,materialUI
                        </Typography>
                        </ListItem>

                        <Divider />

                        <ListItem>
                        <Typography variant='h6'>                           
                        FrameWork: React(Hooks, Redux)
                        </Typography>
                        </ListItem>

                        <Divider />

                        <ListItem>
                        <Typography variant='h6'>                           
                        API implmentation: REST API
                        </Typography>
                        </ListItem>

                        <ListItem>
                        <Typography variant='h6'>
                        Version Control System: Git                        
                        </Typography>
                        </ListItem>

                    </List>
                    </CardContent>
                </Card>
                </Grid>
                <Grid item xs={4} md={4}>
                <Card sx={{ maxWidth: 315 }}>
                <Typography variant='h5'>Back-End</Typography>

                    <CardContent>
                    <List>
                        <ListItem>
                        <Typography variant='h6'>Programming Language:
                        Python(numpy,pandas,sklearn),
                            Java(OOP, Android Application Development),<br></br>
                            <Divider />
                            Website server-side:
                            NodeJS,ExpressJS(Web-platform Development),<br></br>
                            PHP(Web Development)
                            </Typography>
                        </ListItem>
                        <Divider />
                        <ListItem>
                        <Typography variant='h6'>                
                        Database: Structured SQL: MYSQL, noSQL: mongoDB.
                        </Typography>
                        </ListItem>
                        

                       
                    </List>
                    </CardContent>
                </Card>
                </Grid>
                <Grid item xs={4} md={4}>
                <Card sx={{ maxWidth: 315 }}>
                <Typography variant='h5'>Other Skill:</Typography>

                    <CardContent>
                    <List>
                    <ListItem>
                    <Typography variant='h6'>                        
                    Communication,Interpersonal
                    </Typography>
                    </ListItem>
                        
                        <Divider />

                        <ListItem>
                        <Typography variant='h6'>                        
                        AWS, Heroku deployment, Cloud knowledge
                        </Typography>
                        </ListItem>

                        <Divider />

                        
                        <ListItem>
                        <Typography variant='h6'>                        
                        Problem Solving,Attention to Details
                        </Typography>
                        </ListItem>

                        <ListItem>
 
                        <Typography variant='h6'>                       
                        Multi-tasking, Time management
                        </Typography>
                        </ListItem>
                        
                        <Divider />


                        <ListItem>
                        <Typography variant='h6'>Teamwork</Typography>
                        </ListItem>

                        <Divider />

                        <ListItem>
                        <Typography variant='h6'>                        
                       JUnit Test, Selenium Test
                        </Typography>
                        </ListItem>

                        <Divider />

                        <ListItem>
                        <Typography variant='h6'>                        
                        Web3 Development Tools: ICP, Motoko, DFinitiy
                        </Typography>
                        </ListItem>
                    </List>
                    </CardContent>
                </Card>
                </Grid>
            </Grid>
        </Container>
        <Divider />
        <Container>
            <Grid>
                <Typography variant="h3"  className={classes.projectTopic}>Education</Typography>
                <Typography variant="h6" >Hon. Bachelor of Science, Major in Computer Science and Economics, University of Ottawa, Ottawa, ON           Class of 2022</Typography>
            <Typography variant='h6'>Relevant Courses: Design and Analysis of Algorithms, Design DBMS, Software Construction, Computer Programming</Typography><br></br>
  <Typography variant='h6'>Scholarships: Awarded with the University of Ottawa Entrance Scholarship (2018-2022) for outstanding academic excellence </Typography><br></br>
  <Typography variant='h6'>Career Objectives: Front-end Development, Database Management, Automation, Testing, Process Optimization</Typography><br></br>
            </Grid>
        </Container>
        <Divider />
        <Container>
            <Grid>
                <Typography variant="h3"  className={classes.projectTopic}>Work Experience</Typography>
                <Typography variant="h6" >Frond-end Developer</Typography>
                <Typography variant="h6" >Inspiration Technology Co., Ltd</Typography>
                <Typography variant="h6" >May - August 2022</Typography>
                <List>
                    <ListItem>
                    <Typography variant='h6'>                    
                    Offered strong support in establishing the internal website page using HTML5, CSS3 and JavaScript in order to display target information in an accurate and straight-forward manner, successfully enhanced work efficiency and positive user experience
                    </Typography>
                    </ListItem>

                    <ListItem>
                    <Typography variant='h6'>                   
                     Planned the effective structure to construct reliable connection between front-end libraries and back-end SQL database
                        </Typography>
                        </ListItem>

                        <ListItem>
                        <Typography variant='h6'>                        
                        Assisted to design the customized website via HTML and React Framework to visualize project progress and test
                        </Typography>
                        </ListItem>

                        <ListItem>
                        <Typography variant='h6'>                       
                        Successfully detected and examined the error programming codes or strings to identify and forecast the potential influence
                        </Typography>
                        </ListItem>

                        <ListItem>
                        <Typography variant='h6'>                        
                        Illustrated an excellent programming behavior to design and write a clear, re-usable, and straight-forward codes
                        </Typography>
                        </ListItem>
                        
                        <ListItem>
                        <Typography variant='h6'>                       
                        Cooperated with a team of 4 in designing new test techniques such as unit testing to enhance testing efficiency and scalability
                        </Typography>
                        </ListItem>

                        <ListItem>
                        <Typography variant='h6'>                        
                        Built multiple sections of the user interface in website, and added functional features using Bootstrap framework
                        </Typography>
                        </ListItem>
                </List>
                <Typography variant="h6" >Software Developer</Typography>
                <Typography variant="h6" >Cargo Network Technology Group Co., Ltd</Typography>
                <Typography variant="h6" >May - August 2021</Typography>

                <List>
                    <ListItem>
                    <Typography variant='h6'>                    
                    Built the customized website using CSS, built-in JavaScript (Augular) data structure to store and fetch the data from arrays                  
                    </Typography>
                    </ListItem>

                    <ListItem>
                    <Typography variant='h6'>                    
                    Utilized automation test cases with Selenium using Java, successfully maximize the daily work efficiency by saving 30 mins 
                    </Typography>
                    </ListItem>


                        <ListItem>
                        <Typography variant='h6'>                  
                        Tailored clients' needs by establishing the Importing External Template feature to achieve a high level of customer satisfaction    
                        </Typography>
                        </ListItem>

                        <ListItem>
                        <Typography variant='h6'>Illustrated effective communication skills by interpreting and presenting testing logic to non-technical colleagues  
                        </Typography>
                        </ListItem>

                        <ListItem>
                        <Typography variant='h6'> 
                        Implemented Agile model to participate different stages of SDLC including planning, analyzing, and testing, etc.                        
                        </Typography>
                       </ListItem>

                        <ListItem>
                        <Typography variant='h6'>                        
                        Determined operational feasibility by evaluating analysis, problem definition, solution development and proposed solutions                       
                        </Typography>
                        </ListItem>
                        <ListItem>
                        <Typography variant='h6'>                       
                        Presented testing reports with insights and actionable recommendations to assist management team in decision-making process                        
                        </Typography>
                        </ListItem>
                </List>
            </Grid>
        </Container>
        <Divider />
        </ThemeProvider>
        <Divider />
        </div>
        
    )
};

export default About;