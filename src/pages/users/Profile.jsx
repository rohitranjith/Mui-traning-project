import { Box, Button, Grid, IconButton, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import ComputerOutlinedIcon from '@mui/icons-material/ComputerOutlined';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import CollectionsIcon from '@mui/icons-material/Collections';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import Data from '../../data/JsonData';
import { Formik, Form, Field } from 'formik';
import { TextField } from 'formik-mui';
import * as Yup from "yup";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const Profile = () => {

    const [thoughts, setThoughts] = useState([]);

    useEffect(() => {
        const data = window.localStorage.getItem('value');
        if (data !== null) setThoughts(JSON.parse(data))
    }, [])

    useEffect(() => {
        window.localStorage.setItem('value', JSON.stringify(thoughts))
    }, [thoughts])

    const removeData = (index) => {
        // window.localStorage.removeItem('value');
        // setThoughts([]);
        if (index > -1) {
            thoughts.splice(index, 1)
            window.localStorage.getItem("value");
            setThoughts([...thoughts])
        }
    }

    const d = new Date();
    let date = d.toDateString();

    return (
        <>
            <Box>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={4}>
                        <Box sx={{ border: "1px solid #e5eaef", p: 2, borderRadius: "7px" }}>
                            <Box>
                                <Typography sx={{ fontSize: "20px", fontWeight: "500" }}>Introduction</Typography>
                            </Box>
                            <Box sx={{ mt: 2 }}>
                                <Typography sx={{ fontSize: "14px", color: "#2a3547" }}>Hello, I am Julia Roberts. I love making websites and graphics. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Typography>
                            </Box>
                            <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
                                <Box sx={{ height: "24px", width: "24px" }}>
                                    <BusinessCenterOutlinedIcon sx={{ color: "#2a3547" }} />
                                </Box>
                                <Box sx={{ ml: 2 }}>
                                    <Typography sx={{ color: "#2a3547", fontSize: "18px", }}>Sir, P P Institute Of Science</Typography>
                                </Box>
                            </Box>
                            <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
                                <Box sx={{ height: "24px", width: "24px" }}>
                                    <EmailOutlinedIcon sx={{ color: "#2a3547" }} />
                                </Box>
                                <Box sx={{ ml: 2 }}>
                                    <Typography sx={{ color: "#2a3547", fontSize: "18px", }}>xyzjonathan@gmail.com</Typography>
                                </Box>
                            </Box>
                            <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
                                <Box sx={{ height: "24px", width: "24px" }}>
                                    <ComputerOutlinedIcon sx={{ color: "#2a3547" }} />
                                </Box>
                                <Box sx={{ ml: 2 }}>
                                    <Typography sx={{ color: "#2a3547", fontSize: "18px", }}>www.xyz.com</Typography>
                                </Box>
                            </Box>
                            <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
                                <Box sx={{ height: "24px", width: "24px" }}>
                                    <PlaceOutlinedIcon sx={{ color: "#2a3547" }} />
                                </Box>
                                <Box sx={{ ml: 2 }}>
                                    <Typography sx={{ color: "#2a3547", fontSize: "18px", }}>Newyork, USA - 100001</Typography>
                                </Box>
                            </Box>
                        </Box>
                        <Box sx={{ border: "1px solid #e5eaef", p: 2, borderRadius: "7px", mt: 2 }}>
                            <Box sx={{ mb: 1 }}>
                                <Typography sx={{ fontSize: "20px", fontWeight: "500" }}>Photos</Typography>
                            </Box>
                            <Grid container spacing={2}>
                                {
                                    Data.ProfileImg.map((value, index) => (
                                        <Grid key={index} item xs={12} md={4}>
                                            <Box sx={{ width: "100%", height: "90px", borderRadius: "7px", overflow: "hidden", }}>
                                                <img style={{ width: "100%", height: "100%", objectFit: "cover" }} src={value.imgpath} alt="" />
                                            </Box>
                                        </Grid>
                                    ))
                                }
                            </Grid>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={8}>
                        <Box sx={{ border: "1px solid #e5eaef", p: 2, borderRadius: "7px" }}>
                            <Box sx={{ mt: 2 }}>
                                <Formik
                                    initialValues={{
                                        first_name: "",
                                    }}
                                    validationSchema={Yup.object({
                                        first_name: Yup.string()
                                            .required("Comment is Required")
                                    })}
                                    onSubmit={(values, { resetForm }) => {
                                        setThoughts(post => {
                                            return [...post, values.first_name]
                                        });

                                        resetForm();

                                    }}
                                >
                                    <Form>
                                        <Field
                                            component={TextField}
                                            id="outlined-multiline-static"
                                            label="Share your thoughts"
                                            name="first_name"
                                            multiline
                                            fullWidth
                                            rows={4}
                                        />
                                        <Grid container spacing={2} sx={{ ml: 0, mt: 0, pt: 2, width: "100%", alignItems: "center" }}>
                                            <Grid item xs={12} md={6}>
                                                <Box sx={{ display: 'flex', alignItems: "center" }}>
                                                    <Box sx={{ display: 'flex', alignItems: "center" }}>
                                                        <Box>
                                                            <CollectionsIcon sx={{ p: 0.6, background: "#4570ea", borderRadius: "50%", color: "#fff", width: "15px", height: "15px", display: "flex", alignItems: "center", justifyContent: "center" }} />
                                                        </Box>
                                                        <Box sx={{ ml: 2 }}>
                                                            <Typography sx={{ color: "#2a3547" }}>Photo</Typography>
                                                        </Box>
                                                    </Box>
                                                    <Box sx={{ display: 'flex', alignItems: "center", ml: 5 }}>
                                                        <Box>
                                                            <ArticleOutlinedIcon sx={{ p: 0.6, background: "#49beff", borderRadius: "50%", color: "#fff", width: "15px", height: "15px", display: "flex", alignItems: "center", justifyContent: "center" }} />
                                                        </Box>
                                                        <Box sx={{ ml: 2 }}>
                                                            <Typography sx={{ color: "#2a3547" }}>Article</Typography>
                                                        </Box>
                                                    </Box>
                                                </Box>
                                            </Grid>
                                            <Grid item xs={12} md={6}>
                                                <Box sx={{ textAlign: "right" }}>
                                                    <Button
                                                        variant="outlined"
                                                        color="primary"
                                                        type='submit'
                                                    >
                                                        Post
                                                    </Button>
                                                </Box>
                                            </Grid>
                                        </Grid>
                                    </Form>
                                </Formik>
                            </Box>
                        </Box>
                        {
                            thoughts.map((post, index) => (
                                <Box key={index} sx={{ boxShadow: "rgba(145, 158, 171, 0.3) 0px 0px 2px 0px, rgba(145, 158, 171, 0.12) 0px 12px 24px -4px", p: 2, borderRadius: "7px", mt: 2 }}>
                                    <Grid container spacing={2} sx={{ ml: 0, mt: 0, alignItems: "center", width: "100%", }}>
                                        <Grid item xs={12} md={6}>
                                            <Box sx={{ display: "flex", alignItems: 'center' }}>
                                                <Box sx={{ mr: 2 }}>
                                                    <img style={{ width: "40px", height: "40px", objectFit: "cover", borderRadius: "50%" }} src="https://modernize-nextjs.adminmart.com/images/profile/user-5.jpg" alt="" />
                                                </Box>
                                                <Box>
                                                    <Typography sx={{ fontSize: "18px", fontWeight: "500" }}>Ranjith IAS</Typography>
                                                </Box>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={12} md={6}>
                                            <Box sx={{ display: "flex", alignItems: 'center', justifyContent: "end" }}>
                                                <Box sx={{ textAlign: "right" }}>
                                                    <Typography sx={{ fontSize: '14px' }}>{date}</Typography>
                                                </Box>
                                                <IconButton sx={{ ml: 1 }} onClick={() => {
                                                    removeData(index);
                                                }}>
                                                    <DeleteOutlineIcon color='error' sx={{ fontSize: "20px" }} />
                                                </IconButton>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                    <Box sx={{ my: 2 }}>
                                        <Typography sx={{ fontSize: "14px", color: "#2a3547" }}>{post}</Typography>
                                    </Box>
                                    <Box sx={{ width: "100%", height: "400px", borderRadius: "7px", overflow: "hidden" }}>
                                        <img style={{ width: "100%", height: "100%", objectFit: "cover" }} src="https://modernize-nextjs.adminmart.com/images/products/s1.jpg" alt="" />
                                    </Box>
                                    <Box>
                                        <Grid container spacing={2} sx={{ ml: 0, mt: 0, pt: 2, width: "100%" }}>
                                            <Grid item xs={12} md={6}>
                                                <Box sx={{ display: 'flex', alignItems: "center" }}>
                                                    <Box sx={{ display: 'flex', alignItems: "center" }}>
                                                        <Box>
                                                            <ThumbUpOutlinedIcon sx={{ p: 0.6, background: "#4570ea", borderRadius: "50%", color: "#fff", width: "15px", height: "15px", display: "flex", alignItems: "center", justifyContent: "center" }} />
                                                        </Box>
                                                        <Box sx={{ ml: 1 }}>
                                                            <Typography sx={{ fontWeight: "500" }}>45</Typography>
                                                        </Box>
                                                    </Box>
                                                    <Box sx={{ display: 'flex', alignItems: "center", ml: 2 }}>
                                                        <Box>
                                                            <ChatOutlinedIcon sx={{ p: 0.6, background: "#49beff", borderRadius: "50%", color: "#fff", width: "15px", height: "15px", display: "flex", alignItems: "center", justifyContent: "center" }} />
                                                        </Box>
                                                        <Box sx={{ ml: 1 }}>
                                                            <Typography sx={{ fontWeight: "500" }}>77</Typography>
                                                        </Box>
                                                    </Box>
                                                </Box>
                                            </Grid>
                                            <Grid item xs={12} md={6}>
                                                <Box sx={{ textAlign: "right" }}>
                                                    <ShareOutlinedIcon />
                                                </Box>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </Box>
                            ))
                        }
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default Profile