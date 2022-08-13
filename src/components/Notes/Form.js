import { Box, TextField, ClickAwayListener } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useContext, useState } from "react";
import { v4 as uuid } from "uuid";
import { DataContext} from "../../context/DataProvider";


const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 600px;
  box-shadow: 0 1px 2px 0 rgb(60 64 67/ 30%), 0 2px 6px 2px rgb(60 64 67/ 15%);
  padding: 9px 14px;
  margin: auto;
  border-radius: 8px;
`;

const note = {
  id: "",
  heading: "",
  tagline: "",
  body: "",
};
const Form = () => {
  const { notes, setNotes } = useContext(DataContext);

  const [addNote, setAddNote] = useState({ ...note, id: uuid() });
  const handleClickAway=()=>{
    setAddNote({...note,id:uuid()})
    if(addNote.heading || addNote.text){
      setNotes(prevArr=>[addNote, ...prevArr]);
    }
   }
  
  const onTextChange = (e) => {
    let changeNote = { ...addNote, [e.target.name]: e.target.value };
    setAddNote(changeNote);
    

  };
  return (
    <ClickAwayListener onClickAway={handleClickAway}>
    <Container>
      <TextField
        placeholder="Title"
        variant="standard"
        InputProps={{ disableUnderline: true }}
        style={{ marginBottom: 10,}}
        onChange={(e) => onTextChange(e)}
        name="heading"
        value={addNote.heading}
        
      />
      <TextField
        placeholder="Tagline"
        variant="standard"
        InputProps={{ disableUnderline: true }}
        style={{ marginBottom: 10 }}
        onChange={(e) => onTextChange(e)}
        name="tagline"
        value={addNote.tagline}
      />
      <TextField
        placeholder="Body"
        multiline
        variant="standard"
        InputProps={{ disableUnderline: true }}
        style={{ marginBottom: 10 }}
        onChange={(e) => onTextChange(e)}
        name="body"
        value={addNote.body}
      />
    </Container>
    </ClickAwayListener>
  );
};

export default Form;
