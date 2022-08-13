import {styled} from '@mui/material/styles'
import { Box,Grid } from '@mui/material';
import { useContext } from 'react';
import { DataContext } from '../../context/DataProvider';



//components
import Note from './Note'
import Form from './Form'
import EmptyNotes from './EmptyNotes';




 
const DrawerHeader = styled('div')(({ theme }) => ({
  
    ...theme.mixins.toolbar,
  }));


const Notes=()=>{

    const {notes}=useContext(DataContext);
    return(
        <Box sx={{ display: 'flex',width:'200%' }}>
            <Box sx={{p:3,width:'100%'}}>
                <DrawerHeader/>
                <Form/>
                {
                    notes.length>0 ?

                        <Grid container style={{marginTop:40}}>
                        {
                            notes.map(note=>(
                                <Grid item>
                                <Note note={note}/>

                                </Grid>

                            ))
                        }

                        </Grid> :<EmptyNotes/>
                }
            </Box>

        </Box>


    )
}

export default Notes;