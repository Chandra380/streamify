import { Stack } from "@mui/material";
//stack is used for 1d layout col/row
import { Link } from "react-router-dom";
import { logo } from "../utils/constants";
import { SearchBar } from "./";

const Navbar = () => (
  <Stack direction="row" alignItems="center" p={2}
    sx={{ position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    background: "#000",
    zIndex: 100, gap: '35px'}}>
    <Link to="/" style={{ display: "flex", alignItems: "center", textDecoration:'none'}}>
      <img src={logo} alt="logo" height={45} />
      <h2 style={{marginLeft:'15px', color:'white'}}>Streamify</h2>
    </Link>
    <SearchBar />
  </Stack>
);


export default Navbar;