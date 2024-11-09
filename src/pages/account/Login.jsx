import { Box, Button, Container, Typography } from '@mui/material'
import React from 'react'
import { Formik, Form, Field } from 'formik';
import { TextField } from 'formik-mui';
import * as Yup from "yup";
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { alertMsg } from '../uitiles/basicUitiles'


const Login = () => {

    const navigate = useNavigate();

    return (
        <>
            <Container maxWidth="sm">
                <Box sx={{ mt: "12rem", boxShadow: "rgba(145, 158, 171, 0.3) 0px 0px 2px 0px, rgba(145, 158, 171, 0.12) 0px 12px 24px -4px", px: 2, py: 4, borderRadius: "7px" }}>
                    <Box sx={{ textAlign: "center" }}>
                        <Typography sx={{ fontSize: "24px", fontWeight: "500" }}>Login Your Account</Typography>
                    </Box>
                    <Formik
                        initialValues={{
                            email: "",
                            password: ""
                        }}
                        validationSchema={Yup.object({
                            email: Yup.string()
                                .required("Email is Required"),
                            password: Yup.string()
                                .required("Password is Required"),
                        })}
                        onSubmit={async (values, { setSubmitting, resetForm }) => {

                            try {
                                const resp = await axios.post("https://reqres.in/api/login", values)
                                navigate("/dashboard")
                                console.log(resp)
                                alertMsg('Login Successfully', 'success')
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
                            </Box>
                            <Box sx={{ mt: 4, textAlign: "center" }}>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    type='submit'
                                >
                                    Login
                                </Button>
                            </Box>

                            <Box sx={{ my: 3, textAlign: "center" }}>
                                <Typography sx={{ marginRight: "10px" }} fontSize={15} variant='caption'>Don't have account?</Typography>
                                <Link to={"/register"} fontSize={15} style={{ color: "#1976d2" }} >Sign up</Link>
                            </Box>
                        </Form>
                    </Formik>
                </Box>
            </Container>
        </>
    )
}

export default Login