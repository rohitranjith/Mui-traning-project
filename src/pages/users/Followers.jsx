import { Box, Grid, Typography, Button, Skeleton } from '@mui/material'
import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios';

const FollowButton = () => {

    const [isActive, setIsActive] = useState(true)

    const handleClick = event => {
        setIsActive(current => !current);
    };

    return (
        <>
            <Box>
                <Button sx={{ textTransform: "capitalize" }} variant={isActive ? "outlined" : "contained"} size='small' onClick={handleClick}>{isActive ? "Follow" : "Followed"}</Button>
            </Box>
        </>
    )
}

const Followers = () => {

    useEffect(() => {
        getFollowersList()
    }, []);


    const [followersList, setFollowersList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const getFollowersList = async () => {
        try {
            setIsLoading(true)
            const resp = await axios.get("https://reqres.in/api/users?page=2")
            setFollowersList(resp.data.data)
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
                    <Typography sx={{ fontSize: "26px", fontWeight: "500" }}>Followers</Typography>
                </Box>
                <Box sx={{ ml: 2 }}>
                    <Typography sx={{ display: "flex", alignItems: "center", justifyContent: "center", background: "#49beff", color: "#fff", width: "25px", height: "25px", borderRadius: "50%", fontSize: "14px", fontWeight: "500" }}>{followersList.length}</Typography>
                </Box>
            </Box>

            <Box sx={{ mt: 3, minHeight: "200px" }}>
                <Grid container spacing={2}>
                    {
                        isLoading === false
                            ?
                            followersList.map((value, index) => (
                                <Grid item xs={12} md={4} key={index}>
                                    <Box sx={{ boxShadow: "rgba(145, 158, 171, 0.3) 0px 0px 2px 0px, rgba(145, 158, 171, 0.12) 0px 12px 24px -4px", borderRadius: "7px", p: 2 }}>
                                        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                                            <Box sx={{ display: "flex", alignItems: "center" }}>
                                                <Box sx={{ width: "50px", height: "50px", borderRadius: "50%", overflow: "hidden" }}>
                                                    <img style={{ width: "100%", height: "100%", objectFit: "cover" }} src={value.avatar} alt="" />
                                                </Box>
                                                <Box sx={{ ml: 2 }}>
                                                    <Box>
                                                        <Typography sx={{ fontSize: "16px", fontWeight: "500" }}>{value.first_name}</Typography>
                                                    </Box>
                                                    <Box sx={{}}>
                                                        <Box sx={{ ml: 0.4 }}>
                                                            <Typography sx={{ fontSize: "13px" }}>{value.email}</Typography>
                                                        </Box>
                                                    </Box>
                                                </Box>
                                            </Box>
                                            <Box>
                                                <FollowButton />
                                            </Box>
                                        </Box>
                                    </Box>
                                </Grid>
                            ))
                            :

                            [1, 2, 3, 4, 5, 6].map((item) => (
                                <Grid key={item} item xs={12} md={4}>
                                    <Box sx={{ boxShadow: "rgba(145, 158, 171, 0.3) 0px 0px 2px 0px, rgba(145, 158, 171, 0.12) 0px 12px 24px -4px", borderRadius: "7px", p: 2 }}>
                                        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                                            <Box sx={{ display: "flex", alignItems: "center" }}>
                                                <Box sx={{ width: "50px", height: "50px", borderRadius: "50%", overflow: "hidden" }}>
                                                    <Skeleton variant="circular" width={50} height={50} />
                                                </Box>
                                                <Box sx={{ ml: 2 }}>
                                                    <Box>
                                                        <Skeleton variant="text" sx={{ fontSize: '1rem', width: "50px" }} />
                                                    </Box>
                                                    <Box sx={{}}>
                                                        <Box sx={{ ml: 0.4 }}>
                                                            <Skeleton variant="text" sx={{ fontSize: '1rem', width: "60px" }} />
                                                        </Box>
                                                    </Box>
                                                </Box>
                                            </Box>
                                            <Box>
                                                <Skeleton variant="text" sx={{ fontSize: '1rem', width: "50px" }} />
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

export default Followers