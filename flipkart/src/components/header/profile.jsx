import { useState } from "react";
import { Box , Typography , Menu , MenuItem, styled} from "@mui/material";
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';


const Component =styled(Menu)`
margin-top:5px;
`
const Logout = styled(Typography)`
font-size:14px;
margin-left:20px;
`

const profile = ({account , setAccount}) => {

    const [open , setOpen] = useState(false);

    const handleClick = (event) => {
        setOpen(event.currentTarget);
    }

    const handleClose = () => {
        setOpen(false);
    }

    const Logout = () => {
        setAccount('');
    }
 
    return(
<Box>
<Typography onClick={handleClick} style={{marginTop:2 , cursor:'pointer'}}>{account}</Typography>
    <Component
        anchorEl={open}
        open={Boolean(open)}
        onClose={handleClose}
       
    >
        <MenuItem onClick={() => {handleClose(); Logout();}  }>
        <PowerSettingsNewIcon color="primary" fontSize="small"/>
        <Logout>Logout</Logout>
        </MenuItem>

     </Component>
</Box>
    );
}

export default profile;