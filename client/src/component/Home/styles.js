import { makeStyles,createMuiTheme } from "@mui/styles";
import leaf from '../Image/leaf.jpg';


export default makeStyles(() => ({
    bodys:{
        backgroundColor:'#EDE4E0',
    },
    intros:{
        color:'#9F8772',
        fontFamily:'Alkalami',
        paddingTop:'380px',
        paddingBottom:'280px',
    },
    times:{
        padding:'30px',
        position:'relative',
        justifyContent:'flex-start', 
    },
    image:{
        maxHeight:'300px',
        maxWidth:'400px'
    },
    cards:{
        backgroundColor:'#EDE4E0',
    },
    cardpoi:{
        marginTop:'20px',
        marginBottom:'40px'
    },
    cardLink:{
        textDecoration:'none',
        marginRight:'33px',
        marginLeft:'22px'
    },
}))