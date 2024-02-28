import Colors from "@/app/colors";
import { Card, CardContent, Grid, Typography } from "@mui/material"
import { Key } from "react";

type CardInfo = {
    id: Key;
    title: String;
    description: String;
}

const main = {
    marginBottom: '3em',
}

const card = {
    height: '12em',
    borderRadius: '15px',
    padding: '15px 15px'
}

const title = {
    color: Colors.primaryBlue,
    fontFamily: 'Montserrat, sans-serif',
    fontWeight: 'bold',
}

const description = {
    fontFamily: 'Montserrat, sans-serif',
}

const HeadlineGrid = () => {
    const info: CardInfo[] = [
        {
            id: 1,
            title: 'The most popular brands',
            description: 'Our directory is made up of all of the most popular brands that have been trusted by the best players for decades',
        },
        {
            id: 2,
            title: 'Add Favorites',
            description: 'Create a free account to be able to save your favorite guitars',
        },
        {
            id: 3,
            title: 'Add guitars',
            description: 'Can\'t find what you\'re looking for? Add it! You can freely add guitars in order to help grow our directory as a community'
        },
    ];


    return (
        <Grid sx={main} container spacing={{ xs: 3, sm: 4, md: 8 }}>
            {info.map((cardInfo) => (
                <Grid item xs={12} md={4} key={cardInfo.id}>
                    <Card elevation={0} sx={card}>
                        <CardContent>
                            <Typography sx={title} variant="h6" gutterBottom>
                                {cardInfo.title}
                            </Typography>
                            <Typography sx={description} color="textSecondary">
                                {cardInfo.description}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
}

export default HeadlineGrid;