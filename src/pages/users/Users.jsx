import { Box, Button, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import HowToRegOutlinedIcon from '@mui/icons-material/HowToRegOutlined';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CollectionsIcon from '@mui/icons-material/Collections';
import Profile from './Profile';
import Followers from './Followers';
import Friends from './Friends';
import Gallery from './Gallery';


function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};


const Users = () => {

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <Container maxWidth="lg">

                {/* User Profile Start */}

                <Box sx={{ mt: 3 }}>
                    <Box sx={{ boxShadow: "rgba(145, 158, 171, 0.3) 0px 0px 2px 0px, rgba(145, 158, 171, 0.12) 0px 12px 24px -4px", borderRadius: "12px", overflow: "hidden" }}>
                        <Box>
                            <Box>
                                <img style={{ width: "100%", height: "400px", objectFit: "cover" }} src="https://modernize-nextjs.adminmart.com/images/backgrounds/profilebg.jpg" alt="" />
                            </Box>
                        </Box>
                        <Box sx={{ p: 2, mt: 2, mb: 2 }}>
                            <Grid container spacing={2} sx={{ alignItems: "center" }}>
                                <Grid item xs={12} md={4}>
                                    <Box>
                                        <Grid container spacing={2} sx={{ alignItems: "center" }}>
                                            <Grid item xs={12} md={4} sx={{ textAlign: "center" }}>
                                                <Box>
                                                    <DescriptionOutlinedIcon />
                                                </Box>
                                                <Box>
                                                    <Typography sx={{ fontSize: "20px", fontWeight: "500" }}>938</Typography>
                                                </Box>
                                                <Box>
                                                    <Typography sx={{ fontSize: "16px" }}>Posts</Typography>
                                                </Box>
                                            </Grid>
                                            <Grid item xs={12} md={4} sx={{ textAlign: "center" }}>
                                                <Box>
                                                    <AccountCircleOutlinedIcon />
                                                </Box>
                                                <Box>
                                                    <Typography sx={{ fontSize: "20px", fontWeight: "500" }}>3,586</Typography>
                                                </Box>
                                                <Box>
                                                    <Typography sx={{ fontSize: "16px" }}>Followers</Typography>
                                                </Box>
                                            </Grid>
                                            <Grid item xs={12} md={4} sx={{ textAlign: "center" }}>
                                                <Box>
                                                    <HowToRegOutlinedIcon />
                                                </Box>
                                                <Box>
                                                    <Typography sx={{ fontSize: "20px", fontWeight: "500" }}>2,659</Typography>
                                                </Box>
                                                <Box>
                                                    <Typography sx={{ fontSize: "16px" }}>Following</Typography>
                                                </Box>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </Grid>
                                <Grid item xs={12} md={4} sx={{ textAlign: "center" }}>
                                    <Box>
                                        <Box sx={{ position: "relative", marginLeft: "auto", marginRight: "auto", marginTop: "-115px", backgroundImage: "linear-gradient(rgb(80, 178, 252), rgb(244, 76, 102))", borderRadius: "50%", width: "110px", height: "110px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                            <img style={{ width: "90px", height: "90px", objectFit: "cover", borderRadius: "50%", background: "#fff", padding: "4px" }} src="https://modernize-nextjs.adminmart.com/images/profile/user-2.jpg" alt="" />
                                        </Box>
                                        <Box sx={{ mt: 2 }}>
                                            <Typography sx={{ fontSize: "18px", fontWeight: "500" }}>Julia Roberts</Typography>
                                        </Box>
                                        <Box>
                                            <Typography sx={{ fontSize: "16px" }}>Project Manager</Typography>
                                        </Box>
                                    </Box>
                                </Grid>
                                <Grid item xs={12} md={4}>
                                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                        <Box sx={{ width: "15px", height: "15px", borderRadius: "50%", background: "#1877f2", padding: '6px', display: "flex", alignItems: "center", justifyContent: "center" }}>
                                            <img style={{ width: "100%", height: "100%", }} src="../assets/facebook-white.svg" alt="" />
                                        </Box>
                                        <Box sx={{ ml: 2, width: "15px", height: "15px", borderRadius: "50%", background: "#1da1f2", padding: '6px', display: "flex", alignItems: "center", justifyContent: "center" }}>
                                            <img style={{ width: "100%", height: "100%", }} src="../assets/twitter-white.svg" alt="" />
                                        </Box>
                                        <Box sx={{ ml: 2, width: "15px", height: "15px", borderRadius: "50%", background: "#ea4c89", padding: '6px', display: "flex", alignItems: "center", justifyContent: "center" }}>
                                            <img style={{ width: "100%", height: "100%", }} src="../assets/dribbble.svg" alt="" />
                                        </Box>
                                        <Box sx={{ ml: 2, width: "15px", height: "15px", borderRadius: "50%", background: "#cd201f", padding: '6px', display: "flex", alignItems: "center", justifyContent: "center" }}>
                                            <img style={{ width: "100%", height: "100%", }} src="../assets/youtube.svg" alt="" />
                                        </Box>
                                        <Box sx={{ ml: 2 }}>
                                            <Button variant='outlined'>Add To Story</Button>
                                        </Box>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                    <Box>
                        <Box sx={{ width: '100%' }}>
                            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                <Tabs sx={{ background: "#f2f6fa" }} value={value} onChange={handleChange} aria-label="basic tabs example">
                                    <Tab sx={{ textTransform: "capitalize", paddingBottom: "0px", paddingTop: "0px" }} icon={<AccountCircleOutlinedIcon />} iconPosition="start" label="Profile" />
                                    <Tab sx={{ textTransform: "capitalize", paddingBottom: "0px", paddingTop: "0px" }} icon={<FavoriteBorderIcon />} iconPosition="start" label="Followers" />
                                    <Tab sx={{ textTransform: "capitalize", paddingBottom: "0px", paddingTop: "0px" }} icon={<AccountCircleOutlinedIcon />} iconPosition="start" label="Friends" />
                                    <Tab sx={{ textTransform: "capitalize", paddingBottom: "0px", paddingTop: "0px" }} icon={<CollectionsIcon />} iconPosition="start" label="Gallery" />
                                </Tabs>
                            </Box>
                            <CustomTabPanel className="tabpanel-pad" value={value} index={0}>
                                <Profile />
                            </CustomTabPanel>
                            <CustomTabPanel className="tabpanel-pad" value={value} index={1}>
                                <Followers />
                            </CustomTabPanel>
                            <CustomTabPanel className="tabpanel-pad" value={value} index={2}>
                                <Friends />
                            </CustomTabPanel>
                            <CustomTabPanel className="tabpanel-pad" value={value} index={3}>
                                <Gallery />
                            </CustomTabPanel>
                        </Box>
                    </Box>
                </Box>

                {/* User Profile End */}

            </Container>
        </>
    )
}

export default Users