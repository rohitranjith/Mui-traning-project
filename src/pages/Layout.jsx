import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer'
import { Grid } from '@mui/material';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <>

            <Navbar />

            <Grid container spacing={2} sx={{ mt: 0, minHeight: "calc(100vh - 113px)", marginTop: "3px" }}>
                <Grid item xs={2} sx={{ background: "#e8eff7", }}>
                    <Sidebar />
                </Grid>
                <Grid item xs={10} lg={10} sx={{ maxHeight: "calc(100vh - 124px)", overflow: "auto" }}>
                    <Outlet />
                </Grid>
            </Grid>

            <Footer />

        </>
    )
}

export default Layout