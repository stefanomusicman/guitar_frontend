import { Alert, Button, Card, CardContent, Dialog, DialogActions, DialogContent, DialogTitle, Grid, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from "@mui/material";
import { Guitar } from "../../types/guitar";
import { Fragment, Key, useEffect, useState } from "react";
import Colors from "@/app/colors";
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useAuthContext } from "@/auth/useAuthContext";
import Cookies from "js-cookie";
import SortableList, { SortableItem, SortableKnob } from 'react-easy-sort'
import arrayMove from 'array-move'

type GuitarGridProps = {
    guitars: Guitar[];
}

const resultsContainer = {
    width: '75vw',
    height: '75vh',
    backgroundColor: 'white',
    borderRadius: '10px',
    display: 'flex',
    overflowX: 'auto',
    padding: '10px',
};

const card = {
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
};

const cardText = {
    fontFamily: 'Montserrat, sans-serif',
    textAlign: 'center',
}

const button = {
    borderRadius: '10px',
    padding: '10px 20px',
    backgroundColor: Colors.primaryBlue,
    fontFamily: 'Montserrat, sans-serif',
    color: 'white',
    transition: 'background-color 0.3s',
    '&:hover': {
        backgroundColor: Colors.primaryOrange,
    },
}

const modal = {
    padding: '25px',
    borderRadius: '10px',
}

const dialogActions = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
}

const GuitarGrid: React.FC<GuitarGridProps> = ({ guitars }) => {
    // Controlling modal
    const [open, setOpen] = useState<boolean>(false);
    // Storing the selected guitar
    const [selectedGuitar, setSelectedGuitar] = useState<Guitar | null>(null);

    // Saving guitars into a state
    const [allGuitars, setAllGuitars] = useState<Guitar[]>([]);

    // Firebase/Auth
    const { fetchFirebaseFavorites, removeFromFavorites, addToFavorites, checkIsFavorite } = useAuthContext();

    // Verify if user is signed in
    const isSignedIn = typeof window !== 'undefined' && Cookies.get('signedIn') === 'true';
    const [canFavorite, setCanAddFavorite] = useState<boolean>(true);

    // Set the color of the favorites icon
    const [favColor, setFavColor] = useState('grey');

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
        if (favorites.includes(selectedGuitar?.uid as string)) {
            removeFromFavorites(selectedGuitar?.uid as string);
            setFavColor('grey');
        } else {
            addToFavorites(selectedGuitar?.uid as string);
            setFavColor('red');
        }
    }

    useEffect(() => {
        const updateFavColor = async () => {
            if (isSignedIn && selectedGuitar?.uid) {
                const isFavorite = await checkIsFavorite(selectedGuitar?.uid as String);
                setFavColor(isFavorite ? 'red' : 'grey');
            }
        };
        updateFavColor();
        console.log('All guitars: ', allGuitars);
    }, [isSignedIn, selectedGuitar?.uid, checkIsFavorite]);

    useEffect(() => {
        if (guitars.length > 0) {
            setAllGuitars(guitars);
        }
    }, [guitars]);

    // handle the sorting of guitars when dragging and dropping
    const onSortEnd = (oldIndex: number, newIndex: number) => {
        setAllGuitars((array) => arrayMove(array, oldIndex, newIndex));
    }

    return (
        <Fragment>
            <Grid container direction="row" spacing={0} justifyContent="center" sx={resultsContainer}>
                <SortableList className="list" onSortEnd={onSortEnd}>
                    {allGuitars.map((guitar) => (
                        <SortableItem key={guitar.uid as Key}>
                            <Grid item sx={{ display: 'flex', justifyContent: 'center' }} key={guitar.uid as Key}>
                                <Card className="guitar_card" elevation={0} onClick={() => handleOpenModal(guitar)}>
                                    <CardContent>
                                        <Typography sx={cardText}>{`${guitar.year} ${guitar.brand} ${guitar.model}`}</Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </SortableItem>
                    ))}
                </SortableList>
            </Grid>
            {/* Dialog for displaying the details of the individual guitar */}
            <Dialog PaperProps={{ sx: modal }} open={open} onClose={handleCloseModal}>
                <DialogTitle>{`${selectedGuitar?.year} ${selectedGuitar?.brand} ${selectedGuitar?.model}`}</DialogTitle>
                <DialogContent>
                    <TableContainer>
                        <Table>
                            <GuitarDetails guitar={selectedGuitar!} />
                        </Table>
                    </TableContainer>
                </DialogContent>
                <DialogActions sx={dialogActions}>
                    <FavoriteIcon
                        sx={{
                            color: favColor, width: '35px',
                            height: '35px',
                            '&:hover': {
                                cursor: 'pointer',
                            },
                        }}
                        onClick={handleFavorite} />
                    <Button sx={button} onClick={handleCloseModal}>Close</Button>
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