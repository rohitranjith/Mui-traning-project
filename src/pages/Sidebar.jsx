import { Box, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Tooltip, Typography } from '@mui/material'
import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import SpeedOutlinedIcon from '@mui/icons-material/SpeedOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import PortraitOutlinedIcon from '@mui/icons-material/PortraitOutlined';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';

const Sidebar = () => {

    const navigate = useNavigate();
    const NavLinkStyle = ({ isActive }) => {
        return {
            textDecoration: "none",
            color: "#000"
        }
    }
    return (
        <>

            <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%" }}>
                <List className='sidebar' style={{ paddingTop: "15px", paddingBottom: "15px", }}>
                    <ListItem>
                        <NavLink style={NavLinkStyle} to="/dashboard">
                            <ListItemButton disableRipple sx={{ "&:hover": { backgroundColor: 'transparent' }, padding: "2px 8px" }}>
                                <ListItemIcon>
                                    <SpeedOutlinedIcon />
                                </ListItemIcon>
                                <ListItemText primary="Dashboard" />
                            </ListItemButton>
                        </NavLink>
                    </ListItem>
                    <ListItem>
                        <NavLink style={NavLinkStyle} to="/about">
                            <ListItemButton disableRipple sx={{ "&:hover": { backgroundColor: 'transparent' }, padding: "2px 8px" }}>
                                <ListItemIcon>
                                    <PeopleAltOutlinedIcon />
                                </ListItemIcon>
                                <ListItemText primary="About" />
                            </ListItemButton>
                        </NavLink>
                    </ListItem>
                    <ListItem>
                        <NavLink style={NavLinkStyle} to="/users">
                            <ListItemButton disableRipple sx={{ "&:hover": { backgroundColor: 'transparent' }, padding: "2px 8px" }}>
                                <ListItemIcon>
                                    <PersonOutlineOutlinedIcon />
                                </ListItemIcon>
                                <ListItemText primary="Users" />
                            </ListItemButton>
                        </NavLink>
                    </ListItem>
                    <ListItem>
                        <NavLink style={NavLinkStyle} to="/pricing">
                            <ListItemButton disableRipple sx={{ "&:hover": { backgroundColor: 'transparent' }, padding: "2px 8px" }}>
                                <ListItemIcon>
                                    <PaidOutlinedIcon />
                                </ListItemIcon>
                                <ListItemText primary="Pricing" />
                            </ListItemButton>
                        </NavLink>
                    </ListItem>
                    <ListItem>
                        <NavLink style={NavLinkStyle} to="/shop">
                            <ListItemButton disableRipple sx={{ "&:hover": { backgroundColor: 'transparent' }, padding: "2px 8px" }}>
                                <ListItemIcon>
                                    <PaidOutlinedIcon />
                                </ListItemIcon>
                                <ListItemText primary="Shop" />
                            </ListItemButton>
                        </NavLink>
                    </ListItem>
                    <ListItem>
                        <NavLink style={NavLinkStyle} to="/details">
                            <ListItemButton disableRipple sx={{ "&:hover": { backgroundColor: 'transparent' }, padding: "2px 8px" }}>
                                <ListItemIcon>
                                    <PaidOutlinedIcon />
                                </ListItemIcon>
                                <ListItemText primary="Details" />
                            </ListItemButton>
                        </NavLink>
                    </ListItem>
                    <ListItem>
                        <NavLink style={NavLinkStyle} to="/chart">
                            <ListItemButton disableRipple sx={{ "&:hover": { backgroundColor: 'transparent' }, padding: "2px 8px" }}>
                                <ListItemIcon>
                                    <PaidOutlinedIcon />
                                </ListItemIcon>
                                <ListItemText primary="Chart" />
                            </ListItemButton>
                        </NavLink>
                    </ListItem>
                    <ListItem>
                        <NavLink style={NavLinkStyle} to="/listing">
                            <ListItemButton disableRipple sx={{ "&:hover": { backgroundColor: 'transparent' }, padding: "2px 8px" }}>
                                <ListItemIcon>
                                    <PaidOutlinedIcon />
                                </ListItemIcon>
                                <ListItemText primary="Listing" />
                            </ListItemButton>
                        </NavLink>
                    </ListItem>
                    <ListItem>
                        <NavLink style={NavLinkStyle} to="/stepper">
                            <ListItemButton disableRipple sx={{ "&:hover": { backgroundColor: 'transparent' }, padding: "2px 8px" }}>
                                <ListItemIcon>
                                    <PaidOutlinedIcon />
                                </ListItemIcon>
                                <ListItemText primary="Stepper" />
                            </ListItemButton>
                        </NavLink>
                    </ListItem>
                    <ListItem>
                        <NavLink style={NavLinkStyle} to="/template">
                            <ListItemButton disableRipple sx={{ "&:hover": { backgroundColor: 'transparent' }, padding: "2px 8px" }}>
                                <ListItemIcon>
                                    <PaidOutlinedIcon />
                                </ListItemIcon>
                                <ListItemText primary="Template" />
                            </ListItemButton>
                        </NavLink>
                    </ListItem>
                    <ListItem>
                        <NavLink style={NavLinkStyle} to="/contact">
                            <ListItemButton disableRipple sx={{ "&:hover": { backgroundColor: 'transparent' }, padding: "2px 8px" }}>
                                <ListItemIcon>
                                    <PortraitOutlinedIcon />
                                </ListItemIcon>
                                <ListItemText primary="Contact" sx={{ fontSize: "18px" }} />
                            </ListItemButton>
                        </NavLink>
                    </ListItem>
                    <ListItem>
                        <NavLink style={NavLinkStyle} to="/faq">
                            <ListItemButton disableRipple sx={{ "&:hover": { backgroundColor: 'transparent' }, padding: "2px 8px" }}>
                                <ListItemIcon>
                                    <HelpOutlineOutlinedIcon />
                                </ListItemIcon>
                                <ListItemText primary="FAQ" sx={{ fontSize: "18px" }} />
                            </ListItemButton>
                        </NavLink>
                    </ListItem>
                </List>

                <Box sx={{ backgroundColor: "#cedff9", p: 2, borderRadius: "6px", m: 3 }}>
                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-around" }}>
                        <Box sx={{ width: "50px", height: "50px", borderRadius: "50%", overflow: "hidden" }}>
                            <img style={{ width: "100%", height: "100%", objectFit: "cover" }} src="https://modernize-nextjs.adminmart.com/images/profile/user-1.jpg" alt="" />
                        </Box>
                        <Box >
                            <Box>
                                <Typography sx={{ fontWeight: 500 }}>Mathew</Typography>
                            </Box>
                            <Box>
                                <Typography sx={{ fontSize: "12px" }}>Designer</Typography>
                            </Box>
                        </Box>
                        <Box>
                            <Tooltip title="Logout" arrow placement="top" color='primary'>
                                <IconButton onClick={() => {
                                    navigate('/')
                                }}>
                                    <PowerSettingsNewIcon />
                                </IconButton>
                            </Tooltip>
                        </Box>
                    </Box>
                </Box>
            </Box>


        </>
    )
}

export default Sidebar