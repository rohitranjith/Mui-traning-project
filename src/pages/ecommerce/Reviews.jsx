import { Box, Button, Grid, Rating, Typography } from '@mui/material'
import React from 'react'
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 4,
    borderRadius: 5,
    minWidth: "100px",
    width: "180px",
    maxWidth: "180px",
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 5,
        backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
    },
}));

const Reviews = () => {
    return (
        <>
            <Box>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={4}>
                        <Box sx={{ border: "1px solid #e5eaef", p: 3, borderRadius: "7px" }}>
                            <Box sx={{ mt: 1, textAlign: 'center' }}>
                                <Typography sx={{ fontSize: "14px" }}>Average Rating</Typography>
                            </Box>
                            <Box sx={{ mt: 2, textAlign: 'center' }}>
                                <Typography sx={{ fontSize: "30px", color: "#1565c0", fontWeight: 500 }}>4/5</Typography>
                            </Box>
                            <Box sx={{ mt: 1.7, textAlign: 'center' }}>
                                <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Box sx={{ border: "1px solid #e5eaef", p: 3, borderRadius: "7px" }}>
                            <Box sx={{ display: "flex", justifyContent: "space-around", alignItems: "center" }}>
                                <Box>
                                    <Typography sx={{ fontSize: 14 }}>1 Stars</Typography>
                                </Box>
                                <Box>
                                    <BorderLinearProgress sx={{ minWidth: "100px", maxWidth: "200px" }} variant="determinate" value={50} />
                                </Box>
                                <Box>
                                    <Typography>(485)</Typography>
                                </Box>
                            </Box>
                            <Box sx={{ display: "flex", justifyContent: "space-around", alignItems: "center", mt: 0.4 }}>
                                <Box>
                                    <Typography sx={{ fontSize: 14 }}>2 Stars</Typography>
                                </Box>
                                <Box>
                                    <BorderLinearProgress sx={{ minWidth: "100px", maxWidth: "200px" }} variant="determinate" value={50} />
                                </Box>
                                <Box>
                                    <Typography>(215)</Typography>
                                </Box>
                            </Box>
                            <Box sx={{ display: "flex", justifyContent: "space-around", alignItems: "center", mt: 0.4 }}>
                                <Box>
                                    <Typography sx={{ fontSize: 14 }}>3 Stars</Typography>
                                </Box>
                                <Box>
                                    <BorderLinearProgress sx={{ minWidth: "100px", maxWidth: "200px" }} variant="determinate" value={50} />
                                </Box>
                                <Box>
                                    <Typography>(110)</Typography>
                                </Box>
                            </Box>
                            <Box sx={{ display: "flex", justifyContent: "space-around", alignItems: "center", mt: 0.4 }}>
                                <Box>
                                    <Typography sx={{ fontSize: 14 }}>4 Stars</Typography>
                                </Box>
                                <Box>
                                    <BorderLinearProgress sx={{ minWidth: "100px", maxWidth: "200px" }} variant="determinate" value={50} />
                                </Box>
                                <Box>
                                    <Typography>(620)</Typography>
                                </Box>
                            </Box>
                            <Box sx={{ display: "flex", justifyContent: "space-around", alignItems: "center", mt: 0.4 }}>
                                <Box>
                                    <Typography sx={{ fontSize: 14 }}>5 Stars</Typography>
                                </Box>
                                <Box>
                                    <BorderLinearProgress sx={{ minWidth: "100px", maxWidth: "200px" }} variant="determinate" value={50} />
                                </Box>
                                <Box>
                                    <Typography>(160)</Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Box sx={{ border: "1px solid #e5eaef", p: 3, borderRadius: "7px", minHeight: "130px", display: 'flex', alignItems: "center", justifyContent: "center" }}>
                            <Button variant="outlined" startIcon={<EditOutlinedIcon />}>
                                Write an Review
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default Reviews