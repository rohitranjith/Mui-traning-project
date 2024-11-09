import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

const Location = () => {

    return (
        <Box sx={{ height: "60vh" }}>
            <Box sx={{ mt: 1, position: "relative", height: "100%" }}>
                <Box>
                    <Box>
                        <Typography sx={{ fontSize: "20px", }}>Property Location</Typography>
                    </Box>
                    <Box sx={{ mt: 0.5 }}>
                        <Typography sx={{ fontSize: 15, color: "grey" }}>Enter some information about property type</Typography>
                    </Box>
                </Box>
                <Grid container spacing={2} sx={{ alignItems: "center", mt: 0.5 }}>
                    <Grid item xs={12} md={7}>
                        <Box>
                            <TextField label="Enter the address" fullWidth variant="outlined"
                                InputProps={{
                                    // style: { fontSize: "13px" },
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <LocationOnOutlinedIcon sx={{ color: "#b5b5b5" }} />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </Box>
                        <Box>
                            <Grid container spacing={2} sx={{ mt: 0.4 }}>
                                <Grid item xs={12} md={6}>
                                    <TextField label="City" fullWidth variant="outlined"
                                        InputProps={{
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    <LocationOnOutlinedIcon sx={{ color: "#b5b5b5" }} />
                                                </InputAdornment>
                                            ),
                                        }} />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <TextField label="State" fullWidth variant="outlined"
                                        InputProps={{
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    <LocationOnOutlinedIcon sx={{ color: "#b5b5b5" }} />
                                                </InputAdornment>
                                            ),
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <TextField label="Street" fullWidth variant="outlined"
                                        InputProps={{
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    <LocationOnOutlinedIcon sx={{ color: "#b5b5b5" }} />
                                                </InputAdornment>
                                            ),
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <TextField label="Zip code" fullWidth variant="outlined"
                                        InputProps={{
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    <LocationOnOutlinedIcon sx={{ color: "#b5b5b5" }} />
                                                </InputAdornment>
                                            ),
                                        }}
                                    />
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={5}>
                        <Box sx={{ position: "absolute", width: "34%", right: "20px", top: "40px" }}>
                            <img style={{ width: "100%", height: "100%", opacity: "0.8" }} src="../assets/location-map.svg" alt="" />
                        </Box>
                    </Grid>
                </Grid>
                <Box sx={{ mt: 2 }}>
                    <Box sx={{ boxShadow: "#d9e2ff 0px 0px 2px 0px, #d9e2ff 0px 7px 12px -10px", p: 1.2, borderRadius: "6px", height: "285px" }}>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3907.2832133286197!2d78.12594747591281!3d11.674329641988681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babf17263043079%3A0xfff85d6bebd0a402!2sOutsource%20Infotech!5e0!3m2!1sen!2sin!4v1694600632963!5m2!1sen!2sin" style={{ width: "100%", height: "100%", border: "0", borderRadius: "6px" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Location