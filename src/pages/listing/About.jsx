import { Box, Typography } from '@mui/material'
import React from 'react'

const About = () => {
    return (
        <Box>
            <Box>
                <Box>
                    <Typography sx={{ fontSize: "20px", }}>About Property</Typography>
                </Box>
                <Box sx={{ mt: 0.5 }}>
                    <Typography sx={{ fontSize: 15, color: "grey" }}>Enter some information about property type</Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default About