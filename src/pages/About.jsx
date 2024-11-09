import { Box, Button, Container, Grid, Typography, IconButton } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Breadcrumbs from '@mui/material/Breadcrumbs';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import FiberManualRecordOutlinedIcon from '@mui/icons-material/FiberManualRecordOutlined';
import { Formik, Form, Field } from 'formik';
import { TextField } from 'formik-mui';
import * as Yup from "yup";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';


const About = () => {

    const [postComment, setPostComment] = useState([]);

    // const createData = () => {
    //     setPostComment(previousState => {
    //         return [{
    //             author: "Ranjith",
    //             imageurl: "https://modernize-nextjs.adminmart.com/images/profile/user-5.jpg",
    //             comment: "",
    //             commentOn: ""
    //         }]
    //     })
    // }

    // console.log(postComment)

    useEffect(() => {
        const data = window.localStorage.getItem("value")
        if (data !== null) setPostComment(JSON.parse(data))
    }, [])

    useEffect(() => {
        window.localStorage.setItem("value", JSON.stringify(postComment))
    }, [postComment])

    const [editData, setEditData] = useState(
        {
            first_name: "",
        }
    );

    // console.log(editData)

    const removeData = (index) => {

        if (index > -1) {
            postComment.splice(index, 1)
            localStorage.setItem('values', postComment)
            setPostComment([...postComment]);

            // setPostComment(previousState => {
            //     return ([...previousState, postComment])
            // });

        }
    }


    const [count, setCount] = useState([]);

    // const handleUpdate = () => {
    //     postComment.splice(count, 1, postComment)
    //     setPostComment([...postComment])
    // }

    // const updateData = (index) => {
    //     setCount(previousState => {
    //         return { ...previousState, postComment[index] = { first_name: post } }
    //     });
    // }

    // const updateData = () => {
    //     editData[count] = { first_name: postComment }        
    //     setEditData(previousState => {
    //         return {
    //             ...previousState, first_name: postComment
    //         }

    //     });
    // }

    // console.log(count)


    const d = new Date();
    let date = d.toDateString();
    return (
        <>
            <Container maxWidth="lg">
                <Box sx={{ mt: 2 }}>
                    <Box sx={{ background: "#ecf2ff", p: 3, borderRadius: "12px", position: "relative", overflow: "hidden" }}>
                        <Box>
                            <Box>
                                <Box>
                                    <Typography sx={{ fontSize: "22px", fontWeight: "500", color: "#2A3547" }}>About</Typography>
                                </Box>
                                <Box sx={{ mt: 1 }}>
                                    <Breadcrumbs aria-label="breadcrumb">
                                        <Typography color="inherit" sx={{ fontSize: "15px" }}> Home </Typography>
                                        <Typography color="inherit" sx={{ fontSize: "15px" }}> About </Typography>
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

                {/* About Card design */}

                <Box sx={{ mt: 3 }}>
                    <Box sx={{ boxShadow: "rgba(145, 158, 171, 0.3) 0px 0px 2px 0px, rgba(145, 158, 171, 0.12) 0px 12px 24px -4px", borderRadius: "12px", overflow: "hidden", mb: 4 }}>
                        <Box sx={{ position: "relative" }}>
                            <Box>
                                <img style={{ width: "100%", height: "400px", objectFit: "cover" }} src="https://modernize-nextjs.adminmart.com/images/blog/blog-img5.jpg" alt="" />
                            </Box>
                            <Box sx={{ position: "absolute", right: "25px", bottom: "30px" }}>
                                <Typography sx={{ fontSize: "12px", fontWeight: "500", background: "#fff", borderRadius: "16px", px: 1, py: 0.4 }}>2 min Read</Typography>
                            </Box>
                            <Box sx={{ position: "absolute", left: "25px", bottom: "-20px" }}>
                                <img style={{ width: "40px", height: "40px", objectFit: "cover", borderRadius: "50%" }} src="https://modernize-nextjs.adminmart.com/images/profile/user-5.jpg" alt="" />
                            </Box>
                        </Box>
                        <Box sx={{ p: 2, mt: 2 }}>
                            <Box>
                                <Typography variant='span' sx={{ fontSize: "12px", background: "#ebebeb", borderRadius: "16px", px: 1, py: 0.4 }}>Lifestyle</Typography>
                            </Box>
                            <Box sx={{ mt: 3 }}>
                                <Typography sx={{ color: "#2a3547" }} variant='h4'>Streaming video way before it was cool, go dark tomorrow</Typography>
                            </Box>
                            <Box sx={{ mt: 3, mb: 2 }}>
                                <Grid container spacing={2}>
                                    <Grid item xs={10}>
                                        <Box sx={{ display: "flex" }}>
                                            <Box sx={{ display: "flex", alignItems: "center" }}>
                                                <VisibilityOutlinedIcon sx={{ color: "#2d3849", mr: 1, fontSize: "20px", marginTop: "2px" }} />
                                                <Typography sx={{ color: "#747b87", fontSize: "15px" }} variant='span'>9553</Typography>
                                            </Box>
                                            <Box sx={{ display: "flex", alignItems: "center", ml: 3 }}>
                                                <MessageOutlinedIcon sx={{ color: "#2d3849", mr: 1, fontSize: "18px", marginTop: "2px" }} />
                                                <Typography sx={{ color: "#747b87", fontSize: "15px" }} variant='span'>3</Typography>
                                            </Box>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <Box sx={{ display: "flex", alignItems: "center", ml: 3, justifyContent: 'end' }}>
                                            <FiberManualRecordOutlinedIcon sx={{ color: "#2d3849", mr: 0.5, fontSize: "12px", }} />
                                            <Typography variant='span' sx={{ fontSize: "13px" }}>Sun, Aug 6</Typography>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Box>
                        <Box sx={{ borderTop: "1px solid #e5eaef" }}>
                            <Box sx={{ p: 3, pb: 1 }}>
                                <Box>
                                    <Box sx={{ mt: 2 }}>
                                        <Typography sx={{ color: "#2a3547" }} variant='h4'>Title of the paragraph</Typography>
                                    </Box>
                                    <Box sx={{ mt: 2 }}>
                                        <Typography sx={{ fontSize: "14px", color: "#2a3547" }}>
                                            But you cannot figure out what it is or what it can do. MTA web directory is the simplest way in which one can bid on a link,
                                            or a few links if they wish to do so. The link directory on MTA displays all of the links it currently has, and does so in alphabetical
                                            order, which makes it much easier for someone to find what they are looking for if it is something specific and they do not
                                            want to go through all the other sites and links as well. It allows you to start your bid at the bottom and slowly work your
                                            way to the top of the list.
                                        </Typography>
                                    </Box>
                                    <Box sx={{ mt: 2 }}>
                                        <Typography sx={{ fontSize: "14px", color: "#2a3547" }}>
                                            Gigure out what it is or what it can do. MTA web directory is the simplest way in which one can bid on a link, or a few links if they wish to do so.
                                            The link directory on MTA displays all of the links it currently has, and does so in alphabetical order, which makes it much easier for someone to
                                            find what they are looking for if it is something specific and they do not want to go through all the other sites and links as well.
                                        </Typography>
                                    </Box>
                                </Box>
                                <Box sx={{ borderTop: "1px solid #e5eaef", mt: 4 }}>
                                    <Box sx={{ mt: 4, mb: 4 }}>
                                        <Box>
                                            <Typography sx={{ fontWeight: '500', color: "#2a3547" }} variant='h5'>Unorder list.</Typography>
                                        </Box>
                                        <Box>
                                            <ul>
                                                <li style={{ fontSize: "14px", marginBottom: "6px" }}>Gigure out what it is or</li>
                                                <li style={{ fontSize: "14px", marginBottom: "6px" }}>The links it currently</li>
                                                <li style={{ fontSize: "14px", marginBottom: "6px" }}>It allows you to start your bid</li>
                                                <li style={{ fontSize: "14px", marginBottom: "6px" }}>Gigure out what it is or</li>
                                                <li style={{ fontSize: "14px", marginBottom: "6px" }}>The links it currently</li>
                                            </ul>
                                        </Box>
                                    </Box>
                                </Box>
                                <Box sx={{ borderTop: "1px solid #e5eaef", mt: 4 }}>
                                    <Box sx={{ mt: 4, mb: 4 }}>
                                        <Box>
                                            <Typography sx={{ fontWeight: '500', color: "#2a3547" }} variant='h5'>Order list.</Typography>
                                        </Box>
                                        <Box>
                                            <ul>
                                                <li style={{ fontSize: "14px", marginBottom: "6px" }}>Gigure out what it is or</li>
                                                <li style={{ fontSize: "14px", marginBottom: "6px" }}>The links it currently</li>
                                                <li style={{ fontSize: "14px", marginBottom: "6px" }}>It allows you to start your bid</li>
                                                <li style={{ fontSize: "14px", marginBottom: "6px" }}>Gigure out what it is or</li>
                                                <li style={{ fontSize: "14px", marginBottom: "6px" }}>The links it currently</li>
                                            </ul>
                                        </Box>
                                    </Box>
                                </Box>
                                <Box sx={{ borderTop: "1px solid #e5eaef", mt: 4 }}>
                                    <Box sx={{ mt: 4, }}>
                                        <Box>
                                            <Typography sx={{ fontWeight: '500', color: "#2a3547" }} variant='h5'>Post Comments</Typography>
                                        </Box>
                                        <Box sx={{ mt: 2 }}>
                                            <Formik
                                                enableReinitialize={true}
                                                initialValues={{ ...editData }}
                                                validationSchema={Yup.object({
                                                    first_name: Yup.string()
                                                        // .required("Comment is Required")
                                                        .min(3, 'Comment must be at least 3 characters')
                                                        .max(255, 'Comment Code cannot exceed 255 characters'),
                                                })}
                                                onSubmit={(values, { resetForm }) => {
                                                    setPostComment(post => {
                                                        return [...post, values.first_name]
                                                    });
                                                    resetForm();
                                                }}
                                            >
                                                <Form>
                                                    <Field
                                                        component={TextField}
                                                        id="outlined-multiline-static"
                                                        label="Comments"
                                                        name="first_name"
                                                        multiline
                                                        fullWidth
                                                        rows={3}
                                                    />
                                                    <Box sx={{ mt: 4, }}>
                                                        <Button
                                                            variant="outlined"
                                                            color="primary"
                                                            type='submit'
                                                            onClick={() => {
                                                                // updateData()
                                                                // createData()
                                                                // setCount(index)
                                                                // console.log(setCount)
                                                            }}
                                                        >
                                                            Post Comment
                                                        </Button>
                                                    </Box>
                                                </Form>
                                            </Formik>
                                        </Box>
                                        <Box sx={{ mt: 4 }}>
                                            <Box sx={{ display: "flex", alignItems: "center", }}>
                                                <Box>
                                                    <Typography sx={{ fontWeight: '500', color: "#2a3547" }} variant='h5'>Comments</Typography>
                                                </Box>
                                                <Box sx={{ ml: 2 }}>
                                                    <Typography sx={{ borderRadius: "7px", fontWeight: "500", background: "#ecf2ff", color: "#5d87ff", width: "30px", height: "30px", display: "flex", alignItems: "center", justifyContent: "center" }}>{postComment.length}</Typography>
                                                </Box>
                                            </Box>
                                            <Box sx={{ mt: 3 }}>
                                                {
                                                    postComment.map((post, index) => (
                                                        <Box key={index} sx={{ background: "#ecf2ff", p: 2, borderRadius: "7px", mb: 2 }}>
                                                            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                                                                <Box sx={{ display: "flex", alignItems: 'center', }}>
                                                                    <Box sx={{ mr: 2 }}>
                                                                        <img style={{ width: "40px", height: "40px", objectFit: "cover", borderRadius: "50%" }} src="https://modernize-nextjs.adminmart.com/images/profile/user-2.jpg" alt="" />
                                                                    </Box>
                                                                    <Box>
                                                                        <Typography sx={{ fontSize: "18px", fontWeight: "500" }}>Ranjith IAS</Typography>
                                                                    </Box>
                                                                </Box>
                                                                <Box>
                                                                    <IconButton
                                                                        onClick={() => {
                                                                            setEditData({
                                                                                first_name: post
                                                                            })
                                                                            setCount(index)
                                                                        }}
                                                                    >
                                                                        <EditOutlinedIcon color='primary' />
                                                                    </IconButton>
                                                                    <IconButton onClick={() => {
                                                                        removeData(index)
                                                                    }}>
                                                                        <DeleteOutlineIcon color='error' />
                                                                    </IconButton>
                                                                </Box>
                                                            </Box>
                                                            <Box sx={{ my: 2 }}>
                                                                <Typography sx={{ fontSize: "14px", color: "#2a3547" }}>{post}</Typography>
                                                            </Box>
                                                            <Box sx={{ textAlign: "right" }}>
                                                                <Typography sx={{ fontSize: '14px' }}>{date}</Typography>
                                                            </Box>
                                                        </Box>
                                                    ))
                                                }
                                            </Box>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>

                {/* About Card End */}

            </Container>

        </>
    )
}

export default About