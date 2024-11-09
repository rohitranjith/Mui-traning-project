import { Box, Breadcrumbs, Button, Container, Grid, IconButton, Typography } from '@mui/material'
import React, { useState, useEffect } from 'react'
import DialogBox from '../components/DialogBox'
import { Formik, Form, Field } from 'formik';
import { TextField } from 'formik-mui';
import * as Yup from "yup";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

const Contact = () => {

    const [open, setOpen] = useState(false);
    const [userDetails, setUserDetails] = useState([]);
    const [userShow, setUserShow] = useState([]);

    useEffect(() => {
        const user = window.localStorage.getItem("details")
        if (user !== null) setUserDetails(JSON.parse(user))
    }, [])

    useEffect(() => {
        window.localStorage.setItem("details", JSON.stringify(userDetails))
    }, [userDetails])

    const removeData = (index) => {
        // window.localStorage.removeItem("details");
        // setUserDetails([]);
        if (index > -1) {
            userDetails.splice(index, 1)
            window.localStorage.getItem("details")
            setUserDetails([...userDetails])
        }

    }

    return (
        <>
            <Container maxWidth="lg">
                <Box sx={{ mt: 2 }}>
                    <Box sx={{ background: "#ecf2ff", p: 3, borderRadius: "12px", position: "relative", overflow: "hidden" }}>
                        <Box>
                            <Box>
                                <Box>
                                    <Typography sx={{ fontSize: "22px", fontWeight: "500", color: "#2A3547" }}>Contact</Typography>
                                </Box>
                                <Box sx={{ mt: 1 }}>
                                    <Breadcrumbs aria-label="breadcrumb">
                                        <Typography color="inherit" sx={{ fontSize: "15px" }}> Home </Typography>
                                        <Typography color="inherit" sx={{ fontSize: "15px" }}> Contact </Typography>
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

                {/* Contact Details */}

                <Box sx={{ mt: 3 }}>
                    <Box sx={{ boxShadow: "rgba(145, 158, 171, 0.3) 0px 0px 2px 0px, rgba(145, 158, 171, 0.12) 0px 12px 24px -4px", borderRadius: "6px", overflow: "hidden", }}>
                        <Box sx={{ p: 2, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                            <Box>
                                <Typography sx={{ fontSize: "20px", fontWeight: 500 }}>Contact Details</Typography>
                            </Box>
                            <Box>
                                <Button sx={{ textTransform: "capitalize" }} variant="contained" onClick={() => {
                                    setOpen(true)
                                }}>Add New Contact</Button>
                            </Box>
                        </Box>
                        <Box sx={{ borderTop: "1px solid #e5eaef", }}>
                            <Grid container spacing={2} sx={{ mt: 0 }}>
                                <Grid item xs={12} md={4} className='overflow-scroll' sx={{ borderRight: "1px solid #e5eaef", maxHeight: "480px", overflow: "auto" }}>

                                    {
                                        userDetails.length > 0

                                            ?

                                            userDetails.map((value, index) => (
                                                <Box key={index} sx={{ p: 1, mx: 1.5, my: 1.2, borderRadius: "6px", transition: "0.4s", '&:hover': { background: "#ecf2ff" } }}
                                                    onClick={() => {
                                                        setUserShow(value);
                                                    }}
                                                >
                                                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                                                        <Box sx={{ display: "flex", alignItems: "center" }}>
                                                            <Box sx={{ width: "50px", height: "50px", overflow: "hidden", borderRadius: "50%" }}>
                                                                <img style={{ width: "100%", height: "100%", objectFit: "cover" }} src="https://modernize-nextjs.adminmart.com/images/profile/user-1.jpg" alt="" />
                                                            </Box>
                                                            <Box sx={{ ml: 2 }}>
                                                                <Box>
                                                                    <Typography sx={{ fontWeight: "500" }}>{value.first_name}</Typography>
                                                                </Box>
                                                                <Box>
                                                                    <Typography sx={{ fontSize: "12px" }}>{value.department}</Typography>
                                                                </Box>
                                                            </Box>
                                                        </Box>
                                                        <Box>
                                                            <IconButton onClick={() => {
                                                                removeData(index)
                                                            }}>
                                                                <DeleteOutlineIcon color='error' />
                                                            </IconButton>
                                                        </Box>
                                                    </Box>
                                                </Box>
                                            ))

                                            :
                                            <Box sx={{ p: 3 }}>
                                                <Box sx={{ textAlign: 'center' }}>
                                                    <Typography sx={{ fontSize: "20px", }}>Creat New Contact</Typography>
                                                </Box>
                                                <Box sx={{ mt: 4, textAlign: "center" }}>
                                                    <AccountCircleOutlinedIcon sx={{ fontSize: '100px', color: "#8f8f8f" }} />
                                                </Box>
                                            </Box>
                                    }


                                </Grid>



                                <Grid item xs={12} md={8}>
                                    {
                                        userDetails.length > 0
                                            ?
                                            <Box sx={{ p: 2, mb: 2 }}>
                                                <Box>
                                                    <Box sx={{ display: "flex", alignItems: "center" }}>
                                                        <Box sx={{ width: "80px", height: "80px", borderRadius: "50%", overflow: "hidden" }}>
                                                            <img style={{ width: "100%", height: "100%", objectFit: "cover" }} src="https://modernize-nextjs.adminmart.com/images/profile/user-1.jpg" alt="" />
                                                        </Box>
                                                        <Box sx={{ ml: 3 }}>
                                                            <Box>
                                                                <Typography sx={{ fontWeight: 500, fontSize: '18px' }}>{userShow.first_name}</Typography>
                                                            </Box>
                                                            <Box>
                                                                <Typography sx={{ fontSize: "15px" }}>{userShow.department}</Typography>
                                                            </Box>
                                                        </Box>
                                                    </Box>
                                                    <Grid container spacing={2} sx={{ mt: 3 }}>
                                                        <Grid item xs={12} md={6}>
                                                            <Box>
                                                                <Typography sx={{ fontSize: "14px", color: '#2a3547' }}>Email</Typography>
                                                            </Box>
                                                            <Box>
                                                                <Typography sx={{ fontWeight: 500, marginTop: "4px", fontSize: "15px", }}>{userShow.email}</Typography>
                                                            </Box>
                                                        </Grid>
                                                        <Grid item xs={12} md={6}>
                                                            <Box>
                                                                <Typography sx={{ fontSize: "14px", color: '#2a3547' }}>Company</Typography>
                                                            </Box>
                                                            <Box>
                                                                <Typography sx={{ fontWeight: 500, marginTop: "4px", fontSize: "15px", }}>{userShow.company}</Typography>
                                                            </Box>
                                                        </Grid>
                                                    </Grid>
                                                    <Grid container spacing={2} sx={{ mt: 3 }}>
                                                        <Grid item xs={12} md={6}>
                                                            <Box>
                                                                <Typography sx={{ fontSize: "14px", color: '#2a3547' }}>Phone Number</Typography>
                                                            </Box>
                                                            <Box>
                                                                <Typography sx={{ fontWeight: 500, marginTop: "4px", fontSize: "15px", }}>{userShow.phone}</Typography>
                                                            </Box>
                                                        </Grid>
                                                        <Grid item xs={12} md={6}>
                                                            <Box>
                                                                <Typography sx={{ fontSize: "14px", color: '#2a3547' }}>State</Typography>
                                                            </Box>
                                                            <Box>
                                                                <Typography sx={{ fontWeight: 500, marginTop: "4px", fontSize: "15px", }}>{userShow.state}</Typography>
                                                            </Box>
                                                        </Grid>
                                                    </Grid>
                                                    <Box sx={{ mt: 3 }}>
                                                        <Box>
                                                            <Typography sx={{ fontSize: "14px", color: '#2a3547' }}>Address</Typography>
                                                        </Box>
                                                        <Box>
                                                            <Typography sx={{ fontWeight: 500, marginTop: "4px", fontSize: "15px", }}>{userShow.address}</Typography>
                                                        </Box>
                                                    </Box>
                                                    <Box sx={{ mt: 3 }}>
                                                        <Box>
                                                            <Typography sx={{ fontSize: "14px", color: '#2a3547' }}>Notes:</Typography>
                                                        </Box>
                                                        <Box>
                                                            <Typography sx={{ marginTop: "4px", fontSize: "14px", }}>{userShow.notes}</Typography>
                                                        </Box>
                                                    </Box>
                                                </Box>
                                            </Box>
                                            :
                                            <Box sx={{ p: 3 }}>
                                                <Box sx={{ textAlign: 'center' }}>
                                                    <Typography sx={{ fontSize: "20px", }}>Please Select a Contact</Typography>
                                                </Box>
                                                <Box sx={{ mt: 2, width: "180px", height: "180px", marginLeft: "auto", marginRight: 'auto' }}>
                                                    <img style={{ width: '100%', height: "100%", objectFit: "cover" }} src="https://modernize-nextjs.adminmart.com/_ipx/w_256,q_75/%2F_next%2Fstatic%2Fmedia%2FemailSv.1bb269a1.png?url=%2F_next%2Fstatic%2Fmedia%2FemailSv.1bb269a1.png&w=256&q=75" alt="" />
                                                </Box>
                                            </Box>
                                    }
                                </Grid>




                            </Grid>
                        </Box>
                    </Box>
                </Box>


                {/* ModalBox */}

                <DialogBox
                    open={open}
                    onClose={() => { setOpen(false) }}
                >
                    <Box>
                        <Typography sx={{ fontSize: "20px", fontWeight: 500 }}>Add New Contact</Typography>
                    </Box>
                    <Formik
                        initialValues={{
                            first_name: "",
                            last_name: "",
                            address: "",
                            department: "",
                            state: "",
                            phone: "",
                            email: "",
                            company: "",
                            notes: "",
                        }}
                        validationSchema={Yup.object({
                            first_name: Yup.string()
                                .required('First name is required')
                                .matches(/^[a-zA-Z\s]+$/, 'First name cannot contain special character and numbers')
                                .min(3, 'First name must be at least 3 characters')
                                .max(35, 'First name cannot exceed 35 characters'),
                            last_name: Yup.string()
                                .matches(/^[a-zA-Z\s]+$/, 'Last name cannot contain special character and numbers')
                                .min(1, 'Last name minimum have 1 characters')
                                .max(35, 'Last name cannot exceed 35 characters'),
                            email: Yup.string().email()
                                .required('Email is required')
                                .email('Invalid email address'),
                            phone: Yup.string()
                                .required('Mobile Number is required')
                                .min(10, 'Mobile number must be at least 10 numbers')
                                .max(15, 'Mobile number cannot exceed 15 characters'),
                            address: Yup.string()
                                .nullable()
                                .max(50, 'Street cannot exceed 50 characters'),
                            company: Yup.string()
                                .nullable()
                                .max(50, 'Company cannot exceed 50 characters'),
                            department: Yup.string()
                                .nullable()
                                .matches(/^[a-zA-Z\s]+$/, 'This City cannot contain special character and numbers')
                                .max(50, 'City cannot exceed 50 characters'),
                            state: Yup.string()
                                .nullable()
                                .matches(/^[a-zA-Z\s]+$/, 'This State cannot contain special character and numbers')
                                .max(50, 'State cannot exceed 50 characters'),
                            notes: Yup.string()
                                .max(50, 'State cannot exceed 50 characters'),
                        })}
                        onSubmit={async (values, { setSubmitting, resetForm }) => {
                            console.log(values)
                            setUserDetails(post => {
                                return [...post, values]
                            });

                            resetForm();
                            setSubmitting(false);
                            setOpen(false)

                        }}
                    >
                        <Form>
                            <Box sx={{ mt: 3 }}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} md={6}>
                                        <Box>
                                            <Field
                                                component={TextField}
                                                label="First Name"
                                                name="first_name"
                                                fullWidth
                                            />
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <Box>
                                            <Field
                                                component={TextField}
                                                label="Last Name"
                                                name="last_name"
                                                fullWidth
                                            />
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <Box>
                                            <Field
                                                component={TextField}
                                                label="Email"
                                                name="email"
                                                fullWidth
                                            />
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <Box>
                                            <Field
                                                component={TextField}
                                                label="Company"
                                                name="company"
                                                fullWidth
                                            />
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <Box>
                                            <Field
                                                component={TextField}
                                                label="Department"
                                                name="department"
                                                fullWidth
                                            />
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <Box>
                                            <Field
                                                component={TextField}
                                                label="Address"
                                                name="address"
                                                fullWidth
                                            />
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <Box>
                                            <Field
                                                component={TextField}
                                                label="State"
                                                name="state"
                                                fullWidth
                                            />
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <Box>
                                            <Field
                                                component={TextField}
                                                label="Phone"
                                                name="phone"
                                                fullWidth
                                            />
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Box>
                                            <Field
                                                component={TextField}
                                                label="Notes"
                                                name="notes"
                                                fullWidth
                                                multiline
                                                rows={3}
                                            />
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Box>
                            <Box sx={{ mt: 4, display: "flex", justifyContent: "end" }}>
                                <Box sx={{ mr: 2 }}>
                                    <Button
                                        variant="outlined"
                                        color="error"
                                        type='submit'
                                        onClick={() => {
                                            setOpen(false)
                                        }}
                                    >
                                        Cancel
                                    </Button>
                                </Box>
                                <Box>
                                    <Button
                                        variant="outlined"
                                        color="primary"
                                        type='submit'
                                    >
                                        Submit
                                    </Button>
                                </Box>
                            </Box>
                        </Form>
                    </Formik>

                </DialogBox>

            </Container >
        </>
    )
}

export default Contact