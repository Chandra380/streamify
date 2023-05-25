import  {React, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from '@mui/material';
//paper is nothing more than a div that have white bg and elevation
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const onhandleSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      navigate(`/search/${searchTerm}`);

      setSearchTerm('');
    }
  };

  return (
    <Paper
      component='form'
      onSubmit={onhandleSubmit}
      sx={{
        borderRadius: 20,
        border: '1px solid #e3e3e3',
        pl: 2,
        boxShadow: 'none',
        mr: { sm: 2 },
        width: 350, // Increase the width as per your requirement
        height: 40,
        display: 'flex', 
        alignItems: 'center',
      }}
    >
      <input
        className='search-bar'
        placeholder='Search...'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{border: 'none', outline:'none', width: '350px'}}
      />
      <IconButton type='submit' sx={{ p: '14px', color: 'red'}} aria-label='search'>
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;