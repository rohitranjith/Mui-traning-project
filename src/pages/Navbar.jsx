import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from 'react-router-dom';
// import { NavLink } from 'react-router-dom'

const Navbar = () => {


    // const NavLinkStyle = ({ isActive }) => {
    //     return {
    //         fontWeight: isActive ? "600" : "400",
    //         margin: "30px",
    //         textDecoration: "none",
    //         color: isActive ? "#274472" : "#000"
    //     }
    // }
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };


    return (
        <>
            {/* <nav style={{ paddingTop: "15px", paddingBottom: "15px", background: "#e8eff7", boxShadow: "rgb(39 68 114 / 78%) 0px 0px 5px 1px" }}>
                <NavLink style={NavLinkStyle} to="/dashboard">Dashboard</NavLink>
                <NavLink style={NavLinkStyle} to="/about">About</NavLink>
                <NavLink style={NavLinkStyle} to="/users">Users</NavLink>
                <NavLink style={NavLinkStyle} to="/pricing">Pricing</NavLink>
                <NavLink style={NavLinkStyle} to="/contact">Contact</NavLink>
            </nav> */}
            <Box sx={{ paddingTop: "12px", paddingBottom: "12px", background: "#e8eff7", boxShadow: "rgb(39 68 114 / 78%) 0px 0px 5px 1px" }}>
                <Box sx={{ px: 4 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={8}>
                            <Box>
                                <Typography sx={{ fontWeight: 500, fontSize: "20px", cursor: "pointer" }} onClick={() => {
                                    navigate("/")
                                }}>Company</Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Box sx={{ textAlign: "right", height: "24px", cursor: "pointer" }} onClick={handleClick}>
                                <AccountCircleOutlinedIcon />
                            </Box>
                            <Menu
                                id="basic-menu"
                                anchorEl={anchorEl}
                                open={open}

                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                onClick={handleClose}
                                onClose={handleClose}
                                MenuListProps={{
                                    'aria-labelledby': 'basic-button',
                                }}
                            >
                                <MenuItem>Profile</MenuItem>
                                <MenuItem onClick={() => {
                                    navigate('/')
                                }}>Logout</MenuItem>
                            </Menu>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </>
    )
}

export default Navbar