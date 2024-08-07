


import { AppBar,Toolbar, Typography,Styled, styled, Tab } from '@mui/material';
import { NavLink } from 'react-router-dom';


const Tabs = styled(NavLink)`
font-size:20px;
margin-right:20px;
color:inherit;
text-decoration:none;
`
 
const NavBar=() => {
    return (
        <AppBar position='static'>
        <Toolbar>
            <Tabs to="/">omkarbabar.com</Tabs>
            <Tabs to="all">All Users</Tabs>
            <Tabs to="add">Add Users</Tabs>
        </Toolbar>
    </AppBar>
    );
}
    
    
    export default NavBar;