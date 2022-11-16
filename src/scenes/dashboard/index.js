import { Box } from "@mui/material";
import Header from "../../components/Header";


function dashboard() {
  return (
    <Box m="20px">
      <Box display="flex" justifyContent= "space-between" alignitem="center">
        <Header title="Dashboard" subtitle="Welcome to your dashboard" />
      </Box>
    </Box>
  );
}

export default dashboard;
