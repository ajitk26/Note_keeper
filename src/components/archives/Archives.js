import { styled } from "@mui/material/styles";
import { Box, Grid } from "@mui/material";
import { useContext } from "react";
import { DataContext } from "../../context/DataProvider";

//components
import Archive from "./Archive";

const DrawerHeader = styled("div")(({ theme }) => ({
  ...theme.mixins.toolbar,
}));

const Archives = () => {
  const { archiveNotes } = useContext(DataContext);
  return (
    <Box sx={{ display: "flex", width: "100%" }}>
      <Box sx={{ p: 3, width: "100%" }}>
        <DrawerHeader />

        <Grid container style={{ marginTop: 40 }}>
          {archiveNotes.map((archive) => (
            <Grid item> 
              <Archive archive={archive} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Archives;
