import * as React from 'react';
import { styled} from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../notebook.png'

const Header = styled(AppBar)`

  z-index:1201;
  background:#fff;
  height:70px;
  box-shadow:0 1px 2px 0 rgb(60 64 67/ 30%), 0 2px 6px 2px rgb(60 64 67/ 15%);
`;
const Heading=styled(Typography)`

    color:#5f6368;
`
const HeaderBar=({open,handleDrawer})=>{
    return(
        <Header open={open}>
        <Toolbar>
          <IconButton
            onClick={handleDrawer}
            edge="start"
            sx={{
              marginRight: 5
            }}
          >
            <MenuIcon />
          </IconButton>
          <img src={logo} alt="logo" style={{width:36,marginRight:15}}/>
          <Heading>
            NOTE KEEPER
          </Heading>
        </Toolbar>
      </Header>
    )
}

export default HeaderBar;