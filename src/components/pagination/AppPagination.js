import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
 import {Box} from "@mui/material";
 import { useState } from 'react';


const AppPagination=()=> {
   
  return (
    <Box justifyContent={"center"} alignItems="center" display={"flex"}
        sx={{
            margin:"20px 0px"
        }}
    >
            <Stack spacing={2}>
            <Pagination count={10}/>
            </Stack>
    </Box>
  );
}

export default AppPagination;
