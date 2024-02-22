'use client';
import { Box } from "@mui/system";
import { useRef } from "react";
import Headline from "./headline";
import ActionButtons from "./actionButtons";
import HeadlineGrid from "./headlineGrid";
import BrandGrid from "./brandGrid";
import SearchSection from "./searchSection";
import AddGuitarSection from "./AddGuitarForm/addGuitarSection";

const HomeContent = () => {
    const searchSectionRef = useRef<HTMLDivElement>(null);
    const addGuitarSectionRef = useRef<HTMLDivElement>(null);

    // Function to scroll to the search section
    const handleScrollToSearchSection = () => {
        if (searchSectionRef.current) {
            searchSectionRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // Function to scroll to the add guitar section
    const handleScrollToAddGuitarSection = () => {
        if (addGuitarSectionRef.current) {
            addGuitarSectionRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <Box sx={{
            width: '85%',
            margin: 'auto',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            {/* Headline Text */}
            <Headline />
            {/* Action Buttons */}
            <ActionButtons scrollToSearchSection={handleScrollToSearchSection} scrollToAddGuitarSection={handleScrollToAddGuitarSection} />
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

export default HomeContent;