import React, { useState } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { Paper, BottomNavigation, BottomNavigationAction } from "@mui/material";

const StyledBottomNavigation: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState<string>("home");

  const handleChange = (event: React.SyntheticEvent, newPage: string) => {
    setCurrentPage(newPage);
    newPage === "home" ? navigate("/") : navigate(`/${newPage}`);
  };

  return (
    // <BottomNavigation sx={{ width: 500 }} value={value} onChange={handleChange}>
    <>
      {children}
      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation
          showLabels
          // sx={{ width: 500 }}
          value={currentPage}
          onChange={handleChange}
          sx={{
            bgcolor: "blue",
            "& .Mui-selected, .Mui-selected > svg": {
              color: "white",
            },
          }}
        >
          <BottomNavigationAction
            label="Home"
            value="home"
            //   icon={<RestoreIcon />}
          />
          <BottomNavigationAction
            label="Message"
            value="message"
            //   icon={<FavoriteIcon />}
          />
          <BottomNavigationAction
            label="Profile"
            value="profile"
            //   icon={<LocationOnIcon />}
          />
          {/* <BottomNavigationAction label="Folder" value="folder" icon={<FolderIcon />} /> */}
        </BottomNavigation>
      </Paper>
      <Outlet />
    </>
  );
};

export default StyledBottomNavigation;
