import Colors from "@/app/colors";
import { Card, CardContent, Grid, Typography } from "@mui/material"
import { makeStyles } from "@mui/styles";

type CardInfo = {
    title: String;
    description: String;
}

const useStyles = makeStyles(() => ({
    main: {
        marginBottom: '3em',
    },
    card: {
        height: '12em',
        borderRadius: '15px',
        padding: '15px 15px'
    },
    title: {
        color: Colors.primaryBlue,
        fontFamily: 'Montserrat, sans-serif',
        fontWeight: 'bold',
    },
    description: {
        fontFamily: 'Montserrat, sans-serif',
    }
}));

const HeadlineGrid = () => {
    const classes = useStyles();

    const info: CardInfo[] = [
        {
            title: 'The most popular brands',
            description: 'Our directory is made up of all of the most popular brands that have been trusted by the best players for decades',
        },
        {
            title: 'Add Favorites',
            description: 'Create a free account to be able to save your favorite guitars',
        },
        {
            title: 'Add guitars',
            description: 'Can\'t find what you\'re looking for? Add it! You can freely add guitars in order to help grow our directory as a community'
        },
    ];


    return (
        <Grid className={classes.main} container spacing={{ xs: 3, sm: 4, md: 8 }}>
            {info.map((cardInfo, index) => (
                <Grid item key={index} xs={12} md={4}>
                    <Card elevation={0} className={classes.card}>
                        <CardContent>
                            <Typography className={classes.title} variant="h6" gutterBottom>
                                {cardInfo.title}
                            </Typography>
                            <Typography className={classes.description} color="textSecondary">
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