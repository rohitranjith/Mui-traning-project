import { Box, Breadcrumbs, Container, Grid, Tooltip, Typography } from '@mui/material'
import React from 'react'
import Rating from '@mui/material/Rating';
import Data from '../../data/JsonData';
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';

const Shop = () => {
    return (
        <>
            <Container maxWidth="lg">
                <Box sx={{ mt: 2 }}>
                    <Box sx={{ background: "#ecf2ff", p: 3, borderRadius: "12px", position: "relative", overflow: "hidden" }}>
                        <Box>
                            <Box>
                                <Box>
                                    <Typography sx={{ fontSize: "22px", fontWeight: "500", color: "#2A3547" }}>Ecom-Shop</Typography>
                                </Box>
                                <Box sx={{ mt: 1 }}>
                                    <Breadcrumbs aria-label="breadcrumb">
                                        <Typography color="inherit" sx={{ fontSize: "15px" }}> Home </Typography>
                                        <Typography color="inherit" sx={{ fontSize: "15px" }}> Shop </Typography>
                                    </Breadcrumbs>
                                </Box>
                            </Box>
                            <Box>
                                <Box sx={{ width: "165px", height: "165px", position: "absolute", right: "20px", top: "0" }}>
                                    <img style={{ width: "100%", height: "100%" }} src="https://modernize-nextjs.adminmart.com/_next/image?url=%2Fimages%2Fbreadcrumb%2FChatBc.png&w=256&q=75" alt="" />
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Box sx={{ mt: 3 }}>
                    <Box sx={{ boxShadow: "rgba(145, 158, 171, 0.3) 0px 0px 2px 0px, rgba(145, 158, 171, 0.12) 0px 12px 24px -4px", borderRadius: "12px", overflow: "hidden", p: 2 }}>
                        <Box>
                            <Typography sx={{ fontSize: "20px", fontWeight: 500, mb: 2 }}>Our Products</Typography>
                        </Box>
                        <Grid container spacing={3}>

                            {
                                Data.Products.map((card, index) => (
                                    <Grid item xs={12} md={4} key={index}>
                                        <Box sx={{ boxShadow: "rgba(145, 158, 171, 0.3) 0px 0px 2px 0px, rgba(145, 158, 171, 0.12) 0px 12px 24px -4px", borderRadius: "12px", overflow: "hidden", }}>
                                            <Box sx={{ width: "100%", height: "250px" }}>
                                                <img style={{ width: "100%", height: "100%", objectFit: "cover" }} src={card.imgurl} alt="" />
                                            </Box>
                                            <Box sx={{ p: 2, position: "relative" }}>
                                                <Box>
                                                    <Typography sx={{ fontWeight: 500 }}>{card.name}</Typography>
                                                </Box>
                                                <Tooltip title="Add To Cart" arrow placement="top" color='primary'>
                                                    <Box sx={{ position: "absolute", cursor: "pointer", top: "-18px", right: "15px", display: "flex", alignItems: "center", justifyContent: "center", background: '#1976d2', width: "35px", height: "35px", borderRadius: "50%" }}>
                                                        <LocalGroceryStoreOutlinedIcon sx={{ color: "#fff", width: "18px", height: "18px" }} />
                                                    </Box>
                                                </Tooltip>
                                                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mt: 0.6 }}>
                                                    <Box sx={{ display: "flex", alignItems: "center" }}>
                                                        <Box>
                                                            <Typography sx={{ fontWeight: 500 }}>{card.currentPrice}</Typography>
                                                        </Box>
                                                        <Box sx={{ ml: 2 }}>
                                                            <Typography sx={{ textDecoration: "line-through" }}>{card.oldPrice}</Typography>
                                                        </Box>
                                                    </Box>
                                                    <Box>
                                                        <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
                                                    </Box>
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Grid>
                                ))
                            }

                        </Grid>
                    </Box>
                </Box>
            </Container >
        </>
    )
}

export default Shop