import { Box, Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
    return (
        <>
            <Box sx={{ background: "#274472", p: 2, textAlign: "center" }}>
                <Typography sx={{ color: "#fff" }}>© Copyrights 2023. All Rights Reserved.</Typography>
            </Box>
        </>
    )
}

export default Footer