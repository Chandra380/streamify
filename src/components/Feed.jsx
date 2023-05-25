import React, { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
//typography is a component used for text elements

import { fetchFromAPI } from "../utils/fetchFromAPI";
import { Videos, Sidebar } from "./";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [videos, setVideos] = useState(null);

  useEffect(() => {
    setVideos(null);

    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
      .then((data) => setVideos(data.items))
    }, [selectedCategory]);

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row", marginTop:'150px'}}}>
      <Box sx={{ height: { sx: "auto", md: "92vh" }, 
        borderRight: "1px solid #3d3d3d", px: { sx: 0, md: 2 }, position:'sticky'}}>
        <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      </Box>

      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
          <span style={{color:'#FC1503'}}>{selectedCategory}</span> <span style={{ color: "white" }}>videos</span>
        </Typography>

        <Videos videos={videos} />
        <Typography className="copyright" variant="body2" sx={{ mt: 12, color: "#fff", display:'flex',  justifyContent: 'center'}}>
          Copyright © 2023 Streamify
        </Typography>
      </Box>
    </Stack>
  );
};

export default Feed;