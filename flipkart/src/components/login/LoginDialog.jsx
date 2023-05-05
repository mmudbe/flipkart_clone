import {useState ,  useContext} from 'react';

import { Dialog , Box, styled , Typography , TextField, Button} from '@mui/material';

import { authenticateSignup , authenticateLogin} from '../../service/api';
import { DataContext } from '../../context/dataProvider';

    
const Component = styled(Box)`
${'' /* vh in view port our full screen is 100view port we are giving 70. */}
height:70vh;
width:90vh;
`
const Image = styled(Box)`
background:#2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) center 85% no-repeat;
width:28%;
height:83%;
padding:45px 35px;
& > h5 , & > p {
    color:#fff;
    font-weight:600;
}
`
const Wrapper = styled(Box)`
display:flex;
flex-direction:column;
padding:25px 35px;
flex:1;
& > div , & > button, & >p{
    margin-top:20px;

}
`

const LoginButton = styled(Button)`
text-transform:none;
background:#fb641b;
color:#fff;
height:48px;
border-radius:2px;
`


const RequestOTPButton = styled(Button)`
text-transform:none;
background:#fff;
color:#2874f0;
height:48px;
border-radius:2px;
box-shadow:0 2px 4px 0 rgb(0 0 0/20%);
`

const Text = styled(Typography)`
font-size:12px;
color:#878787;
`

const CreateAccount = styled(Typography)`
color:#2874f0;
font-size:14px;
text-align:center;
font-weight:600;
cursor:pointer;

`

const Error = styled(Typography)`
font-size = 10px;
color : #ff6161;
line-height:0;
margin-top:10px;
font-weight:600;
`
// created object for account default value
const accountInitialValues = {
  login :{
    view:'login',
    heading:'Login',
    subHeading:'Get access to your Orders, Wishlist and Recommendations'
  },
  signup:{
    view:'signup',
    heading:"Looks like you're new here!",
    subHeading:'Sign up with your mobile number to get started'
  }

} 

const signupInitialValues  = {
  firstname :" ",
  lastname:' ',
  email:'',
  password:'',
  phone:''
}

const loginInitialValues = {
  email:'',
  password:''
}

    const LoginDialog = ({ open , setOpen }) => {
    
        const [account , toggleAccount] = useState(accountInitialValues.login);
        const [signup , setSignup] = useState(signupInitialValues);
        const [login , setLogin] = useState(loginInitialValues);
        const [error , setError] = useState(false);

        const {setAccount} = useContext(DataContext);

      const handleClose = () => {
        setOpen(false);
        toggleAccount(accountInitialValues.login);
        setError(false);
      }

      const toggleSignup = () => {
        toggleAccount(accountInitialValues.signup);
      }

      const onInputChange=(e) => {
        // ... for destructuring alredy filled so it will not get override.
        // e.target.name have to be written in square bracket because it is a variable and if we are using variable as a key .
             setSignup({...signup,[e.target.name]:e.target.value});
      }
          //  sends data to backend and calls in api.js
      const signupUser= async () => {
        let response= await authenticateSignup(signup);
        // console.log(response);
        if(!response) return;
        // if there is response it will back on login page
        handleClose();
        setAccount(signup.firstname);
      }

      // for login
      const onLoginChange = (e) => {
        setLogin({...login,[e.target.name]:e.target.value});
      }
       
      const loginUser = async () => {
           let response = await authenticateLogin(login);   
           console.log(response);
          if (response.status === 200) {
            handleClose();
            setAccount(response.data.data.firstname);
          }else{
            setError(true);
          }
      }


    return (
       <Dialog className=" max-md:ml-[170px] max-md:w-[70vw]" open={open} onClose={handleClose} PaperProps={{sx: {maxWidth:'unset'}}}>

        <Component  className='flex '>
      {/* left part */}
            <Image className='max-md:hidden'>
             <Typography variant='h5'>{account.heading}</Typography>
             <Typography style={{marginTop:20}}>{account.subHeading}</Typography>
            </Image>
    {/* right part */}
          {

          account.view === 'login' ?
            <Wrapper>
                <TextField onChange={(e)=> onLoginChange(e) } name='email' variant='standard' label="Enter Email/Mobile number" />
                {error && <Error>please enter valid email and password</Error>}
                <TextField onChange={(e)=> onLoginChange(e) } name='password' variant='standard' label="Enter Password" />
                <Text>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</Text>
                <LoginButton onClick={() => loginUser()}>Login</LoginButton>
                <Typography style={{textAlign:'center'}}>OR</Typography>
                <RequestOTPButton>Request OTP</RequestOTPButton>
                <CreateAccount onClick={() => toggleSignup()}>New to Flipkart? Create an account</CreateAccount>
            </Wrapper>
               :
            <Wrapper>
                <TextField onChange={(e)=> onInputChange(e)} variant='standard' name='firstname' label="Enter Firstname" />
                <TextField onChange={(e)=> onInputChange(e)} variant='standard' name='lastname' label="Enter Lastname" />
                <TextField onChange={(e)=> onInputChange(e)} variant='standard' name='email' label="Enter Email" />
                <TextField onChange={(e)=> onInputChange(e)} variant='standard' name='password' label="Enter Password" />
                <TextField onChange={(e)=> onInputChange(e)} variant='standard' name='phone' label="Enter Phone" />
                <LoginButton onClick={()=> signupUser()}>Continue</LoginButton>
            </Wrapper>
          }
        </Component>

       </Dialog>
    )
}

export default LoginDialog;