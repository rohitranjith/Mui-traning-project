import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import PropTypes from 'prop-types';
import LinearProgress from '@mui/material/LinearProgress';
import ListingStepper from './ListingStepper';



function LinearProgressWithLabel(props) {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ width: '100%', mr: 1 }}>
                <LinearProgress sx={{ height: "14px", borderRadius: "29px", background: "#e7dfff" }} variant="determinate" {...props} />
            </Box>
            <Box sx={{ minWidth: 35 }}>
                <Typography variant="body2" color="text.secondary">{`${Math.round(props.value,)}%`}</Typography>
            </Box>
        </Box>
    );
}

LinearProgressWithLabel.propTypes = {
    /**
     * The value of the progress indicator for the determinate and buffer variants.
     * Value between 0 and 100.
     */
    value: PropTypes.number.isRequired,
};

const ListingInfo = () => {

    const [progress, setProgress] = React.useState(10);

    React.useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 0));
        }, 800);
        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <Container maxWidth="xl">
            <Box sx={{ boxShadow: "rgba(145, 158, 171, 0.3) 0px 0px 2px 0px, rgba(145, 158, 171, 0.12) 0px 12px 24px -4px", p: 3, borderRadius: "6px", mt: 1 }}>
                <Grid container spacing={3} sx={{ minHeight: "75vh" }}>
                    <Grid item xs={12} md={3} sx={{ display: "flex", }}>
                        <Box className="bg-gradient" sx={{
                            boxShadow: "#d9e2ff 0px 0px 2px 0px, #d9e2ff 0px 7px 12px -10px", p: 2, borderRadius: "6px", width: "100%", position: "relative"
                        }}>
                            <Box sx={{ display: "flex", alignItems: "center", mt: 0.5 }}>
                                <Box sx={{ width: "30px", height: "30px", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "50%", background: "#8062d8b3" }}>
                                    <KeyboardBackspaceIcon sx={{ color: "#fff" }} />
                                </Box>
                                <Box sx={{ ml: 1 }}>
                                    <Typography>Return to dashboard</Typography>
                                </Box>
                            </Box>
                            <Box sx={{ p: 2, background: "#fff", mt: 3, borderRadius: "6px", boxShadow: "#d9e2ff 0px 0px 2px 0px, #d9e2ff 0px 7px 12px -10px" }}>
                                <Box>
                                    <Typography sx={{ fontWeight: 500, fontSize: "20px" }}>Post your property</Typography>
                                </Box>
                                <Box sx={{ mt: 0.4 }}>
                                    <Typography sx={{ fontSize: "13px", color: "#222222" }}>Sell or rent your property</Typography>
                                </Box>
                                <Box sx={{ width: '100%', mt: 1 }}>
                                    <LinearProgressWithLabel value={progress} />
                                </Box>
                            </Box>
                            <Box sx={{ position: "absolute", bottom: "0px", width: '90%', marginLeft: "auto", marginRight: "auto" }}>
                                <img src="../assets/home.svg" style={{ width: "100%", opacity: "0.7" }} alt="home" />
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={9} sx={{ display: "flex", }}>
                        <Box sx={{ boxShadow: "#d9e2ff 0px 0px 2px 0px, #d9e2ff 0px 7px 12px -10px", p: 2, borderRadius: "6px", width: "100%" }}>
                            <ListingStepper />
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Container >
    )
}

export default ListingInfo