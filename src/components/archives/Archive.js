import { Card,CardActions, CardContent, Typography } from "@mui/material";
import {styled} from '@mui/material/styles';
import { ArchiveOutlined as Unarchive,DeleteOutlineOutlined as Delete,PushPinOutlined as Pin } from "@mui/icons-material";
import { useContext} from "react";

import {DataContext} from "../../context/DataProvider";

const StyledCard=styled(Card)`

    width:33rem;
    margin:6px;
    box-shadow:none;
    border:1px solid #e0e0e0;
    border-radius:8px; 

`



const Archive=({archive})=>{

    const {archiveNotes,setNotes,setArchiveNotes,setDeletedNotes}=useContext(DataContext);

    const archiveNote=(archive)=>{
        const updatedNotes=archiveNotes.filter(data=>data.id!==archive.id)
        setArchiveNotes(updatedNotes);
        setNotes(prevArr=>[archive,...prevArr]);
            
    }

    const deleteNote=(archive)=>{
        const updatedNotes=archiveNotes.filter(data=>data.id!==archive.id)
        setArchiveNotes(updatedNotes);
        setDeletedNotes (prevArr=>[archive, ...prevArr]);

    }
    return(
        <StyledCard>
            <CardContent>
                <Typography>{archive.heading} </Typography>
                <Typography>{archive.tagline} </Typography>
                <Typography>{archive.body} </Typography>

                
            </CardContent>
            <CardActions>
               <Unarchive
                  fontSize="small"
                  onClick={()=>archiveNote(archive)}
            
               />
               <Pin
                  fontSize="small"

               />
               <Delete 
                  fontSize="small"
                  onClick={()=>deleteNote(archive)}
               />
            </CardActions>
        </StyledCard>
         )
}


export default Archive;