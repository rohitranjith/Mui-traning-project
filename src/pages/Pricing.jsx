import { Box, Breadcrumbs, Button, Chip, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import Switch from '@mui/material/Switch';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';

const Pricing = () => {

    const [checked, setChecked] = React.useState(false);

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };

    return (
        <>
            <Container maxWidth="lg" sx={{ mb: 2 }}>
                <Box sx={{ mt: 2 }}>
                    <Box sx={{ background: "#ecf2ff", p: 3, borderRadius: "12px", position: "relative", overflow: "hidden" }}>
                        <Box>
                            <Box>
                                <Box>
                                    <Typography sx={{ fontSize: "22px", fontWeight: "500", color: "#2A3547" }}>Pricing</Typography>
                                </Box>
                                <Box sx={{ mt: 1 }}>
                                    <Breadcrumbs aria-label="breadcrumb">
                                        <Typography color="inherit" sx={{ fontSize: "15px" }}> Home </Typography>
                                        <Typography color="inherit" sx={{ fontSize: "15px" }}> Pricing </Typography>
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
                <Box sx={{ mt: 6 }}>
                    <Box>
                        <Box sx={{ textAlign: "center" }}>
                            <Typography sx={{ fontSize: "30px", fontWeight: "500" }}>Flexible Plans Tailored to Fit Your Community's</Typography>
                        </Box>
                        <Box sx={{ textAlign: "center" }}>
                            <Typography sx={{ fontSize: "30px", fontWeight: "500" }}>Unique Needs!</Typography>
                        </Box>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", mt: 3 }}>
                        <Box>
                            <Typography>Monthly</Typography>
                        </Box>
                        <Box sx={{ mx: 1 }}>
                            <Switch
                                checked={checked}
                                onChange={handleChange}
                                inputProps={{ 'aria-label': 'controlled' }}
                            />
                        </Box>
                        <Box>
                            <Typography>Yearly</Typography>
                        </Box>
                    </Box>
                </Box>
                <Box sx={{ mt: 6 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={4}>
                            <Box sx={{ boxShadow: "rgba(145, 158, 171, 0.3) 0px 0px 2px 0px, rgba(145, 158, 171, 0.12) 0px 12px 24px -4px", borderRadius: "7px", p: 2 }}>
                                <Box>
                                    <Typography sx={{ textTransform: "uppercase", fontSize: "14px" }}>silver</Typography>
                                </Box>
                                <Box sx={{ width: "100px", height: "100px", mt: 2 }}>
                                    <img style={{ width: "100%", height: "100%", objectFit: "cover" }} src="https://modernize-nextjs.adminmart.com/images/backgrounds/silver.png" alt="" />
                                </Box>
                                <Box sx={{ mt: 2 }}>
                                    <Box>
                                        <Typography variant='h4' sx={{ fontWeight: "500" }}>Free</Typography>
                                    </Box>
                                    <Box sx={{ display: "flex", alignItems: 'center', mt: 3 }}>
                                        <Box sx={{ height: "24px", mr: 2 }}>
                                            <CheckIcon sx={{ color: "#5d87ff" }} />
                                        </Box>
                                        <Box>
                                            <Typography sx={{ color: "#575f6e" }}>3 Members</Typography>
                                        </Box>
                                    </Box>
                                    <Box sx={{ display: "flex", alignItems: 'center', mt: 3 }}>
                                        <Box sx={{ height: "24px", mr: 2 }}>
                                            <CheckIcon sx={{ color: "#5d87ff" }} />
                                        </Box>
                                        <Box>
                                            <Typography sx={{ color: "#575f6e" }}>Single Device</Typography>
                                        </Box>
                                    </Box>
                                    <Box sx={{ display: "flex", alignItems: 'center', mt: 3 }}>
                                        <Box sx={{ height: "24px", mr: 2 }}>
                                            <CloseIcon sx={{ color: "#8294b0" }} />
                                        </Box>
                                        <Box>
                                            <Typography sx={{ color: "#8294b0" }}>50GB Storage</Typography>
                                        </Box>
                                    </Box>
                                    <Box sx={{ display: "flex", alignItems: 'center', mt: 3 }}>
                                        <Box sx={{ height: "24px", mr: 2 }}>
                                            <CloseIcon sx={{ color: "#8294b0" }} />
                                        </Box>
                                        <Box>
                                            <Typography sx={{ color: "#8294b0" }}>Monthly Backups</Typography>
                                        </Box>
                                    </Box>
                                    <Box sx={{ display: "flex", alignItems: 'center', mt: 3 }}>
                                        <Box sx={{ height: "24px", mr: 2 }}>
                                            <CloseIcon sx={{ color: "#8294b0" }} />
                                        </Box>
                                        <Box>
                                            <Typography sx={{ color: "#8294b0" }}>Permissions & workflows</Typography>
                                        </Box>
                                    </Box>
                                    <Box sx={{ mt: 3 }}>
                                        <Button size='large' sx={{ width: "100%" }} variant="outlined">Choose Silver</Button>
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Box sx={{ boxShadow: "rgba(145, 158, 171, 0.3) 0px 0px 2px 0px, rgba(145, 158, 171, 0.12) 0px 12px 24px -4px", borderRadius: "7px", p: 2 }}>
                                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                                    <Box>
                                        <Typography sx={{ textTransform: "uppercase", fontSize: "14px" }}>BRONZE</Typography>
                                    </Box>
                                    <Box>
                                        <Chip label="Popular" sx={{ color: "#ffae1f", background: "#fef5e5", border: "1px solid #fef5e5", height: "22px", textTransform: "uppercase", fontWeight: 500 }} variant="outlined" />
                                    </Box>
                                </Box>
                                <Box sx={{ width: "96px", height: "96px", mt: 2 }}>
                                    <img style={{ width: "100%", height: "100%", objectFit: "cover" }} src="https://modernize-nextjs.adminmart.com/images/backgrounds/bronze.png" alt="" />
                                </Box>
                                <Box sx={{ mt: 2 }}>
                                    <Box>
                                        <Typography variant='h4' sx={{ fontWeight: "500" }}>{checked ? "$ 131.88 /yr" : "$ 10.99 /mo"}</Typography>
                                    </Box>
                                    <Box sx={{ display: "flex", alignItems: 'center', mt: 3 }}>
                                        <Box sx={{ height: "24px", mr: 2 }}>
                                            <CheckIcon sx={{ color: "#5d87ff" }} />
                                        </Box>
                                        <Box>
                                            <Typography sx={{ color: "#575f6e" }}>5 Members</Typography>
                                        </Box>
                                    </Box>
                                    <Box sx={{ display: "flex", alignItems: 'center', mt: 3 }}>
                                        <Box sx={{ height: "24px", mr: 2 }}>
                                            <CheckIcon sx={{ color: "#5d87ff" }} />
                                        </Box>
                                        <Box>
                                            <Typography sx={{ color: "#575f6e" }}>Multiple Device</Typography>
                                        </Box>
                                    </Box>
                                    <Box sx={{ display: "flex", alignItems: 'center', mt: 3 }}>
                                        <Box sx={{ height: "24px", mr: 2 }}>
                                            <CloseIcon sx={{ color: "#575f6e" }} />
                                        </Box>
                                        <Box>
                                            <Typography sx={{ color: "#575f6e" }}>80GB Storage</Typography>
                                        </Box>
                                    </Box>
                                    <Box sx={{ display: "flex", alignItems: 'center', mt: 3 }}>
                                        <Box sx={{ height: "24px", mr: 2 }}>
                                            <CloseIcon sx={{ color: "#8294b0" }} />
                                        </Box>
                                        <Box>
                                            <Typography sx={{ color: "#8294b0" }}>Monthly Backups</Typography>
                                        </Box>
                                    </Box>
                                    <Box sx={{ display: "flex", alignItems: 'center', mt: 3 }}>
                                        <Box sx={{ height: "24px", mr: 2 }}>
                                            <CloseIcon sx={{ color: "#8294b0" }} />
                                        </Box>
                                        <Box>
                                            <Typography sx={{ color: "#8294b0" }}>Permissions & workflows</Typography>
                                        </Box>
                                    </Box>
                                    <Box sx={{ mt: 3 }}>
                                        <Button size='large' sx={{ width: "100%" }} variant="outlined">Choose Bronze</Button>
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Box sx={{ boxShadow: "rgba(145, 158, 171, 0.3) 0px 0px 2px 0px, rgba(145, 158, 171, 0.12) 0px 12px 24px -4px", borderRadius: "7px", p: 2 }}>
                                <Box>
                                    <Typography sx={{ textTransform: "uppercase", fontSize: "14px" }}>gold</Typography>
                                </Box>
                                <Box sx={{ width: "100px", height: "100px", mt: 2 }}>
                                    <img style={{ width: "100%", height: "100%", objectFit: "cover" }} src="https://modernize-nextjs.adminmart.com/images/backgrounds/gold.png" alt="" />
                                </Box>
                                <Box sx={{ mt: 2 }}>
                                    <Box>
                                        <Typography variant='h4' sx={{ fontWeight: "500" }}>{checked ? "$ 275.88 /yr " : "$ 22.99 /mo"}</Typography>
                                    </Box>
                                    <Box sx={{ display: "flex", alignItems: 'center', mt: 3 }}>
                                        <Box sx={{ height: "24px", mr: 2 }}>
                                            <CheckIcon sx={{ color: "#5d87ff" }} />
                                        </Box>
                                        <Box>
                                            <Typography sx={{ color: "#575f6e" }}>Unlimited Members</Typography>
                                        </Box>
                                    </Box>
                                    <Box sx={{ display: "flex", alignItems: 'center', mt: 3 }}>
                                        <Box sx={{ height: "24px", mr: 2 }}>
                                            <CheckIcon sx={{ color: "#5d87ff" }} />
                                        </Box>
                                        <Box>
                                            <Typography sx={{ color: "#575f6e" }}>Multiple Device</Typography>
                                        </Box>
                                    </Box>
                                    <Box sx={{ display: "flex", alignItems: 'center', mt: 3 }}>
                                        <Box sx={{ height: "24px", mr: 2 }}>
                                            <CheckIcon sx={{ color: "#5d87ff" }} />
                                        </Box>
                                        <Box>
                                            <Typography sx={{ color: "#575f6e" }}>150GB Storage</Typography>
                                        </Box>
                                    </Box>
                                    <Box sx={{ display: "flex", alignItems: 'center', mt: 3 }}>
                                        <Box sx={{ height: "24px", mr: 2 }}>
                                            <CheckIcon sx={{ color: "#5d87ff" }} />
                                        </Box>
                                        <Box>
                                            <Typography sx={{ color: "#575f6e" }}>Monthly Backups</Typography>
                                        </Box>
                                    </Box>
                                    <Box sx={{ display: "flex", alignItems: 'center', mt: 3 }}>
                                        <Box sx={{ height: "24px", mr: 2 }}>
                                            <CheckIcon sx={{ color: "#5d87ff" }} />
                                        </Box>
                                        <Box>
                                            <Typography sx={{ color: "#575f6e" }}>Permissions & workflows</Typography>
                                        </Box>
                                    </Box>
                                    <Box sx={{ mt: 3 }}>
                                        <Button size='large' sx={{ width: "100%" }} variant="outlined">Choose Gold</Button>
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </>
    )
}

export default Pricing