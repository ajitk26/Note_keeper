import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import {UnarchiveOutlined as Archive} from "@mui/icons-material";
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import {Link} from 'react-router-dom';


const DrawerList = () => {
  const drawerList = [
    { id: 1, name: "Notes", icon: <LightbulbIcon />,route:'/'},
    { id: 2, name: "Archive", icon: <Archive />,route:'/archive' },
  ]
  return (
    <List>
      {drawerList.map((list) => (
        <ListItem button key={list.id}>
          <Link to ={list.route} style={{textDecoration:'none', display:'flex',color:'inherit'}}>
              <ListItemIcon>{list.icon}</ListItemIcon>
              <ListItemText primary={list.name} />
          </Link>
        </ListItem>
      ))}
    </List>
  )
};

export default DrawerList;
