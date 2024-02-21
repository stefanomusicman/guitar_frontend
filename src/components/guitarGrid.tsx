import { Alert, Button, Card, CardContent, Dialog, DialogActions, DialogContent, DialogTitle, Grid, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from "@mui/material";
import { Guitar } from "../../types/guitar";
import { Fragment, Key, useState } from "react";
import { makeStyles } from "@mui/styles";
import Colors from "@/app/colors";
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useAuthContext } from "@/auth/useAuthContext";
import Cookies from "js-cookie";

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
        '&:hover': {
            cursor: 'pointer',
        }
    },
    cardText: {
        fontFamily: 'Montserrat, sans-serif',
        textAlign: 'center',
    },
    button: {
        borderRadius: '10px',
        padding: '10px 20px',
        backgroundColor: Colors.primaryBlue,
        fontFamily: 'Montserrat, sans-serif',
        color: 'white',
        transition: 'background-color 0.3s',
        '&:hover': {
            backgroundColor: Colors.primaryOrange,
        },
    },
    modal: {
        padding: '25px',
    },
    dialogActions: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
    },
    favoriteButton: {
        width: '35px',
        height: '35px',
        color: 'grey',
    },
}));

const GuitarGrid: React.FC<GuitarGridProps> = ({ guitars }) => {
    const classes = useStyles();

    // Controlling modal
    const [open, setOpen] = useState<boolean>(false);
    // Storing the selected guitar
    const [selectedGuitar, setSelectedGuitar] = useState<Guitar | null>(null);

    // Firebase/Auth
    const { fetchFirebaseFavorites, removeFromFavorites, addToFavorites } = useAuthContext();

    // Verify if user is signed in
    const isSignedIn = typeof window !== 'undefined' && Cookies.get('signedIn') === 'true';
    const [canFavorite, setCanAddFavorite] = useState<boolean>(true);

    const handleOpenModal = (guitar: Guitar) => {
        setOpen(true);
        setSelectedGuitar(guitar);
    }

    const handleCloseModal = () => {
        setOpen(false);
        setSelectedGuitar(null);
        setCanAddFavorite(true);
    }

    const handleFavorite = async () => {
        if (!isSignedIn) {
            setCanAddFavorite(false);
            return;
        }

        let favorites = await fetchFirebaseFavorites();
        console.log(favorites.includes(selectedGuitar?.uid as string))
        favorites.includes(selectedGuitar?.uid as string) ? removeFromFavorites(selectedGuitar?.uid as string) : addToFavorites(selectedGuitar?.uid as string);
        console.log(favorites);
    }

    return (
        <Fragment>
            <Grid container direction="row" spacing={0} justifyContent="center" className={classes.resultsContainer}>
                {guitars.map((guitar) => (
                    <Grid xs={12} sm={6} md={4} lg={3} item sx={{ display: 'flex', justifyContent: 'center' }} key={guitar.uid as Key}>
                        <Card elevation={0} className={classes.card} onClick={() => handleOpenModal(guitar)}>
                            <CardContent>
                                <Typography className={classes.cardText}>{`${guitar.year} ${guitar.brand} ${guitar.model}`}</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
            {/* Dialog for displaying the details of the individual guitar */}
            <Dialog classes={{ paper: classes.modal }} open={open} onClose={handleCloseModal}>
                <DialogTitle>{`${selectedGuitar?.year} ${selectedGuitar?.brand} ${selectedGuitar?.model}`}</DialogTitle>
                <DialogContent>
                    <TableContainer>
                        <Table>
                            <GuitarDetails guitar={selectedGuitar!} />
                        </Table>
                    </TableContainer>
                </DialogContent>
                <DialogActions className={classes.dialogActions}>
                    <FavoriteIcon onClick={handleFavorite} className={classes.favoriteButton} />
                    <Button className={classes.button} onClick={handleCloseModal}>Close</Button>
                </DialogActions>
                {!canFavorite && <Alert severity="error">Must be logged in</Alert>}
            </Dialog>
        </Fragment>
    );
}

// ---------------------------------------------------------------------------------------------------------

type GuitarDetailsProps = {
    guitar: Guitar;
}

const GuitarDetails: React.FC<GuitarDetailsProps> = ({ guitar }) => {
    return (
        <TableBody>
            <TableRow>
                <TableCell>Number of frets</TableCell>
                <TableCell>{`${guitar?.num_frets}`}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell>Stainless Steel Frets</TableCell>
                <TableCell>{`${guitar?.ss_frets}`}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell>Locking Tuners</TableCell>
                <TableCell>{`${guitar?.locking_tuners}`}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell>Wood</TableCell>
            </TableRow>
            <TableRow>
                <TableCell>Body</TableCell>
                <TableCell>{`${guitar?.wood.body}`}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell>Neck</TableCell>
                <TableCell>{`${guitar?.wood.neck}`}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell>Fretboard</TableCell>
                <TableCell>{`${guitar?.wood.fretboard}`}</TableCell>
            </TableRow>
        </TableBody>
    );
}

export default GuitarGrid;