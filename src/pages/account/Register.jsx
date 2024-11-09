import { Box, Button, Container, Typography } from '@mui/material'
import React from 'react'
import { Formik, Form, Field } from 'formik';
import { TextField } from 'formik-mui';
import * as Yup from "yup";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { alertMsg } from '../uitiles/basicUitiles'

const Register = () => {

    const navigate = useNavigate();

    return (
        <>
            <Container maxWidth="sm">
                <Box sx={{ mt: "12rem", boxShadow: "rgba(145, 158, 171, 0.3) 0px 0px 2px 0px, rgba(145, 158, 171, 0.12) 0px 12px 24px -4px", px: 2, py: 4, borderRadius: "7px" }}>
                    <Box sx={{ textAlign: "center" }}>
                        <Typography sx={{ fontSize: "24px", fontWeight: "500" }}>Register Your Account</Typography>
                    </Box>
                    <Formik
                        initialValues={{
                            email: "",
                            password: "",
                            confirm_password: "",
                        }}
                        validationSchema={Yup.object({
                            email: Yup.string()
                                .required("Email is Required"),
                            password: Yup.string()
                                .required("Password is required")
                                .matches(/^[^\s][ A-Za-z0-9_@./#&+-]+[^\s]$/, 'Password cannot contain whiteSpaces at the beginning and at the end')
                                .min(6, "Must be at least 6 characters")
                                .max(12, "New Password cannot exceed 12 characters"),
                            confirm_password: Yup.string()
                                .oneOf([Yup.ref('password'), null], "Passwords doesn't match"),
                        })}
                        onSubmit={async (values, { setSubmitting, resetForm }) => {

                            try {
                                const resp = await axios.post("https://reqres.in/api/register", values)
                                navigate("/dashboard")
                                console.log(resp)
                                alertMsg('Register Successfully', 'success')
                            } catch (err) {
                                console.log(err)
                                alertMsg(err.response.data.error, 'error')
                            }

                            resetForm();
                            setSubmitting(false);

                        }}
                    >
                        <Form>
                            <Box sx={{ mt: 3 }}>
                                <Box sx={{ width: "80%", marginLeft: 'auto', marginRight: "auto", mt: 2 }}>
                                    <Field
                                        component={TextField}
                                        label="Email"
                                        name="email"
                                        fullWidth
                                    />
                                </Box>
                                <Box sx={{ width: "80%", marginLeft: 'auto', marginRight: "auto", mt: 3 }}>
                                    <Field
                                        component={TextField}
                                        label="Password"
                                        name="password"
                                        fullWidth
                                    />
                                </Box>
                                <Box sx={{ width: "80%", marginLeft: 'auto', marginRight: "auto", mt: 3 }}>
                                    <Field
                                        component={TextField}
                                        label="Confirm Password"
                                        name="confirm_password"
                                        fullWidth
                                    />
                                </Box>
                            </Box>
                            <Box sx={{ mt: 4, textAlign: "center" }}>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    type='submit'
                                >
                                    Register
                                </Button>
                            </Box>
                        </Form>
                    </Formik>
                </Box>
            </Container>
        </>
    )
}

export default Register