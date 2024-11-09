import { Box, Grid, Typography, IconButton } from '@mui/material'
import React from 'react'
import Data from '../../data/JsonData'
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';

const Gallery = () => {
    return (
        <>
            <Box sx={{ display: "flex", alignItems: "center" }}>
                <Box>
                    <Typography sx={{ fontSize: "26px", fontWeight: "500" }}>Gallery</Typography>
                </Box>
                <Box sx={{ ml: 2 }}>
                    <Typography sx={{ display: "flex", alignItems: "center", justifyContent: "center", background: "#49beff", color: "#fff", width: "32px", height: "25px", borderRadius: "45%", fontSize: "14px", fontWeight: "500" }}>{Data.UserGallery.length}</Typography>
                </Box>
            </Box>

            <Box sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                    {
                        Data.UserGallery.map((value, index) => (
                            <Grid item xs={12} md={4} key={index}>
                                <Box sx={{ boxShadow: "rgba(145, 158, 171, 0.3) 0px 0px 2px 0px, rgba(145, 158, 171, 0.12) 0px 12px 24px -4px", borderRadius: "7px", }}>
                                    <Box sx={{ width: "100%", height: "250px", }}>
                                        <img style={{ width: "100%", height: "100%", objectFit: "cover" }} src={value.imgsrc} alt="" />
                                    </Box>
                                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", p: 2 }}>
                                        <Box sx={{}}>
                                            <Box sx={{}}>
                                                <Typography sx={{ fontSize: "16px", fontWeight: "500" }}>{value.imgname}</Typography>
                                            </Box>
                                            <Box sx={{}}>
                                                <Typography sx={{ fontSize: "13px" }}>{value.date}</Typography>
                                            </Box>
                                        </Box>
                                        <Box>
                                            <IconButton>
                                                <MoreVertOutlinedIcon />
                                            </IconButton>
                                        </Box>
                                    </Box>
                                </Box>
                            </Grid>
                        ))
                    }

                </Grid>
            </Box >
        </>
    )
}

export default Gallery