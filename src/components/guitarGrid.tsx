import { Button, Card, CardContent, Dialog, DialogActions, DialogContent, DialogTitle, Grid, Table, TableBody, TableCell, TableContainer, TableRow, Typography, useMediaQuery, useTheme } from "@mui/material";
import { Guitar } from "../../types/guitar";
import { Fragment, Key, useState } from "react";
import { makeStyles } from "@mui/styles";
import Colors from "@/app/colors";

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
    }
}));

const GuitarGrid: React.FC<GuitarGridProps> = ({ guitars }) => {
    const classes = useStyles();

    const [open, setOpen] = useState<boolean>(false);
    const [selectedGuitar, setSelectedGuitar] = useState<Guitar | null>(null);

    const handleOpenModal = (guitar: Guitar) => {
        setOpen(true);
        setSelectedGuitar(guitar);
    }

    const handleCloseModal = () => {
        setOpen(false);
        setSelectedGuitar(null);
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
                            <TableBody>
                                <TableRow>
                                    <TableCell>Number of frets</TableCell>
                                    <TableCell>{`${selectedGuitar?.num_frets}`}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Stainless Steel Frets</TableCell>
                                    <TableCell>{`${selectedGuitar?.ss_frets}`}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Locking Tuners</TableCell>
                                    <TableCell>{`${selectedGuitar?.locking_tuners}`}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Wood</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Body</TableCell>
                                    <TableCell>{`${selectedGuitar?.wood.body}`}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Neck</TableCell>
                                    <TableCell>{`${selectedGuitar?.wood.neck}`}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Fretboard</TableCell>
                                    <TableCell>{`${selectedGuitar?.wood.fretboard}`}</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </DialogContent>
                <DialogActions>
                    <Button className={classes.button} onClick={handleCloseModal}>Close</Button>
                </DialogActions>
            </Dialog>
        </Fragment>
    );
}

export default GuitarGrid;