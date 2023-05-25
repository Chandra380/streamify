import { categories } from "../utils/constants";
import { Stack, Button } from "@mui/material";

const Sidebar = ({ selectedCategory, setSelectedCategory }) => (
  <Stack
    direction="row"
    sx={{
      overflowY: "auto",
      height: { sx: "auto", md: "95%" },
      display: 'flex',
      flexDirection: { md: "column" },
      alignItems: 'flex-start',
      gap: '10px',
      overflowX:'hidden'
    }}
  >
    {categories.map((category) => (
      <Button
        className="category-btn"
        onClick={() => setSelectedCategory(category.name)}
        sx={{
          background: (category.name===selectedCategory) && "#FC1503",
          color: "white", borderRadius: '40px', padding: '0px 20px',
          '&:hover': {background: "white", color: 'black'},
        }}
        key={category.name}
      >
        <span style={{ color: category.name === selectedCategory ? "white" : "red", marginRight: "15px"}}>
          {category.icon}
        </span>
        <span style={{ opacity: category.name === selectedCategory ? "1" : "0.8", fontSize: '12px'}}>
          {category.name}
        </span>
      </Button>
    ))}
  </Stack>
);

export default Sidebar;