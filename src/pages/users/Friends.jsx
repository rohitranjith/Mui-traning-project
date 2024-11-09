import { Box, Grid, Skeleton, Typography } from '@mui/material'
import React from 'react'
import axios from 'axios';
import { useEffect } from 'react'
import { useState } from 'react'


const Friends = () => {

    useEffect(() => {
        getFollowersList()
    }, []);


    const [friendsList, setFriendsList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const getFollowersList = async () => {
        try {
            setIsLoading(true)
            const resp = await axios.get("https://reqres.in/api/users?page=2")
            setFriendsList(resp.data.data)
            setIsLoading(false)
        }
        catch (err) {
            setIsLoading(false)
            console.log(err)
        }
    }

    return (
        <>
            <Box sx={{ display: "flex", alignItems: "center" }}>
                <Box>
                    <Typography sx={{ fontSize: "26px", fontWeight: "500" }}>Friends</Typography>
                </Box>
                <Box sx={{ ml: 2 }}>
                    <Typography sx={{ display: "flex", alignItems: "center", justifyContent: "center", background: "#49beff", color: "#fff", width: "25px", height: "25px", borderRadius: "50%", fontSize: "14px", fontWeight: "500" }}>{friendsList.length}</Typography>
                </Box>
            </Box>

            <Box sx={{ mt: 3, minHeight: "200px" }}>
                <Grid container spacing={2}>
                    {
                        isLoading === false
                            ?
                            friendsList.map((value, index) => (
                                <Grid item xs={12} md={4} key={index}>
                                    <Box sx={{ boxShadow: "rgba(145, 158, 171, 0.3) 0px 0px 2px 0px, rgba(145, 158, 171, 0.12) 0px 12px 24px -4px", borderRadius: "7px 7px 0px 0px", p: 2 }}>
                                        <Box sx={{}}>
                                            <Box sx={{}}>
                                                <Box sx={{ width: "70px", height: "70px", borderRadius: "50%", overflow: "hidden", marginLeft: "auto", marginRight: "auto" }}>
                                                    <img style={{ width: "100%", height: "100%", objectFit: "cover" }} src={value.avatar} alt="" />
                                                </Box>
                                                <Box sx={{ mt: 2, textAlign: "center" }}>
                                                    <Box>
                                                        <Typography sx={{ fontSize: "16px", fontWeight: "500" }}>{value.first_name}</Typography>
                                                    </Box>
                                                    <Box>
                                                        <a href={`mailto:${value.email}`} style={{ fontSize: "14px", textDecoration: "none", color: "#2a3547" }}>{value.email}</a>
                                                    </Box>
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Box>
                                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", background: "#f2f6fa", p: 2, borderRadius: "0px 0px 7px 7px", }}>
                                        <Box sx={{ width: "18px", height: "18px", }}>
                                            <img style={{ width: "100%", height: "100%", }} src="../assets/facebook.svg" alt="" />
                                        </Box>
                                        <Box sx={{ width: "18px", height: "18px", ml: 1.8 }}>
                                            <img style={{ width: "100%", height: "100%", }} src="../assets/instagram.svg" alt="" />
                                        </Box>
                                        <Box sx={{ width: "18px", height: "18px", ml: 1.8 }}>
                                            <img style={{ width: "100%", height: "100%", }} src="../assets/gitup.svg" alt="" />
                                        </Box>
                                        <Box sx={{ width: "18px", height: "18px", ml: 1.8 }}>
                                            <img style={{ width: "100%", height: "100%", }} src="../assets/twitter.svg" alt="" />
                                        </Box>
                                    </Box>
                                </Grid>
                            ))
                            :
                            [1, 2, 3, 4, 5, 6].map((item) => (
                                <Grid item xs={12} md={4} key={item}>
                                    <Box sx={{ boxShadow: "rgba(145, 158, 171, 0.3) 0px 0px 2px 0px, rgba(145, 158, 171, 0.12) 0px 12px 24px -4px", borderRadius: "7px 7px 0px 0px", p: 2 }}>
                                        <Box sx={{}}>
                                            <Box sx={{}}>
                                                <Box sx={{ width: "70px", height: "70px", borderRadius: "50%", overflow: "hidden", marginLeft: "auto", marginRight: "auto" }}>
                                                    <Skeleton variant="circular" width={50} height={50} />
                                                </Box>
                                                <Box sx={{ mt: 2, textAlign: "center" }}>
                                                    <Box>
                                                        <Skeleton variant="text" sx={{ fontSize: '1rem', width: "60px", marginLeft: "auto", marginRight: "auto" }} />
                                                    </Box>
                                                    <Box>
                                                        <Skeleton variant="text" sx={{ fontSize: '1rem', width: "70px", marginLeft: "auto", marginRight: "auto" }} />
                                                    </Box>
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Box>
                                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", background: "#f2f6fa", p: 2, borderRadius: "0px 0px 7px 7px", }}>
                                        <Box sx={{ width: "18px", height: "18px", }}>
                                            <Skeleton variant="circular" width={20} height={20} />
                                        </Box>
                                        <Box sx={{ width: "18px", height: "18px", ml: 1.8 }}>
                                            <Skeleton variant="circular" width={20} height={20} />
                                        </Box>
                                        <Box sx={{ width: "18px", height: "18px", ml: 1.8 }}>
                                            <Skeleton variant="circular" width={20} height={20} />
                                        </Box>
                                        <Box sx={{ width: "18px", height: "18px", ml: 1.8 }}>
                                            <Skeleton variant="circular" width={20} height={20} />
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

export default Friends