'use client';
import { Box, Button, Typography, useMediaQuery, useTheme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Colors from "./colors";
import HeadlineGrid from "@/components/home/headlineGrid";
import BrandGrid from "@/components/home/brandGrid";
import SearchSection from "@/components/home/searchSection";
import AddGuitarSection from "@/components/home/AddGuitarForm/addGuitarSection";
import React, { useRef } from "react";

const useStyles = makeStyles(() => ({
  mainContainer: {
    width: '85%',
    margin: 'auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headlineBox: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    marginTop: '5em',
  },
  headlineText: {
    fontFamily: 'Montserrat, sans-serif',
    fontWeight: 'bold',
  },
  // ACTION BUTTONS
  actionButtonContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: '5em',
    marginBottom: '5em',
  },
  button: {
    borderRadius: '10px',
    padding: '15px 30px',
  },
}));

export default function Home() {
  const classes = useStyles();

  const searchSectionRef = useRef<HTMLDivElement>(null);
  const addGuitarSectionRef = useRef<HTMLDivElement>(null);

  const theme = useTheme();
  const isMobile: Boolean = useMediaQuery(theme.breakpoints.down('md'));

  const fontSize: string = isMobile ? '2rem' : '2.5rem';

  // Function to scroll to the search section
  const scrollToSearchSection = () => {
    if (searchSectionRef.current) {
      searchSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Function to scroll to the add guitar section
  const scrollToAddGuitarSection = () => {
    if (addGuitarSectionRef.current) {
      addGuitarSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box className={classes.mainContainer}>
      {/* Headline Text */}
      <Box className={classes.headlineBox}>
        <Typography sx={{ fontSize: fontSize }} className={classes.headlineText}><strong style={{ color: Colors.primaryBlue }}>Search</strong> for a Guitar</Typography>
        <Typography sx={{ fontSize: fontSize }} className={classes.headlineText}><strong style={{ color: Colors.primaryOrange }}>Contribute</strong> and help grow the directory</Typography>
      </Box>
      {/* Action Buttons */}
      <Box sx={{ width: isMobile ? '75%' : '35%' }} className={classes.actionButtonContainer}>
        <Button onClick={scrollToSearchSection} disableElevation sx={{ backgroundColor: Colors.primaryBlue }} className={classes.button} variant="contained">Search</Button>
        <Button onClick={scrollToAddGuitarSection} disableElevation sx={{ backgroundColor: Colors.primaryOrange }} className={classes.button} variant="contained">Add</Button>
      </Box>
      <HeadlineGrid />
      <BrandGrid />
      <Box style={{ width: '100%' }} ref={searchSectionRef}>
        <SearchSection />
      </Box>
      <Box style={{ width: '100%' }} ref={addGuitarSectionRef}>
        <AddGuitarSection />
      </Box>
    </Box>
  )
}
