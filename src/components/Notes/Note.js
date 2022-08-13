import { Card,CardActions, CardContent, Typography } from "@mui/material";
import {styled} from '@mui/material/styles';
import { ArchiveOutlined as Archive,DeleteOutlineOutlined as Delete,PushPinOutlined as Pin } from "@mui/icons-material";
import { useContext} from "react";

import {DataContext} from "../../context/DataProvider"

const StyledCard=styled(Card)`

    width:33rem;
    margin:6px;
    box-shadow:none;
    border:1px solid #e0e0e0;
    border-radius:8px; 


`



const Note=({note})=>{

    const {notes,setNotes,editNotes,setEditedNotes,setArchiveNotes,setDeletedNotes}=useContext(DataContext);

    const archiveNote=(note)=>{
        const updatedNotes=notes.filter(data=>data.id!==note.id)
        setNotes(updatedNotes);
        setArchiveNotes(prevArr=>[note,...prevArr]);
        console.log(updatedNotes)
            
    }

    const deleteNote=(note)=>{
        const updatedNotes=notes.filter(data=>data.id!==note.id)
        setNotes(updatedNotes);
        setDeletedNotes (prevArr=>[note,...prevArr]);

    }

    const editNote=(note)=>{
        const editedNotes=notes.filter(data=>data.id===note.id)[0];
        setNotes(editedNotes)
        setEditedNotes(prevArr=>[note,...prevArr])


    }
    return(
        <StyledCard>
            <CardContent >
                <Typography variant="h5">{note.heading} </Typography>
                <Typography>{note.tagline} </Typography>
                <Typography>{note.body} </Typography>

                
            </CardContent>
            <CardActions onclick={()=>editNote()}>
               <Archive
                  fontSize="small"
                  onClick={()=>archiveNote(note)}
            
               />
               <Pin
                  fontSize="small"

               />
               <Delete 
                  fontSize="small"
                  onClick={()=>deleteNote(note)}                  
               />
            </CardActions>
        </StyledCard>
    )
}


export default Note;