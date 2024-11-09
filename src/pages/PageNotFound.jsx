import { Box, Button, Container, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const PageNotFound = () => {

    const navigate = useNavigate();

    return (
        <>
            <Container maxWidth="sm">
                <Box sx={{ minHeight: "100vh", maxHeight: "100vh", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                    <Box>
                        <Box sx={{ width: "500px", height: "500px" }}>
                            <img style={{ width: "100%", height: "100%", objectFit: "cover" }} src="https://modernize-nextjs.adminmart.com/images/backgrounds/errorimg.svg" alt="" />
                        </Box>
                        <Box sx={{ mt: 2, textAlign: 'center' }}>
                            <Typography sx={{ fontSize: "36px", fontWeight: 500 }}>Opps!!!</Typography>
                        </Box>
                        <Box sx={{ mt: 2, textAlign: 'center' }}>
                            <Typography sx={{ fontSize: "20px", fontWeight: 500 }}>This page you are looking for could not be found.</Typography>
                        </Box>
                        <Box sx={{ mt: 4, textAlign: 'center' }}>
                            <Button variant='contained'
                                onClick={() => {
                                    navigate("/dashboard")
                                }}
                            >Go Back To Home</Button>
                        </Box>
                    </Box>
                </Box>

            </Container>

        </>
    )
}

export default PageNotFound