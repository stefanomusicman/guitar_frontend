import { Card, CardContent, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import { Guitar } from "../../types/guitar";
import { Key } from "react";
import { makeStyles } from "@mui/styles";

type GuitarGridProps = {
    guitars: Guitar[];
}

const useStyles = makeStyles(() => ({
    resultsContainer: {
        width: '75vw',
        height: '75vh',
        backgroundColor: 'white',
        borderRadius: '10px',
        display: 'flex',
        overflowX: 'auto',
        padding: '10px',
    },
    card: {
        height: '17em',
        width: '17em',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '10px',
        borderRadius: '10px',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
    },
    cardText: {
        fontFamily: 'Montserrat, sans-serif',
        textAlign: 'center',
    },
}));

const GuitarGrid: React.FC<GuitarGridProps> = ({ guitars }) => {
    const classes = useStyles();

    return (
        <Grid container direction="row" spacing={0} justifyContent="center" className={classes.resultsContainer}>
            {guitars.map((guitar) => (
                <Grid xs={12} sm={6} md={4} lg={3} item sx={{ display: 'flex', justifyContent: 'center' }} key={guitar.uid as Key}>
                    <Card elevation={0} className={classes.card}>
                        <CardContent>
                            <Typography className={classes.cardText}>{`${guitar.year} ${guitar.brand} ${guitar.model}`}</Typography>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
}

export default GuitarGrid;