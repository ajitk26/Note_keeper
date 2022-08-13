import SideDrawer from "./SideDrawer";
import Notes from "./Notes/Notes";
import Archives from "./archives/Archives";
import { Box } from "@mui/material";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AppPagination from "./pagination/AppPagination";
import { useState } from "react";

const Home = () => {
  const [page, setPage] = useState(1);


  return (
    <>  <Box style={{ display: "flex", width: "100%" }}>
          <Router>
            <SideDrawer />
            <Routes>
                <Route path="/" element={<Notes/>}></Route>
                <Route path="/archive" element={<Archives/>}></Route>

            </Routes>
          </Router>
        </Box>
        <Box>
           <AppPagination setPage={setPage}/>

        </Box>
    </>

  );
};

export default Home;
